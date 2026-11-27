import { useEffect } from 'react'
import FitnessHero from './components/FitnessHero'
import FitnessStatsBar from './components/FitnessStatsBar'
import FitnessServicesGrid from './components/FitnessServicesGrid'
import FitnessClientLogos from './components/FitnessClientLogos'
import FitnessCta1 from './components/FitnessCta1'
import FitnessValueProps from './components/FitnessValueProps'
import FitnessFeatures from './components/FitnessFeatures'
import FitnessCaseStudies from './components/FitnessCaseStudies'
import FitnessTestimonials from './components/FitnessTestimonials'
import FitnessSectors from './components/FitnessSectors'
import FitnessProcess from './components/FitnessProcess'
import FitnessTechStack from './components/FitnessTechStack'
import FitnessEmergingTech from './components/FitnessEmergingTech'
import FitnessCta2 from './components/FitnessCta2'
import FitnessCostSection from './components/FitnessCostSection'
import FitnessWhyChooseUs from './components/FitnessWhyChooseUs'
import FitnessCta3 from './components/FitnessCta3'
import FitnessAwards from './components/FitnessAwards'
import FitnessFaqs from './components/FitnessFaqs'

export default function FitnessAppDevelopmentPage() {
  useEffect(() => {
    document.title = 'Fitness App Development Services Company | Inceptives Digital'
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Trusted fitness app development company offering advanced fitness app development services that help businesses create custom, data-driven health experiences.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://inceptivesdigital.com/fitness-app-development'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      {/* Section 1: Hero */}
      <FitnessHero />

      {/* Section 2: 4-Column Stats Bar */}
      <FitnessStatsBar />

      {/* Section 3: End-to-End Services (9 Cards) */}
      <FitnessServicesGrid />

      {/* Section 4: Client Logos */}
      <FitnessClientLogos />

      {/* Section 5: Mid CTA 1 */}
      <FitnessCta1 />

      {/* Section 6: Value Proposition Carousel (01-06) */}
      <FitnessValueProps />

      {/* Section 7: Fitness App Features (5 Single-Line Tabs + Center Phone Mockup) */}
      <FitnessFeatures />

      {/* Section 8: Case Studies Carousel */}
      <FitnessCaseStudies />

      {/* Section 8: Client Testimonials */}
      <FitnessTestimonials />

      {/* Section 9: Sectors Grid (10 Cards) */}
      <FitnessSectors />

      {/* Section 10: 6-Step Process Tabs */}
      <FitnessProcess />

      {/* Section 11: Tech Stack Green Panels */}
      <FitnessTechStack />

      {/* Section 12: Emerging Tech (3x2 Star Grid) */}
      <FitnessEmergingTech />

      {/* Section 13: Mid CTA 2 */}
      <FitnessCta2 />

      {/* Section 14: Cost Estimates (3 Tiers) */}
      <FitnessCostSection />

      {/* Section 15: What Sets Us Apart (6 Cards) */}
      <FitnessWhyChooseUs />

      {/* Section 16: Discovery Sprint CTA 3 */}
      <FitnessCta3 />

      {/* Section 17: Awards & Recognitions */}
      <FitnessAwards />

      {/* Section 18: Fitness FAQs */}
      <FitnessFaqs />
    </div>
  )
}
