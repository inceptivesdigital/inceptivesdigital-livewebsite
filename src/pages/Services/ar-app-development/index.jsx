import { useEffect } from 'react'
import ArHero from './components/ArHero'
import ArServicesGrid from './components/ArServicesGrid'
import ArIndustriesAndStats from './components/ArIndustriesAndStats'
import ArPortfolioShowcase from './components/ArPortfolioShowcase'
import ArWhyChooseUs from './components/ArWhyChooseUs'
import ArAdvancedTechAndCta from './components/ArAdvancedTechAndCta'
import StandardTechStack from '../../../components/StandardTechStack'
import AwardsSection from '../../../components/AwardsSection'
import FAQSection from '../../../components/FAQSection'

const AR_TECH_STACK = [
  {
    name: 'Platforms',
    items: [
      { name: 'Apple iOS (ARKit)', img: '/assets/mobile-game/logos/apple.svg', alt: 'Apple ARKit' },
      { name: 'Android (ARCore)', img: '/assets/mobile-game/logos/android.svg', alt: 'Google ARCore' },
      { name: 'Unity AR Foundation', img: '/assets/mobile-game/logos/unity.svg', alt: 'Unity AR' },
      { name: 'Unreal Engine', img: '/assets/mobile-game/logos/unrealengine.svg', alt: 'Unreal Engine AR' },
      { name: 'AWS Cloud', img: '/assets/mobile-app/aws.jpg', alt: 'AWS Cloud' },
      { name: 'Microsoft Azure', img: '/assets/mobile-game/logos/azure.svg', alt: 'Microsoft Azure' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg', alt: 'Google Cloud' },
    ],
  },
  {
    name: 'Programming Language',
    items: [
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg', alt: 'Swift' },
      { name: 'Kotlin', img: '/assets/mobile-app/tech/kotlin.svg', alt: 'Kotlin' },
      { name: 'C#', img: '/assets/mobile-game/logos/csharp.svg', alt: 'C#' },
      { name: 'C++', img: '/assets/mobile-game/logos/cplusplus.svg', alt: 'C++' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg', alt: 'TypeScript' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg', alt: 'Python AI/CV' },
    ],
  },
  {
    name: 'Database & Reporting',
    items: [
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg', alt: 'Firebase' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg', alt: 'PostgreSQL' },
      { name: 'MongoDB', img: '/assets/mobile-app/mongoDB.jpg', alt: 'MongoDB' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg', alt: 'Redis' },
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg', alt: 'Google Analytics' },
      { name: 'Mixpanel', img: '/assets/mobile-app/tech/mixpanel.svg', alt: 'Mixpanel' },
    ],
  },
]

const AR_FAQS = [
  {
    q: 'In what ways can your AR app development services support the visibility of our business?',
    a: "Being an experienced AR app development company, we create AR apps that are not only visually appealing but also engaging. Our focus is to assist you in developing such apps that are user-friendly, convert, and enhance your brand's visibility in the market.",
  },
  {
    q: 'What industries can profit from your AR app development skills?',
    a: "Our Augmented Reality app development team has been working on AR solutions for different industries such as retail, real estate, education, healthcare, and entertainment. Whether your request is for a virtual product try-on, an interactive training tool, or an immersive marketing campaign, we will provide our AR development services according to your industry's requirements.",
  },
  {
    q: 'What technologies do you use for AR app development?',
    a: 'Our Augmented Reality app developers utilize advanced and the most in-demand tools and frameworks, which include Unity, Unreal Engine, ARKit, ARCore, Vuforia, and Blender. Besides these, we integrate AI, IoT, and cloud capabilities to make your AR application smarter, secure, and expandable.',
  },
  {
    q: 'How long does it take to develop a custom AR application?',
    a: 'The app development timeline differs according to the complexity and features of the app. A simple AR experience may take 4–8 weeks, whereas large-scale or multi-platform AR solutions may take several months. A precise timeline will be discussed during the discovery phase.',
  },
  {
    q: 'How much does it cost to develop an AR app with your team?',
    a: 'The AR app development cost varies according to the app type, the chosen platform, the quality of 3D assets, and integration. Typically, the cost of an AR project falls between $25,000 and $500,000. We deliver open quotes once we understand your project scope and objectives.',
  },
]

export default function ArAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'AR App Development Company | Inceptives Digital'
    const seoDesc =
      'Trusted AR app development company offering immersive augmented reality app development services to create next-level AR experiences.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ar-app-development')
  }, [])

  return (
    <div className="bg-[#0b0c0f] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero + Trusted Brand Logos Strip */}
      <ArHero />

      {/* 2. Augmented Reality App Development Services (6 Cards) */}
      <ArServicesGrid />

      {/* 3. Industries (9 Cards, 100% Height) + 4-Column Stats Bar */}
      <ArIndustriesAndStats />

      {/* 4. Premier AR Portfolio Showcase (3 Projects) */}
      <ArPortfolioShowcase />

      {/* 5. Why Our AR App Development Company Is Trusted by Global Brands (6 Cards) */}
      <ArWhyChooseUs />

      {/* 6. Technologies Fueling Our AR App Development Services */}
      <StandardTechStack
        heading={
          <>
            Technologies Fueling Our{' '}
            <span className="text-[#00CE44]">AR App Development Services</span>
          </>
        }
        subtitle="We use modern and the most in-demand AR development tools and frameworks to provide AR app development services of the highest caliber. Our expert Augmented Reality app development team follows best practices and techniques for real-time interaction and smooth backend integration."
        categories={AR_TECH_STACK}
      />

      {/* 7. Advanced Tech Ecosystem + 3X Customer Engagement CTA */}
      <ArAdvancedTechAndCta />

      {/* 8. Awards & Recognitions (Clean Floating Logos) */}
      <AwardsSection />

      {/* 9. FAQs (Exact Homepage Design) */}
      <FAQSection
        heading="Answers to Your Augmented Reality App Development Services Queries"
        faqs={AR_FAQS}
      />
    </div>
  )
}
