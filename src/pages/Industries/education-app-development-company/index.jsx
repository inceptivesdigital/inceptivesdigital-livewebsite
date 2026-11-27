import { useEffect } from 'react'
import EducationHero from './components/EducationHero'
import EducationStatsBar from './components/EducationStatsBar'
import EducationServicesGrid from './components/EducationServicesGrid'
import EducationCta1 from './components/EducationCta1'
import EducationCaseStudies from './components/EducationCaseStudies'
import EducationBusinesses from './components/EducationBusinesses'
import EducationKeyFeatures from './components/EducationKeyFeatures'
import EducationProcess from './components/EducationProcess'
import EducationTechStack from './components/EducationTechStack'
import EducationEmergingTech from './components/EducationEmergingTech'
import EducationCostSection from './components/EducationCostSection'
import EducationCta2 from './components/EducationCta2'
import EducationCapabilities from './components/EducationCapabilities'
import EducationAwards from './components/EducationAwards'
import EducationCta3 from './components/EducationCta3'
import EducationFaqs from './components/EducationFaqs'

export default function EducationAppDevelopmentPage() {
  useEffect(() => {
    const title = 'Education App Development Company | Inceptives Digital'
    const description =
      'Inceptives Digital is an education app development company offering educational app development to build interactive, user-focused learning apps and platforms.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el && selector.startsWith('meta[name=')) {
        el = document.createElement('meta')
        el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        document.head.appendChild(el)
      }
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

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
    <div className="bg-[#151515] text-white min-h-screen overflow-x-clip selection:bg-[#00CE44] selection:text-black">
      <EducationHero />
      <EducationStatsBar />
      <EducationServicesGrid />
      <EducationCta1 />
      <EducationCaseStudies />
      <EducationBusinesses />
      <EducationKeyFeatures />
      <EducationProcess />
      <EducationTechStack />
      <EducationEmergingTech />
      <EducationCostSection />
      <EducationCta2 />
      <EducationCapabilities />
      <EducationAwards />
      <EducationCta3 />
      <EducationFaqs />
    </div>
  )
}
