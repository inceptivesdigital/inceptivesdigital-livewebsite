import { useEffect } from 'react'
import EducationHero from './components/EducationHero'
import EducationStatsBar from './components/EducationStatsBar'
import EducationCapabilities from './components/EducationCapabilities'
import EducationServicesGrid from './components/EducationServicesGrid'
import EducationClientLogos from './components/EducationClientLogos'
import EducationCta1 from './components/EducationCta1'
import EducationChallenges from './components/EducationChallenges'
import EducationKeyFeatures from './components/EducationKeyFeatures'
import EducationCaseStudies from './components/EducationCaseStudies'
import EducationCta2 from './components/EducationCta2'
import EducationProcess from './components/EducationProcess'
import EducationTechStack from './components/EducationTechStack'
import EducationEmergingTech from './components/EducationEmergingTech'
import EducationCostSection from './components/EducationCostSection'
import EducationCta3 from './components/EducationCta3'
import EducationAwards from './components/EducationAwards'
import EducationFaqs from './components/EducationFaqs'

export default function EducationAppDevelopmentPage() {
  useEffect(() => {
    document.title = 'Education App Development Company | Inceptives Digital'
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Inceptives Digital is an education app development company offering educational app development to build interactive, user-focused learning apps and platforms.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://inceptivesdigital.com/education-app-development-company'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="bg-[#151515] text-white min-h-screen overflow-x-hidden selection:bg-[#00CE44] selection:text-black">
      {/* Section 1: Hero */}
      <EducationHero />

      {/* Section 2: 4-Column Stats Strip */}
      <EducationStatsBar />

      {/* Section 3: Capabilities Beyond Content Delivery (5 Cards) */}
      <EducationCapabilities />

      {/* Section 4: Smart Educational Services (8 Cards) */}
      <EducationServicesGrid />

      {/* Section 5: Client Logos */}
      <EducationClientLogos />

      {/* Section 6: Mid CTA 1 */}
      <EducationCta1 />

      {/* Section 7: Challenges We Solve (5 Cards) */}
      <EducationChallenges />

      {/* Section 8: Key Features (Basic / Advanced Tabs) */}
      <EducationKeyFeatures />

      {/* Section 9: Portfolio Case Studies Carousel */}
      <EducationCaseStudies />

      {/* Section 10: Mid CTA 2 */}
      <EducationCta2 />

      {/* Section 11: 7-Step Process Tabs */}
      <EducationProcess />

      {/* Section 12: Proven Technologies (8-Category Tech Stack Green Panels) */}
      <EducationTechStack />

      {/* Section 13: Advanced Technologies (3x2 Star Grid) */}
      <EducationEmergingTech />

      {/* Section 14: Cost Estimates (3 Tiers) */}
      <EducationCostSection />

      {/* Section 15: Mid CTA 3 */}
      <EducationCta3 />

      {/* Section 16: Awards & Recognitions */}
      <EducationAwards />

      {/* Section 17: Education FAQs */}
      <EducationFaqs />
    </div>
  )
}
