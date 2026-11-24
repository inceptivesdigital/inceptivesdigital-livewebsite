import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import reactNativeSchema from '../../../schemas/react-native-app-development.json'
import ReactNativeHero from './components/ReactNativeHero'
import ReactNativeTrustedLogos from './components/ReactNativeTrustedLogos'
import ReactNativeBuildChoice from './components/ReactNativeBuildChoice'
import ReactNativeVsFlutterTable from './components/ReactNativeVsFlutterTable'
import ReactNativeServicesGrid from './components/ReactNativeServicesGrid'
import ReactNativeStatsAndCTA from './components/ReactNativeStatsAndCTA'
import ReactNativeIndustries from './components/ReactNativeIndustries'
import ReactNativeCaseStudies from './components/ReactNativeCaseStudies'
import ReactNativeTestimonials from './components/ReactNativeTestimonials'
import ReactNativeWhyChooseUs from './components/ReactNativeWhyChooseUs'
import ReactNativeProcess from './components/ReactNativeProcess'
import ReactNativeTechStack from './components/ReactNativeTechStack'
import ReactNativeTechPartnerships from './components/ReactNativeTechPartnerships'
import ReactNativeEmergingTech from './components/ReactNativeEmergingTech'
import ReactNativeCostSection from './components/ReactNativeCostSection'
import ReactNativeFAQs from './components/ReactNativeFAQs'

export default function ReactNativeAppDevelopmentPage() {
  useJsonLdSchema(reactNativeSchema, 'schema-react-native-app-development')
  useEffect(() => {
    const seoTitle = 'React Native App Development Company | Inceptives Digital'
    const seoDesc =
      'Build iOS and Android applications with our React Native app development services, covering custom engineering, migration, and ongoing support.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/react-native-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <ReactNativeHero />

      {/* 2. Brands Building Their React Native Apps With Us */}
      <ReactNativeTrustedLogos />

      {/* 3. Why Businesses Choose React Native for Mobile App Development */}
      <ReactNativeBuildChoice />

      {/* 4. React Native vs Flutter: Which Framework Fits Your Product? (Comparison Table) */}
      <ReactNativeVsFlutterTable />

      {/* 5. Custom React Native App Development Services We Offer (6 Cards) */}
      <ReactNativeServicesGrid />

      {/* 6. 4 Stats Counters (70+ | 150+ | 3M+ | 4.7) */}
      <ReactNativeStatsAndCTA />

      {/* 7. Industries We Build React Native Apps For (9 Box Cards) */}
      <ReactNativeIndustries />

      {/* 8. React Native Applications We've Developed */}
      <ReactNativeCaseStudies />

      {/* 9. What Clients Say After Launching With Us */}
      <ReactNativeTestimonials />

      {/* 10. Collaborate CTA + Why Choose Inceptives Digital (6 Cards + Awards) */}
      <ReactNativeWhyChooseUs />

      {/* 11. From Discovery to Deployment, Our React Native App Development Process (5 Steps) */}
      <ReactNativeProcess />

      {/* 12. Tools Selected for React Native. Refined Across Deliveries. */}
      <ReactNativeTechStack />

      {/* 13. Technology Partnerships Behind Our React Native Engineering */}
      <ReactNativeTechPartnerships />

      {/* 14. Future-Ready React Native Products Through Emerging Technology (6 Cards) */}
      <ReactNativeEmergingTech />

      {/* 15. How Much Does React Native App Development Cost? (3 Tier Cards + Quote CTA) */}
      <ReactNativeCostSection />

      {/* 16. React Native App Development FAQs (13 FAQs) */}
      <ReactNativeFAQs />
    </div>
  )
}
