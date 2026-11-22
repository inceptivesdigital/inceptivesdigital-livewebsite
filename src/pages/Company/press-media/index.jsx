import { useEffect } from 'react'
import PressHero from './components/PressHero'
import PressList from './components/PressList'

export default function PressMediaPage() {
  useEffect(() => {
    const seoTitle = 'Press Releases & Media | Inceptives Digital'
    const seoDesc =
      'Official updates covering company milestones, product launches, strategic partnerships, industry recognition, and business developments from Inceptives Digital.'

    document.title = seoTitle
    window.scrollTo(0, 0)

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/press-release')
  }, [])

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#00CE44] selection:text-black">
      {/* 1. Light Hero ("In the News") + Dark Media Logo Strip */}
      <PressHero />

      {/* 2. Live WordPress Press Releases Grid (Category ID 53) */}
      <PressList />
    </div>
  )
}
