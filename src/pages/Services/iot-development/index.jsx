import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IotHero from './components/IotHero'
import IotServicesGrid from './components/IotServicesGrid'
import IotIndustriesAndStats from './components/IotIndustriesAndStats'
import IotPortfolioShowcase from './components/IotPortfolioShowcase'
import IotWhyChooseUs from './components/IotWhyChooseUs'
import IotCoreTechAndCta from './components/IotCoreTechAndCta'
import StandardTechStack from '../../../components/StandardTechStack'
import AwardsSection from '../../../components/AwardsSection'
import FAQSection from '../../../components/FAQSection'

const IOT_TECH_STACK = [
  {
    name: 'Platforms',
    items: [
      { name: 'AWS IoT', img: '/assets/mobile-app/aws.jpg', alt: 'AWS IoT' },
      { name: 'Microsoft Azure IoT', img: '/assets/mobile-game/logos/azure.svg', alt: 'Microsoft Azure IoT' },
      { name: 'Google Cloud IoT', img: '/assets/mobile-app/goole-cloud-platform.jpg', alt: 'Google Cloud IoT' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg', alt: 'Docker' },
      { name: 'Apple iOS', img: '/assets/mobile-game/logos/apple.svg', alt: 'Apple iOS' },
      { name: 'Android', img: '/assets/mobile-game/logos/android.svg', alt: 'Android' },
    ],
  },
  {
    name: 'Programming Language',
    items: [
      { name: 'C++', img: '/assets/mobile-game/logos/cplusplus.svg', alt: 'C++' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg', alt: 'Python' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg', alt: 'TypeScript' },
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg', alt: 'Swift' },
      { name: 'Kotlin', img: '/assets/mobile-app/tech/kotlin.svg', alt: 'Kotlin' },
      { name: 'C#', img: '/assets/mobile-game/logos/csharp.svg', alt: 'C#' },
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

const IOT_FAQS = [
  {
    q: 'What is IoT development, and how does it help my business?',
    a: 'The internet of things (IoT) connects machines, sensors, and software, enabling automation and providing real-time feedback. By leveraging data for decision-making, industries can improve efficiency, reduce manual processes, and achieve measurable ROI.',
  },
  {
    q: 'How much does an IoT app or system development cost?',
    a: (
      <>
        The cost for IoT development services usually lies between $5,000 for a basic proof-of-concept to over $1,000,000 for complex enterprise solutions, while factors like device complexity, firmware, cloud platforms,{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile applications
        </Link>
        , and integrations may impact the{' '}
        <Link
          to="/blog/mobile-app-development-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          cost
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do you ensure IoT security across devices and systems?',
    a: 'We rely on secure communication methods, management of identities, and cloud platforms that are ready for compliance. The devices, data, and applications are safe throughout the whole process due to the multi-layered detection of threats and the provision of secure OTA updates.',
  },
  {
    q: 'What industries can benefit from your IoT solutions?',
    a: (
      <>
        We offer IoT services to 20+ industries, including{' '}
        <Link
          to="/healthcare-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          health care
        </Link>
        , automotive, transportation,{' '}
        <Link
          to="/real-estate-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          real estate
        </Link>
        , manufacturing, sports,{' '}
        <Link
          to="/fintech-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          finance
        </Link>
        , and{' '}
        <Link
          to="/ecommerce-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          e-commerce
        </Link>
        . Each solution is tailored to the specific operational, regulatory, and performance needs of the industry in question.
      </>
    ),
  },
  {
    q: 'Which technologies and platforms do you use for IoT development?',
    a: (
      <>
        We have expertise in tools including MQTT, CoAP, HTTP/HTTPS, AWS IoT, Azure IoT Hub, Google Cloud IoT, InfluxDB, Grafana, Node-RED, Docker, and Kubernetes. The technology we leverage is inclusive of sensor integration, embedded firmware development, edge computing implementation, dashboard creation, and{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile application development
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do you offer post-launch maintenance and support?',
    a: 'Yes, we provide comprehensive service, including continuous monitoring, security patching, firmware updating, cloud optimization, and feature enhancements. With our support, your IoT remains secure and scalable, reliable, and optimized over time.',
  },
]

export default function IotDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'IoT App Development Company | Inceptives Digital'
    const seoDesc =
      'Leading IoT development company delivering protected, future-proof, and performance driven IoT solutions that connect devices and drive data-driven growth.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/iot-development')
  }, [])

  return (
    <div className="bg-[#0b0c0f] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero + Trusted Brand Logos Strip */}
      <IotHero />

      {/* 2. Innovative IoT Development Services (6 Cards) */}
      <IotServicesGrid />

      {/* 3. Industries (9 Icon Cards) + 4-Column Stats Bar */}
      <IotIndustriesAndStats />

      {/* 4. Reputed IoT Portfolio Showcase (Homepage CaseStudies Component) */}
      <IotPortfolioShowcase />

      {/* 5. Why Businesses Trust Inceptives Digital's IoT Development Services (6 Cards) */}
      <IotWhyChooseUs />

      {/* 6. Top-Tier IoT Tech-stack */}
      <StandardTechStack
        heading={
          <>
            Top-Tier IoT Tech-stack by leading{' '}
            <span className="text-[#00CE44]">IoT Development Company</span>
          </>
        }
        subtitle="Our high-performance IoT development company uses advanced frameworks and protocols like MQTT, CoAP, and REST APIs for secure and real-time communication between the clouds. Tools like Node-RED, Grafana, InfluxDB, and Docker allow the visualization, analytics, testing, and deployment of data and scalable, reliable, and interconnected systems."
        categories={IOT_TECH_STACK}
      />

      {/* 7. Core Technologies + Fuel Your IoT Vision CTA */}
      <IotCoreTechAndCta />

      {/* 8. Awards & Recognitions */}
      <AwardsSection />

      {/* 9. FAQs (Exact 6 IoT FAQs with Internal Links) */}
      <FAQSection
        heading="Frequently Asked Questions About IoT App Development Services"
        faqs={IOT_FAQS}
      />
    </div>
  )
}
