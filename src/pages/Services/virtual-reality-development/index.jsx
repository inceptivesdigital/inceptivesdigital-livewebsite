import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import VrHero from './components/VrHero'
import VrServicesGrid from './components/VrServicesGrid'
import VrIndustriesAndStats from './components/VrIndustriesAndStats'
import VrPortfolioShowcase from './components/VrPortfolioShowcase'
import VrWhyChooseUs from './components/VrWhyChooseUs'
import VrAdvancedTechAndCta from './components/VrAdvancedTechAndCta'
import StandardTechStack from '../../../components/StandardTechStack'
import AwardsSection from '../../../components/AwardsSection'
import FAQSection from '../../../components/FAQSection'

const VR_TECH_STACK = [
  {
    name: 'Platforms',
    items: [
      { name: 'Unity', img: '/assets/mobile-game/logos/unity.svg', alt: 'Unity VR' },
      { name: 'Unreal Engine', img: '/assets/mobile-game/logos/unrealengine.svg', alt: 'Unreal Engine VR' },
      { name: 'Godot Engine', img: '/assets/mobile-game/logos/godot.svg', alt: 'Godot Engine' },
      { name: 'Apple Vision / iOS', img: '/assets/mobile-game/logos/apple.svg', alt: 'Apple VR' },
      { name: 'Android XR', img: '/assets/mobile-game/logos/android.svg', alt: 'Android XR' },
      { name: 'AWS Cloud', img: '/assets/mobile-app/aws.jpg', alt: 'AWS Cloud' },
      { name: 'Microsoft Azure', img: '/assets/mobile-game/logos/azure.svg', alt: 'Microsoft Azure' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg', alt: 'Google Cloud' },
    ],
  },
  {
    name: 'Programming Language',
    items: [
      { name: 'C#', img: '/assets/mobile-game/logos/csharp.svg', alt: 'C#' },
      { name: 'C++', img: '/assets/mobile-game/logos/cplusplus.svg', alt: 'C++' },
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg', alt: 'Swift' },
      { name: 'Kotlin', img: '/assets/mobile-app/tech/kotlin.svg', alt: 'Kotlin' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg', alt: 'TypeScript' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg', alt: 'Python' },
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

const VR_FAQS = [
  {
    q: 'In what ways are your VR app development services superior to those of other companies?',
    a: (
      <>
        It is common for customers to inquire about our VR app development project methodology and the distinguishing factors of our VR development teams. The areas where we concentrate, that is, realism, performance, and thorough technical compatibility with{' '}
        <Link
          to="/ai-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI
        </Link>
        , spatial computing, and haptics, are explained to them.
      </>
    ),
  },
  {
    q: 'What measures do you take to guarantee that our VR app performs seamlessly on multiple headsets and platforms?',
    a: 'There are lots of clients who intend to connect with users of Meta Quest, HTC Vive, PlayStation VR, and they even consider web-based VR. We lead you through the whole process regarding compatibility, optimization, and the future user experience.',
  },
  {
    q: "What is the duration of your VR development team's process for creating a complete VR application?",
    a: (
      <>
        The{' '}
        <Link
          to="/blog/app-development-timeline"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          app development timeline
        </Link>{' '}
        question always arises as a major question. We decompose the phases into{' '}
        <Link
          to="/interactive-prototyping"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          prototyping
        </Link>
        , asset creation, engineering, and testing so that you are aware of what to expect from start to finish.
      </>
    ),
  },
  {
    q: 'Is there a continuous support and updates service that you offer after our VR app launch?',
    a: (
      <>
        Absolutely! We offer uninterrupted assistance to ensure your VR application remains stable, optimized, and current. Our{' '}
        <Link
          to="/ar-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AR developers
        </Link>{' '}
        take care of performance monitoring, fixing bugs, adding new features, making compatibility updates for new headsets, and long-term maintenance so that your VR experience is always seamless and can adapt to your changing needs.
      </>
    ),
  },
  {
    q: 'How much does VR app development cost?',
    a: (
      <>
        The cost of VR development projects typically falls in the range from $15,000 to more than $400,000, depending on sophistication, functionalities, and the platform. Simple VR applications can cost anywhere between $15,000–$20,000, and complex VR projects can cost more than $200,000. As soon as we get to know your needs and objectives, we will give you a transparent{' '}
        <Link
          to="/blog/mobile-app-development-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          app development cost
        </Link>{' '}
        breakdown.
      </>
    ),
  },
]

export default function VirtualRealityDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Virtual Reality Development Services | VR Development'
    const seoDesc =
      'Delivering innovative virtual reality development services to create immersive experiences. Expert VR development for businesses worldwide.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/virtual-reality-development')
  }, [])

  return (
    <div className="bg-[#0b0c0f] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero + Trusted Brand Logos Strip */}
      <VrHero />

      {/* 2. Virtual Reality Development Services (6 Cards) */}
      <VrServicesGrid />

      {/* 3. Industries (9 Icon Cards) + 4-Column Stats Bar */}
      <VrIndustriesAndStats />

      {/* 4. VR Portfolio Showcase (Homepage CaseStudies Component) */}
      <VrPortfolioShowcase />

      {/* 5. Why Leading Brands Trust Our Virtual Reality Development Services (6 Cards) */}
      <VrWhyChooseUs />

      {/* 6. Innovative Virtual Reality Development Services Leveraging Advanced Frameworks and Engines */}
      <StandardTechStack
        heading={
          <>
            Innovative Virtual Reality Development Services Leveraging{' '}
            <span className="text-[#00CE44]">Advanced Frameworks and Engines</span>
          </>
        }
        subtitle="We utilize the latest and most advanced VR development tools and frameworks available in the industry to provide top-notch virtual reality development services. Our skilled VR development team adheres to the best methods for real-time interaction, high-fidelity rendering, and smooth backend integration."
        categories={VR_TECH_STACK}
      />

      {/* 7. Harnessing Emerging Technologies + Deliver 2X More Impact CTA */}
      <VrAdvancedTechAndCta />

      {/* 8. Awards & Recognitions */}
      <AwardsSection />

      {/* 9. FAQs */}
      <FAQSection
        heading="Questions You Might Have About Our VR Development Services"
        faqs={VR_FAQS}
      />
    </div>
  )
}
