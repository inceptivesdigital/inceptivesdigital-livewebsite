import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCachedPost, setCachedPost } from '../../../utils/wpCache'
import './blog-inner-template.css'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'

const KNOWN_REVIEWERS = {
  6: {
    id: 6,
    name: 'Muhammad Usman',
    bio: 'Editorial reviewer at Inceptives Digital.',
    avatar: '/assets/ID-logo.jpg',
  },
  14: {
    id: 14,
    name: 'Atif Zaidy',
    bio: 'Editorial reviewer at Inceptives Digital.',
    avatar: '/assets/ID-logo.jpg',
  },
  7: {
    id: 7,
    name: 'Noshaba Noor',
    bio: 'Editorial reviewer at Inceptives Digital.',
    avatar: '/assets/ID-logo.jpg',
  },
  10: {
    id: 10,
    name: 'Soha Shakeel',
    bio: 'Editorial reviewer at Inceptives Digital.',
    avatar: '/assets/ID-logo.jpg',
  },
}

function decodeHtml(html = '') {
  if (!html) return ''
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function scrollToContactForm(e) {
  if (e) e.preventDefault()
  const el =
    document.getElementById('contact') ||
    document.getElementById('consultation-cta') ||
    document.getElementById('contact-form')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/contact-us'
  }
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

function setCanonicalLink(href) {
  if (!href) return
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function normalizeSiteUrl(url = '', fallbackSlug = '') {
  if (!url) return fallbackSlug ? `https://inceptivesdigital.com/blog/${fallbackSlug}` : 'https://inceptivesdigital.com/blog'
  return url.replace(/^https?:\/\/nextincep\.wpenginepowered\.com/i, 'https://inceptivesdigital.com')
}

function applyYoastSeoToHead(p, formatted) {
  const yoast = p.yoast_head_json || {}
  const seoTitle = decodeHtml(yoast.title || `${formatted.title} | Inceptives Digital`)
  const rawExcerpt = decodeHtml((p.excerpt?.rendered || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  const seoDesc = decodeHtml(yoast.description || yoast.og_description || rawExcerpt)
  const canonical = normalizeSiteUrl(yoast.canonical || p.link, formatted.slug)
  const ogImgObj = Array.isArray(yoast.og_image) && yoast.og_image[0] ? yoast.og_image[0] : null
  const ogImage = ogImgObj?.url || formatted.image || '/assets/ID-logo.jpg'
  const ogWidth = ogImgObj?.width || '1200'
  const ogHeight = ogImgObj?.height || '630'

  document.title = seoTitle

  // Standard Meta + Canonical
  setMetaTag('meta[name="description"]', 'name', 'description', seoDesc)
  setCanonicalLink(canonical)

  // Yoast Robots
  if (yoast.robots && typeof yoast.robots === 'object') {
    const robotsStr = Object.values(yoast.robots).filter(Boolean).join(', ')
    if (robotsStr) setMetaTag('meta[name="robots"]', 'name', 'robots', robotsStr)
  }

  // Open Graph (Facebook / LinkedIn / WhatsApp share preview)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', yoast.og_type || 'article')
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', decodeHtml(yoast.og_title || seoTitle))
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', decodeHtml(yoast.og_description || seoDesc))
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical)
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)
  setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', ogWidth)
  setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', ogHeight)
  if (yoast.article_published_time || p.date_gmt) {
    setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', yoast.article_published_time || p.date_gmt)
  }
  if (yoast.article_modified_time || p.modified_gmt) {
    setMetaTag('meta[property="article:modified_time"]', 'property', 'article:modified_time', yoast.article_modified_time || p.modified_gmt)
  }
  if (formatted.category?.name) {
    setMetaTag('meta[property="article:section"]', 'property', 'article:section', formatted.category.name)
  }

  // Twitter / X Card
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', yoast.twitter_card || 'summary_large_image')
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', decodeHtml(yoast.twitter_title || yoast.og_title || seoTitle))
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', decodeHtml(yoast.twitter_description || yoast.og_description || seoDesc))
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', yoast.twitter_image || ogImage)

  // Live Yoast JSON-LD Schema (Article, BreadcrumbList, FAQPage, Person)
  if (yoast.schema) {
    let schemaEl = document.getElementById('wp-yoast-blog-schema')
    if (!schemaEl) {
      schemaEl = document.createElement('script')
      schemaEl.id = 'wp-yoast-blog-schema'
      schemaEl.type = 'application/ld+json'
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(yoast.schema)
  }
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [tocItems, setTocItems] = useState([])
  const [activeHeadingId, setActiveHeadingId] = useState('')
  const [mobileTocOpen, setMobileTocOpen] = useState(false)

  const articleBodyRef = useRef(null)
  const desktopTocRef = useRef(null)

  const formatRawPost = useCallback((p, reviewerOverride = null) => {
    const media = p._embedded?.['wp:featuredmedia']?.[0]
    const authorObj = p._embedded?.author?.[0]
    const terms = (p._embedded?.['wp:term']?.[0] || []).map((t) => ({
      id: t.id,
      slug: t.slug,
      name: decodeHtml(t.name),
    }))

    const flowApproved = p.meta?._flow_review_status === 'approved'
    const flowReviewerId = Number(p.meta?._flow_reviewer_id || 0)
    const manualApproved = p.meta?._id_approved === '1'
    const manualReviewerId = Number(p.meta?._id_reviewer || 0)
    const reviewerId =
      flowApproved && flowReviewerId
        ? flowReviewerId
        : manualApproved && manualReviewerId
        ? manualReviewerId
        : 0

    const fallbackReviewer = reviewerId ? KNOWN_REVIEWERS[reviewerId] || null : null

    const heroImage =
      media?.media_details?.sizes?.large?.source_url ||
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.source_url ||
      ''

    return {
      id: p.id,
      slug: p.slug,
      title: decodeHtml(p.title?.rendered || ''),
      content: p.content?.rendered || '',
      wpUrl: p.link || `https://inceptivesdigital.com/blog/${p.slug}`,
      date: p.date
        ? new Date(p.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : '',
      author: {
        name: authorObj?.name || 'Inceptives Digital',
        bio: authorObj?.description || 'Contributor at Inceptives Digital.',
        avatar:
          authorObj?.avatar_urls?.['96'] ||
          authorObj?.avatar_urls?.['48'] ||
          '/assets/ID-logo.jpg',
      },
      reviewer: reviewerOverride || fallbackReviewer,
      reviewerId,
      image: heroImage,
      category: terms[0] || null,
      categories: terms,
    }
  }, [])

  const fetchPost = useCallback(
    async ({ silent = false } = {}) => {
      if (!slug) return

      const cachedRaw = getCachedPost(slug)
      if (cachedRaw) {
        const instantFormatted = formatRawPost(cachedRaw)
        setPost(instantFormatted)
        setNotFound(false)
        setLoading(false)
        applyYoastSeoToHead(cachedRaw, instantFormatted)
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

        const formatted = formatRawPost(p)
        setPost(formatted)
        setNotFound(false)
        setLoading(false)
        applyYoastSeoToHead(p, formatted)

        // Fetch full reviewer bio asynchronously without blocking article render
        if (formatted.reviewerId > 0) {
          fetch(`${WP_API_BASE}/users/${formatted.reviewerId}`)
            .then((revRes) => (revRes.ok ? revRes.json() : null))
            .then((revData) => {
              if (revData?.name) {
                const fullReviewer = {
                  id: revData.id,
                  name: decodeHtml(revData.name),
                  bio: revData.description || 'Editorial reviewer at Inceptives Digital.',
                  avatar:
                    revData.avatar_urls?.['96'] ||
                    revData.avatar_urls?.['48'] ||
                    '/assets/ID-logo.jpg',
                }
                setPost((prev) =>
                  prev && prev.id === p.id ? { ...prev, reviewer: fullReviewer } : prev
                )
              }
            })
            .catch(() => {})
        }
      } catch {
        if (!silent && !cachedRaw) setNotFound(true)
      } finally {
        if (!silent) setLoading(false)
      }
    },
    [slug, formatRawPost]
  )

  // Live fetch + silent auto-refresh on focus/visibility return
  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileTocOpen(false)
    fetchPost({ silent: false })

    const onFocus = () => {
      if (document.visibilityState === 'visible') fetchPost({ silent: true })
    }
    window.addEventListener('focus', onFocus)
    document.addEventListener('visibilitychange', onFocus)
    return () => {
      window.removeEventListener('focus', onFocus)
      document.removeEventListener('visibilitychange', onFocus)
      const schemaEl = document.getElementById('wp-yoast-blog-schema')
      if (schemaEl) schemaEl.remove()
    }
  }, [fetchPost])

  // Wire TOC, Scroll-Spy, Yoast FAQ Accordion, Key Takeaways Accordion, Table Scroll, and In-Article CTAs
  useEffect(() => {
    const article = articleBodyRef.current
    if (!article || !post) return

    const instanceId = `id-blog-${post.id}`

    // 1. Build TOC from all H2 & H3 headings
    const headings = Array.from(article.querySelectorAll('h2, h3'))
    const items = headings.map((heading, idx) => {
      const id = `${instanceId}-section-${idx + 1}`
      heading.id = id
      return {
        id,
        text: heading.textContent.trim(),
        isSub: heading.tagName === 'H3',
      }
    })
    setTocItems(items)
    if (items.length > 0) setActiveHeadingId(items[0].id)

    // 2. Active TOC scroll sync
    let rafPending = false
    const syncActiveTOC = () => {
      rafPending = false
      if (!headings.length) return
      const readingLine = 150
      let active = headings[0]
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= readingLine) {
          active = h
        } else {
          break
        }
      }
      setActiveHeadingId((prev) => (prev === active.id ? prev : active.id))
    }

    const scheduleSync = () => {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(syncActiveTOC)
    }

    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync, { passive: true })
    syncActiveTOC()

    // 3. Yoast .schema-faq Accordion
    article.querySelectorAll('.schema-faq').forEach((faq) => {
      if (faq.dataset.accordionReady === 'true') return
      faq.dataset.accordionReady = 'true'
      const sections = Array.from(faq.querySelectorAll('.schema-faq-section'))
      sections.forEach((section, index) => {
        const question = section.querySelector('.schema-faq-question')
        const answer = section.querySelector('.schema-faq-answer')
        if (!question || !answer) return

        question.textContent = question.textContent.trim()
        const answerId = `faq-answer-${post.id}-${index}`

        const wrap = document.createElement('div')
        wrap.className = 'schema-faq-answer-wrap'
        const inner = document.createElement('div')
        inner.className = 'schema-faq-answer-inner'

        answer.id = answerId
        answer.parentNode.insertBefore(wrap, answer)
        inner.appendChild(answer)
        wrap.appendChild(inner)

        question.setAttribute('role', 'button')
        question.setAttribute('tabindex', '0')
        question.setAttribute('aria-expanded', 'false')
        question.setAttribute('aria-controls', answerId)

        const toggle = () => {
          const shouldOpen = !section.classList.contains('is-open')
          sections.forEach((item) => {
            item.classList.remove('is-open')
            const q = item.querySelector('.schema-faq-question')
            if (q) q.setAttribute('aria-expanded', 'false')
          })
          if (shouldOpen) {
            section.classList.add('is-open')
            question.setAttribute('aria-expanded', 'true')
          }
        }

        question.addEventListener('click', toggle)
        question.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault()
            toggle()
          }
        })
      })
    })

    // 4. Key Takeaways .custom-accordion
    article.querySelectorAll('.custom-accordion').forEach((accordion) => {
      if (accordion.dataset.accordionReady === 'true') return
      accordion.dataset.accordionReady = 'true'
      accordion.querySelectorAll('.accordion-item').forEach((item, index) => {
        const header = item.querySelector('.accordion-header')
        const content = item.querySelector('.accordion-content')
        const icon = item.querySelector('.accordion-icon')
        if (!header || !content) return

        const contentId = `${instanceId}-takeaways-${index}`
        content.id = contentId
        header.setAttribute('type', 'button')
        header.setAttribute('aria-controls', contentId)
        item.classList.remove('active')
        header.setAttribute('aria-expanded', 'false')
        content.setAttribute('aria-hidden', 'true')
        if (icon) icon.textContent = '+'

        header.addEventListener('click', () => {
          const isOpen = item.classList.toggle('active')
          header.setAttribute('aria-expanded', String(isOpen))
          content.setAttribute('aria-hidden', String(!isOpen))
          if (icon) icon.textContent = isOpen ? '−' : '+'
        })
      })
    })

    // 5. Wrap tables for clean horizontal scrolling
    article.querySelectorAll('table').forEach((table) => {
      const wpFigure = table.closest('figure.wp-block-table')
      const target = wpFigure && article.contains(wpFigure) ? wpFigure : table
      if (target.closest('.id-table-scroll')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'id-table-scroll'
      wrapper.setAttribute('role', 'region')
      wrapper.setAttribute('aria-label', 'Scrollable table')
      target.parentNode.insertBefore(wrapper, target)
      wrapper.appendChild(target)
    })

    // 6. Wire in-article CTA buttons (.getintouch) to smooth-scroll to contact section
    article.querySelectorAll('a.getintouch').forEach((btn) => {
      btn.addEventListener('click', scrollToContactForm)
    })

    return () => {
      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
    }
  }, [post])

  // Auto-scroll left TOC internal container when active heading changes
  useEffect(() => {
    const desktop = desktopTocRef.current
    if (!desktop || !activeHeadingId) return
    if (!window.matchMedia('(min-width: 1025px)').matches) return
    const activeEl = desktop.querySelector(`a[data-toc-id="${activeHeadingId}"]`)
    if (!activeEl) return
    const outer = desktop.getBoundingClientRect()
    const inner = activeEl.getBoundingClientRect()
    const margin = 15
    let delta = 0
    if (inner.top < outer.top + margin) delta = inner.top - outer.top - margin
    else if (inner.bottom > outer.bottom - margin) delta = inner.bottom - outer.bottom + margin
    if (delta !== 0) {
      desktop.scrollTo({ top: desktop.scrollTop + delta, behavior: 'smooth' })
    }
  }, [activeHeadingId])

  const aiPlatforms = useMemo(() => {
    if (!post) return []
    const liveUrl = typeof window !== 'undefined' ? window.location.href : post.wpUrl
    const prompt = `Summarize the blog post titled "${post.title}" available at this URL: ${liveUrl}. Write a summary in two or three sentences, then list its key takeaways as concise bullet points. Use only facts explicitly stated in the blog. Keep all numbers and claims accurate. If you cannot access the blog content, say so instead of guessing.`
    const q = encodeURIComponent(prompt)
    return [
      { name: 'ChatGPT', url: `https://chatgpt.com/?q=${q}`, icon: '/assets/blog/ai-icons/chatgpt.png' },
      { name: 'Claude', url: `https://claude.ai/new?q=${q}`, icon: '/assets/blog/ai-icons/claude.png' },
      { name: 'Perplexity', url: `https://www.perplexity.ai/search?q=${q}`, icon: '/assets/blog/ai-icons/perplexity.png' },
      { name: 'Gemini', url: `https://www.google.com/search?udm=50&q=${q}`, icon: '/assets/blog/ai-icons/gemini.png' },
      { name: 'Grok', url: `https://grok.com/?q=${q}`, icon: '/assets/blog/ai-icons/grok.png' },
    ]
  }, [post])

  const handleTocClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileTocOpen(false)
  }

  const shareUrl = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : post?.wpUrl || ''
  )
  const shareTitle = encodeURIComponent(post?.title || '')

  if (loading) {
    return (
      <div className="id-blog">
        <header className="id-blog-hero">
          <div className="id-blog-wrap animate-pulse">
            <div className="h-3.5 w-52 bg-white/15 rounded mb-6" />
            <div className="h-10 w-3/4 bg-white/15 rounded mb-3" />
            <div className="h-10 w-1/2 bg-white/15 rounded mb-8" />
            <div className="flex items-center gap-3 pt-5 border-t border-white/15">
              <div className="w-12 h-12 rounded-full bg-white/15" />
              <div className="space-y-2">
                <div className="h-3 w-20 bg-white/15 rounded" />
                <div className="h-4 w-36 bg-white/15 rounded" />
              </div>
            </div>
          </div>
        </header>
        <div className="id-blog-wrap id-article-layout animate-pulse">
          <div className="h-72 bg-[#f1f6f3] rounded-[14px]" />
          <div className="space-y-4">
            <div className="h-80 bg-[#f1f6f3] rounded-[16px]" />
            <div className="h-4 w-full bg-[#f1f6f3] rounded" />
            <div className="h-4 w-11/12 bg-[#f1f6f3] rounded" />
            <div className="h-4 w-4/5 bg-[#f1f6f3] rounded" />
          </div>
          <div className="h-64 bg-[#f1f6f3] rounded-[16px]" />
        </div>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="id-blog">
        <header className="id-blog-hero">
          <div className="id-blog-wrap">
            <nav className="id-breadcrumb" aria-label="Breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>Not Found</span>
            </nav>
            <h1 className="id-main-title">Blog Post Not Found</h1>
          </div>
        </header>
        <div className="id-blog-wrap py-20 text-center">
          <p className="text-[#52635c] text-base mb-6">
            This article may have been moved or removed in WordPress.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00CE44] text-black font-semibold rounded-none hover:bg-[#00b83d] transition-colors"
          >
            Back to All Blogs
          </Link>
        </div>
      </div>
    )
  }

  const renderAiSummaryCard = () => (
    <div className="id-ai-summary">
      <div className="id-ai-summary-title">
        <span aria-hidden="true">✦</span>
        <strong>Summarize with AI</strong>
      </div>
      <div className="id-ai-summary-icons">
        {aiPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="id-ai-platform"
            title={`Summarize with ${platform.name}`}
            aria-label={`Summarize with ${platform.name}`}
          >
            <img src={platform.icon} alt={platform.name} width="24" height="24" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <div className="id-blog" id={`id-blog-${post.id}`}>
      {/* HERO */}
      <header className="id-blog-hero">
        <div className="id-blog-wrap">
          <nav className="id-breadcrumb" aria-label="Breadcrumb">
            <Link to="/blog">Blog</Link>
            {post.category && (
              <>
                <span>/</span>
                <Link to={`/category/${encodeURIComponent(post.category.slug)}`}>
                  {post.category.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <h1 className="id-main-title">{post.title}</h1>

          <div className="id-editorial-strip">
            <div className="id-editorial-person">
              <img src={post.author.avatar} alt={post.author.name} />
              <div>
                <small>WRITTEN BY</small>
                <strong>{post.author.name}</strong>
              </div>
            </div>

            {post.reviewer && (
              <div className="id-editorial-person">
                <img src={post.reviewer.avatar} alt={post.reviewer.name} />
                <div>
                  <small>REVIEWED &amp; APPROVED BY</small>
                  <strong>{post.reviewer.name}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* THREE COLUMN ARTICLE */}
      <div className="id-blog-wrap id-article-layout">
        {/* LEFT SIDEBAR: Sticky TOC + Share */}
        <aside className="id-left-sidebar">
          <div className="id-sticky">
            {tocItems.length > 0 && (
              <div className="id-toc-card">
                <div className="id-side-heading">On This Page</div>
                <nav
                  ref={desktopTocRef}
                  className="id-toc-links"
                  aria-label="Table of contents"
                >
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      data-toc-id={item.id}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`${item.isSub ? 'id-subheading' : ''} ${
                        activeHeadingId === item.id ? 'active' : ''
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>

                <div className="id-share">
                  <strong>Share This Article</strong>
                  <div className="id-share-buttons">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      title="Share on Facebook"
                      className="id-social-icon id-facebook"
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
                      title="Share on LinkedIn"
                      className="id-social-icon id-linkedin"
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
                      title="Share on X"
                      className="id-social-icon id-twitter"
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
            )}
          </div>
        </aside>

        {/* CENTER MAIN ARTICLE */}
        <article className="id-article-main">
          {post.image && (
            <div className="id-featured-image">
              <img src={post.image} alt={post.title} fetchPriority="high" />
            </div>
          )}

          <div
            ref={articleBodyRef}
            className="id-article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Mobile/Tablet AI Summary Card */}
          <div className="id-mobile-ai-summary">{renderAiSummaryCard()}</div>

          {/* AUTHOR & REVIEWER SECTION */}
          <section className="id-author-section">
            <div className="id-author-card">
              <img src={post.author.avatar} alt={post.author.name} />
              <div>
                <div className="id-person-label">WRITTEN BY</div>
                <h3>{post.author.name}</h3>
                <p>{post.author.bio}</p>
              </div>
            </div>

            {post.reviewer && (
              <div className="id-author-card id-review-card">
                <img src={post.reviewer.avatar} alt={post.reviewer.name} />
                <div>
                  <div className="id-person-label">REVIEWED &amp; APPROVED BY</div>
                  <h3>{post.reviewer.name}</h3>
                  <p>{post.reviewer.bio}</p>
                </div>
              </div>
            )}
          </section>
        </article>

        {/* RIGHT SIDEBAR: Summarize with AI + CTA Card */}
        <aside className="id-right-sidebar">
          <div className="id-sticky">
            {renderAiSummaryCard()}

            <div className="id-cta-card">
              <h3>Have a Product in Mind?</h3>
              <p>Discuss your idea with our product development team.</p>
              <a href="#contact" onClick={scrollToContactForm} className="getintouch">
                <span>Start the Conversation</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE FLOATING TOC */}
      {tocItems.length > 0 && (
        <>
          <button
            className="id-mobile-toc-button"
            type="button"
            aria-expanded={mobileTocOpen}
            onClick={() => setMobileTocOpen((v) => !v)}
          >
            ☰ On This Page
          </button>

          {mobileTocOpen && (
            <div className="id-mobile-toc-panel">
              <strong>On This Page</strong>
              <nav className="id-mobile-toc-links" aria-label="Mobile table of contents">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`${item.isSub ? 'id-subheading' : ''} ${
                      activeHeadingId === item.id ? 'active' : ''
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
