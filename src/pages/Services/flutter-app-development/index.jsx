import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import flutterAppSchema from '../../../schemas/flutter-app-development.json'
import FlutterHero from './components/FlutterHero'
import FlutterTrustedLogos from './components/FlutterTrustedLogos'
import FlutterRealImpact from './components/FlutterRealImpact'
import FlutterServicesGrid from './components/FlutterServicesGrid'
import FlutterStatsAndCTA from './components/FlutterStatsAndCTA'
import FlutterIndustries from './components/FlutterIndustries'
import FlutterCaseStudies from './components/FlutterCaseStudies'
import FlutterTestimonials from './components/FlutterTestimonials'
import FlutterWhyChooseUs from './components/FlutterWhyChooseUs'
import FlutterProcess from './components/FlutterProcess'
import FlutterTechStack from './components/FlutterTechStack'
import FlutterEmergingTech from './components/FlutterEmergingTech'
import FlutterCostSection from './components/FlutterCostSection'
import FlutterFAQs from './components/FlutterFAQs'

export default function FlutterAppDevelopmentPage() {
  useJsonLdSchema(flutterAppSchema, 'schema-flutter-app-development')
  useEffect(() => {
    const seoTitle = 'Flutter App Development Company | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is a Flutter app development company delivering native quality apps across iOS, Android and web. Get estimates for your product today.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/flutter-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <FlutterHero />

      {/* 2. Trusted by Product Teams Across Industries and Continents */}
      <FlutterTrustedLogos />

      {/* 3. The Real Impact of Flutter Mobile App Development on Your Product */}
      <FlutterRealImpact />

      {/* 4. Flutter App Development Services, Scoped Around Your Product (6 Cards + Get in Touch Bar) */}
      <FlutterServicesGrid />

      {/* 5. 4 Stats Counters (70+ Products Shipped | 150+ Engineers | 3M+ App Downloads | 4.7 Rating on Clutch) */}
      <FlutterStatsAndCTA />

      {/* 6. Flutter App Development Across Every Major Industry (9 Homepage Box Cards) */}
      <FlutterIndustries />

      {/* 7. Case Studies From Flutter Apps Developed Across Industries */}
      <FlutterCaseStudies />

      {/* 8. Heard Directly From the Clients We Have Worked With */}
      <FlutterTestimonials />

      {/* 9. Collaborate CTA + What Makes Inceptives Digital the Right Flutter Partner (6 Cards + Talk to the Team) */}
      <FlutterWhyChooseUs />

      {/* 10. How Inceptives Digital Takes a Flutter App From Idea to Launch (5 Steps) */}
      <FlutterProcess />

      {/* 11. The Tools and Technologies That Power Our Flutter Products (8 Tech Categories) */}
      <FlutterTechStack />

      {/* 12. Emerging Technologies That Make Flutter Products Smarter and Scalable (6 Cards) */}
      <FlutterEmergingTech />

      {/* 13. How Much Does Flutter App Development Cost? (3 Tier Cards + Scoped Estimate + Bottom Launch CTA) */}
      <FlutterCostSection />

      {/* 14. FAQs: Flutter App Development Services */}
      <FlutterFAQs />
    </div>
  )
}
