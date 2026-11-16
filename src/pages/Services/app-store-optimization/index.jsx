import { useEffect } from 'react'
import AsoHero from './components/AsoHero'
import AsoTrustedLogos from './components/AsoTrustedLogos'
import AsoStrategyNecessity from './components/AsoStrategyNecessity'
import AsoServicesGrid from './components/AsoServicesGrid'
import AsoComparisonTable from './components/AsoComparisonTable'
import AsoStatsBar from './components/AsoStatsBar'
import AsoIndustries from './components/AsoIndustries'
import AsoCaseStudies from './components/AsoCaseStudies'
import AsoWhyChooseUs from './components/AsoWhyChooseUs'
import AsoProcess from './components/AsoProcess'
import AsoTechStack from './components/AsoTechStack'
import AsoModernTech from './components/AsoModernTech'
import AsoTestimonials from './components/AsoTestimonials'
import AsoCostSection from './components/AsoCostSection'
import AsoFAQs from './components/AsoFAQs'

export default function AppStoreOptimizationPage() {
  useEffect(() => {
    const seoTitle = 'App Store Optimization Services | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is an App Store Optimization company that turns app store pages into conversion engines. Data-backed ASO strategy for iOS and Android.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/app-store-optimization')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <AsoHero />

      {/* 2. The ASO Partner Trusted by Growth-Focused Brands */}
      <AsoTrustedLogos />

      {/* 3. Why Most Apps Stay Invisible Without a Strategy */}
      <AsoStrategyNecessity />

      {/* 4. ASO Services Structured Around Your Product and How Users Find It */}
      <AsoServicesGrid />

      {/* 5. ASO, Apple Search Ads, and Paid UA: How They Work Together */}
      <AsoComparisonTable />

      {/* 6. Stats & Mid CTA */}
      <AsoStatsBar />

      {/* 7. The Industries Where Our Better ASO Changes the Growth Trajectory */}
      <AsoIndustries />

      {/* 8. Case Studies From ASO Engagements Across Categories */}
      <AsoCaseStudies />

      {/* 9. Why Growth-Focused Brands Choose Inceptives Digital */}
      <AsoWhyChooseUs />

      {/* 10. How an ASO Engagement Works at Inceptives Digital */}
      <AsoProcess />

      {/* 11. The Tools and Data Layers Behind the Result-Driven ASO */}
      <AsoTechStack />

      {/* 12. The Data Sources and Optimization Systems Behind Every ASO Engagement */}
      <AsoModernTech />

      {/* 13. Heard From the Teams We Have Worked With */}
      <AsoTestimonials />

      {/* 14. How Much Does App Store Optimization Cost? + Bottom CTA */}
      <AsoCostSection />

      {/* 15. FAQs */}
      <AsoFAQs />
    </div>
  )
}
