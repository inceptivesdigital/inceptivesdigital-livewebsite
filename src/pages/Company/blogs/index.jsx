import { useEffect } from 'react'
import BlogsHero from './components/BlogsHero'
import BlogsGrid from './components/BlogsGrid'

export default function BlogsPage() {
  useEffect(() => {
    const seoTitle = 'Tech Blog & Insights | Inceptives Digital'
    const seoDesc =
      'Explore insights from Inceptives Digital on software development, mobile app architecture, AI solutions, and digital product strategies.'

    document.title = seoTitle

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', seoDesc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', seoTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', seoDesc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoDesc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/blog')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <BlogsHero />

      {/* 2. Blog Grid */}
      <BlogsGrid />
    </div>
  )
}
