import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { getCachedList, setCachedList, seedCachedPosts } from '../../../utils/wpCache'
import './author-page.css'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'
const PER_PAGE = 9

function decodeHtml(html = '') {
  if (!html) return ''
  if (typeof document !== 'undefined') {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
}

function trimWords(html = '', maxWords = 19) {
  const plain = decodeHtml(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
  const words = plain.split(' ').filter(Boolean)
  if (words.length <= maxWords) return plain
  return words.slice(0, maxWords).join(' ') + '…'
}

function formatAuthorBioHtml(raw = '') {
  if (!raw) return ''
  let html = raw.includes('&lt;') ? decodeHtml(raw) : raw
  html = html
    .replace(
      /href=(["'])https?:\/\/(?:nextincep\.wpenginepowered\.com|inceptivesdigital\.com)(\/[^"']*)?\1/gi,
      (_, quote, path = '/') => `href=${quote}${path || '/'}${quote}`
    )
    .replace(/https?:\/\/nextincep\.wpenginepowered\.com/gi, 'https://inceptivesdigital.com')

  if (!/<p[\s>]/i.test(html)) {
    const paragraphs = html
      .split(/\r?\n\s*\r?\n/)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
    if (paragraphs.length > 0) {
      return paragraphs.map((p) => `<p>${p}</p>`).join('')
    }
  }
  return html
}

function normalizeSlugCandidate(value = '') {
  return decodeURIComponent(String(value || ''))
    .trim()
    .toLowerCase()
    .replace(/-/g, '_')
}

function resolveAuthorAvatar(user) {
  const url = user?.avatar_urls?.['96'] || user?.avatar_urls?.['48'] || user?.avatar_urls?.['24'] || ''
  if (!url) return '/assets/ID-logo.jpg'
  if (/gravatar\.com/i.test(url)) {
    return url.replace(/([?&])s=\d+/i, '$1s=320')
  }
  return url
}

function resolveLinkedInUrl(user) {
  const candidates = [
    user?.meta?.linkedin,
    user?.meta?.linkedin_url,
    user?.meta?.id_linkedin,
    user?.acf?.linkedin,
    user?.url,
  ]

  const graph = user?.yoast_head_json?.schema?.['@graph']
  if (Array.isArray(graph)) {
    const person = graph.find((node) => {
      const t = node?.['@type']
      return t === 'Person' || (Array.isArray(t) && t.includes('Person'))
    })
    if (Array.isArray(person?.sameAs)) {
      candidates.push(...person.sameAs)
    }
  }

  for (const raw of candidates) {
    if (!raw || typeof raw !== 'string') continue
    let normalized = raw.trim()
    if (!/^https?:\/\//i.test(normalized)) {
      normalized = `https://${normalized.replace(/^\/+/, '')}`
    } else {
      normalized = normalized.replace(/^http:\/\//i, 'https://')
    }
    if (/^https:\/\/([a-z0-9-]+\.)?linkedin\.com(\/|$)/i.test(normalized)) {
      return normalized
    }
  }
  return ''
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
    excerpt: trimWords(p.excerpt?.rendered || '', 19),
    date: p.date,
    image: featuredImage,
    imageAlt: decodeHtml(media?.alt_text || p.title?.rendered || ''),
    category: terms[0]?.name || 'Article',
    isPinned: Boolean(p.sticky || p.meta?._id_blog_pinned === '1'),
  }
}

function buildPaginationRange(page, totalPages) {
  const set = new Set([1, 2, 3, totalPages - 2, totalPages - 1, totalPages])
  for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) {
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

function applyAuthorYoastSeo(user, fallbackSlug, currentPage) {
  const yoast = user?.yoast_head_json || {}
  const authorName = decodeHtml(user?.name || fallbackSlug.replace(/[_-]+/g, ' '))
  const seoTitle = decodeHtml(yoast.title || `${authorName}, Author at Inceptives Digital`)
  const plainBio = decodeHtml((user?.description || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  const seoDesc = decodeHtml(
    yoast.description ||
      plainBio ||
      `Read the latest technology, product strategy, and software engineering articles by ${authorName} at Inceptives Digital.`
  )
  const canonicalSlug = user?.slug || fallbackSlug
  const canonical = (
    yoast.canonical || `https://inceptivesdigital.com/author/${canonicalSlug}`
  ).replace(/^https?:\/\/nextincep\.wpenginepowered\.com/i, 'https://inceptivesdigital.com')
  const ogImage = yoast.og_image?.[0]?.url || resolveAuthorAvatar(user)

  document.title = seoTitle
  setMetaTag('meta[name="description"]', 'name', 'description', seoDesc)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', yoast.og_type || 'profile')
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', decodeHtml(yoast.og_title || seoTitle))
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', decodeHtml(yoast.og_description || seoDesc))
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical)
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', yoast.twitter_card || 'summary_large_image')
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

  if (yoast.schema) {
    let schemaEl = document.getElementById('wp-yoast-author-schema')
    if (!schemaEl) {
      schemaEl = document.createElement('script')
      schemaEl.id = 'wp-yoast-author-schema'
      schemaEl.type = 'application/ld+json'
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(yoast.schema)
  }
}

export default function AuthorPage() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const rawPage = parseInt(searchParams.get('id_author_page') || '1', 10)
  const currentPage = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage

  const [author, setAuthor] = useState(null)
  const [posts, setPosts] = useState([])
  const [totalPosts, setTotalPosts] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const abortRef = useRef(null)

  const fetchAuthorAndPosts = useCallback(
    async ({ silent = false } = {}) => {
      if (!slug) return
      if (abortRef.current) abortRef.current.abort()
      const controller = new AbortController()
      abortRef.current = controller

      const listCacheKey = `author:${slug}:${currentPage}:${PER_PAGE}`
      const cached = getCachedList(listCacheKey)

      if (cached && cached.author) {
        setAuthor(cached.author)
        setPosts(cached.posts || [])
        setTotalPosts(cached.totalPosts || 0)
        setTotalPages(cached.totalPages || 1)
        setLoading(false)
        setNotFound(false)
        applyAuthorYoastSeo(cached.author, slug, currentPage)
      } else if (!silent) {
        setLoading(true)
        setNotFound(false)
      }

      try {
        let matchedUser = null
        const userRes = await fetch(
          `${WP_API_BASE}/users?slug=${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        )
        if (userRes.ok) {
          const users = await userRes.json()
          if (Array.isArray(users) && users.length > 0) {
            matchedUser = users[0]
          }
        }

        if (!matchedUser) {
          const allRes = await fetch(`${WP_API_BASE}/users?per_page=100`, {
            signal: controller.signal,
          })
          if (allRes.ok) {
            const allUsers = await allRes.json()
            const targetNorm = normalizeSlugCandidate(slug)
            matchedUser = (Array.isArray(allUsers) ? allUsers : []).find(
              (u) => normalizeSlugCandidate(u.slug) === targetNorm
            )
          }
        }

        if (!matchedUser) {
          if (!cached) {
            setAuthor(null)
            setPosts([])
            setNotFound(true)
          }
          return
        }

        setAuthor(matchedUser)
        applyAuthorYoastSeo(matchedUser, slug, currentPage)

        const params = new URLSearchParams({
          _embed: '1',
          author: String(matchedUser.id),
          per_page: String(PER_PAGE),
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
          next.delete('id_author_page')
          setSearchParams(next)
          return
        }

        if (!postsRes.ok) throw new Error(`Author posts API ${postsRes.status}`)

        const totalHeader = parseInt(postsRes.headers.get('X-WP-Total') || '0', 10)
        const totalPagesHeader = parseInt(postsRes.headers.get('X-WP-TotalPages') || '1', 10)
        const rawPosts = await postsRes.json()
        seedCachedPosts(rawPosts)

        const formatted = (Array.isArray(rawPosts) ? rawPosts : []).map(formatWpPost)
        formatted.sort((a, b) => {
          if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
          return new Date(b.date) - new Date(a.date)
        })

        const resolvedTotalPosts = Number.isNaN(totalHeader) ? formatted.length : totalHeader
        const resolvedTotalPages = Math.max(1, Number.isNaN(totalPagesHeader) ? 1 : totalPagesHeader)

        setPosts(formatted)
        setTotalPosts(resolvedTotalPosts)
        setTotalPages(resolvedTotalPages)
        setCachedList(listCacheKey, {
          author: matchedUser,
          posts: formatted,
          totalPosts: resolvedTotalPosts,
          totalPages: resolvedTotalPages,
        })
        setNotFound(false)
      } catch (err) {
        if (err.name === 'AbortError') return
        if (!silent && !cached) setNotFound(true)
      } finally {
        if (!controller.signal.aborted && !silent) setLoading(false)
      }
    },
    [slug, currentPage, searchParams, setSearchParams]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchAuthorAndPosts({ silent: false })
    return () => {
      if (abortRef.current) abortRef.current.abort()
      const schemaEl = document.getElementById('wp-yoast-author-schema')
      if (schemaEl) schemaEl.remove()
      const robotsEl = document.querySelector('meta[name="robots"]')
      if (robotsEl) {
        robotsEl.setAttribute(
          'content',
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        )
      }
    }
  }, [fetchAuthorAndPosts])

  useEffect(() => {
    const refreshSilently = () => {
      if (document.visibilityState === 'visible') {
        fetchAuthorAndPosts({ silent: true })
      }
    }
    window.addEventListener('focus', refreshSilently)
    document.addEventListener('visibilitychange', refreshSilently)
    return () => {
      window.removeEventListener('focus', refreshSilently)
      document.removeEventListener('visibilitychange', refreshSilently)
    }
  }, [fetchAuthorAndPosts])

  const handlePageChange = (pageNum) => {
    const next = new URLSearchParams(searchParams)
    if (pageNum <= 1) next.delete('id_author_page')
    else next.set('id_author_page', String(pageNum))
    setSearchParams(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const authorName = author?.name
    ? decodeHtml(author.name)
    : (slug || '').replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const avatarUrl = resolveAuthorAvatar(author)
  const linkedInUrl = resolveLinkedInUrl(author)
  const bioHtml = formatAuthorBioHtml(author?.description || '')
  const pageNumbers = buildPaginationRange(currentPage, totalPages)

  return (
    <div className="idap-page">
      <section className="idap-wrap" aria-label={`Author profile: ${authorName}`}>
        <nav className="idap-breadcrumb" aria-label="Breadcrumb">
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <span>Author</span>
          <span>/</span>
          <span>{authorName}</span>
        </nav>

        {loading && (
          <div className="animate-pulse">
            <div className="idap-hero mb-10">
              <div className="idap-avatar-col">
                <div className="w-[180px] h-[180px] rounded-full bg-[#dff5e6]" />
                <div className="h-6 w-36 bg-[#dff5e6] rounded mt-3" />
              </div>
              <div className="space-y-3">
                <div className="h-9 w-56 bg-[#dff5e6] rounded" />
                <div className="h-4 w-full bg-[#e8f6ed] rounded" />
                <div className="h-4 w-11/12 bg-[#e8f6ed] rounded" />
                <div className="h-4 w-3/4 bg-[#e8f6ed] rounded" />
              </div>
            </div>
            <div className="idap-grid">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="idap-card">
                  <div className="aspect-[2.05] bg-[#e8f0eb]" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-full bg-[#e8f0eb] rounded" />
                    <div className="h-5 w-4/5 bg-[#e8f0eb] rounded" />
                    <div className="h-4 w-full bg-[#f0f5f2] rounded" />
                    <div className="h-4 w-24 bg-[#e8f0eb] rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && notFound && (
          <div className="idap-empty max-w-xl mx-auto my-8">
            <h1 className="text-2xl font-bold text-[#101828] mb-3">Author Not Found</h1>
            <p className="text-[#475467] text-sm sm:text-base mb-6">
              We could not find an author profile for &ldquo;{slug}&rdquo;.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00CE44] text-black font-semibold rounded-none hover:bg-[#00b83d] transition-colors"
            >
              Browse All Blogs
            </Link>
          </div>
        )}

        {!loading && !notFound && author && (
          <>
            <div className="idap-hero">
              <div className="idap-avatar-col">
                <div className="authurimg-set">
                  <div className="idap-avatar">
                    <img
                      src={avatarUrl}
                      alt={authorName}
                      width="210"
                      height="210"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  {linkedInUrl && (
                    <a
                      className="idap-linkedin"
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${authorName} on LinkedIn`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42Zm12.3 10.85H15.8v-4.64c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.5v5.27Z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <h1 className="idap-avatar-name">{authorName}</h1>
              </div>

              <div className="idap-bio">
                <h2 className="abt-author">About The Author</h2>
                {bioHtml ? (
                  <div
                    className="idap-description"
                    dangerouslySetInnerHTML={{ __html: bioHtml }}
                  />
                ) : (
                  <p className="idap-description">
                    Contributor at Inceptives Digital sharing insights on digital product engineering, software architecture, and AI delivery.
                  </p>
                )}
              </div>
            </div>

            <div className="idap-section-head">
              <h2>Latest Articles</h2>
              {totalPosts > 0 && (
                <span className="idap-count">
                  {totalPosts} {totalPosts === 1 ? 'Article' : 'Articles'}
                </span>
              )}
            </div>

            {posts.length > 0 ? (
              <>
                <div className="idap-grid">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className={`idap-card${post.isPinned ? ' is-pinned' : ''}`}
                    >
                      <Link
                        className="idap-image"
                        to={`/blog/${post.slug}`}
                        aria-label={`Read ${post.title}`}
                      >
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="idap-fallback">Inceptives Digital</span>
                        )}
                        <span className="idap-cat">{post.category}</span>
                        {post.isPinned && (
                          <span className="idap-pinned-label" aria-label="Pinned blog post">
                            Pinned
                          </span>
                        )}
                      </Link>
                      <div className="idap-card-body">
                        <h3>
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <div className="idap-card-footer">
                          <Link
                            className="idap-arrow"
                            to={`/blog/${post.slug}`}
                            aria-label={`Read ${post.title}`}
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav className="idap-pages" aria-label="Article pages">
                    {currentPage > 1 && (
                      <button
                        type="button"
                        aria-label="Previous page"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        ‹
                      </button>
                    )}

                    {pageNumbers.map((num, idx) => {
                      const prev = idx > 0 ? pageNumbers[idx - 1] : 0
                      const showEllipsis = prev && num - prev > 1
                      return (
                        <span key={num} className="inline-flex items-center gap-[7px]">
                          {showEllipsis && <span className="idap-ellipsis">…</span>}
                          {num === currentPage ? (
                            <span className="idap-current" aria-current="page">
                              {num}
                            </span>
                          ) : (
                            <button type="button" onClick={() => handlePageChange(num)}>
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
                      >
                        ›
                      </button>
                    )}
                  </nav>
                )}
              </>
            ) : (
              <p className="idap-empty">No published articles yet.</p>
            )}
          </>
        )}
      </section>
    </div>
  )
}
