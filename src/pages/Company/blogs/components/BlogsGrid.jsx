import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getCachedList, setCachedList, seedCachedPosts } from '../../../../utils/wpCache'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'

// Exact 13 allowed categories from blog-page-post.code-snippets.php + WP category IDs
export const BLOG_CATEGORIES = [
  { slug: 'all', label: 'All', id: null },
  { slug: 'mobile-app-development', label: 'Mobile App', id: 35 },
  { slug: 'software-development', label: 'Software Development', id: 42 },
  { slug: 'ios-app-development', label: 'iOS', id: 36 },
  { slug: 'android-app-development', label: 'Android', id: 43 },
  { slug: 'mobile-game-development', label: 'Mobile Game', id: 37 },
  { slug: 'fintech-app-development', label: 'Fintech', id: 44 },
  { slug: 'fitness-app-development', label: 'Fitness', id: 39 },
  { slug: 'web-development', label: 'Web Development', id: 41 },
  { slug: 'blockchain-development', label: 'Blockchain', id: 38 },
  { slug: 'healthcare-app-development', label: 'Healthcare', id: 40 },
  { slug: 'dating-app-development', label: 'Dating', id: 45 },
  { slug: 'digital-products', label: 'Digital Products', id: 51 },
  { slug: 'artificial-intelligence', label: 'Artificial Intelligence', id: 52 },
]

const ALL_ALLOWED_CAT_IDS = BLOG_CATEGORIES.filter((c) => c.id !== null).map((c) => c.id)

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
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
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

  const isPinned = Boolean(p.sticky || p.meta?._id_blog_pinned === '1')

  return {
    id: p.id,
    slug: p.slug,
    title: decodeHtml(p.title?.rendered || ''),
    excerpt: stripAndTrimWords(p.excerpt?.rendered || '', 20),
    date: p.date,
    image: featuredImage,
    imageAlt: decodeHtml(media?.alt_text || p.title?.rendered || ''),
    categories: terms,
    isPinned,
    wpLink: p.link,
  }
}

function buildPaginationRange(page, totalPages) {
  const set = new Set([1, 2, 3, totalPages - 2, totalPages - 1, totalPages])
  for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) {
    set.add(i)
  }
  return [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b)
}

export default function BlogsGrid({
  activeCategory = 'all',
  searchQuery = '',
  currentPage = 1,
  onCategoryChange,
  onPageChange,
}) {
  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [perPage, setPerPage] = useState(getPerPageForViewport)
  const abortRef = useRef(null)

  // Keep perPage responsive to viewport (desktop 15, tablet 12, mobile 8)
  useEffect(() => {
    const onResize = () => {
      const next = getPerPageForViewport()
      setPerPage((prev) => (prev !== next ? next : prev))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Fast cached + live fetch from WordPress REST API
  const fetchLivePosts = useCallback(
    async ({ silent = false } = {}) => {
      if (abortRef.current) abortRef.current.abort()
      const controller = new AbortController()
      abortRef.current = controller

      const listCacheKey = `blogs:${activeCategory}:${searchQuery}:${currentPage}:${perPage}`
      const cached = getCachedList(listCacheKey)

      if (cached && cached.posts?.length) {
        setPosts(cached.posts)
        setTotalPages(cached.totalPages || 1)
        setLoading(false)
        setError(null)
      } else if (!silent) {
        setLoading(true)
        setError(null)
      }

      try {
        const selectedCat = BLOG_CATEGORIES.find((c) => c.slug === activeCategory)
        const catIds = selectedCat?.id ? [selectedCat.id] : ALL_ALLOWED_CAT_IDS

        const params = new URLSearchParams({
          _embed: '1',
          per_page: String(perPage),
          page: String(currentPage),
          status: 'publish',
          categories: catIds.join(','),
          orderby: 'date',
          order: 'desc',
        })

        if (searchQuery) {
          params.set('search', searchQuery)
        }

        const res = await fetch(`${WP_API_BASE}/posts?${params.toString()}`, {
          method: 'GET',
          signal: controller.signal,
        })

        // If current page exceeds available pages (e.g. posts were deleted in WP), snap back to page 1
        if (res.status === 400 && currentPage > 1) {
          if (onPageChange) onPageChange(1)
          return
        }

        if (!res.ok) {
          throw new Error(`WordPress API returned ${res.status}`)
        }

        const totalPagesHeader = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10)
        const rawPosts = await res.json()

        seedCachedPosts(rawPosts)
        const formatted = (Array.isArray(rawPosts) ? rawPosts : []).map(formatWpPost)

        // Sort pinned/sticky posts first while preserving newest-first order
        formatted.sort((a, b) => {
          if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
          return new Date(b.date) - new Date(a.date)
        })

        const resolvedTotal = Math.max(1, Number.isNaN(totalPagesHeader) ? 1 : totalPagesHeader)
        setPosts(formatted)
        setTotalPages(resolvedTotal)
        setCachedList(listCacheKey, { posts: formatted, totalPages: resolvedTotal })
        setError(null)
      } catch (err) {
        if (err.name === 'AbortError') return
        if (!silent && !cached) {
          setError('Unable to load latest blogs from WordPress right now. Please try again.')
        }
      } finally {
        if (!controller.signal.aborted && !silent) {
          setLoading(false)
        }
      }
    },
    [activeCategory, searchQuery, currentPage, perPage, onPageChange]
  )

  // Initial & dependency-driven live fetch
  useEffect(() => {
    fetchLivePosts({ silent: false })
    return () => {
      if (abortRef.current) abortRef.current.abort()
    }
  }, [fetchLivePosts])

  // Refresh silently on tab focus
  useEffect(() => {
    const refreshSilently = () => {
      if (document.visibilityState === 'visible') {
        fetchLivePosts({ silent: true })
      }
    }
    window.addEventListener('focus', refreshSilently)
    document.addEventListener('visibilitychange', refreshSilently)
    return () => {
      window.removeEventListener('focus', refreshSilently)
      document.removeEventListener('visibilitychange', refreshSilently)
    }
  }, [fetchLivePosts])

  const pageNumbers = buildPaginationRange(currentPage, totalPages)

  return (
    <section
      id="latest-blogs"
      className="w-full bg-[#E9FCEF] text-[#111111] pt-8 sm:pt-12 pb-16 sm:pb-24"
    >
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#111111] text-center tracking-tight mb-6 sm:mb-8">
          Latest Blogs
        </h2>

        {/* 14 Category Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10 sm:mb-12"
          role="tablist"
          aria-label="Blog categories"
        >
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug
            return (
              <button
                key={cat.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange && onCategoryChange(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? 'bg-[#00CE44] text-white border-[#00CE44]'
                    : 'bg-white/75 text-[#222222] border-[#b7dfc4] hover:border-[#00CE44] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Active Search Indicator */}
        {searchQuery && (
          <p className="text-center text-sm text-[#444444] mb-6">
            Showing live results for <strong className="text-[#111111]">&ldquo;{searchQuery}&rdquo;</strong>
          </p>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 bg-white rounded-[16px] border border-[#e5e5e5] max-w-xl mx-auto px-6">
            <p className="text-[#555555] text-sm sm:text-base mb-4">{error}</p>
            <button
              type="button"
              onClick={() => fetchLivePosts({ silent: false })}
              className="px-5 py-2.5 bg-[#00CE44] text-black text-sm font-medium rounded-lg cursor-pointer hover:bg-[#00b83d]"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading Skeleton Grid */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden animate-pulse"
              >
                <div className="w-full h-[220px] sm:h-[240px] bg-[#e8f0eb]" />
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="h-3.5 w-28 bg-[#e8f0eb] rounded" />
                  <div className="h-5 w-full bg-[#e8f0eb] rounded" />
                  <div className="h-5 w-4/5 bg-[#e8f0eb] rounded" />
                  <div className="h-3.5 w-full bg-[#f0f5f2] rounded" />
                  <div className="h-3.5 w-3/4 bg-[#f0f5f2] rounded" />
                  <div className="h-4 w-24 bg-[#e8f0eb] rounded pt-2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-14 bg-white rounded-[16px] border border-[#e5e5e5]">
            <p className="text-[#666666] text-base">No matching blogs found.</p>
          </div>
        )}

        {/* Live WordPress Blog Cards Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              >
                {/* Featured Image — 170px uniform card banner */}
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

                {/* Pinned Badge (matches PHP snippet) */}
                {post.isPinned && (
                  <span
                    aria-label="Pinned blog post"
                    className="absolute top-3 right-3 z-10 rounded-[6px] bg-white text-[#00CE44] text-[12px] font-bold px-2.5 py-1.5 leading-none shadow-sm"
                  >
                    Pinned
                  </span>
                )}

                {/* Card Content */}
                <div className="p-5 sm:p-[22px] flex flex-col flex-1 text-left">
                  {post.categories.length > 0 && (
                    <div className="text-[12.5px] font-semibold text-[#666666] mb-2">
                      {post.categories.map((c) => c.name).join(' • ')}
                    </div>
                  )}

                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] leading-[1.32] mb-2.5">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-[#111111] hover:text-[#00CE44] transition-colors no-underline"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-[14px] sm:text-[14.5px] text-[#666666] leading-[1.6] mb-5 flex-1">
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

        {/* Exact Ellipsis Pagination (1 2 3 … 8 9 10 ›) */}
        {!loading && !error && totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mt-10 sm:mt-12"
          >
            {currentPage > 1 && (
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => onPageChange && onPageChange(currentPage - 1)}
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
                      onClick={() => onPageChange && onPageChange(num)}
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
                onClick={() => onPageChange && onPageChange(currentPage + 1)}
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
