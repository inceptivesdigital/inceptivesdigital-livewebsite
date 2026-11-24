import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import mobileAppSchema from '../../../schemas/mobile-app-development.json'
import MobileHero from './components/MobileHero'
import MobileMarquee from './components/MobileMarquee'
import CustomMobileServices from './components/CustomMobileServices'
import StatsCounterBar from './components/StatsCounterBar'
import DoublePhoneCTA from './components/DoublePhoneCTA'
import IndustriesMobile from './components/IndustriesMobile'
import SimilarProjectCTA from './components/SimilarProjectCTA'
import ProductModelsSection from './components/ProductModelsSection'
import ProposalCTA from './components/ProposalCTA'
import SmartCapabilities from './components/SmartCapabilities'
import MobileCaseStudies from './components/MobileCaseStudies'
import MobileTestimonials from './components/MobileTestimonials'
import WhyChooseUs from './components/WhyChooseUs'
import DevelopmentProcess from './components/DevelopmentProcess'
import TechStackTabs from './components/TechStackTabs'
import NextGenTech from './components/NextGenTech'
import MarketStatBanner from './components/MarketStatBanner'
import CostTimelineSection from './components/CostTimelineSection'
import USLocationsSection from './components/USLocationsSection'
import AwardsRecognitions from './components/AwardsRecognitions'
import MobileFAQs from './components/MobileFAQs'

export default function MobileAppDevelopmentPage() {
  useJsonLdSchema(mobileAppSchema, 'schema-mobile-app-development')
  useEffect(() => {
    const seoTitle = 'Custom Mobile App Development Services | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital provides custom mobile app development services in the USA, covering native iOS, Android, and cross-platform applications.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/mobile-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section (Image 1) */}
      <MobileHero />

      {/* 2. Trusted Brand Icons Row (Image 2) */}
      <MobileMarquee />

      {/* 3. Custom Mobile App Development Services Built Around Your Product (Image 3) */}
      <CustomMobileServices />

      {/* 4. Stats Counter Bar (Image 4) */}
      <StatsCounterBar />

      {/* 5. Double Phone CTA Banner (Image 5) */}
      <DoublePhoneCTA />

      {/* 9. From Idea to Launch: Custom Apps We’ve Built Carousel (Image 9) */}
      <MobileCaseStudies />

      {/* Similar Project CTA Banner */}
      <SimilarProjectCTA />

      {/* 6. Custom Mobile Apps for 20+ Industries (Image 6) */}
      <IndustriesMobile />

      {/* 15. $626B Market Opportunity & Bar Chart (Image 15) */}
      <MarketStatBanner />

      {/* 7. Pick Your Model. We Build the Custom Mobile App Around It. (Image 7) */}
      <ProductModelsSection />

      {/* Development Proposal CTA Banner */}
      <ProposalCTA />

      {/* 8. The Capabilities Inside Our Custom Mobile Apps (Image 8) */}
      <SmartCapabilities />


     

      {/* 11. Why Businesses Choose Inceptives Digital (Image 11) */}
      <WhyChooseUs />

 {/* 10. Client Testimonials (Image 10) */}
      <MobileTestimonials />


         {/* 18. Awards & Recognitions */}
      <AwardsRecognitions />




      {/* 12. Our Mobile App Development Process (Image 12) */}
      <DevelopmentProcess />

      {/* 13. Tech Stack Powering Our Services - Solid Green Panels (Image 13) */}
      <TechStackTabs />

      {/* 14. Future-Ready Custom Mobile Apps - Emerging Tech (Image 14) */}
      <NextGenTech />



      {/* 16. Custom Mobile App Development Cost & Timeline */}
      <CostTimelineSection />

      {/* 17. Connect With Our US Developers */}
      <USLocationsSection />

   
      {/* 19. Custom Mobile App Development FAQs */}
      <MobileFAQs />

      {/* 20. Ready to Launch Your App? Contact Us Form CTA */}
    </div>
  )
}
