import { useEffect } from 'react'
import KmpHero from './components/KmpHero'
import KmpTrustedLogos from './components/KmpTrustedLogos'
import KmpArchitectureChoice from './components/KmpArchitectureChoice'
import KmpServicesGrid from './components/KmpServicesGrid'
import KmpStatsAndCTA from './components/KmpStatsAndCTA'
import KmpIndustries from './components/KmpIndustries'
import KmpCaseStudies from './components/KmpCaseStudies'
import KmpTestimonials from './components/KmpTestimonials'
import KmpWhyChooseUs from './components/KmpWhyChooseUs'
import KmpProcess from './components/KmpProcess'
import KmpTechStack from './components/KmpTechStack'
import KmpArchitectureTable from './components/KmpArchitectureTable'
import KmpCostSection from './components/KmpCostSection'
import KmpFAQs from './components/KmpFAQs'

export default function KotlinMultiplatformAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Kotlin Multiplatform App Development Services | Inceptives Digital'
    const seoDesc =
      'Discover Inceptives Digital, a leader in Kotlin multiplatform app development. We create production-grade KMP products with shared business logic and native UI.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/kotlin-multiplatform-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <KmpHero />

      {/* 2. Trusted by Product Teams Shipping on Kotlin Multiplatform */}
      <KmpTrustedLogos />

      {/* 3. Why Are Experienced Product Teams Moving to KMP? + Is Kotlin Multiplatform the Right Architecture for Your Product? */}
      <KmpArchitectureChoice />

      {/* 4. Our Wide Range of Kotlin Multiplatform App Development Services (6 Cards + Discovery CTA) */}
      <KmpServicesGrid />

      {/* 5. Proof Metrics Bar (150+ Developers | 20+ Industries Served | 99% Infrastructure Uptime | 8+ Years Building Products) */}
      <KmpStatsAndCTA />

      {/* 6. Industries We Build KMP Solutions For (9 Homepage Box Cards) */}
      <KmpIndustries />

      {/* 7. Our Portfolio of Production-Grade KMP Products */}
      <KmpCaseStudies />

      {/* 8. What Clients Say About Smarter Cross-Platform Engineering */}
      <KmpTestimonials />

      {/* 9. Ready to See If KMP Fits Your Architecture? CTA + Why Choose Inceptives Digital (6 Cards) */}
      <KmpWhyChooseUs />

      {/* 10. Our Kotlin Multiplatform Development Process (6 Circular Icon Steps) */}
      <KmpProcess />

      {/* 11. Tools That Hold Every KMP Build at Scale (8 Tech Categories) */}
      <KmpTechStack />

      {/* 12. How Kotlin Multiplatform Works: Architecture Overview (Table) */}
      <KmpArchitectureTable />

      {/* 13. The Cost of Getting KMP Architecture Right (3 Tier Cards + Custom Estimate CTA) */}
      <KmpCostSection />

      {/* 14. Kotlin Multiplatform App Development FAQs (12 FAQs) */}
      <KmpFAQs />
    </div>
  )
}
