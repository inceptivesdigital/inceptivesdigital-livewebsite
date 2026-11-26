import { useEffect } from 'react'
import SFHero from './components/SFHero'
import SFClientLogos from './components/SFClientLogos'
import SFProductDecisions from './components/SFProductDecisions'
import SFServicesGrid from './components/SFServicesGrid'
import SFStageSolutions from './components/SFStageSolutions'
import SFMarketForecast from './components/SFMarketForecast'
import SFIndustries from './components/SFIndustries'
import SFSmartFeatures from './components/SFSmartFeatures'
import SFEngineeringExpertise from './components/SFEngineeringExpertise'
import SFStatsBar from './components/SFStatsBar'
import SFCaseStudies from './components/SFCaseStudies'
import SFTestimonials from './components/SFTestimonials'
import SFAwards from './components/SFAwards'
import SFMidCTA from './components/SFMidCTA'
import SFProcess from './components/SFProcess'
import SFTechStack from './components/SFTechStack'
import SFTechEcosystems from './components/SFTechEcosystems'
import SFAdvancedTech from './components/SFAdvancedTech'
import SFComplianceSecurity from './components/SFComplianceSecurity'
import SFDevelopersNearMe from './components/SFDevelopersNearMe'
import SFLocationMap from './components/SFLocationMap'
import SFCostSection from './components/SFCostSection'
import SFCostFactors from './components/SFCostFactors'
import SFWhyChooseUs from './components/SFWhyChooseUs'
import SFComparisonTable from './components/SFComparisonTable'
import SFBottomCTA from './components/SFBottomCTA'
import SFFaqs from './components/SFFaqs'

export default function MobileAppSanFrancisco() {
  useEffect(() => {
    const title = 'Mobile App Development Company in San Francisco, CA'
    const description =
      'Mobile app development company in San Francisco building iOS, Android, and AI-enabled apps. Fixed-cost estimates from $25,000. Book a strategy call.'

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
      'https://inceptivesdigital.com/mobile-app-development-san-francisco'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white">
      {/* 1. Hero */}
      <SFHero />

      {/* 2. Client Logos Marquee/Grid */}
      <SFClientLogos />

      {/* 3. Product Strategy for SF Businesses */}
      <SFProductDecisions />

      {/* 4. Services Grid (8 Cards) */}
      <SFServicesGrid />

      {/* 5. Custom Solutions for Startups & Enterprises */}
      <SFStageSolutions />

      {/* 6. Market Forecast ($777.4B by 2032) */}
      <SFMarketForecast />

      {/* 7. Industries (20+ Industries) */}
      <SFIndustries />

      {/* 8. Smart Features */}
      <SFSmartFeatures />

      {/* 9. Engineering Expertise for SF Businesses */}
      <SFEngineeringExpertise />

      {/* 10. Stats Bar (Apps Launched, Active Developers, etc.) */}
      <SFStatsBar />

      {/* 11. Case Studies Slider */}
      <SFCaseStudies />

      {/* 12. Testimonials */}
      <SFTestimonials />

      {/* 13. Awards & Recognitions Across US */}
      <SFAwards />

      {/* 14. Mid CTA (Building the Next Product in SF?) */}
      <SFMidCTA />

      {/* 15. Structured Approach Process Section */}
      <SFProcess />

      {/* 16. Production-Ready Tech Stack */}
      <SFTechStack />

      {/* 17. Leading Tech Ecosystems & Partnerships */}
      <SFTechEcosystems />

      {/* 18. Advanced Engineering Capabilities */}
      <SFAdvancedTech />

      {/* 19. California Compliance & Security Standards */}
      <SFComplianceSecurity />

      {/* 20. App Developers Near Me (SF & Bay Area) */}
      <SFDevelopersNearMe />

      {/* 21. Union Square Location Map */}
      <SFLocationMap />

      {/* 22. Cost Breakdown (Foundation, Advanced, Enterprise) */}
      <SFCostSection />

      {/* 23. What Influences Development Costs (8 Factors) */}
      <SFCostFactors />

      {/* 24. Why Build With Inceptives Digital */}
      <SFWhyChooseUs />

      {/* 25. Competitor Comparison Table */}
      <SFComparisonTable />

      {/* 26. Bottom CTA (Validate Your Mobile App) */}
      <SFBottomCTA />

      {/* 27. FAQs Section */}
      <SFFaqs />
    </div>
  )
}
