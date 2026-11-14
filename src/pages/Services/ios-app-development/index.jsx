import { useEffect } from 'react'
import IosHero from './components/IosHero'
import IosTrustedLogos from './components/IosTrustedLogos'
import IosEngineeringStandard from './components/IosEngineeringStandard'
import IosServicesGrid from './components/IosServicesGrid'
import IosAppleEcosystem from './components/IosAppleEcosystem'
import IosMidCTA from './components/IosMidCTA'
import IosIndustries from './components/IosIndustries'
import IosArchitectureQuiz from './components/IosArchitectureQuiz'
import IosCaseStudies from './components/IosCaseStudies'
import IosTestimonials from './components/IosTestimonials'
import IosAchievements from './components/IosAchievements'
import IosBriefCTA from './components/IosBriefCTA'
import IosWhyChooseUs from './components/IosWhyChooseUs'
import IosGlobalLocations from './components/IosGlobalLocations'
import IosDevelopmentProcess from './components/IosDevelopmentProcess'
import IosTechStackTable from './components/IosTechStackTable'
import IosArchitectureCards from './components/IosArchitectureCards'
import IosTechPartnerships from './components/IosTechPartnerships'
import IosAdvancedTech from './components/IosAdvancedTech'
import IosEngagementModels from './components/IosEngagementModels'
import IosFeatureHoursTable from './components/IosFeatureHoursTable'
import IosCostSection from './components/IosCostSection'
import IosQuoteCTA from './components/IosQuoteCTA'
import IosFAQs from './components/IosFAQs'

export default function IosAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'iOS App Development Company in the USA | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is an iOS app development company in USA delivering custom iPhone apps, Swift engineering, App Store deployment, and post-launch support.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ios-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <IosHero />

      {/* 2. Trusted by Global Innovators */}
      <IosTrustedLogos />

      {/* 3. Custom iOS App Development Services Backed by a Proven Engineering Standard */}
      <IosEngineeringStandard />

      {/* 4. Our End-to-End iOS Application Development Services (6 cards) */}
      <IosServicesGrid />

      {/* 5. One Shared Codebase. Built for Every Apple Device Your Customers Use (5 cards) */}
      <IosAppleEcosystem />

      {/* 6. The Best iPhone Application Your Business Deserves is Developed Here. (CTA) */}
      <IosMidCTA />

      {/* 7. iOS App Development Solutions Across 20+ Industries (8 cards) */}
      <IosIndustries />

      {/* 8. Make a 60-Second Architecture Decision (Interactive 4-Question Quiz + Lead Form + Results) */}
      <IosArchitectureQuiz />

      {/* 9. Explore the iOS Applications We've Taken to Market (5 Case Studies Carousel) */}
      <IosCaseStudies />

      {/* 10. What Clients Say About Inceptives Digital’s iOS App Development Services */}
      <IosTestimonials />

      {/* 11. Inceptives Digital’s Achievements (4 Awards + Recognitions) */}
      <IosAchievements />

      {/* 12. Bring Your Brief. We'll Put a Scope Behind It. (CTA) */}
      <IosBriefCTA />

      {/* 13. The Standard That Makes Inceptives Digital a Top iOS App Development Company + Proof Metrics Row */}
      <IosWhyChooseUs />

      {/* 14. Meet the Dedicated iOS Engineering Team Serving Across 7 Global Tech Hubs */}
      <IosGlobalLocations />

      {/* 15. Our iOS Application Development Services Process, Step by Step (5 Stages) */}
      <IosDevelopmentProcess />

      {/* 16. Technologies Behind Our Native iOS App Development Services (10-Row Table) */}
      <IosTechStackTable />

      {/* 17. How We Architect Native iPhone and iOS Applications (4 Numbered Cards) */}
      <IosArchitectureCards />

      {/* 18. Technology Partnerships That Strengthen Every Digital Product (12 Partner Logos) */}
      <IosTechPartnerships />

      {/* 19. Advanced Technologies Powering Our iOS App Development Services (6 Cards) */}
      <IosAdvancedTech />

      {/* 20. Hire iOS App Developers with an Engagement Model That Fits Your Project (4 Cards) */}
      <IosEngagementModels />

      {/* 21. How Many Hours Does Each iOS Feature Take to Build (12-Row Table) */}
      <IosFeatureHoursTable />

      {/* 22. How Much Does iOS App Development Cost? (3 Tier Cards) */}
      <IosCostSection />

      {/* 23. Price Your Next iPhone App With Our Development Team (CTA) */}
      <IosQuoteCTA />

      {/* 24. Frequently Asked Questions About iOS App Development (13 FAQs) */}
      <IosFAQs />
    </div>
  )
}
