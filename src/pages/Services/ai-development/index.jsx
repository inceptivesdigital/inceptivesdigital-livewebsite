import { useEffect } from 'react'
import AiHero from './components/AiHero'
import AiCoreServices from './components/AiCoreServices'
import AiProcess from './components/AiProcess'
import AiStages from './components/AiStages'
import AiCaseStudies from './components/AiCaseStudies'
import AiTestimonials from './components/AiTestimonials'
import AiIndustries from './components/AiIndustries'
import AiPlatforms from './components/AiPlatforms'
import AiTechStack from './components/AiTechStack'
import AiSecurity from './components/AiSecurity'
import AiEngagements from './components/AiEngagements'
import AiMidCta from './components/AiMidCta'
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

      {/* 3. Delivery Process (6 Interactive Steps) */}
      <AiProcess />

      {/* 4. Stages: Startups vs SMBs */}
      <AiStages />

      {/* 5. Case Studies Carousel */}
      <AiCaseStudies />

      {/* 6. Testimonials Vertical Scroll */}
      <AiTestimonials />

      {/* 7. Industry Solutions (8 Cards Grid + CTA) */}
      <AiIndustries />

      {/* 8. AI Platforms (OpenAI, Anthropic, LangChain, Hugging Face, LLaMA) */}
      <AiPlatforms />

      {/* 9. Tech Stack (Solid Green Panels with White Badges) */}
      <AiTechStack />

      {/* 10. Security & Compliance (4 Cards) */}
      <AiSecurity />

      {/* 11. Engagements (4 Cards with Best For) */}
      <AiEngagements />

      {/* 12. Mid-Page CTA Banner */}
      <AiMidCta />

      {/* 13. FAQs Accordion (12 Complete Questions) */}
      <AiFaqs />

      {/* 14. Global Contact Form */}
      <BookingCTA />

      {/* 15. Calendly Scheduler */}
      <ScheduleSection />
    </div>
  )
}
