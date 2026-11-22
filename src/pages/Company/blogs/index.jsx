import { useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import BlogsHero from './components/BlogsHero'
import FeaturedGuides from './components/FeaturedGuides'
import BlogsGrid, { BLOG_CATEGORIES } from './components/BlogsGrid'

const ALLOWED_SLUGS = new Set(BLOG_CATEGORIES.map((c) => c.slug))

export default function BlogsPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawPage = parseInt(searchParams.get('pagination_page') || '1', 10)
  const currentPage = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage

  const rawCat = (searchParams.get('blog_cat') || 'all').toLowerCase().trim()
  const activeCategory = ALLOWED_SLUGS.has(rawCat) ? rawCat : 'all'

  const searchQuery = (searchParams.get('blog_search') || '').trim()

  // Live Yoast SEO Meta, Open Graph, Canonical & Robots (index, follow on page 1; noindex, follow on page 2+)
  useEffect(() => {
    let active = true
    const defaultTitle = 'Tech Blog & Insights | Inceptives Digital'
    const defaultDesc =
      'Explore insights from Inceptives Digital on software development, mobile app architecture, AI solutions, and digital product strategies.'
    const defaultImage = '/assets/blog/featured/guide-complete.webp'

    const setMeta = (selector, attrName, attrValue, content) => {
      if (!content) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', String(content))
    }

    const setCanonical = (href) => {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', href)
    }

    const applySeo = ({ title, description, canonical, ogImage }) => {
      if (!active) return
      document.title = title
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
      setMeta('meta[property="og:title"]', 'property', 'og:title', title)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
      setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
      setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
      setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)
      setMeta(
        'meta[name="robots"]',
        'name',
        'robots',
        currentPage > 1
          ? 'noindex, follow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      )
      setCanonical(canonical)
    }

    // Immediate defaults
    const baseCanonical =
      activeCategory !== 'all'
        ? `https://inceptivesdigital.com/blog?blog_cat=${encodeURIComponent(activeCategory)}`
        : 'https://inceptivesdigital.com/blog'
    applySeo({
      title: defaultTitle,
      description: defaultDesc,
      canonical: baseCanonical,
      ogImage: defaultImage,
    })

    // Live Yoast SEO fetch for active category from WordPress REST API
    if (activeCategory !== 'all') {
      fetch(
        `https://nextincep.wpenginepowered.com/wp-json/wp/v2/categories?slug=${encodeURIComponent(
          activeCategory
        )}&_cb=${Date.now()}`,
        { cache: 'no-store' }
      )
        .then((r) => (r.ok ? r.json() : []))
        .then((cats) => {
          const cat = Array.isArray(cats) ? cats[0] : null
          const yoast = cat?.yoast_head_json
          if (!cat || !active) return
          const catTitle = yoast?.title || `${cat.name} Blogs & Guides | Inceptives Digital`
          const catDesc = yoast?.description || cat.description || defaultDesc
          const catCanonical = (yoast?.canonical || baseCanonical).replace(
            /^https?:\/\/nextincep\.wpenginepowered\.com/i,
            'https://inceptivesdigital.com'
          )
          const catOgImg = yoast?.og_image?.[0]?.url || defaultImage
          applySeo({
            title: catTitle,
            description: catDesc,
            canonical: catCanonical,
            ogImage: catOgImg,
          })
        })
        .catch(() => {})
    }

    return () => {
      active = false
      const robotsEl = document.querySelector('meta[name="robots"]')
      if (robotsEl) {
        robotsEl.setAttribute(
          'content',
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        )
      }
    }
  }, [currentPage, activeCategory])

  const updateParams = useCallback(
    (changes) => {
      const next = new URLSearchParams(searchParams)
      Object.entries(changes).forEach(([key, val]) => {
        if (val === null || val === undefined || val === '' || (key === 'blog_cat' && val === 'all') || (key === 'pagination_page' && Number(val) <= 1)) {
          next.delete(key)
        } else {
          next.set(key, String(val))
        }
      })
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  const handleCategoryChange = useCallback(
    (slug) => {
      updateParams({ blog_cat: slug, blog_search: '', pagination_page: 1 })
    },
    [updateParams]
  )

  const handleSearchSubmit = useCallback(
    (q) => {
      // Matches PHP snippet: global search clears selected category and resets to page 1
      updateParams({ blog_search: q, blog_cat: 'all', pagination_page: 1 })
    },
    [updateParams]
  )

  const handlePageChange = useCallback(
    (pageNum) => {
      updateParams({ pagination_page: pageNum })
      const target = document.getElementById('latest-blogs')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [updateParams]
  )

  return (
    <div className="bg-[#E9FCEF] text-[#111111] selection:bg-[#00CE44] selection:text-black">
      {/* 1. White Hero ("Insights That Shape the Future") */}
      <BlogsHero searchValue={searchQuery} onSearchSubmit={handleSearchSubmit} />

      {/* 2. Featured Guides (visible only on page 1 & when no search is active, matching WP snippet) */}
      {currentPage === 1 && !searchQuery && <FeaturedGuides />}

      {/* 3. Live WordPress REST API Blog Listing + Category Tabs + Pagination */}
      <BlogsGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onCategoryChange={handleCategoryChange}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
