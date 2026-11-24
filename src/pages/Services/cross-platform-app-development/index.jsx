import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import crossPlatformSchema from '../../../schemas/cross-platform-app-development.json'
import CrossPlatformHero from './components/CrossPlatformHero'
import CrossPlatformAwards from './components/CrossPlatformAwards'
import CrossPlatformAdvantages from './components/CrossPlatformAdvantages'
import CrossPlatformBenchmark from './components/CrossPlatformBenchmark'
import CrossPlatformNativeVsCross from './components/CrossPlatformNativeVsCross'
import CrossPlatformServicesGrid from './components/CrossPlatformServicesGrid'
import CrossPlatformFrameworks from './components/CrossPlatformFrameworks'
import CrossPlatformIndustries from './components/CrossPlatformIndustries'
import CrossPlatformCaseStudies from './components/CrossPlatformCaseStudies'
import CrossPlatformTestimonials from './components/CrossPlatformTestimonials'
import CrossPlatformWhyChooseUs from './components/CrossPlatformWhyChooseUs'
import CrossPlatformTechStack from './components/CrossPlatformTechStack'
import CrossPlatformTechPartnerships from './components/CrossPlatformTechPartnerships'
import CrossPlatformEmergingTech from './components/CrossPlatformEmergingTech'
import CrossPlatformProcess from './components/CrossPlatformProcess'
import CrossPlatformCostSection from './components/CrossPlatformCostSection'
import CrossPlatformLocations from './components/CrossPlatformLocations'
import CrossPlatformFAQs from './components/CrossPlatformFAQs'

export default function CrossPlatformAppDevelopmentPage() {
  useJsonLdSchema(crossPlatformSchema, 'schema-cross-platform-app-development')
  useEffect(() => {
    const seoTitle = 'Cross-Platform App Development Company USA | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is a cross-platform app development company in the USA, building Flutter and React Native apps for iOS and Android from one codebase.'

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

      {/* 2. Awards & Recognition */}
      <CrossPlatformAwards />

      {/* 3. Advantages / Why Growing Businesses Begin (New Section) */}
      <CrossPlatformAdvantages />

      {/* 4. Benchmark / Market Move */}
      <CrossPlatformBenchmark />

      {/* 5. Native vs Cross-Platform Guide (New Section) */}
      <CrossPlatformNativeVsCross />

      {/* 6. Comprehensive Services Grid + Mid CTA */}
      <CrossPlatformServicesGrid />

      {/* 7. Frameworks Behind Every Cross-Platform App */}
      <CrossPlatformFrameworks />

      {/* 8. Industries (20+ Market Sectors) */}
      <CrossPlatformIndustries />

      {/* 9. Case Studies */}
      <CrossPlatformCaseStudies />

      {/* 10. Testimonials */}
      <CrossPlatformTestimonials />

      {/* 11. Why Choose Us + CTA Banner */}
      <CrossPlatformWhyChooseUs />

      {/* 12. Tech Stack */}
      <CrossPlatformTechStack />

      {/* 13. Technology Partnerships (New Section) */}
      <CrossPlatformTechPartnerships />

      {/* 14. Emerging Technologies */}
      <CrossPlatformEmergingTech />

      {/* 15. Process (5 Steps) */}
      <CrossPlatformProcess />

      {/* 16. Cost Section & Cost Estimate CTA */}
      <CrossPlatformCostSection />

      {/* 17. Locations Section (Where Our Teams Work) */}
      <CrossPlatformLocations />

      {/* 18. FAQs */}
      <CrossPlatformFAQs />
    </div>
  )
}
