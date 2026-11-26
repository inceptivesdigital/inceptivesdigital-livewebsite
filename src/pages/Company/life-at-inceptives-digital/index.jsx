import { useEffect } from 'react'
import LifeHero from './components/LifeHero'
import LifePrinciplesGrid from './components/LifePrinciplesGrid'
import LifeBottomCta from './components/LifeBottomCta'

export default function LifeAtInceptivesPage() {
  useEffect(() => {
    const seoTitle = 'Life at Inceptives Digital | Culture, People & Careers'
    const seoDesc =
      'What makes people stay at Inceptives Digital? Explore our day-to-day culture, team events, amenities, diversity, and career growth.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/life-at-inceptives-digital')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section: Work That Builds People and Products */}
      <LifeHero />

      {/* 2-5. Culture Principles, Growth Begins Before The Next Title, Focus Without Pressure, Shared Work */}
      <LifePrinciplesGrid />

      {/* 6. Responsibility Creates Room to Grow */}
      <LifeBottomCta />
    </div>
  )
}
