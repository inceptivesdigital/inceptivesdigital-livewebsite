import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import AutomationClosingCta from './components/AutomationClosingCta'
import AutomationFaqs from './components/AutomationFaqs'
import AutomationHero from './components/AutomationHero'
import AutomationImpact from './components/AutomationImpact'
import AutomationIndustries from './components/AutomationIndustries'
import AutomationIndustryCta from './components/AutomationIndustryCta'
import AutomationProblems from './components/AutomationProblems'
import AutomationProcess from './components/AutomationProcess'
import AutomationServices from './components/AutomationServices'
import AutomationTechStack from './components/AutomationTechStack'

export default function AiAutomationServicesPage() {
  useEffect(() => {
    const title = 'AI Automation Services for Businesses'
    const description =
      'AI automation services that automate workflows, reduce manual effort, and deliver measurable operational impact across enterprise processes.'
    const canonical = 'https://inceptivesdigital.com/ai-automation-services'

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
    <div className="w-full overflow-x-hidden bg-black text-white">
      <AutomationHero />
      <AutomationProblems />
      <AutomationServices />
      <AutomationImpact />
      <AutomationIndustries />
      <CaseStudies
        heading="AI Automation Projects That Changed How Work Gets Done"
        subtitle="See how businesses used AI automation to remove repetitive tasks, connect workflows, reduce delays, and improve operational efficiency."
      />
      <Testimonials
        heading="What Clients Say About Automating Their Operations"
        subtitle="Hear how clients experienced the transition from manual processes to faster, more reliable workflows powered by AI automation."
      />
      <AutomationIndustryCta />
      <AutomationProcess />
      <AutomationTechStack />
      <AutomationFaqs />
      <AutomationClosingCta />
    </div>
  )
}
