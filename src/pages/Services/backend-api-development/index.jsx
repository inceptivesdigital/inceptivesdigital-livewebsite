import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import backendApiSchema from '../../../schemas/backend-api-development.json'
import BackendHero from './components/BackendHero'
import BackendTrustedLogos from './components/BackendTrustedLogos'
import BackendArchitectureOutcomes from './components/BackendArchitectureOutcomes'
import BackendChallenges from './components/BackendChallenges'
import BackendServicesGrid from './components/BackendServicesGrid'
import BackendStatsBar from './components/BackendStatsBar'
import BackendIndustries from './components/BackendIndustries'
import BackendCaseStudies from './components/BackendCaseStudies'
import BackendTestimonials from './components/BackendTestimonials'
import BackendWhyChooseUs from './components/BackendWhyChooseUs'
import BackendProcess from './components/BackendProcess'
import BackendTechStack from './components/BackendTechStack'
import BackendAdvancedCapabilities from './components/BackendAdvancedCapabilities'
import BackendCostSection from './components/BackendCostSection'
import BackendFAQs from './components/BackendFAQs'

export default function BackendApiDevelopmentPage() {
  useJsonLdSchema(backendApiSchema, 'schema-backend-api-development')
  useEffect(() => {
    const seoTitle = 'Backend & API Development Services | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital delivers backend & API development services built for scale, security, and long-term performance. Partner with engineers who build scalable systems.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/backend-api-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <BackendHero />

      {/* 2. Trusted Engineering Partner for 70+ Digital Products */}
      <BackendTrustedLogos />

      {/* 3. Backend Architecture Decides Business Outcomes */}
      <BackendArchitectureOutcomes />

      {/* 4. Backend Challenges That Stall Scaling Products */}
      <BackendChallenges />

      {/* 5. Comprehensive Backend & API Solutions Built Around Your Product */}
      <BackendServicesGrid />

      {/* 6. Stats & Mid CTA */}
      <BackendStatsBar />

      {/* 7. Industries We Engineer Backends For */}
      <BackendIndustries />

      {/* 8. Case Studies */}
      <BackendCaseStudies />

      {/* 9. Testimonials */}
      <BackendTestimonials />

      {/* 10. Why Choose Inceptives Digital */}
      <BackendWhyChooseUs />

      {/* 11. Backend Engineering Process */}
      <BackendProcess />

      {/* 12. Production-Proven Technologies for Modern Software */}
      <BackendTechStack />

      {/* 13. Advanced Backend Capabilities for Intelligent Digital Products */}
      <BackendAdvancedCapabilities />

      {/* 14. Flexible Pricing Models & Bottom CTA */}
      <BackendCostSection />

      {/* 15. FAQs */}
      <BackendFAQs />
    </div>
  )
}
