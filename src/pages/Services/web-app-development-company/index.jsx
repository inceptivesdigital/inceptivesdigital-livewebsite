import { useEffect } from 'react'
import WebAppHero from './components/WebAppHero'
import WebAppTrustedLogos from './components/WebAppTrustedLogos'
import WebAppGrowthOutcomes from './components/WebAppGrowthOutcomes'
import WebAppServicesGrid from './components/WebAppServicesGrid'
import WebAppStatsBar from './components/WebAppStatsBar'
import WebAppComparisonTable from './components/WebAppComparisonTable'
import WebAppIndustries from './components/WebAppIndustries'
import WebAppCaseStudies from './components/WebAppCaseStudies'
import WebAppTestimonials from './components/WebAppTestimonials'
import WebAppWhyChooseUs from './components/WebAppWhyChooseUs'
import WebAppProcess from './components/WebAppProcess'
import WebAppTechStack from './components/WebAppTechStack'
import WebAppNextGenTech from './components/WebAppNextGenTech'
import WebAppCostAndCTA from './components/WebAppCostAndCTA'
import WebAppFAQs from './components/WebAppFAQs'

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
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <WebAppHero />

      {/* 2. Trusted by Companies Turning Vision Into Scalable Products */}
      <WebAppTrustedLogos />

      {/* 3. 60% of Businesses Grew With the Right Web Application */}
      <WebAppGrowthOutcomes />

      {/* 4. Custom Web App Development Services Scoped Around What Your Product Actually Needs */}
      <WebAppServicesGrid />

      {/* 5. Stats & Mid CTA */}
      <WebAppStatsBar />

      {/* 6. Web Apps vs Native Apps: Choosing the Right Approach */}
      <WebAppComparisonTable />

      {/* 7. Industries Our Team Has Shipped Web Products Across */}
      <WebAppIndustries />

      {/* 8. Selected Case Studies of Web Products We Developed */}
      <WebAppCaseStudies />

      {/* 9. Testimonials */}
      <WebAppTestimonials />

      {/* 10. Why Businesses Choose Inceptives for Web App Development */}
      <WebAppWhyChooseUs />

      {/* 11. The Framework Behind Successful Web Applications */}
      <WebAppProcess />

      {/* 12. Tech Stack We Use for Modern Web Application Development */}
      <WebAppTechStack />

      {/* 13. Technologies Powering the Next Generation of Web Applications */}
      <WebAppNextGenTech />

      {/* 14. How Much Does Web Application Development Cost? + Bottom CTA */}
      <WebAppCostAndCTA />

      {/* 15. FAQs */}
      <WebAppFAQs />
    </div>
  )
}
