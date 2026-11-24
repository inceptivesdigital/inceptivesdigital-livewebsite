import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { getCachedList, setCachedList, seedCachedPosts } from '../../../utils/wpCache'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'

function getPerPageForViewport() {
  if (typeof window === 'undefined') return 15
  if (window.innerWidth <= 767) return 8
  if (window.innerWidth <= 1024) return 12
  return 15
}

function decodeHtml(html = '') {
  if (!html) return ''
  const txt = typeof document !== 'undefined' ? document.createElement('textarea') : null
  if (txt) {
    txt.innerHTML = html
    return txt.value
  }
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
}

function stripAndTrimWords(html = '', maxWords = 20) {
  const plain = decodeHtml(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
  const words = plain.split(' ').filter(Boolean)
  if (words.length <= maxWords) return plain
  return words.slice(0, maxWords).join(' ') + '...'
}

function formatWpPost(p) {
  const media = p._embedded?.['wp:featuredmedia']?.[0]
  const featuredImage =
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium?.source_url ||
    media?.source_url ||
    ''

  const terms = (p._embedded?.['wp:term']?.[0] || []).map((t) => ({
    id: t.id,
    slug: t.slug,
    name: decodeHtml(t.name),
  }))

  return {
    id: p.id,
    slug: p.slug,
    title: decodeHtml(p.title?.rendered || ''),
    excerpt: stripAndTrimWords(p.excerpt?.rendered || '', 20),
    date: p.date,
    image: featuredImage,
    imageAlt: decodeHtml(media?.alt_text || p.title?.rendered || ''),
    categories: terms,
    isPinned: Boolean(p.sticky || p.meta?._id_blog_pinned === '1'),
  }
}

function buildPaginationRange(page, totalPages) {
  const set = new Set([1, 2, 3, totalPages - 2, totalPages - 1, totalPages])
  for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) {
    set.add(i)
  }
  return [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b)
}

function setMetaTag(selector, attrName, attrValue, content) {
  if (!content) return
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function applyCategoryYoastSeo(cat, slug, currentPage) {
  const yoast = cat?.yoast_head_json || {}
  const catName = decodeHtml(cat?.name || slug.replace(/-/g, ' '))
  const seoTitle = decodeHtml(yoast.title || `${catName} Archives | Inceptives Digital`)
  const seoDesc = decodeHtml(
    yoast.description ||
      cat?.description ||
      `Explore the latest ${catName} insights, guides, and case breakdowns from Inceptives Digital.`
  )
  const canonical = (
    yoast.canonical || `https://inceptivesdigital.com/category/${slug}`
  ).replace(/^https?:\/\/nextincep\.wpenginepowered\.com/i, 'https://inceptivesdigital.com')
  const ogImage = yoast.og_image?.[0]?.url || '/assets/blog/featured/guide-complete.webp'

  document.title = seoTitle
  setMetaTag('meta[name="description"]', 'name', 'description', seoDesc)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website')
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', decodeHtml(yoast.og_title || seoTitle))
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', decodeHtml(yoast.og_description || seoDesc))
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical)
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', decodeHtml(yoast.twitter_title || seoTitle))
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', decodeHtml(yoast.twitter_description || seoDesc))
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', yoast.twitter_image || ogImage)
  setMetaTag(
    'meta[name="robots"]',
    'name',
    'robots',
    currentPage > 1
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  )

  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', canonical)
}

export default function CategoryPage() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const rawPage = parseInt(searchParams.get('pagination_page') || '1', 10)
  const currentPage = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage

  const [category, setCategory] = useState(null)
  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [perPage, setPerPage] = useState(getPerPageForViewport)
  const abortRef = useRef(null)

  useEffect(() => {
    const onResize = () => {
      const next = getPerPageForViewport()
      setPerPage((prev) => (prev !== next ? next : prev))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const fetchCategoryAndPosts = useCallback(
    async ({ silent = false } = {}) => {
      if (!slug) return
      if (abortRef.current) abortRef.current.abort()
      const controller = new AbortController()
      abortRef.current = controller

      const listCacheKey = `cat:${slug}:${currentPage}:${perPage}`
      const cached = getCachedList(listCacheKey)

      if (cached && cached.category) {
        setCategory(cached.category)
        setPosts(cached.posts || [])
        setTotalPages(cached.totalPages || 1)
        setLoading(false)
        setNotFound(false)
        applyCategoryYoastSeo(cached.category, slug, currentPage)
      } else if (!silent) {
        setLoading(true)
        setNotFound(false)
      }

      try {
        // 1. Resolve category from WordPress REST API
        const catRes = await fetch(
          `${WP_API_BASE}/categories?slug=${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        )
        if (!catRes.ok) throw new Error(`Category API ${catRes.status}`)
        const cats = await catRes.json()
        const matchedCat = Array.isArray(cats) ? cats[0] : null

        if (!matchedCat) {
          if (!cached) {
            setCategory(null)
            setPosts([])
            setNotFound(true)
          }
          return
        }

        setCategory(matchedCat)
        applyCategoryYoastSeo(matchedCat, slug, currentPage)

        // 2. Fetch posts for this category
        const params = new URLSearchParams({
          _embed: '1',
          categories: String(matchedCat.id),
          per_page: String(perPage),
          page: String(currentPage),
          status: 'publish',
          orderby: 'date',
          order: 'desc',
        })

        const postsRes = await fetch(`${WP_API_BASE}/posts?${params.toString()}`, {
          signal: controller.signal,
        })

        if (postsRes.status === 400 && currentPage > 1) {
          const next = new URLSearchParams(searchParams)
          next.delete('pagination_page')
          setSearchParams(next)
          return
        }

        if (!postsRes.ok) throw new Error(`Posts API ${postsRes.status}`)

        const totalPagesHeader = parseInt(postsRes.headers.get('X-WP-TotalPages') || '1', 10)
        const rawPosts = await postsRes.json()
        seedCachedPosts(rawPosts)
        const formatted = (Array.isArray(rawPosts) ? rawPosts : []).map(formatWpPost)

        formatted.sort((a, b) => {
          if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
          return new Date(b.date) - new Date(a.date)
        })

        const resolvedTotal = Math.max(1, Number.isNaN(totalPagesHeader) ? 1 : totalPagesHeader)
        setPosts(formatted)
        setTotalPages(resolvedTotal)
        setCachedList(listCacheKey, {
          category: matchedCat,
          posts: formatted,
          totalPages: resolvedTotal,
        })
        setNotFound(false)
      } catch (err) {
        if (err.name === 'AbortError') return
        if (!silent && !cached) setNotFound(true)
      } finally {
        if (!controller.signal.aborted && !silent) setLoading(false)
      }
    },
    [slug, currentPage, perPage, searchParams, setSearchParams]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchCategoryAndPosts({ silent: false })
    return () => {
      if (abortRef.current) abortRef.current.abort()
    }
  }, [fetchCategoryAndPosts])

  // Refresh silently on tab focus
  useEffect(() => {
    const refreshSilently = () => {
      if (document.visibilityState === 'visible') {
        fetchCategoryAndPosts({ silent: true })
      }
    }
    window.addEventListener('focus', refreshSilently)
    document.addEventListener('visibilitychange', refreshSilently)
    return () => {
      window.removeEventListener('focus', refreshSilently)
      document.removeEventListener('visibilitychange', refreshSilently)
    }
  }, [fetchCategoryAndPosts])

  const handlePageChange = (pageNum) => {
    const next = new URLSearchParams(searchParams)
    if (pageNum <= 1) next.delete('pagination_page')
    else next.set('pagination_page', String(pageNum))
    setSearchParams(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const headingText = category?.name
    ? decodeHtml(category.name)
    : (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  const pageNumbers = buildPaginationRange(currentPage, totalPages)

  return (
    <section className="w-full min-h-[70vh] bg-[#E3FAEA] text-[#111111] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
      <div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Bold Category Title (Matches WP /category/android-app-development) */}
        <div className="text-center pb-10 sm:pb-12">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-[#000000] leading-[1.15] tracking-tight">
            {headingText}
          </h1>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden animate-pulse"
              >
                <div className="w-full aspect-[16/8.2] bg-[#e8f0eb]" />
                <div className="p-[22px] space-y-3">
                  <div className="h-3.5 w-20 bg-[#e8f0eb] rounded" />
                  <div className="h-5 w-full bg-[#e8f0eb] rounded" />
                  <div className="h-5 w-4/5 bg-[#e8f0eb] rounded" />
                  <div className="h-3.5 w-full bg-[#f0f5f2] rounded" />
                  <div className="h-4 w-24 bg-[#e8f0eb] rounded pt-2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Not Found / Empty */}
        {!loading && (notFound || posts.length === 0) && (
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-10 text-center max-w-xl mx-auto">
            <p className="text-[#555555] text-base mb-5">
              {notFound ? 'Category not found.' : 'No blogs published in this category yet.'}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00CE44] text-black font-medium rounded-none hover:bg-[#00b83d] transition-colors"
            >
              Browse All Blogs
            </Link>
          </div>
        )}

        {/* 3-Column White Blog Cards Grid */}
        {!loading && !notFound && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              >
                {post.image ? (
                  <Link to={`/blog/${post.slug}`} className="block w-full overflow-hidden bg-[#fff]">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      loading="lazy"
                      className="block w-full h-[170px] object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center justify-center w-full h-[170px] bg-[#111418] text-[#00CE44] font-bold text-lg px-6 text-center"
                  >
                    Inceptives Digital
                  </Link>
                )}

                {post.isPinned && (
                  <span
                    aria-label="Pinned blog post"
                    className="absolute top-3 right-3 z-10 rounded-[6px] bg-white text-[#00CE44] text-[12px] font-bold px-2.5 py-1.5 leading-none shadow-sm"
                  >
                    Pinned
                  </span>
                )}

                <div className="p-[22px] flex flex-col flex-1 text-left">
                  <div className="text-[13px] font-semibold text-[#666666] mb-2.5">
                    {headingText}
                  </div>

                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#111111] leading-[1.3] mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-[#111111] hover:text-[#00CE44] transition-colors no-underline"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-[14.5px] sm:text-[15px] text-[#666666] leading-[1.6] mb-[18px] flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[#111111] hover:text-[#00CE44] text-[14px] font-semibold transition-colors mt-auto"
                  >
                    <span>Read More →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination (only when totalPages > 1) */}
        {!loading && !notFound && totalPages > 1 && (
          <nav
            aria-label="Category pagination"
            className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mt-10 sm:mt-12"
          >
            {currentPage > 1 && (
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => handlePageChange(currentPage - 1)}
                className="inline-flex items-center justify-center min-w-[34px] sm:min-w-[38px] h-[34px] sm:h-[38px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[#111111] hover:bg-[#f1f1f1] text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer"
              >
                ‹
              </button>
            )}

            {pageNumbers.map((num, idx) => {
              const prev = idx > 0 ? pageNumbers[idx - 1] : 0
              const showEllipsis = prev && num - prev > 1
              const isActive = num === currentPage

              return (
                <span key={num} className="inline-flex items-center gap-1.5 sm:gap-2">
                  {showEllipsis && (
                    <span className="px-1 text-[#666666] select-none" aria-hidden="true">
                      …
                    </span>
                  )}
                  {isActive ? (
                    <span
                      aria-current="page"
                      className="inline-flex items-center justify-center min-w-[34px] sm:min-w-[38px] h-[34px] sm:h-[38px] px-2 border border-[#111111] rounded-[8px] bg-[#111111] text-white text-[13px] sm:text-[14px] font-semibold"
                    >
                      {num}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handlePageChange(num)}
                      className="inline-flex items-center justify-center min-w-[34px] sm:min-w-[38px] h-[34px] sm:h-[38px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[#111111] hover:bg-[#f1f1f1] text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer"
                    >
                      {num}
                    </button>
                  )}
                </span>
              )
            })}

            {currentPage < totalPages && (
              <button
                type="button"
                aria-label="Next page"
                onClick={() => handlePageChange(currentPage + 1)}
                className="inline-flex items-center justify-center min-w-[34px] sm:min-w-[38px] h-[34px] sm:h-[38px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[#111111] hover:bg-[#f1f1f1] text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer"
              >
                ›
              </button>
            )}
          </nav>
        )}
      </div>
    </section>
  )
}
