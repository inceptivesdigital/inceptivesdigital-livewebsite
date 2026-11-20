import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import AgentClosingCta from './components/AgentClosingCta'
import AgentDifference from './components/AgentDifference'
import AgentFaqs from './components/AgentFaqs'
import AgentHero from './components/AgentHero'
import AgentIndustries from './components/AgentIndustries'
import AgentProcess from './components/AgentProcess'
import AgentServices from './components/AgentServices'
import AgentTechStack from './components/AgentTechStack'
import AgentTypes from './components/AgentTypes'

export default function AiAgentDevelopmentPage() {
  useEffect(() => {
    const title = 'AI Agent Development Company | Custom AI Agent Development'
    const description =
      'Inceptives Digital, a leading AI agent development company, builds intelligent agents that automate workflows and deliver measurable business impact.'

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

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ai-agent-development')
  }, [])

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <AgentHero />
      <AgentDifference />
      <AgentServices />
      <AgentTypes />
      <AgentIndustries />
      <CaseStudies
        heading={
          <>
            AI Agent Development <span className="text-[#00CE44]">Case Studies and Results</span>
          </>
        }
        subtitle="Explore real projects that automated multi-step workflows, connected business systems, and reduced repetitive operational work."
      />
      <Testimonials
        heading={
          <>
            What Clients Say About Our{' '}
            <span className="text-[#00CE44]">AI Agent Development</span>
          </>
        }
        subtitle="Hear directly from clients about the delivery experience, operational improvements, and business value created by their AI solutions."
      />
      <AgentProcess />
      <AgentTechStack />
      <AgentFaqs />
      <AgentClosingCta />
    </div>
  )
}
