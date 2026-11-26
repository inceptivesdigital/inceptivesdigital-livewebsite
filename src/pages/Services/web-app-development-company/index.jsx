import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import WebAppHero from './components/WebAppHero'
import WebAppTrustedLogos from './components/WebAppTrustedLogos'
import WebAppGrowthOutcomes from './components/WebAppGrowthOutcomes'
import WebAppBusinessSizes from './components/WebAppBusinessSizes'
import WebAppServicesGrid from './components/WebAppServicesGrid'
import WebAppStatsBar from './components/WebAppStatsBar'
import WebAppTypesAccordion from './components/WebAppTypesAccordion'
import WebAppIndustries from './components/WebAppIndustries'
import WebAppCaseStudies from './components/WebAppCaseStudies'
import WebAppMidCtaBanner from './components/WebAppMidCtaBanner'
import WebAppProcess from './components/WebAppProcess'
import WebAppTechStack from './components/WebAppTechStack'
import WebAppNextGenTech from './components/WebAppNextGenTech'
import WebAppTechPartners from './components/WebAppTechPartners'
import WebAppComparisonTable from './components/WebAppComparisonTable'
import WebAppTestimonials from './components/WebAppTestimonials'
import WebAppAwards from './components/WebAppAwards'
import WebAppRegions from './components/WebAppRegions'
import WebAppWhyChooseUs from './components/WebAppWhyChooseUs'
import WebAppSecurity from './components/WebAppSecurity'
import WebAppCostAndCTA from './components/WebAppCostAndCTA'
import WebAppFAQs from './components/WebAppFAQs'

const WEB_APP_SCHEMA = {
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
      '@id': 'https://inceptivesdigital.com/web-app-development-company#webpage',
      url: 'https://inceptivesdigital.com/web-app-development-company',
      name: 'Web App Development Company | Inceptives Digital',
      description:
        'Inceptives Digital is a web app development company that builds scalable, high-performance digital products. Explore our services and start your project today.',
      isPartOf: {
        '@id': 'https://inceptivesdigital.com/#website',
      },
      publisher: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      dateModified: '2026-11-06',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://inceptivesdigital.com/web-app-development-company#breadcrumb',
      },
      mainEntity: {
        '@id': 'https://inceptivesdigital.com/web-app-development-company#service',
      },
      hasPart: {
        '@id': 'https://inceptivesdigital.com/web-app-development-company#faq',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://inceptivesdigital.com/web-app-development-company#breadcrumb',
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
          name: 'Web App Development Company',
          item: 'https://inceptivesdigital.com/web-app-development-company',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://inceptivesdigital.com/web-app-development-company#service',
      name: 'Web App Development',
      serviceType: 'Custom Web Application Development',
      description:
        'Custom web application development for startups, SMBs, and enterprises, including full-stack development with React, Next.js, Vue, Node.js, and Python, UI/UX design, API development and integration, MVP development, progressive web apps, cloud application development, web application modernization, and ongoing maintenance and support.',
      url: 'https://inceptivesdigital.com/web-app-development-company',
      provider: {
        '@id': 'https://inceptivesdigital.com/#organization',
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
        {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        {
          '@type': 'Country',
          name: 'Canada',
        },
        {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
        {
          '@type': 'Country',
          name: 'Singapore',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Application Development Cost',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Simple Web Applications',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 20000,
              maxPrice: 50000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Mid-Complexity Web Products',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 50000,
              maxPrice: 100000,
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Complex and Enterprise-Grade Web Platforms',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 100000,
              priceCurrency: 'USD',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://inceptivesdigital.com/web-app-development-company#faq',
      url: 'https://inceptivesdigital.com/web-app-development-company',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a web application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A web application is software that runs in a browser, such as Salesforce, Notion, or Shopify. It processes data, responds to user inputs, and scales with the business.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a web app and a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website presents information. A web application is interactive software. Users log in, complete tasks, and the product responds to their inputs in real time.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a web application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A focused web application MVP typically takes 8–14 weeks, while a production-ready product may require 12–24 weeks. Enterprise platforms take longer depending on functionality, integrations, and technical scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does web application development cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom web application development at Inceptives Digital starts around $20,000 for focused products and can exceed $200,000 for enterprise platforms. Final pricing depends on functionality, integrations, and infrastructure requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies do you use for web application development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "React, Next.js, and Vue support frontend development, while Node.js, Python, and Go handle backend requirements. AWS, Google Cloud, PostgreSQL, MongoDB, and Redis support the application's infrastructure and data architecture.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide web app development for startups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Startups can begin with an MVP that validates essential product functionality before committing to a larger build. The initial scope reflects the features needed for launch and the product's next development priorities.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can you migrate an existing web application to a new stack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. As a custom web app development firm, we handle full migrations, including codebase restructuring, feature parity validation, and performance benchmarking, without disrupting the users already on the product.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle security in web applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Security requirements shape application architecture from the beginning. Authentication, role-based access, encryption, and API protection follow the product's risk profile and applicable regulatory requirements.",
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after the web application launches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Post-launch support can cover production issues, security updates, dependency maintenance, and performance monitoring. Further development follows the product's changing requirements under the agreed engagement.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build custom web applications or use templates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Everything is built from scratch around the product's actual requirements. Templates and off-the-shelf solutions stop serving complex products at a predictable point.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure a web application performs at scale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We assess expected workloads during architecture planning and test critical application paths before launch. Performance monitoring after deployment helps identify bottlenecks as traffic and usage patterns change.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you integrate third-party tools into our web application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Payment processors, CRMs, analytics platforms, logistics APIs, and data pipelines are all handled. Every integration is built with long-term maintainability in mind.',
          },
        },
      ],
    },
  ],
}

export default function WebAppDevelopmentCompanyPage() {
  useEffect(() => {
    const seoTitle = 'Web App Development Company | Inceptives Digital'
    const seoDesc =
      'Inceptives Digital is a web app development company that builds scalable, high-performance digital products. Explore our services and start your project today.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/web-app-development-company')

    let schemaScript = document.getElementById('webapp-jsonld-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'webapp-jsonld-schema'
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }
    schemaScript.textContent = JSON.stringify(WEB_APP_SCHEMA)

    return () => {
      const existing = document.getElementById('webapp-jsonld-schema')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black overflow-x-clip">
      {/* 1. Hero Section */}
      <WebAppHero />

      {/* 2. Trusted by Businesses Building Their Next Web Application */}
      <WebAppTrustedLogos />

      {/* 3. Our Custom Web Applications, Engineered Around Real Operations */}
      <WebAppGrowthOutcomes />

      {/* 4. Web App Development for Startups, SMBs, and Enterprises */}
      <WebAppBusinessSizes />

      {/* 5. Web Application Development Services for Every Stage of Your Product */}
      <WebAppServicesGrid />

      {/* 6. Stats Bar */}
      <WebAppStatsBar />

      {/* 7. Types of Custom Web Applications We Build for Different Business Demands */}
      <WebAppTypesAccordion />

      {/* 8. Shipping Web Products Across 20+ Industries */}
      <WebAppIndustries />

      {/* 9. Explore Our Portfolio as a Top Web App Development Company */}
      <WebAppCaseStudies />

      {/* 10. Mid CTA 1 */}
      <WebAppMidCtaBanner
        heading="Ready to Build the Web Application Your Business Will Be Known For?"
        description={
          <>
            From customer portals and SaaS platforms to enterprise web app development, every successful web application starts with the right foundation and a clear{' '}
            <Link
              to="/product-launch-strategy"
              className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              product launch strategy
            </Link>
            . Let&apos;s build a product that drives growth long after launch.
          </>
        }
        buttonText="Start Your Project"
      />

      {/* 11. Web Application Development Process */}
      <WebAppProcess />

      {/* 12. Web App Development Technologies We Build With */}
      <WebAppTechStack />

      {/* 13. Future-Forward Web App Development Services, Woven With Next-Gen Technology */}
      <WebAppNextGenTech />

      {/* 14. Backed by Technology Partners */}
      <WebAppTechPartners />

      {/* 15. Web Apps vs Native Apps: Choosing the Right Approach */}
      <WebAppComparisonTable />

      {/* 16. Mid CTA 2 */}
      <WebAppMidCtaBanner
        heading="Tell Us Your Web Application Idea, and We Will Bring It to Life"
        description="Share your idea with the team today. We will scope it, plan it, and build it into a product that lasts."
        buttonText="Start the Conversation"
        image="/assets/digital-product-development/product-cta.png"
        imageAlt="Web Application Showcase"
      />

      {/* 17. Testimonials */}
      <WebAppTestimonials />

      {/* 18. Recognized as a Web App Development Company That Delivers */}
      <WebAppAwards />

      {/* 19. Web App Development Company Based in 7 Tech Regions */}
      <WebAppRegions />

      {/* 20. Why Businesses Choose Inceptives for Web App Development */}
      <WebAppWhyChooseUs />

      {/* 21. Security Isn't a Feature at Inceptives Digital. It's the Foundation */}
      <WebAppSecurity />

      {/* 22. How Much Does Web Application Development Cost? + Bottom CTA */}
      <WebAppCostAndCTA />

      {/* 23. FAQs about Web App Development Services */}
      <WebAppFAQs />
    </div>
  )
}
