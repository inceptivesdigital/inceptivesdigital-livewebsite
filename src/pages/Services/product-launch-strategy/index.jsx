import { useEffect } from 'react'
import ProductLaunchHero from './components/ProductLaunchHero'
import ProductLaunchTrustedLogos from './components/ProductLaunchTrustedLogos'
import ProductLaunchNecessity from './components/ProductLaunchNecessity'
import ProductLaunchServicesGrid from './components/ProductLaunchServicesGrid'
import ProductLaunchRolloutTable from './components/ProductLaunchRolloutTable'
import ProductLaunchStatsBar from './components/ProductLaunchStatsBar'
import ProductLaunchIndustries from './components/ProductLaunchIndustries'
import ProductLaunchCaseStudies from './components/ProductLaunchCaseStudies'
import ProductLaunchWhyChooseUs from './components/ProductLaunchWhyChooseUs'
import ProductLaunchProcess from './components/ProductLaunchProcess'
import ProductLaunchTechStack from './components/ProductLaunchTechStack'
import ProductLaunchModernTech from './components/ProductLaunchModernTech'
import ProductLaunchTestimonials from './components/ProductLaunchTestimonials'
import ProductLaunchCostSection from './components/ProductLaunchCostSection'
import ProductLaunchFAQs from './components/ProductLaunchFAQs'

export default function ProductLaunchStrategyPage() {
  useEffect(() => {
    const seoTitle = 'Product Launch Strategy & Consulting Services| Inceptives Digital'
    const seoDesc =
      'Inceptives Digital builds the go-to-market strategy and executes it, from $10,000 MVPs to $100,000 enterprise launches.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/product-launch-strategy')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <ProductLaunchHero />

      {/* 2. Chosen by Businesses Who Can't Afford to Miss Their Launch Window */}
      <ProductLaunchTrustedLogos />

      {/* 3. A Strong Launch Strategy Is Now a Business Necessity */}
      <ProductLaunchNecessity />

      {/* 4. Inceptives Digital Services Built Around Successful Product Launches */}
      <ProductLaunchServicesGrid />

      {/* 5. Soft Launch vs Full Launch vs Phased Launch: Choosing the Right Rollout Strategy */}
      <ProductLaunchRolloutTable />

      {/* 6. Stats & Mid CTA */}
      <ProductLaunchStatsBar />

      {/* 7. Helping Businesses Launch Successfully Throughout Every Major Industry */}
      <ProductLaunchIndustries />

      {/* 8. Your Idea Deserves Better Than Average Execution */}
      <ProductLaunchCaseStudies />

      {/* 9. The Reasons High-Performing Teams Launch With Inceptives Digital */}
      <ProductLaunchWhyChooseUs />

      {/* 10. Our Launch Process That Takes Your Product to Market */}
      <ProductLaunchProcess />

      {/* 11. The Launch Stack That Turns Strategy Into Results */}
      <ProductLaunchTechStack />

      {/* 12. Leveraging Modern Technology for a Stronger Product Launch */}
      <ProductLaunchModernTech />

      {/* 13. What Clients Say About Working With Us */}
      <ProductLaunchTestimonials />

      {/* 14. What a Product Launch Strategy Engagement Costs + Bottom CTA */}
      <ProductLaunchCostSection />

      {/* 15. FAQs */}
      <ProductLaunchFAQs />
    </div>
  )
}
