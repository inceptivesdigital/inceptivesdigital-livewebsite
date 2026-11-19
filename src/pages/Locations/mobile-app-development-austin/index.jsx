import { useEffect } from 'react'
import AustinHero from './components/AustinHero'
import AustinClientLogos from './components/AustinClientLogos'
import AustinProductDecisions from './components/AustinProductDecisions'
import AustinIndustryLeader from './components/AustinIndustryLeader'
import AustinEngineeringExpertise from './components/AustinEngineeringExpertise'
import AustinServicesGrid from './components/AustinServicesGrid'
import AustinStatsBar from './components/AustinStatsBar'
import AustinIndustries from './components/AustinIndustries'
import AustinSmartFeatures from './components/AustinSmartFeatures'
import CaseStudies from '../../../components/CaseStudies'
import AustinAwards from './components/AustinAwards'
import Testimonials from '../../../components/Testimonials'
import AustinMidCTA from './components/AustinMidCTA'
import AustinProcess from './components/AustinProcess'
import AustinComplianceSecurity from './components/AustinComplianceSecurity'
import AustinTechStack from './components/AustinTechStack'
import AustinAdvancedTech from './components/AustinAdvancedTech'
import AustinTechEcosystems from './components/AustinTechEcosystems'
import AustinLocationMap from './components/AustinLocationMap'
import AustinMarketOpportunities from './components/AustinMarketOpportunities'
import AustinStartupsNationwide from './components/AustinStartupsNationwide'
import AustinHireDevelopers from './components/AustinHireDevelopers'
import AustinEngagementModels from './components/AustinEngagementModels'
import AustinCostSection from './components/AustinCostSection'
import AustinWhyChooseUs from './components/AustinWhyChooseUs'
import AustinComparisonTable from './components/AustinComparisonTable'
import AustinBottomCTA from './components/AustinBottomCTA'
import AustinFaqs from './components/AustinFaqs'

export default function MobileAppAustin() {
  useEffect(() => {
    const title = 'Mobile App Development Company in Austin, TX | iOS & Android'
    const description =
      'Inceptives Digital is a mobile app development company in Austin, TX, offering custom iOS, Android, and cross-platform app development services for businesses.'

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
      'https://inceptivesdigital.com/mobile-app-development-austin'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <AustinHero />

      {/* 2. Client Logos Marquee/Grid */}
      <AustinClientLogos />

      {/* 3. Product Strategy (Ideas Need Direction) */}
      <AustinProductDecisions />

      {/* 4. Industry-Leading Mobile App Development Company In Austin (300+ Apps, 36+ Industries, 98% Retained) */}
      <AustinIndustryLeader />

      {/* 5. Custom Mobile App Development With Project Accountability */}
      <AustinEngineeringExpertise />

      {/* 6. Mobile App Services for Startups and SMBs */}
      <AustinServicesGrid />

      {/* 7. Stats Bar */}
      <AustinStatsBar />

      {/* 8. Industries (10 Active Verticals) */}
      <AustinIndustries />

      {/* 9. Advanced Smart Features Built for Austin */}
      <AustinSmartFeatures />

      {/* 10. Production-Ready Portfolio / Case Studies (Same as Homepage) */}
      <CaseStudies />

      {/* 11. Awards & Recognitions Behind Our Expertise */}
      <AustinAwards />

      {/* 12. Client Testimonials (Same as Homepage) */}
      <Testimonials />

      {/* 13. Mid CTA Banner */}
      <AustinMidCTA />

      {/* 14. Mobile App Development Process Built Around Better Decisions */}
      <AustinProcess />

      {/* 15. Texas Privacy, Security & Compliance Requirements */}
      <AustinComplianceSecurity />

      {/* 16. Tech Stack for Austin Projects */}
      <AustinTechStack />

      {/* 17. AI, IoT & Emerging Technologies */}
      <AustinAdvancedTech />

      {/* 18. Technology Partners */}
      <AustinTechEcosystems />

      {/* 19. Austin Location Map (5900 Balcones Drive STE 100) */}
      <AustinLocationMap />

      {/* 20. Austin's Expanding Economy & Market Opportunities */}
      <AustinMarketOpportunities />

      {/* 21. From Austin Startups to Nationwide Mobile App Launches */}
      <AustinStartupsNationwide />

      {/* 22. Hire Mobile App Developers in Austin */}
      <AustinHireDevelopers />

      {/* 23. Engagement Models That Fit Your Team & Roadmap */}
      <AustinEngagementModels />

      {/* 24. How Much Does It Cost to Build a Mobile App in Austin? */}
      <AustinCostSection />

      {/* 25. What Sets Us Apart in Austin's Mobile App Landscape */}
      <AustinWhyChooseUs />

      {/* 26. Competitor Comparison Table */}
      <AustinComparisonTable />

      {/* 27. Bottom CTA */}
      <AustinBottomCTA />

      {/* 28. Austin FAQs Section */}
      <AustinFaqs />
    </div>
  )
}
