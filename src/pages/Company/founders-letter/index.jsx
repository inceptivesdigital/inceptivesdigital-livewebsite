import { useEffect } from 'react'
import FoundersHero from './components/FoundersHero'
import FoundersLetterBody from './components/FoundersLetterBody'
import FoundersRoadmapCTA from './components/FoundersRoadmapCTA'
import FoundersConsultation from './components/FoundersConsultation'

export default function FoundersLetterPage() {
  useEffect(() => {
    const seoTitle = "Founder's Letter | Inceptives Digital"
    const seoDesc =
      'The company should never depend on one important person. Hannan Shahnoor shares the principles that guide Inceptives Digital, from distributed decision-making to building enduring software products.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/founders-letter')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section with Emerald Aura & Circular Portrait */}
      <FoundersHero />

      {/* 2. Complete 9-Section Letter Body with Emerald Headings */}
      <FoundersLetterBody />

      {/* 3. Pre-CTA Roadmap Banner */}
      <FoundersRoadmapCTA />

      {/* 4. Consultation & Brief Contact Form */}
      <FoundersConsultation />
    </div>
  )
}
