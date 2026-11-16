import { useEffect } from 'react'
import CrossPlatformHero from './components/CrossPlatformHero'
import CrossPlatformTrustedLogos from './components/CrossPlatformTrustedLogos'
import CrossPlatformBenchmark from './components/CrossPlatformBenchmark'
import CrossPlatformServicesGrid from './components/CrossPlatformServicesGrid'
import CrossPlatformStatsBar from './components/CrossPlatformStatsBar'
import CrossPlatformIndustries from './components/CrossPlatformIndustries'
import CrossPlatformCaseStudies from './components/CrossPlatformCaseStudies'
import CrossPlatformTestimonials from './components/CrossPlatformTestimonials'
import CrossPlatformWhyChooseUs from './components/CrossPlatformWhyChooseUs'
import CrossPlatformProcess from './components/CrossPlatformProcess'
import CrossPlatformTechStack from './components/CrossPlatformTechStack'
import CrossPlatformEmergingTech from './components/CrossPlatformEmergingTech'
import CrossPlatformCostSection from './components/CrossPlatformCostSection'
import CrossPlatformFAQs from './components/CrossPlatformFAQs'

export default function CrossPlatformAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Cross-Platform App Development Company | Inceptives Digital'
    const seoDesc =
      'Top-rated cross-platform app development company building scalable apps for iOS and Android across 20+ industries, driving sustainable growth.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/cross-platform-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <CrossPlatformHero />

      {/* 2. Trusted By Clients */}
      <CrossPlatformTrustedLogos />

      {/* 3. Benchmark / Market Move */}
      <CrossPlatformBenchmark />

      {/* 4. Comprehensive Services Grid */}
      <CrossPlatformServicesGrid />

      {/* 5. Stats & Mid CTA */}
      <CrossPlatformStatsBar />

      {/* 6. Industries */}
      <CrossPlatformIndustries />

      {/* 7. Case Studies */}
      <CrossPlatformCaseStudies />

      {/* 8. Testimonials */}
      <CrossPlatformTestimonials />

      {/* 9. Why Choose Us */}
      <CrossPlatformWhyChooseUs />

      {/* 10. Process (5 Steps) */}
      <CrossPlatformProcess />

      {/* 11. Tech Stack */}
      <CrossPlatformTechStack />

      {/* 12. Emerging Technologies */}
      <CrossPlatformEmergingTech />

      {/* 13. Cost Section & Bottom CTA */}
      <CrossPlatformCostSection />

      {/* 14. FAQs */}
      <CrossPlatformFAQs />
    </div>
  )
}
