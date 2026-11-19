import { useEffect } from 'react'
import NYHero from './components/NYHero'
import NYClientLogos from './components/NYClientLogos'
import NYValueProp from './components/NYValueProp'
import NYServicesGrid from './components/NYServicesGrid'
import NYStatsBar from './components/NYStatsBar'
import NYIndustries from './components/NYIndustries'
import NYComplianceSecurity from './components/NYComplianceSecurity'
import NYSmartFeatures from './components/NYSmartFeatures'
import NYCaseStudies from './components/NYCaseStudies'
import NYAwards from './components/NYAwards'
import NYTestimonials from './components/NYTestimonials'
import NYMidCTA from './components/NYMidCTA'
import NYProcess from './components/NYProcess'
import NYTechStack from './components/NYTechStack'
import NYTechPartners from './components/NYTechPartners'
import NYAdvancedTech from './components/NYAdvancedTech'
import NYLocationMap from './components/NYLocationMap'
import NYCostSection from './components/NYCostSection'
import NYComparisonTable from './components/NYComparisonTable'
import NYWhyChooseUs from './components/NYWhyChooseUs'
import NYBottomCTA from './components/NYBottomCTA'
import NYFaqs from './components/NYFaqs'

export default function MobileAppNewYork() {
  useEffect(() => {
    const title = 'Mobile App Development Company in New York | Custom iOS & Android Apps'
    const description =
      'Mobile app development company in New York helping startups and businesses build iOS, Android, and AI-enabled products designed for long-term growth.'

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
      'https://inceptivesdigital.com/mobile-app-development-newyork'
    )
  }, [])

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero */}
      <NYHero />

      {/* 2. Client Logos */}
      <NYClientLogos />

      {/* 3. Value Proposition / Focused on Product Value */}
      <NYValueProp />

      {/* 4. Core Mobile App Services in New York */}
      <NYServicesGrid />

      {/* 5. Stats Bar */}
      <NYStatsBar />

      {/* 6. Industries for New York Core Business Sectors */}
      <NYIndustries />

      {/* 7. Security and Compliance in New York */}
      <NYComplianceSecurity />

      {/* 8. High-Impact Mobile App Features */}
      <NYSmartFeatures />

      {/* 9. Case Studies / Production-Ready Products */}
      <NYCaseStudies />

      {/* 10. Awards & Industry Recognition */}
      <NYAwards />

      {/* 11. Testimonials */}
      <NYTestimonials />

      {/* 12. Mid CTA Banner */}
      <NYMidCTA />

      {/* 13. Future-Ready Process */}
      <NYProcess />

      {/* 14. Technology Choices / Tech Stack */}
      <NYTechStack />

      {/* 15. Technology Partners */}
      <NYTechPartners />

      {/* 16. Emerging Technologies (AI, IoT, AR/VR, 5G, Blockchain, Cloud) */}
      <NYAdvancedTech />

      {/* 17. Location Map (Manhattan NoMad - 1178 Broadway) */}
      <NYLocationMap />

      {/* 18. NYC Cost Section & Hourly Developer Rates */}
      <NYCostSection />

      {/* 19. Competitor Comparison Table (Inceptives vs AI Builder vs Freelancer) */}
      <NYComparisonTable />

      {/* 20. Why New York Businesses Choose Us */}
      <NYWhyChooseUs />

      {/* 21. Bottom CTA (Statue of Liberty) */}
      <NYBottomCTA />

      {/* 22. FAQs */}
      <NYFaqs />
    </div>
  )
}
