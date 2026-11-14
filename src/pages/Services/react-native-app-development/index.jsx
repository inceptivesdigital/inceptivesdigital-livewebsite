import { useEffect } from 'react'
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
import ReactNativeEmergingTech from './components/ReactNativeEmergingTech'
import ReactNativeCostSection from './components/ReactNativeCostSection'
import ReactNativeFAQs from './components/ReactNativeFAQs'

export default function ReactNativeAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'React-Native App Development Company | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital excels in React Native app development, providing businesses with robust cross-platform apps that ensure native-grade performance on both iOS and Android devices.'

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

      {/* 2. The Studio Behind Global React Native Product Launches */}
      <ReactNativeTrustedLogos />

      {/* 3. What Makes React Native the Best Build Choice? */}
      <ReactNativeBuildChoice />

      {/* 4. React Native vs Flutter Comparison Table */}
      <ReactNativeVsFlutterTable />

      {/* 5. All-inclusive React Native App Development Services Under One Roof (6 Cards) */}
      <ReactNativeServicesGrid />

      {/* 6. 4 Stats Counters + Stop Building Twice. Start Building Smarter. CTA */}
      <ReactNativeStatsAndCTA />

      {/* 7. Industry-Specific React Native App Development (9 Homepage Box Cards) */}
      <ReactNativeIndustries />

      {/* 8. Case Studies Proven by Real React Native Engineering */}
      <ReactNativeCaseStudies />

      {/* 9. The Businesses That Built Here. In Their Own Words. */}
      <ReactNativeTestimonials />

      {/* 10. Collaborate CTA + Inside a React Native Mobile App Development Company (6 Cards) */}
      <ReactNativeWhyChooseUs />

      {/* 11. The React Native App Development Process in Stages (5 Steps) */}
      <ReactNativeProcess />

      {/* 12. Tools Selected for React Native. Refined Across Deliveries. (8 Tech Categories) */}
      <ReactNativeTechStack />

      {/* 13. Future-Ready React Native Products Through Emerging Technology (6 Cards) */}
      <ReactNativeEmergingTech />

      {/* 14. How Much Does React Native App Development Cost? (3 Tier Cards + Bottom Quote CTA) */}
      <ReactNativeCostSection />

      {/* 15. React Native App Development FAQs (11 FAQs) */}
      <ReactNativeFAQs />
    </div>
  )
}
