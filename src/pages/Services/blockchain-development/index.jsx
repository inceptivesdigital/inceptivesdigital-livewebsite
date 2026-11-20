import { useEffect } from 'react'
import BlockchainHero from './components/BlockchainHero'
import BlockchainValueSection from './components/BlockchainValueSection'
import BlockchainServicesTabs from './components/BlockchainServicesTabs'
import BlockchainMidCTA from './components/BlockchainMidCTA'
import BlockchainIndustries from './components/BlockchainIndustries'
import BlockchainTechStack from './components/BlockchainTechStack'
import BlockchainPlatforms from './components/BlockchainPlatforms'
import BlockchainMarketStats from './components/BlockchainMarketStats'
import BlockchainBottomCTA from './components/BlockchainBottomCTA'
import BlockchainWhyChooseUs from './components/BlockchainWhyChooseUs'
import BlockchainCostSection from './components/BlockchainCostSection'
import BlockchainAwards from './components/BlockchainAwards'
import BlockchainProcess from './components/BlockchainProcess'
import BlockchainFAQs from './components/BlockchainFAQs'

export default function BlockchainDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Blockchain Development Services | Inceptives Digital'
    const seoDesc =
      'Our industry-leading blockchain development services are supported by 150+ experienced developers and 8+ years of industry experience. Smart contracts, DeFi, DApps, NFT platforms & enterprise integrations.'

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

    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#121212] text-white selection:bg-[#00CE44] selection:text-black overflow-x-hidden">
      {/* 1. Hero + 4-Column Review Trust Bar */}
      <BlockchainHero />

      {/* 2. Inceptives Digital as a Blockchain Development Company */}
      <BlockchainValueSection />

      {/* 3. Services Banner + 8 Interactive Service Tabs */}
      <BlockchainServicesTabs />

      {/* 4. CTA Banner 1: Let's Build the Future Together */}
      <BlockchainMidCTA />

      {/* 5. Cross-Industry Custom Blockchain Solutions (9 Staggered Cards) */}
      <BlockchainIndustries />

      {/* 6. Tech Stack We Use (7 Logos Row) */}
      <BlockchainTechStack />

      {/* 7. Diverse Blockchain Development Platforms We Support (9 Cards) */}
      <BlockchainPlatforms />

      {/* 8. Why Businesses Are Turning to Blockchain in 2026 + Bar Chart */}
      <BlockchainMarketStats />

      {/* 9. CTA Banner 2: Stay Ahead with Blockchain in 2026 */}
      <BlockchainBottomCTA />

      {/* 10. Why Consider Inceptives Digital + 4-Column Stats Bar */}
      <BlockchainWhyChooseUs />

      {/* 11. Cost Breakdown (3 Cards) + Development Effort Donut Chart */}
      <BlockchainCostSection />

      {/* 12. Awards And Recognitions */}
      <BlockchainAwards />

      {/* 13. Comprehensive Blockchain Development Process (4 Interactive Tabs) */}
      <BlockchainProcess />

      {/* 14. FAQs About Our Blockchain Development Services (7 Questions) */}
      <BlockchainFAQs />
    </div>
  )
}
