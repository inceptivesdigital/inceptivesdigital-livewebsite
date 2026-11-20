import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import SystemClosingCta from './components/SystemClosingCta'
import SystemFaqs from './components/SystemFaqs'
import SystemHero from './components/SystemHero'
import SystemIndustries from './components/SystemIndustries'
import SystemIndustryCta from './components/SystemIndustryCta'
import SystemProcess from './components/SystemProcess'
import SystemProblems from './components/SystemProblems'
import SystemServices from './components/SystemServices'
import SystemTechStack from './components/SystemTechStack'

export default function SystemIntegrationApiAutomationPage() {
  useEffect(() => {
    const title = 'System Integration & API Automation Services'
    const description =
      'System integration and API automation services that connect tools, sync data, and enable seamless workflow communication across platforms.'
    const canonical = 'https://inceptivesdigital.com/system-integration-api-automation'

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
    setMeta('meta[property="og:url"]', 'content', canonical)
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
      <SystemHero />
      <SystemProblems />
      <SystemServices />
      <CaseStudies
        heading="System Integration and API Automation in Action"
        subtitle="See how connected systems, automated data flows, and reliable APIs reduced manual work and improved operational speed."
      />
      <SystemIndustries />
      <Testimonials
        heading="What Clients Say About Connecting Their Systems"
        subtitle="Hear how clients improved reliability, visibility, and efficiency by replacing disconnected tools with automated integrations."
      />
      <SystemIndustryCta />
      <SystemProcess />
      <SystemTechStack />
      <SystemFaqs />
      <SystemClosingCta />
    </div>
  )
}
