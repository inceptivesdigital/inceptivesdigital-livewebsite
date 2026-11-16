import { useEffect } from 'react'
import AiHero from './components/AiHero'
import AiCoreServices from './components/AiCoreServices'
import AiMidCta from './components/AiMidCta'
import AiStages from './components/AiStages'
import AiCaseStudies from './components/AiCaseStudies'
import AiIndustries from './components/AiIndustries'
import AiProcess from './components/AiProcess'
import AiTestimonials from './components/AiTestimonials'
import AiTechStack from './components/AiTechStack'
import AiPlatforms from './components/AiPlatforms'
import AiSecurity from './components/AiSecurity'
import AiEngagements from './components/AiEngagements'
import AiFaqs from './components/AiFaqs'
import BookingCTA from '../../../components/BookingCTA'
import ScheduleSection from '../../../components/ScheduleSection'

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
      {/* 1. Hero Section */}
      <AiHero />

      {/* 2. Core Services & Automation Tabs */}
      <AiCoreServices />

      {/* 3. Competitive AI Double Phone CTA Banner (Matching Mobile-App) */}
      <AiMidCta />

      {/* 4. Stages: Startups vs SMBs */}
      <AiStages />

      {/* 5. Case Studies Carousel */}
      <AiCaseStudies />

      {/* 6. Industries (Homepage-Style Clean 4-Column Grid, Zero Icon Border/Bg/Padding) */}
      <AiIndustries />

      {/* 7. Delivery Process (Matching Homepage ProcessSection / DevelopmentProcess with Drag Tabs & Clean Detail Card) */}
      <AiProcess />

      {/* 8. Client Testimonials */}
      <AiTestimonials />

      {/* 9. Tech Stack Powering Our Services (Matching Mobile-App Solid Green Panels Layout) */}
      <AiTechStack />

      {/* 10. AI Platforms */}
      <AiPlatforms />

      {/* 11. Security & Compliance */}
      <AiSecurity />

      {/* 12. Engagement Models */}
      <AiEngagements />

      {/* 13. FAQs Accordion */}
      <AiFaqs />

      {/* 14. Global Contact Form */}
      <BookingCTA />

      {/* 15. Calendly Scheduler */}
      <ScheduleSection />
    </div>
  )
}
