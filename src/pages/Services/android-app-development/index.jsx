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

const ANDROID_APP_SCHEMA = {
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
      '@id': 'https://inceptivesdigital.com/android-app-development#webpage',
      url: 'https://inceptivesdigital.com/android-app-development',
      name: 'Android App Development Company in USA | Inceptives Digital',
      description:
        'Inceptives Digital builds native Android apps in Kotlin and Java for startups, SMBs, and enterprise teams. Get a scoped estimate for your Android product in 48 hours.',
      isPartOf: {
        '@id': 'https://inceptivesdigital.com/#website',
      },
      publisher: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      dateModified: '2026-11-06',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://inceptivesdigital.com/android-app-development#breadcrumb',
      },
      mainEntity: {
        '@id': 'https://inceptivesdigital.com/android-app-development#service',
      },
      hasPart: {
        '@id': 'https://inceptivesdigital.com/android-app-development#faq',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://inceptivesdigital.com/android-app-development#breadcrumb',
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
          name: 'Android App Development',
          item: 'https://inceptivesdigital.com/android-app-development',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://inceptivesdigital.com/android-app-development#service',
      name: 'Android App Development',
      serviceType: 'Custom Android App Development',
      description:
        'Custom native Android application development using Kotlin, Java, Android SDK, and Jetpack Compose for smartphones, tablets, foldables, wearables, Android TV, and automotive displays, including consulting, UI/UX design, testing and QA, Google Play deployment, and ongoing maintenance and modernization.',
      url: 'https://inceptivesdigital.com/android-app-development',
      provider: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Android App Development Cost',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Basic Android App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 15000,
              maxPrice: 40000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Mid-Complexity Android App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 40000,
              maxPrice: 80000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Complex Android App',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 80000,
              priceCurrency: 'USD',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://inceptivesdigital.com/android-app-development#faq',
      url: 'https://inceptivesdigital.com/android-app-development',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does it cost to hire an Android app development company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Basic Android applications typically cost $15,000 - $40,000, mid-complexity products range from $40,000 - $80,000, and advanced platforms start at $80,000 and can exceed $150,000. The final development cost depends on application features, system integrations, and security requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to develop an Android application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic Android app typically takes 8–12 weeks, while mid-complexity applications require around 12–20 weeks. Enterprise platforms may take six months or longer, depending on integrations, security requirements, and development scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I hire a dedicated Android development team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Inceptives Digital provides dedicated Android developers who extend your in-house team, plus complete project teams for end-to-end delivery. Your development scope and internal resources determine which engagement model fits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I hire an Android app development company or a freelancer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hire a freelancer for a limited Android development task with clear requirements. Choose an Android app development company when your product needs coordinated design, backend engineering, testing, and ongoing technical support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Kotlin or Java better for Android app development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kotlin is the recommended choice for most new Android applications because Google prioritizes Kotlin support and modern Android development tools. Java remains practical for maintaining existing Android codebases and legacy integrations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose native Kotlin or Flutter for my Android app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose native Kotlin for Android-specific integrations, demanding performance requirements, or deeper platform control. Flutter or React Native are suitable when your product targets both Android and iOS and can share most application functionality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you rebuild or modernize an existing Android app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Inceptives Digital can modernize existing Android applications after reviewing their codebase, architecture, and dependencies. The assessment determines whether targeted improvements or a complete rebuild better meets your business requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Android apps integrate with existing CRM or ERP software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Custom Android applications can integrate with CRM, ERP, and other enterprise systems through supported backend APIs. Integration complexity depends on system compatibility, authentication requirements, and how data moves between platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to publish an Android app on Google Play?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Publishing on Google Play can take seven days or longer for review. New personal developer accounts also need a closed test with 12 testers for 14 continuous days before requesting production access.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who owns the source code of my Android app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Android app source code ownership depends on your development contract. At Inceptives Digital, the agreement should specify intellectual property rights, source code delivery, and ownership of design assets before development begins.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you help promote my Android app after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Inceptives Digital offers App Store Optimization for Google Play and post-launch analytics support. Store listing improvements support app discoverability, while user behavior data helps identify opportunities for product improvements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you secure a custom Android application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom Android app security involves secure authentication, encrypted communication, and protected data storage. Inceptives Digital also considers Android Keystore, API access controls, and applicable compliance requirements during technical planning.',
          },
        },
      ],
    },
  ],
}

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

    let schemaScript = document.getElementById('android-app-jsonld-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'android-app-jsonld-schema'
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }
    schemaScript.textContent = JSON.stringify(ANDROID_APP_SCHEMA)

    return () => {
      const existing = document.getElementById('android-app-jsonld-schema')
      if (existing) existing.remove()
    }
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
