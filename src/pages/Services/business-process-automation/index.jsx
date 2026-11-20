import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import BusinessProcessClosingCta from './components/BusinessProcessClosingCta'
import BusinessProcessFaqs from './components/BusinessProcessFaqs'
import BusinessProcessHero from './components/BusinessProcessHero'
import BusinessProcessIndustries from './components/BusinessProcessIndustries'
import BusinessProcessIndustryCta from './components/BusinessProcessIndustryCta'
import BusinessProcessProblems from './components/BusinessProcessProblems'
import BusinessProcessProcess from './components/BusinessProcessProcess'
import BusinessProcessServices from './components/BusinessProcessServices'
import BusinessProcessTechStack from './components/BusinessProcessTechStack'

export default function BusinessProcessAutomationPage() {
  useEffect(() => {
    const title = 'Business Process Automation Services for Workflow Efficiency'
    const description =
      'Business process automation services that streamline workflows, remove manual operations, and improve cross-system efficiency across business processes.'
    const canonical = 'https://inceptivesdigital.com/business-process-automation'

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
      <BusinessProcessHero />
      <BusinessProcessProblems />
      <BusinessProcessServices />
      <CaseStudies
        heading="Business Process Automation That Improved Daily Operations"
        subtitle="See how automated workflows reduced manual effort, shortened processing time, and created more consistent business operations."
      />
      <BusinessProcessIndustries />
      <Testimonials
        heading="How Clients Experienced Business Process Automation"
        subtitle="Hear how clients improved efficiency, visibility, and control by replacing repetitive processes with reliable automation."
      />
      <BusinessProcessIndustryCta />
      <BusinessProcessProcess />
      <BusinessProcessTechStack />
      <BusinessProcessFaqs />
      <BusinessProcessClosingCta />
    </div>
  )
}
