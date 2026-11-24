import React, { useEffect } from 'react'
import RealEstateHero from './components/RealEstateHero'
import RealEstateStatsBar from './components/RealEstateStatsBar'
import RealEstateSegments from './components/RealEstateSegments'
import RealEstateServicesGrid from './components/RealEstateServicesGrid'
import RealEstateKeyFeatures from './components/RealEstateKeyFeatures'
import RealEstateCta1 from './components/RealEstateCta1'
import RealEstateMlsIntegrations from './components/RealEstateMlsIntegrations'
import RealEstateCaseStudies from './components/RealEstateCaseStudies'
import RealEstateTestimonials from './components/RealEstateTestimonials'
import RealEstateEmergingTech from './components/RealEstateEmergingTech'
import RealEstateTechStack from './components/RealEstateTechStack'
import RealEstateProcess from './components/RealEstateProcess'
import RealEstateCostSection from './components/RealEstateCostSection'
import RealEstateCta2 from './components/RealEstateCta2'
import RealEstateWhyChooseUs from './components/RealEstateWhyChooseUs'
import RealEstateAwards from './components/RealEstateAwards'
import RealEstateCta3 from './components/RealEstateCta3'
import RealEstateFaqs from './components/RealEstateFaqs'

export default function RealEstateAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const title = 'Real Estate App Development Company | Inceptives Digital'
    const description =
      'Inceptives Digital is a real estate app development company building custom mobile applications for brokerages, property managers, and PropTech businesses across the US.'

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
    canonical.href =
      'https://inceptivesdigital.com/real-estate-app-development-company'
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white min-h-screen overflow-x-clip selection:bg-[#00CE44] selection:text-black">
      <RealEstateHero />
      <RealEstateStatsBar />
      <RealEstateSegments />
      <RealEstateServicesGrid />
      <RealEstateKeyFeatures />
      <RealEstateCta1 />
      <RealEstateMlsIntegrations />
      <RealEstateCaseStudies />
      <RealEstateTestimonials />
      <RealEstateEmergingTech />
      <RealEstateTechStack />
      <RealEstateProcess />
      <RealEstateCostSection />
      <RealEstateCta2 />
      <RealEstateWhyChooseUs />
      <RealEstateAwards />
      <RealEstateCta3 />
      <RealEstateFaqs />
    </div>
  )
}
