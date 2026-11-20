import { useEffect } from 'react'
import FintechHero from './components/FintechHero'
import FintechStatsBar from './components/FintechStatsBar'
import FintechServicesGrid from './components/FintechServicesGrid'
import FintechCta1 from './components/FintechCta1'
import FintechFeaturesGrid from './components/FintechFeaturesGrid'
import FintechCaseStudies from './components/FintechCaseStudies'
import FintechTestimonials from './components/FintechTestimonials'
import FintechProcess from './components/FintechProcess'
import FintechCta2 from './components/FintechCta2'
import FintechTechStack from './components/FintechTechStack'
import FintechEmergingTech from './components/FintechEmergingTech'
import FintechWhyChooseUs from './components/FintechWhyChooseUs'
import FintechCostSection from './components/FintechCostSection'
import FintechCta3 from './components/FintechCta3'
import FintechFaqs from './components/FintechFaqs'

export default function FintechAppDevelopmentPage() {
  useEffect(() => {
    document.title = 'Fintech App Development Company | Inceptives Digital'
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Trusted fintech app development Company delivering cutting-edge fintech app development services for seamless, secure, and efficient financial solutions.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://inceptivesdigital.com/fintech-app-development'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      {/* Section 1: Hero */}
      <FintechHero />

      {/* Section 2: 4-Column Stats Bar */}
      <FintechStatsBar />

      {/* Section 3: Financial Product Categories (8 Cards) */}
      <FintechServicesGrid />

      {/* Section 4: Mid CTA 1 */}
      <FintechCta1 />

      {/* Section 5: Core Features (10 Cards) */}
      <FintechFeaturesGrid />

      {/* Section 6: Live Projects Case Studies Carousel */}
      <FintechCaseStudies />

      {/* Section 7: Client Testimonials */}
      <FintechTestimonials />

      {/* Section 8: 7-Step Process Tabs */}
      <FintechProcess />

      {/* Section 9: Mid CTA 2 */}
      <FintechCta2 />

      {/* Section 10: Tech Stack Green Panels */}
      <FintechTechStack />

      {/* Section 11: Modern Technologies (3x2 Star Grid) */}
      <FintechEmergingTech />

      {/* Section 12: Production Capabilities (6 Cards) */}
      <FintechWhyChooseUs />

      {/* Section 13: Cost Estimates (3 Tiers) */}
      <FintechCostSection />

      {/* Section 14: Mid CTA 3 */}
      <FintechCta3 />

      {/* Section 15: Fintech FAQs */}
      <FintechFaqs />
    </div>
  )
}
