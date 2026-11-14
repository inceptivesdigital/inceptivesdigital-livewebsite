import { useEffect } from 'react'
import BlockchainHero from './components/BlockchainHero'
import BlockchainValueSection from './components/BlockchainValueSection'
import BlockchainServicesTabs from './components/BlockchainServicesTabs'
import BlockchainMidCTA from './components/BlockchainMidCTA'
import BlockchainIndustries from './components/BlockchainIndustries'
import BlockchainPlatforms from './components/BlockchainPlatforms'
import BlockchainProcess from './components/BlockchainProcess'
import BlockchainMarketStats from './components/BlockchainMarketStats'
import BlockchainWhyChooseUs from './components/BlockchainWhyChooseUs'
import BlockchainCostSection from './components/BlockchainCostSection'
import BlockchainBottomCTA from './components/BlockchainBottomCTA'
import BlockchainAwards from './components/BlockchainAwards'
import BlockchainFAQs from './components/BlockchainFAQs'

export default function BlockchainDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Blockchain App Development Services | DApps & DeFi'
    const seoDesc =
      'Blockchain app development services for DApps, DeFi, NFT platforms, and smart contracts. Build secure, scalable blockchain solutions for modern businesses.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/blockchain-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section + Trusted Brand Logos */}
      <BlockchainHero />

      {/* 2. Blockchain App Development for Products That Deliver Value */}
      <BlockchainValueSection />

      {/* 3. Blockchain App Development Services (8 Interactive Tabs) */}
      <BlockchainServicesTabs />

      {/* 4. Mid CTA Banner: Have a Blockchain Opportunity Worth Exploring? */}
      <BlockchainMidCTA />

      {/* 5. Blockchain App Development Across Industries (Homepage Box Cards) */}
      <BlockchainIndustries />

      {/* 6. Diverse Blockchain Development Platforms We Support (9 Platform Cards) */}
      <BlockchainPlatforms />

      {/* 7. Comprehensive Blockchain App Development Process We Follow (6 Steps) */}
      <BlockchainProcess />

      {/* 8. Why Businesses Are Investing in Blockchain Application Development */}
      <BlockchainMarketStats />

      {/* 9. Why Businesses Choose Our Blockchain App Development Services + 4 Counters */}
      <BlockchainWhyChooseUs />

      {/* 10. Blockchain App Development Cost Breakdown Estimates (3 Tier Cards) */}
      <BlockchainCostSection />

      {/* 11. Bottom CTA Banner + Budget Allocation Progress Chart */}
      <BlockchainBottomCTA />

      {/* 12. Awards And Recognitions */}
      <BlockchainAwards />

      {/* 13. FAQs About Our Blockchain App Development Services */}
      <BlockchainFAQs />
    </div>
  )
}
