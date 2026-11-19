import { useEffect } from 'react'
import SingaporeHero from './components/SingaporeHero'
import SingaporeClientLogos from './components/SingaporeClientLogos'
import SingaporeValueProp from './components/SingaporeValueProp'
import SingaporeServicesGrid from './components/SingaporeServicesGrid'
import SingaporeStatsBar from './components/SingaporeStatsBar'
import SingaporeIndustries from './components/SingaporeIndustries'
import SingaporeComplianceSecurity from './components/SingaporeComplianceSecurity'
import SingaporeSmartFeatures from './components/SingaporeSmartFeatures'
import SingaporeCaseStudies from './components/SingaporeCaseStudies'
import SingaporeTestimonials from './components/SingaporeTestimonials'
import SingaporeAwards from './components/SingaporeAwards'
import SingaporeMidCTA from './components/SingaporeMidCTA'
import SingaporeProcess from './components/SingaporeProcess'
import SingaporeTechStack from './components/SingaporeTechStack'
import SingaporeTechPartners from './components/SingaporeTechPartners'
import SingaporeInfrastructure from './components/SingaporeInfrastructure'
import SingaporeAdvancedTech from './components/SingaporeAdvancedTech'
import SingaporeCostSection from './components/SingaporeCostSection'
import SingaporeWhyChooseUs from './components/SingaporeWhyChooseUs'
import SingaporeBottomCTA from './components/SingaporeBottomCTA'
import SingaporeFaqs from './components/SingaporeFaqs'

export default function MobileAppSingapore() {
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
      'https://inceptivesdigital.com/mobile-app-development-company-singapore'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <SingaporeHero />

      {/* 2. Client Logos */}
      <SingaporeClientLogos />

      {/* 3. Value Proposition */}
      <SingaporeValueProp />

      {/* 4. Core Services */}
      <SingaporeServicesGrid />

      {/* 5. Stats Bar */}
      <SingaporeStatsBar />

      {/* 6. Industry Verticals */}
      <SingaporeIndustries />

      {/* 7. Singapore Regulatory & Security Standards */}
      <SingaporeComplianceSecurity />

      {/* 8. Smart Features */}
      <SingaporeSmartFeatures />

      {/* 9. Featured Case Studies */}
      <SingaporeCaseStudies />

      {/* 10. Testimonials */}
      <SingaporeTestimonials />

      {/* 11. Industry Awards */}
      <SingaporeAwards />

      {/* 12. Mid CTA Banner */}
      <SingaporeMidCTA />

      {/* 13. 5-Step Process */}
      <SingaporeProcess />

      {/* 14. Technology Stack */}
      <SingaporeTechStack />

      {/* 15. Technology Partners */}
      <SingaporeTechPartners />

      {/* 16. Connected Singapore Infrastructure */}
      <SingaporeInfrastructure />

      {/* 17. AI & Emerging Technologies */}
      <SingaporeAdvancedTech />

      {/* 18. Investment & Cost Scopes */}
      <SingaporeCostSection />

      {/* 19. Why Choose Inceptives Digital */}
      <SingaporeWhyChooseUs />

      {/* 20. Bottom CTA */}
      <SingaporeBottomCTA />

      {/* 21. Frequently Asked Questions */}
      <SingaporeFaqs />
    </div>
  )
}
