import { useEffect } from 'react'
import DubaiHero from './components/DubaiHero'
import DubaiClientLogos from './components/DubaiClientLogos'
import DubaiValueProp from './components/DubaiValueProp'
import DubaiD33Agenda from './components/DubaiD33Agenda'
import DubaiServicesGrid from './components/DubaiServicesGrid'
import DubaiStatsBar from './components/DubaiStatsBar'
import DubaiIndustries from './components/DubaiIndustries'
import DubaiComplianceSecurity from './components/DubaiComplianceSecurity'
import DubaiSmartFeatures from './components/DubaiSmartFeatures'
import DubaiAwards from './components/DubaiAwards'
import DubaiCaseStudies from './components/DubaiCaseStudies'
import DubaiTestimonials from './components/DubaiTestimonials'
import DubaiMidCTA from './components/DubaiMidCTA'
import DubaiProcess from './components/DubaiProcess'
import DubaiTechStack from './components/DubaiTechStack'
import DubaiTechPartners from './components/DubaiTechPartners'
import DubaiAdvancedTech from './components/DubaiAdvancedTech'
import DubaiLocationMap from './components/DubaiLocationMap'
import DubaiOfficeMap from './components/DubaiOfficeMap'
import DubaiCostSection from './components/DubaiCostSection'
import DubaiEngagementModels from './components/DubaiEngagementModels'
import DubaiWhyChooseUs from './components/DubaiWhyChooseUs'
import DubaiBottomCTA from './components/DubaiBottomCTA'
import DubaiFaqs from './components/DubaiFaqs'

export default function MobileAppDubai() {
  useEffect(() => {
    document.title = 'Mobile App Development Company in Dubai | Inceptives Digital'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content =
      'Mobile app development in Dubai built for founders who expect speed and precision. iOS, Android, and cross-platform engineering from Inceptives Digital.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://inceptivesdigital.com/mobile-app-development-company-dubai-uae'

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#00CE44] selection:text-black">
      <DubaiHero />
      <DubaiClientLogos />
      <DubaiValueProp />
      <DubaiD33Agenda />
      <DubaiServicesGrid />
      <DubaiStatsBar />
      <DubaiIndustries />
      <DubaiComplianceSecurity />
      <DubaiSmartFeatures />
      <DubaiAwards />
      <DubaiCaseStudies />
      <DubaiTestimonials />
      <DubaiMidCTA />
      <DubaiProcess />
      <DubaiTechStack />
      <DubaiTechPartners />
      <DubaiAdvancedTech />
      <DubaiLocationMap />
      <DubaiOfficeMap />
      <DubaiCostSection />
      <DubaiEngagementModels />
      <DubaiWhyChooseUs />
      <DubaiBottomCTA />
      <DubaiFaqs />
    </main>
  )
}
