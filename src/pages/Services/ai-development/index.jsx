import { useEffect } from 'react'
import AiHero from './components/AiHero'
import AiDifference from './components/AiDifference'
import AiCoreServices from './components/AiCoreServices'
import AiMidCta from './components/AiMidCta'
import AiStages from './components/AiStages'
import AiCaseStudies from './components/AiCaseStudies'
import AiTestimonials from './components/AiTestimonials'
import AiIndustries from './components/AiIndustries'
import AiProcess from './components/AiProcess'
import AiTechStack from './components/AiTechStack'
import AiPlatforms from './components/AiPlatforms'
import AiSecurity from './components/AiSecurity'
import AiEngagements from './components/AiEngagements'
import AiFaqs from './components/AiFaqs'
import BookingCTA from '../../../components/BookingCTA'

export default function AiDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Artificial Intelligence (AI) Development Services | AI Software'
    const seoDesc =
      'End-to-end AI development services covering chatbots, agents, machine learning, generative AI, and automation. Trusted by startups, SMBs, and growing businesses'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ai-development')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 01. Hero Section */}
      <AiHero />

      {/* 02. Core AI & Automation Services (AI Development Services Built to Perform Under Real Load) */}
      <AiCoreServices />

      {/* 03. Delivery Process (Clone of Homepage ProcessSection) */}
      <AiProcess />

      {/* 04. The Difference Between AI That Assists and AI That Operates */}
      <AiDifference />

      {/* 05. Mid CTA (Build AI Into Foundation) */}
      <AiMidCta />

      {/* 06. By Business Size: Startups vs SMBs */}
      <AiStages />

      {/* 08. Featured AI Case Studies */}
      <AiCaseStudies />

      {/* 09. Client Testimonials */}
      <AiTestimonials />

      {/* 10. Industries Grid */}
      <AiIndustries />

      {/* 11. Tech Stack (Solid Green Panels) */}
      <AiTechStack />

      {/* 12. AI Platforms We Build On */}
      <AiPlatforms />

      {/* 13. Security and Compliance */}
      <AiSecurity />

      {/* 14. Engagement Models */}
      <AiEngagements />

      {/* 15. FAQs Accordion */}
      <AiFaqs />

      {/* 16. Contact Form */}
      <BookingCTA />
    </div>
  )
}
