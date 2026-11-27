import { useEffect } from 'react'
import LondonHero from './components/LondonHero'
import LondonClientLogos from './components/LondonClientLogos'
import LondonValueProp from './components/LondonValueProp'
import LondonServicesGrid from './components/LondonServicesGrid'
import LondonStatsBar from './components/LondonStatsBar'
import LondonIndustries from './components/LondonIndustries'
import LondonComplianceSecurity from './components/LondonComplianceSecurity'
import LondonSmartFeatures from './components/LondonSmartFeatures'
import LondonAwardsCapabilities from './components/LondonAwardsCapabilities'
import LondonCaseStudies from './components/LondonCaseStudies'
import LondonTestimonials from './components/LondonTestimonials'
import LondonMidCTA from './components/LondonMidCTA'
import LondonProcess from './components/LondonProcess'
import LondonTechStack from './components/LondonTechStack'
import LondonTechPartners from './components/LondonTechPartners'
import LondonAdvancedTech from './components/LondonAdvancedTech'
import LondonLocationMap from './components/LondonLocationMap'
import LondonCostSection from './components/LondonCostSection'
import LondonEngagementModels from './components/LondonEngagementModels'
import LondonWhyChooseUs from './components/LondonWhyChooseUs'
import LondonBottomCTA from './components/LondonBottomCTA'
import LondonFaqs from './components/LondonFaqs'

export default function MobileAppLondon() {
  useEffect(() => {
    const title = 'Mobile App Development Company in Singapore | Inceptives Digital'
    const description =
      'Inceptives Digital is a mobile app development company in Singapore building iOS, Android, and AI-powered apps for startups and SMB teams across Southeast Asia.'

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
      'https://inceptivesdigital.com/mobile-app-development-company-london-uk'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <LondonHero />

      {/* 2. Client Logos */}
      <LondonClientLogos />

      {/* 3. Engineered for London's Global Tech Stage */}
      <LondonValueProp />

      {/* 4. 8 Core Mobile App Services in London */}
      <LondonServicesGrid />

      {/* 5. Stats Bar */}
      <LondonStatsBar />

      {/* 6. 20+ Industries (9 Verticals) */}
      <LondonIndustries />

      {/* 7. UK Mobile App Compliance, Security & Regulatory Requirements */}
      <LondonComplianceSecurity />

      {/* 8. Mobile App Features Built for London's Dynamic Users */}
      <LondonSmartFeatures />

      {/* 9. Recognised Expertise (Awards Left & Capabilities Right) */}
      <LondonAwardsCapabilities />

      {/* 10. Recent Work (Homepage CaseStudies Layout) */}
      <LondonCaseStudies />

      {/* 11. Testimonials */}
      <LondonTestimonials />

      {/* 12. Mid CTA Banner */}
      <LondonMidCTA />

      {/* 13. 6-Step Approach */}
      <LondonProcess />

      {/* 14. Tech Stack */}
      <LondonTechStack />

      {/* 15. Strategic Technology Partnerships */}
      <LondonTechPartners />

      {/* 16. Emerging Technologies (5 Cards) */}
      <LondonAdvancedTech />

      {/* 17. London Location Map (275 New North Road, Islington) */}
      <LondonLocationMap />

      {/* 18. Cost Section & Cost Drivers Table */}
      <LondonCostSection />

      {/* 19. Flexible Engagement Models (5 Cards) */}
      <LondonEngagementModels />

      {/* 20. Why Build With Us in London */}
      <LondonWhyChooseUs />

      {/* 21. Bottom CTA */}
      <LondonBottomCTA />

      {/* 22. 12 FAQs */}
      <LondonFaqs />
    </div>
  )
}
