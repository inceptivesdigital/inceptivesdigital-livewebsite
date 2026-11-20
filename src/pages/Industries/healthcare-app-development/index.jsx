import { useEffect } from 'react'
import HealthcareHero from './components/HealthcareHero'
import HealthcareStatsBar from './components/HealthcareStatsBar'
import HealthcareServicesGrid from './components/HealthcareServicesGrid'
import HealthcareClientLogos from './components/HealthcareClientLogos'
import HealthcareCta1 from './components/HealthcareCta1'
import HealthcareCompliance from './components/HealthcareCompliance'
import HealthcareFeatures from './components/HealthcareFeatures'
import HealthcareCaseStudies from './components/HealthcareCaseStudies'
import HealthcareTestimonials from './components/HealthcareTestimonials'
import HealthcareSectors from './components/HealthcareSectors'
import HealthcareProcess from './components/HealthcareProcess'
import HealthcareTechStack from './components/HealthcareTechStack'
import HealthcareEmergingTech from './components/HealthcareEmergingTech'
import HealthcareCta2 from './components/HealthcareCta2'
import HealthcareCostSection from './components/HealthcareCostSection'
import HealthcareWhyChooseUs from './components/HealthcareWhyChooseUs'
import HealthcareCta3 from './components/HealthcareCta3'
import HealthcareAwards from './components/HealthcareAwards'
import HealthcareFaqs from './components/HealthcareFaqs'

export default function HealthcareAppDevelopmentPage() {
  useEffect(() => {
    document.title = 'Healthcare App Development Company | Inceptives Digital'
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Leading healthcare app development company offering custom healthcare app development services to enhance efficiency and patient care.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://inceptivesdigital.com/healthcare-app-development'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      {/* Section 0: Hero */}
      <HealthcareHero />

      {/* Section 1: Stats Counter Bar */}
      <HealthcareStatsBar />

      {/* Section 2: Core Healthcare Services (9 Cards) */}
      <HealthcareServicesGrid />

      {/* Section 3: Brands That Have Chosen Us */}
      <HealthcareClientLogos />

      {/* Section 4: Mid CTA 1 with Phone Mockup */}
      <HealthcareCta1 />

      {/* Section 5: Global Compliance Standards Carousel */}
      <HealthcareCompliance />

      {/* Section 6: Healthcare App Features (4 Tabs + Center Phone Mockup) */}
      <HealthcareFeatures />

      {/* Section 7: Live Production Case Studies Carousel */}
      <HealthcareCaseStudies />

      {/* Section 8: Client Testimonials */}
      <HealthcareTestimonials />

      {/* Section 9: Sectors We Build For (10 Cards) */}
      <HealthcareSectors />

      {/* Section 10: 5-Step Development Process */}
      <HealthcareProcess />

      {/* Section 11: Healthcare Tech Stack (Green Panels) */}
      <HealthcareTechStack />

      {/* Section 12: Emerging Technologies (6 Cards) */}
      <HealthcareEmergingTech />

      {/* Section 13: Mid CTA 2 (Full-Bleed Background) */}
      <HealthcareCta2 />

      {/* Section 14: Cost Estimates (3 Tiers) */}
      <HealthcareCostSection />

      {/* Section 15: What Sets Us Apart (6 Cards over Background) */}
      <HealthcareWhyChooseUs />

      {/* Section 16: Mid CTA 3 with Tablet Image */}
      <HealthcareCta3 />

      {/* Section 17: Awards & Recognitions */}
      <HealthcareAwards />

      {/* Section 18: Healthcare FAQs */}
      <HealthcareFaqs />
    </div>
  )
}
