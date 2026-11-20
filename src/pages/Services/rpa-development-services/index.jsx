import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import RpaClosingCta from './components/RpaClosingCta'
import RpaFaqs from './components/RpaFaqs'
import RpaHero from './components/RpaHero'
import RpaIndustries from './components/RpaIndustries'
import RpaIndustryCta from './components/RpaIndustryCta'
import RpaProblems from './components/RpaProblems'
import RpaProcess from './components/RpaProcess'
import RpaServices from './components/RpaServices'
import RpaTechStack from './components/RpaTechStack'

const title = 'RPA Development Services | Workflow Automation'
const description =
  'Automate repetitive workflows with custom RPA development services. Build reliable bots that connect enterprise systems, reduce errors, and improve efficiency.'

export default function RpaDevelopmentServicesPage() {
  useEffect(() => {
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
    setMeta('meta[property="og:url"]', 'content', 'https://inceptivesdigital.com/rpa-development-services')
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', 'https://inceptivesdigital.com/rpa-development-services')
  }, [])

  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      <RpaHero />
      <RpaProblems />
      <RpaServices />
      <RpaIndustries />
      <CaseStudies
        heading="RPA Development Applied to Repetitive Business Work"
        subtitle="See how software bots automated rule-based tasks, reduced processing errors, and accelerated high-volume operational workflows."
      />
      <Testimonials
        heading="What Clients Say About Their RPA Results"
        subtitle="Hear how clients improved speed, consistency, and team productivity by deploying reliable robotic process automation."
      />
      <RpaIndustryCta />
      <RpaProcess />
      <RpaTechStack />
      <RpaFaqs />
      <RpaClosingCta />
    </div>
  )
}
