import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import AiMvpClosingCta from './components/AiMvpClosingCta'
import AiMvpComparison from './components/AiMvpComparison'
import AiMvpFaqs from './components/AiMvpFaqs'
import AiMvpHero from './components/AiMvpHero'
import AiMvpIndustries from './components/AiMvpIndustries'
import AiMvpIndustryCta from './components/AiMvpIndustryCta'
import AiMvpProcess from './components/AiMvpProcess'
import AiMvpServices from './components/AiMvpServices'
import AiMvpTechStack from './components/AiMvpTechStack'

export default function AiMvpDevelopmentPage() {
  useEffect(() => {
    const title = 'AI MVP Development Services | Validate Your AI Idea'
    const description =
      'Validate your AI idea with rapid MVP development. Test feasibility, data, architecture, and user value before committing to a full-scale AI build.'
    const canonical = 'https://inceptivesdigital.com/ai-mvp-development'

    document.title = title

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector)
      if (!element && selector.startsWith('meta[')) {
        element = document.createElement('meta')
        const [, key, keyValue] = selector.match(/(name|property)="([^"]+)"/) || []
        if (key && keyValue) element.setAttribute(key, keyValue)
        document.head.appendChild(element)
      }
      if (element) element.setAttribute(attribute, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)
  }, [])

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <AiMvpHero />
      <AiMvpComparison />
      <AiMvpServices />
      <AiMvpIndustries />
      <CaseStudies
        heading="AI MVPs Built to Test What Matters First"
        subtitle="Explore focused AI MVPs created to validate demand, technical feasibility, and product value before committing to full-scale development."
      />
      <Testimonials
        heading="What Clients Learned From Launching an AI MVP"
        subtitle="Hear how clients reduced uncertainty, tested core assumptions, and gained clearer direction before expanding their AI products."
      />
      <AiMvpIndustryCta />
      <AiMvpProcess />
      <AiMvpTechStack />
      <AiMvpFaqs />
      <AiMvpClosingCta />
    </div>
  )
}
