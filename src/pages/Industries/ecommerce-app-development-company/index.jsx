import React, { useEffect } from 'react'
import EcommerceHero from './components/EcommerceHero'
import EcommerceStatsBar from './components/EcommerceStatsBar'
import EcommerceMidCta1 from './components/EcommerceMidCta1'
import EcommerceSetupOptions from './components/EcommerceSetupOptions'
import EcommerceServicesGrid from './components/EcommerceServicesGrid'
import EcommerceRevenueModels from './components/EcommerceRevenueModels'
import EcommerceKeyFeatures from './components/EcommerceKeyFeatures'
import EcommerceMidCta2 from './components/EcommerceMidCta2'
import EcommercePlatforms from './components/EcommercePlatforms'
import EcommerceCollaborationModels from './components/EcommerceCollaborationModels'
import EcommerceCoreCapabilities from './components/EcommerceCoreCapabilities'
import EcommerceProcess from './components/EcommerceProcess'
import EcommerceTechStack from './components/EcommerceTechStack'
import EcommerceAdvancedFeatures from './components/EcommerceAdvancedFeatures'
import EcommerceCostTiers from './components/EcommerceCostTiers'
import EcommerceCaseStudies from './components/EcommerceCaseStudies'
import EcommerceWhyChooseUs from './components/EcommerceWhyChooseUs'
import EcommerceAwards from './components/EcommerceAwards'
import EcommerceTestimonials from './components/EcommerceTestimonials'
import EcommerceFinalCta from './components/EcommerceFinalCta'
import EcommerceFaqs from './components/EcommerceFaqs'

export default function EcommerceAppDevelopmentPage() {
  useEffect(() => {
    const title = 'eCommerce App Development Company | Inceptives Digital'
    const description =
      'Partner with a leading eCommerce app development company with 8+ years of expertise and 70+ projects delivered, building secure and conversion-driven eCommerce apps.'

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
      'https://nextincep.wpenginepowered.com/ecommerce-app-development-company/'
    )

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-[#000000] text-white overflow-x-hidden">
      <EcommerceHero />
      <EcommerceStatsBar />
      <EcommerceMidCta1 />
      <EcommerceSetupOptions />
      <EcommerceServicesGrid />
      <EcommerceRevenueModels />
      <EcommerceKeyFeatures />
      <EcommerceMidCta2 />
      <EcommercePlatforms />
      <EcommerceCollaborationModels />
      <EcommerceCoreCapabilities />
      <EcommerceProcess />
      <EcommerceTechStack />
      <EcommerceAdvancedFeatures />
      <EcommerceCostTiers />
      <EcommerceCaseStudies />
      <EcommerceWhyChooseUs />
      <EcommerceAwards />
      <EcommerceTestimonials />
      <EcommerceFinalCta />
      <EcommerceFaqs />
    </main>
  )
}
