import { useEffect } from 'react'
import TorontoHero from './components/TorontoHero'
import TorontoClientLogos from './components/TorontoClientLogos'
import TorontoValueProp from './components/TorontoValueProp'
import TorontoServicesGrid from './components/TorontoServicesGrid'
import TorontoAwards from './components/TorontoAwards'
import TorontoStatsBar from './components/TorontoStatsBar'
import TorontoIndustries from './components/TorontoIndustries'
import TorontoComplianceSecurity from './components/TorontoComplianceSecurity'
import TorontoSmartFeatures from './components/TorontoSmartFeatures'
import TorontoCaseStudies from './components/TorontoCaseStudies'
import TorontoTestimonials from './components/TorontoTestimonials'
import TorontoProcessCTA from './components/TorontoProcessCTA'
import TorontoProcess from './components/TorontoProcess'
import TorontoTechStack from './components/TorontoTechStack'
import TorontoTechPartners from './components/TorontoTechPartners'
import TorontoAdvancedTech from './components/TorontoAdvancedTech'
import TorontoLocationMap from './components/TorontoLocationMap'
import TorontoCostSection from './components/TorontoCostSection'
import TorontoEngagementModels from './components/TorontoEngagementModels'
import TorontoWhyChooseUs from './components/TorontoWhyChooseUs'
import TorontoBottomCTA from './components/TorontoBottomCTA'
import TorontoFaqs from './components/TorontoFaqs'

export default function MobileAppToronto() {
  useEffect(() => {
    const title = 'Mobile App Development Company Toronto'
    const description =
      'Partner with a Toronto mobile app development company for product strategy, UI/UX design, iOS and Android development, AI integration, and scalable engineering.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
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
      'https://inceptivesdigital.com/mobile-apps-development-company-in-toronto-canada'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <TorontoHero />

      {/* 2. Client Logos */}
      <TorontoClientLogos />

      {/* 3. Built for Toronto's Innovation Economy */}
      <TorontoValueProp />

      {/* 4. 9 Core Mobile App Services in Toronto */}
      <TorontoServicesGrid />

      {/* 5. Industry Awards (5 Clutch Awards) */}
      <TorontoAwards />

      {/* 6. Stats Bar */}
      <TorontoStatsBar />

      {/* 7. Industries (9 Verticals) */}
      <TorontoIndustries />

      {/* 8. Canadian & Ontario Legal Standards (PIPEDA, PHIPA, AODA, CASL, RPAA, FINTRAC) */}
      <TorontoComplianceSecurity />

      {/* 9. Practical Features That Solve Toronto User Problems */}
      <TorontoSmartFeatures />

      {/* 10. Featured Mobile Applications (Homepage CaseStudies Layout) */}
      <TorontoCaseStudies />

      {/* 11. Testimonials */}
      <TorontoTestimonials />

      {/* 12. Mid CTA Banner */}
      <TorontoProcessCTA />

      {/* 13. 6-Step Mobile App Development Process */}
      <TorontoProcess />

      {/* 14. Technology Stack */}
      <TorontoTechStack />

      {/* 15. 16 Technology Partners */}
      <TorontoTechPartners />

      {/* 16. Emerging Technologies (5 Cards) */}
      <TorontoAdvancedTech />

      {/* 17. Toronto Location Map (2482 Yonge Street) */}
      <TorontoLocationMap />

      {/* 18. Cost Section & Cost Drivers Table */}
      <TorontoCostSection />

      {/* 19. Flexible Engagement Models (3 Cards) */}
      <TorontoEngagementModels />

      {/* 20. Why Businesses in Toronto Choose Us */}
      <TorontoWhyChooseUs />

      {/* 21. Bottom CTA */}
      <TorontoBottomCTA />

      {/* 22. 17 FAQs */}
      <TorontoFaqs />
    </div>
  )
}
