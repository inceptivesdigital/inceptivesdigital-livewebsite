import { useEffect } from 'react'
import CompanyHero from './components/CompanyHero'
import CompanyClientLogos from './components/CompanyClientLogos'
import CompanyMindset from './components/CompanyMindset'
import CompanyRatingsBar from './components/CompanyRatingsBar'
import CompanyValues from './components/CompanyValues'
import CompanyCeoQuote from './components/CompanyCeoQuote'
import CompanyRecognition from './components/CompanyRecognition'
import CompanyTestimonials from './components/CompanyTestimonials'
import CompanyTechPartners from './components/CompanyTechPartners'
import CompanyCtaBanner from './components/CompanyCtaBanner'
import CompanyFaqs from './components/CompanyFaqs'

export default function CompanyPage() {
  useEffect(() => {
    const seoTitle = 'About Us | Building Digital Products With a Futuristic Approach — Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is a digital product studio that combines strategy, design, engineering, and AI to solve real business problems today. Meet our leadership, our journey, and our values.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/about-us')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section with Video Loop & Stats */}
      <CompanyHero />

      {/* 2. Client Logos Slideshow & Recognition Ribbon */}
      <CompanyClientLogos />

      {/* 3. Inceptives Digital Mindset: Mission, Vision & Philosophy */}
      <CompanyMindset />

      {/* 4. Clutch, Bark, Trustpilot Ratings & Verification Bar */}
      <CompanyRatingsBar />

      {/* 6. Our Values: The Principles We Never Compromise On (5 Cards) */}
      <CompanyValues />

      {/* 7. CEO Quote Section */}
      <CompanyCeoQuote />

      {/* 8. Recognition Badges (Monochromatic to Color on Hover) */}
      <CompanyRecognition />

      {/* 9. Testimonials: Client-written and Client Video Reels */}
      <CompanyTestimonials />

      {/* 10. Partnered with Technology Leaders (Moving Stripes) */}
      <CompanyTechPartners />

      {/* 13. Pre-FAQ Bottom CTA Banner */}
      <CompanyCtaBanner />

      {/* 14. Frequently Asked Questions (10 Accordions) */}
      <CompanyFaqs />
    </div>
  )
}
