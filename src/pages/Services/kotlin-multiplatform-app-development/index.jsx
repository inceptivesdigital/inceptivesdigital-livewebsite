import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import kmpSchema from '../../../schemas/kotlin-multiplatform-development.json'
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
import KmpArchitectureTable from './components/KmpArchitectureTable'
import KmpTechStack from './components/KmpTechStack'
import KmpCostSection from './components/KmpCostSection'
import KmpFAQs from './components/KmpFAQs'

export default function KotlinMultiplatformAppDevelopmentPage() {
  useJsonLdSchema(kmpSchema, 'schema-kotlin-multiplatform-development')
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/kotlin-multiplatform-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <KmpHero />

      {/* 2. Trusted by Teams Across Mobile and Multiplatform Development */}
      <KmpTrustedLogos />

      {/* 3. Why Are Experienced Product Teams Moving to KMP? + Is Kotlin Multiplatform the Right Architecture for Your Product? */}
      <KmpArchitectureChoice />

      {/* 4. Our Wide Range of Kotlin Multiplatform App Development Services */}
      <KmpServicesGrid />

      {/* 5. Proof Metrics Bar (150+ Developers | 20+ Industries Served | 8+ Years Building Products) */}
      <KmpStatsAndCTA />

      {/* 6. Industries We Build KMP Solutions For */}
      <KmpIndustries />

      {/* 7. Our Portfolio in Custom Mobile Product Engineering */}
      <KmpCaseStudies />

      {/* 8. Hear From the Businesses We've Built Products For */}
      <KmpTestimonials />

      {/* 9. Bring Your KMP Project CTA + Why Choose Inceptives Digital + Award-Winning Expertise */}
      <KmpWhyChooseUs />

      {/* 10. Our Kotlin Multiplatform Development Process */}
      <KmpProcess />

      {/* 11. How Kotlin Multiplatform Works: Architecture Overview (Table) */}
      <KmpArchitectureTable />

      {/* 12. Tools That Hold Every KMP Build at Scale + Technology Partnerships */}
      <KmpTechStack />

      {/* 13. How Much Do Kotlin Multiplatform Development Services Cost? + Quote CTA */}
      <KmpCostSection />

      {/* 14. Kotlin Multiplatform App Development FAQs */}
      <KmpFAQs />
    </div>
  )
}
