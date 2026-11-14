import { useEffect } from 'react'
import AndroidHero from './components/AndroidHero'
import AndroidRecognitionBar from './components/AndroidRecognitionBar'
import AndroidApproachSection from './components/AndroidApproachSection'
import AndroidServicesGrid from './components/AndroidServicesGrid'
import AndroidNativeVsCrossPlatform from './components/AndroidNativeVsCrossPlatform'
import AndroidCaseStudies from './components/AndroidCaseStudies'
import AndroidTestimonials from './components/AndroidTestimonials'
import AndroidIndustries from './components/AndroidIndustries'
import AndroidAdvantages from './components/AndroidAdvantages'
import AndroidMidCTA from './components/AndroidMidCTA'
import AndroidAwardsSection from './components/AndroidAwardsSection'
import AndroidDevelopmentProcess from './components/AndroidDevelopmentProcess'
import AndroidTechStackTabs from './components/AndroidTechStackTabs'
import AndroidTechPartners from './components/AndroidTechPartners'
import AndroidEmergingTech from './components/AndroidEmergingTech'
import AndroidCostSection from './components/AndroidCostSection'
import AndroidBottomCTA from './components/AndroidBottomCTA'
import AndroidFAQs from './components/AndroidFAQs'

export default function AndroidAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Android App Development Company in USA | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital builds native Android apps in Kotlin and Java for startups, SMBs, and enterprise teams. Get a scoped estimate for your Android product in 48 hours.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/android-app-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <AndroidHero />

      {/* 2. Globally Recognized as an Android App Development Partner + 4 Stats */}
      <AndroidRecognitionBar />

      {/* 3. Your Android Product Deserves More Than an Off-the-Shelf Approach */}
      <AndroidApproachSection />

      {/* 4. Android App Development Services, Backed by the Right Engineering (6 Cards) */}
      <AndroidServicesGrid />

      {/* 5. Should You Build Native Kotlin or Go Cross-Platform? (2 Comparison Cards + Stack CTA) */}
      <AndroidNativeVsCrossPlatform />

      {/* 6. Our Portfolio Backed by Real Android Engineering (5 Case Studies Carousel) */}
      <AndroidCaseStudies />

      {/* 7. What It's Like to Build With Inceptives Digital (Testimonials) */}
      <AndroidTestimonials />

      {/* 8. Industry-Focused Custom Android Development Across Every Screen (9 Industry Cards) */}
      <AndroidIndustries />

      {/* 9. The Advantage of Working with Inceptives Digital for Android App Development Services (6 Cards + CTA) */}
      <AndroidAdvantages />

      {/* 10. The Best Time & Team to Get Your Ideal Android App Is Here. (CTA) */}
      <AndroidMidCTA />

      {/* 11. HIRE ANDROID DEVELOPERS WITH CONFIDENCE: An Award-Recognized Android App Development Company in the USA */}
      <AndroidAwardsSection />

      {/* 12. 5-Step Procedure for Android App Development Excellence */}
      <AndroidDevelopmentProcess />

      {/* 13. Tech Stack for Android Apps, Chosen Around Product Requirements */}
      <AndroidTechStackTabs />

      {/* 14. Built on Proven Android Technologies: Tech Partners Supporting Our Android Expertise */}
      <AndroidTechPartners />

      {/* 15. Engineering What's Next in Android App Development (6 Cards) */}
      <AndroidEmergingTech />

      {/* 16. How Much Does Android App Development Cost? (3 Tier Cards + CTA) */}
      <AndroidCostSection />

      {/* 17. Send in Your Brief and Receive a Precise Android Estimate in a Day. (CTA) */}
      <AndroidBottomCTA />

      {/* 18. Android App Development FAQs (12 FAQs) */}
      <AndroidFAQs />
    </div>
  )
}
