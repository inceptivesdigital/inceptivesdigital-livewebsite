import React, { useEffect } from 'react'
import EcommerceHero from './components/EcommerceHero'
import EcommerceStatsBar from './components/EcommerceStatsBar'
import EcommerceSetupOptions from './components/EcommerceSetupOptions'
import EcommerceServicesGrid from './components/EcommerceServicesGrid'
import EcommerceRevenueModels from './components/EcommerceRevenueModels'
import EcommerceKeyFeatures from './components/EcommerceKeyFeatures'
import EcommerceMidCta1 from './components/EcommerceMidCta1'
import EcommerceCaseStudies from './components/EcommerceCaseStudies'
import EcommercePlatforms from './components/EcommercePlatforms'
import EcommerceAdvancedFeatures from './components/EcommerceAdvancedFeatures'
import EcommerceTechStack from './components/EcommerceTechStack'
import EcommerceProcess from './components/EcommerceProcess'
import EcommerceCostTiers from './components/EcommerceCostTiers'
import EcommerceMidCta2 from './components/EcommerceMidCta2'
import EcommerceCollaborationModels from './components/EcommerceCollaborationModels'
import EcommerceWhyChooseUs from './components/EcommerceWhyChooseUs'
import EcommerceAwards from './components/EcommerceAwards'
import EcommerceTestimonials from './components/EcommerceTestimonials'
import EcommerceFinalCta from './components/EcommerceFinalCta'
import EcommerceFaqs from './components/EcommerceFaqs'

export default function EcommerceAppDevelopmentPage() {
  useEffect(() => {
    const title = 'eCommerce App Development Services | Inceptives Digital'
    const description =
      'Custom eCommerce app development services for iOS, Android, and cross-platform apps. Build secure shopping experiences with Inceptives Digital.'

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
    setMeta(
      'link[rel="canonical"]',
      'href',
      'https://inceptivesdigital.com/ecommerce-app-development-company'
    )

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-[#000000] text-white overflow-x-hidden">
      <EcommerceHero />
      <EcommerceStatsBar />
      <EcommerceSetupOptions />
      <EcommerceServicesGrid />
      <EcommerceRevenueModels />
      <EcommerceKeyFeatures />
      <EcommerceMidCta1 />
      <EcommerceCaseStudies />
      <EcommercePlatforms />
      <EcommerceAdvancedFeatures />
      <EcommerceTechStack />
      <EcommerceProcess />
      <EcommerceCostTiers />
      <EcommerceMidCta2 />
      <EcommerceCollaborationModels />
      <EcommerceWhyChooseUs />
      <EcommerceAwards />
      <EcommerceTestimonials />
      <EcommerceFinalCta />
      <EcommerceFaqs />
    </main>
  )
}
