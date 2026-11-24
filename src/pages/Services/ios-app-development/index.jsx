import { useEffect } from 'react'
import IosHero from './components/IosHero'
import IosTrustedLogos from './components/IosTrustedLogos'
import IosEngineeringStandard from './components/IosEngineeringStandard'
import IosServicesGrid from './components/IosServicesGrid'
import IosAppleEcosystem from './components/IosAppleEcosystem'
import IosMidCTA from './components/IosMidCTA'
import IosIndustries from './components/IosIndustries'
import IosArchitectureQuiz from './components/IosArchitectureQuiz'
import IosCaseStudies from './components/IosCaseStudies'
import IosTestimonials from './components/IosTestimonials'
import IosAchievements from './components/IosAchievements'
import IosBriefCTA from './components/IosBriefCTA'
import IosWhyChooseUs from './components/IosWhyChooseUs'
import IosGlobalLocations from './components/IosGlobalLocations'
import IosDevelopmentProcess from './components/IosDevelopmentProcess'
import IosTechStackTable from './components/IosTechStackTable'
import IosArchitectureCards from './components/IosArchitectureCards'
import IosTechPartnerships from './components/IosTechPartnerships'
import IosAdvancedTech from './components/IosAdvancedTech'
import IosEngagementModels from './components/IosEngagementModels'
import IosFeatureHoursTable from './components/IosFeatureHoursTable'
import IosCostSection from './components/IosCostSection'
import IosQuoteCTA from './components/IosQuoteCTA'
import IosFAQs from './components/IosFAQs'

const IOS_APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://inceptivesdigital.com/#organization',
      name: 'Inceptives Digital',
      legalName: 'IT Core Solutions LLC',
      url: 'https://inceptivesdigital.com/',
      logo: 'https://inceptivesdigital.com/wp-content/uploads/2026/07/logo.png',
      description:
        'Inceptives Digital builds mobile applications, digital products, and AI-powered systems for businesses.',
      telephone: '+1-469-788-8527',
      email: 'info@inceptivesdigital.com',
      sameAs: [
        'https://clutch.co/profile/inceptives-digital',
        'https://www.trustpilot.com/review/inceptivesdigital.com',
        'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
        'https://www.linkedin.com/company/inceptivesdigital/',
        'https://www.facebook.com/inceptivesdigital',
        'https://www.instagram.com/inceptivesdigital/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://inceptivesdigital.com/#website',
      url: 'https://inceptivesdigital.com/',
      name: 'Inceptives Digital',
      publisher: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://inceptivesdigital.com/ios-app-development#webpage',
      url: 'https://inceptivesdigital.com/ios-app-development',
      name: 'iOS App Development Company in the USA | Inceptives Digital',
      description:
        'Inceptives Digital provides custom iOS app development services using Swift, SwiftUI, and UIKit to build native iPhone and iPad applications.',
      isPartOf: {
        '@id': 'https://inceptivesdigital.com/#website',
      },
      publisher: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      dateModified: '2026-10-30',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://inceptivesdigital.com/ios-app-development#breadcrumb',
      },
      mainEntity: {
        '@id': 'https://inceptivesdigital.com/ios-app-development#service',
      },
      hasPart: {
        '@id': 'https://inceptivesdigital.com/ios-app-development#faq',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://inceptivesdigital.com/ios-app-development#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://inceptivesdigital.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Mobile App Development',
          item: 'https://inceptivesdigital.com/mobile-app-development',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'iOS App Development',
          item: 'https://inceptivesdigital.com/ios-app-development',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://inceptivesdigital.com/ios-app-development#service',
      name: 'iOS App Development',
      serviceType: 'Custom iOS App Development',
      description:
        'Custom native iOS application development for iPhone and iPad using Swift, SwiftUI, UIKit, Apple frameworks, API integrations, testing, App Store deployment, and ongoing maintenance.',
      url: 'https://inceptivesdigital.com/ios-app-development',
      provider: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'iOS App Development Cost',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Basic iOS App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 15000,
              maxPrice: 35000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Mid-Complexity iOS App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 35000,
              maxPrice: 90000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Complex iOS App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 90000,
              priceCurrency: 'USD',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://inceptivesdigital.com/ios-app-development#faq',
      url: 'https://inceptivesdigital.com/ios-app-development',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does custom iOS app development cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom iOS app development costs $15,000 – $35,000 for basic applications and $35,000 – $90,000 for mid-complexity projects. Enterprise iOS platforms can exceed $150,000, depending on functionality, backend requirements, and supported Apple devices.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take an iOS app development company to build an app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic iPhone app typically takes 8–12 weeks, while mid-complexity applications require 12–20 weeks. Enterprise iOS development timelines depend on technical requirements, Apple integrations, and testing complexity before App Store submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose native iOS app development or cross-platform frameworks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose native iOS development for applications requiring advanced Apple integrations, such as HealthKit or ARKit. Cross-platform development, including Kotlin Multiplatform app development, suits businesses launching on iPhone and Android when both platforms share similar functionality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure a high App Store first-submission acceptance rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our iOS developers review Apple’s submission guidelines, privacy disclosures, and in-app purchase requirements before release. These checks support our reported 96% first-submission acceptance rate, although Apple makes the final approval decision.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do we own the source code and intellectual property from day one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You’ll have access to your iOS application’s source code during development. Your contract specifies when intellectual property ownership transfers and which project assets you’ll receive at each agreed milestone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you modernize legacy iOS applications from Objective-C to Swift?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our iOS developers can migrate legacy Objective-C components to Swift without unnecessarily rebuilding the application. Existing UIKit interfaces can remain where appropriate, with modernization priorities determined through a codebase assessment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What post-launch support and iOS app maintenance plans are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide iOS app maintenance after launch, including bug fixes and compatibility updates. You can also request ongoing development support, with response times and coverage defined in your service agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle data security, privacy, and regulatory compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We protect iOS application data through secure authentication and encrypted communication. For healthcare or financial apps, our engineers assess applicable HIPAA, PCI DSS, and privacy requirements before implementing additional safeguards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you integrate Apple Intelligence and on-device AI into our iOS app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our AI development team supports Core ML, Apple’s Foundation Models framework, and App Intents where compatible. These technologies enable on-device AI capabilities, depending on hardware support and application requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is your development process for custom iOS mobile apps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We begin custom iOS app development with discovery and an approved interface prototype. Swift engineering proceeds through Agile sprints, followed by device testing and preparation for App Store submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'What engagement models do you offer for hiring iOS developers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer fixed-scope development, Agile delivery, dedicated iOS product teams, and team extension. Businesses can select an engagement model based on their project scope, internal engineering capacity, and expected development duration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you develop native applications for both iPhone and iPad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our iPhone and iPad app development services use Swift and SwiftUI to support both devices. Shared application logic reduces duplication, while adaptive interfaces accommodate iPad multitasking and larger displays.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I hire dedicated iOS developers for an existing application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Businesses can hire dedicated iOS developers to work directly with their existing engineering team. Whether you’re extending a SwiftUI application or maintaining legacy UIKit code, the engagement follows your established development workflow.',
          },
        },
      ],
    },
  ],
}

export default function IosAppDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'iOS App Development Company in the USA | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is an iOS app development company in USA delivering custom iPhone apps, Swift engineering, App Store deployment, and post-launch support.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ios-app-development')

    let schemaScript = document.getElementById('ios-app-jsonld-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'ios-app-jsonld-schema'
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }
    schemaScript.textContent = JSON.stringify(IOS_APP_SCHEMA)

    return () => {
      const existing = document.getElementById('ios-app-jsonld-schema')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <IosHero />

      {/* 2. Trusted by Global Innovators */}
      <IosTrustedLogos />

      {/* 3. Custom iOS App Development Services Backed by a Proven Engineering Standard */}
      <IosEngineeringStandard />

      {/* 4. Our End-to-End iOS Application Development Services (6 cards) */}
      <IosServicesGrid />

      {/* 5. One Shared Codebase. Built for Every Apple Device Your Customers Use (5 cards) */}
      <IosAppleEcosystem />

      {/* 6. The Best iPhone Application Your Business Deserves is Developed Here. (CTA) */}
      <IosMidCTA />

      {/* 7. iOS App Development Solutions Across 20+ Industries (8 cards) */}
      <IosIndustries />

      {/* 8. Make a 60-Second Architecture Decision (Interactive 4-Question Quiz + Lead Form + Results) */}
      <IosArchitectureQuiz />

      {/* 9. Explore the iOS Applications We've Taken to Market (5 Case Studies Carousel) */}
      <IosCaseStudies />

      {/* 10. What Clients Say About Inceptives Digital’s iOS App Development Services */}
      <IosTestimonials />

      {/* 11. Inceptives Digital’s Achievements (4 Awards + Recognitions) */}
      <IosAchievements />

      {/* 12. Bring Your Brief. We'll Put a Scope Behind It. (CTA) */}
      <IosBriefCTA />

      {/* 13. The Standard That Makes Inceptives Digital a Top iOS App Development Company + Proof Metrics Row */}
      <IosWhyChooseUs />

      {/* 14. Meet the Dedicated iOS Engineering Team Serving Across 7 Global Tech Hubs */}
      <IosGlobalLocations />

      {/* 15. Our iOS Application Development Services Process, Step by Step (5 Stages) */}
      <IosDevelopmentProcess />

      {/* 16. Technologies Behind Our Native iOS App Development Services (10-Row Table) */}
      <IosTechStackTable />

      {/* 17. How We Architect Native iPhone and iOS Applications (4 Numbered Cards) */}
      <IosArchitectureCards />

      {/* 18. Technology Partnerships That Strengthen Every Digital Product (12 Partner Logos) */}
      <IosTechPartnerships />

      {/* 19. Advanced Technologies Powering Our iOS App Development Services (6 Cards) */}
      <IosAdvancedTech />

      {/* 20. Hire iOS App Developers with an Engagement Model That Fits Your Project (4 Cards) */}
      <IosEngagementModels />

      {/* 21. How Many Hours Does Each iOS Feature Take to Build (12-Row Table) */}
      <IosFeatureHoursTable />

      {/* 22. How Much Does iOS App Development Cost? (3 Tier Cards) */}
      <IosCostSection />

      {/* 23. Price Your Next iPhone App With Our Development Team (CTA) */}
      <IosQuoteCTA />

      {/* 24. Frequently Asked Questions About iOS App Development (13 FAQs) */}
      <IosFAQs />
    </div>
  )
}
