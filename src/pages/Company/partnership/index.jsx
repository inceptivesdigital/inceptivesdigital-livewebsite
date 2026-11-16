import { useEffect } from 'react'
import PartnershipHero from './components/PartnershipHero'
import PartnershipExecutionMetrics from './components/PartnershipExecutionMetrics'
import PartnershipWhyCollaborate from './components/PartnershipWhyCollaborate'
import PartnershipMidCta from './components/PartnershipMidCta'

export default function PartnershipPage() {
  useEffect(() => {
    const seoTitle = 'Digital Product Development Partnerships | Inceptives Digital'
    const seoDesc =
      'Partner with Inceptives Digital for white-label and co-build product engineering across mobile, web, backend, and AI-led client engagements.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/partnership')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section with Handshake Background */}
      <PartnershipHero />

      {/* 2. Execution Over Promises (4 Metrics Cards in 1 Row) */}
      <PartnershipExecutionMetrics />

      {/* 3. Why Collaborate With Inceptives Digital (5 Cards in 1 Row) */}
      <PartnershipWhyCollaborate />

      {/* 4. Waiting to Start a Partnership with You (CTA with 3D Puzzle Graphic & 2 Zero-Radius Buttons) */}
      <PartnershipMidCta />
    </div>
  )
}
