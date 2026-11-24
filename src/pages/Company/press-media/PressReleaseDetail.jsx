import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { getCachedPost, setCachedPost } from '../../../utils/wpCache'
import './press-release-detail.css'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'

function decodeHtml(html = '') {
  if (!html) return ''
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
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

function applyYoastSeo(p, formatted) {
  const yoast = p.yoast_head_json || {}
  const seoTitle = decodeHtml(yoast.title || `${formatted.title} | Inceptives Digital`)
  const rawExcerpt = decodeHtml(
    (p.excerpt?.rendered || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  )
  const seoDesc = decodeHtml(yoast.description || yoast.og_description || rawExcerpt)
  const canonical = (
    yoast.canonical || `https://inceptivesdigital.com/press-release/${formatted.slug}`
  ).replace(/^https?:\/\/nextincep\.wpenginepowered\.com/i, 'https://inceptivesdigital.com')
  const ogImg = yoast.og_image?.[0]?.url || formatted.image || '/assets/ID-logo.jpg'

  document.title = seoTitle
  setMetaTag('meta[name="description"]', 'name', 'description', seoDesc)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'article')
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', decodeHtml(yoast.og_title || seoTitle))
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', decodeHtml(yoast.og_description || seoDesc))
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical)
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImg)
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', decodeHtml(yoast.twitter_title || seoTitle))
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', decodeHtml(yoast.twitter_description || seoDesc))
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', yoast.twitter_image || ogImg)

  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', canonical)

  if (yoast.schema) {
    let schemaEl = document.getElementById('wp-yoast-pr-schema')
    if (!schemaEl) {
      schemaEl = document.createElement('script')
      schemaEl.id = 'wp-yoast-pr-schema'
      schemaEl.type = 'application/ld+json'
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(yoast.schema)
  }
}

function scrollToContact(e) {
  if (e) e.preventDefault()
  const el =
    document.getElementById('contact') ||
    document.getElementById('consultation-cta') ||
    document.getElementById('contact-form')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  else window.location.href = '/contact-us'
}

export default function PressReleaseDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [tocItems, setTocItems] = useState([])
  const [activeId, setActiveId] = useState('')
  const [mobileTocOpen, setMobileTocOpen] = useState(false)

  const bodyRef = useRef(null)

  const formatRawRelease = useCallback((p) => {
    const media = p._embedded?.['wp:featuredmedia']?.[0]
    return {
      id: p.id,
      slug: p.slug,
      title: decodeHtml(p.title?.rendered || ''),
      content: p.content?.rendered || '',
      date: p.date
        ? new Date(p.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : '',
      image:
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium_large?.source_url ||
        media?.source_url ||
        '',
    }
  }, [])

  const fetchRelease = useCallback(
    async ({ silent = false } = {}) => {
      if (!slug) return

      const cachedRaw = getCachedPost(slug)
      if (cachedRaw) {
        const instantFormatted = formatRawRelease(cachedRaw)
        setPost(instantFormatted)
        setNotFound(false)
        setLoading(false)
        applyYoastSeo(cachedRaw, instantFormatted)
      } else if (!silent) {
        setLoading(true)
        setNotFound(false)
      }

      try {
        const res = await fetch(
          `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`
        )
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const data = await res.json()

        if (!Array.isArray(data) || data.length === 0) {
          if (!cachedRaw) {
            setPost(null)
            setNotFound(true)
          }
          return
        }

        const p = data[0]
        setCachedPost(slug, p)
        const formatted = formatRawRelease(p)

        setPost(formatted)
        setNotFound(false)
        setLoading(false)
        applyYoastSeo(p, formatted)
      } catch {
        if (!silent && !cachedRaw) setNotFound(true)
      } finally {
        if (!silent) setLoading(false)
      }
    },
    [slug, formatRawRelease]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileTocOpen(false)
    fetchRelease({ silent: false })

    const onFocus = () => {
      if (document.visibilityState === 'visible') fetchRelease({ silent: true })
    }
    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onFocus)
    return () => {
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onFocus)
      const schemaEl = document.getElementById('wp-yoast-pr-schema')
      if (schemaEl) schemaEl.remove()
    }
  }, [fetchRelease])

  // Build TOC + active scroll-spy from H2/H3 headings inside article body
  useEffect(() => {
    const body = bodyRef.current
    if (!body || !post) return

    const headings = Array.from(body.querySelectorAll('h2, h3'))
    const items = headings.map((h, idx) => {
      const id = `id-pr-${post.id}-section-${idx + 1}`
      h.id = id
      return {
        id,
        text: h.textContent.trim(),
        isSub: h.tagName === 'H3',
      }
    })
    setTocItems(items)
    if (items.length > 0) setActiveId(items[0].id)

    let rafPending = false
    const syncActive = () => {
      rafPending = false
      if (!headings.length) return
      let current = headings[0]
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 150) current = h
        else break
      }
      setActiveId((prev) => (prev === current.id ? prev : current.id))
    }

    const onScroll = () => {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(syncActive)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    syncActive()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [post])

  const handleTocClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileTocOpen(false)
  }

  const shareUrl = encodeURIComponent(
    typeof window !== 'undefined'
      ? window.location.href
      : `https://inceptivesdigital.com/press-release/${slug}`
  )
  const shareTitle = encodeURIComponent(post?.title || '')

  if (loading) {
    return (
      <div className="id-pr">
        <header className="id-pr-hero">
          <div className="id-pr-wrap animate-pulse">
            <div className="h-3.5 w-48 bg-white/15 rounded mb-6" />
            <div className="h-10 w-3/4 bg-white/15 rounded mb-3" />
            <div className="h-10 w-1/2 bg-white/15 rounded mb-6" />
            <div className="h-4 w-36 bg-white/15 rounded" />
          </div>
        </header>
        <div className="id-pr-wrap id-pr-layout animate-pulse">
          <div className="space-y-4">
            <div className="h-80 bg-[#f1f6f3] rounded-[17px]" />
            <div className="h-4 w-full bg-[#f1f6f3] rounded" />
            <div className="h-4 w-11/12 bg-[#f1f6f3] rounded" />
            <div className="h-4 w-4/5 bg-[#f1f6f3] rounded" />
          </div>
          <div className="h-72 bg-[#f1f6f3] rounded-[14px]" />
        </div>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="id-pr">
        <header className="id-pr-hero">
          <div className="id-pr-wrap">
            <nav className="id-pr-breadcrumb" aria-label="Breadcrumb">
              <Link to="/press-release">Press Release</Link>
              <span>/</span>
              <span>Not Found</span>
            </nav>
            <h1>Press Release Not Found</h1>
          </div>
        </header>
        <div className="id-pr-wrap py-20 text-center">
          <p className="text-[#52635c] text-base mb-6">
            This press release may have been moved or removed in WordPress.
          </p>
          <Link
            to="/press-release"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00CE44] text-black font-semibold rounded-none hover:bg-[#00b83d] transition-colors"
          >
            Back to Press Releases
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="id-pr" id={`id-pr-${post.id}`}>
      {/* DARK GREEN HERO */}
      <header className="id-pr-hero">
        <div className="id-pr-wrap">
          <nav className="id-pr-breadcrumb" aria-label="Breadcrumb">
            <Link to="/press-release">Press Release</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <h1>{post.title}</h1>

          {post.date && (
            <div className="id-pr-published">
              <Calendar aria-hidden="true" />
              <time>{post.date}</time>
            </div>
          )}
        </div>
      </header>

      {/* 2-COLUMN CONTENT + RIGHT STICKY SIDEBAR */}
      <div className="id-pr-wrap id-pr-layout">
        {/* LEFT COLUMN: Featured Image + Press Release Body */}
        <article className="id-pr-main">
          {post.image && (
            <div className="id-pr-featured">
              <img src={post.image} alt={post.title} fetchPriority="high" />
            </div>
          )}

          <div
            ref={bodyRef}
            className="id-pr-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* RIGHT STICKY SIDEBAR: TOC + Share Card + CTA Card */}
        <aside className="id-pr-sidebar">
          <div className="id-pr-sticky">
            <div className="id-pr-toc-card">
              {tocItems.length > 0 && (
                <>
                  <div className="id-pr-toc-heading">On This Page</div>
                  <nav className="id-pr-toc-links" aria-label="Table of contents">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`${item.isSub ? 'id-subheading' : ''} ${
                          activeId === item.id ? 'active' : ''
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </>
              )}

              <div className="id-pr-share">
                <strong>Share This Press Release</strong>
                <div className="id-pr-share-buttons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="id-pr-share-btn"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"
                      />
                    </svg>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="id-pr-share-btn"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM7.93 18.75H4.98V9.2h2.95v9.55zM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zm12.3 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 2.99 0 3.55 1.97 3.55 4.53v5.25z"
                      />
                    </svg>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="id-pr-share-btn"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.43L5.55 22H2.43l7.25-8.29L1.8 2h6.41l4.43 6.77L18.9 2zm-1.1 18h1.73L7.27 3.9H5.42L17.8 20z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE FLOATING TOC */}
      {tocItems.length > 0 && (
        <>
          <button
            className="id-pr-mobile-toc-btn"
            type="button"
            aria-expanded={mobileTocOpen}
            onClick={() => setMobileTocOpen((v) => !v)}
          >
            ☰ On This Page
          </button>

          {mobileTocOpen && (
            <div className="id-pr-mobile-toc-panel">
              <strong>On This Page</strong>
              <nav className="id-pr-mobile-toc-links" aria-label="Mobile table of contents">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`${item.isSub ? 'id-subheading' : ''} ${
                      activeId === item.id ? 'active' : ''
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  )
}
