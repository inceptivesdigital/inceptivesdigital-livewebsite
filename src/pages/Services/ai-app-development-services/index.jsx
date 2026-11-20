import React, { useEffect } from 'react'
import AiAppHero from './components/AiAppHero'
import AiAppDifference from './components/AiAppDifference'
import AiAppServicesGrid from './components/AiAppServicesGrid'
import AiAppTypesGrid from './components/AiAppTypesGrid'
import AiAppIndustries from './components/AiAppIndustries'
import AiAppCaseStudies from './components/AiAppCaseStudies'
import AiAppTestimonials from './components/AiAppTestimonials'
import AiAppProcess from './components/AiAppProcess'
import AiAppTechStack from './components/AiAppTechStack'
import AiAppFaqs from './components/AiAppFaqs'
import AiAppClosingCta from './components/AiAppClosingCta'

export default function AiAppDevelopmentServicesPage() {
  useEffect(() => {
    const title = 'Artificial Intelligence App Development Services'
    const description =
      'AI app development services for scalable web and mobile products using machine learning, generative AI, NLP, and computer vision. Book a consultation.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el && selector.startsWith('meta[name=')) {
        el = document.createElement('meta')
        el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        document.head.appendChild(el)
      }
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta(
      'link[rel="canonical"]',
      'href',
      'https://nextincep.wpenginepowered.com/ai-app-development-services/'
    )

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-[#000000] text-white overflow-x-hidden">
      {/* Section 01 — Hero */}
      <AiAppHero />
      {/* Section 02 — The Difference Between AI That Assists and AI That Operates */}
      <AiAppDifference />
      {/* Section 03 — AI Services (9 Cards) */}
      <AiAppServicesGrid />
      {/* Section 04 — Types of AI Apps We Build (6 Cards) */}
      <AiAppTypesGrid />
      {/* Section 05 — Industries (7 Verticals + CTA) */}
      <AiAppIndustries />
      {/* Section 06 — Case Studies (Homepage 1400px Component) */}
      <AiAppCaseStudies />
      {/* Testimonials (Homepage Component) */}
      <AiAppTestimonials />
      {/* Section 07 — Process (Location Design, 5 Steps) */}
      <AiAppProcess />
      {/* Section 08 — Tech Stack (Two-Green-Panel, 4 Categories) */}
      <AiAppTechStack />
      {/* Section 09 — FAQs (Homepage Component, 8 Questions) */}
      <AiAppFaqs />
      {/* Section 10 — Closing CTA (Full-Width Section) */}
      <AiAppClosingCta />
    </main>
  )
}
