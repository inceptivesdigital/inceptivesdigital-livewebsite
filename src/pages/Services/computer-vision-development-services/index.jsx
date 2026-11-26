import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import ComputerVisionChallenges from './components/ComputerVisionChallenges'
import ComputerVisionClosingCta from './components/ComputerVisionClosingCta'
import ComputerVisionDifference from './components/ComputerVisionDifference'
import ComputerVisionFaqs from './components/ComputerVisionFaqs'
import ComputerVisionHero from './components/ComputerVisionHero'
import ComputerVisionIndustries from './components/ComputerVisionIndustries'
import ComputerVisionIndustryCta from './components/ComputerVisionIndustryCta'
import ComputerVisionProcess from './components/ComputerVisionProcess'
import ComputerVisionServices from './components/ComputerVisionServices'
import ComputerVisionTechStack from './components/ComputerVisionTechStack'

export default function ComputerVisionDevelopmentPage() {
  useEffect(() => {
    const title = 'Computer Vision Development Company for Operational AI Systems'
    const description =
      'Computer Vision Development company delivering AI solutions that automate visual workflows, reduce manual effort, and yield reliable, production-ready outcomes.'
    const canonical = 'https://inceptivesdigital.com/computer-vision-development-services'

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
      <ComputerVisionHero />
      <ComputerVisionDifference />
      <ComputerVisionServices />
      <ComputerVisionChallenges />
      <ComputerVisionIndustries />
      <CaseStudies
        heading={
          <>
            Computer Vision Projects Built for{' '}
            <span className="text-[#00CE44]">Real-World Recognition</span>
          </>
        }
        subtitle="See how computer vision systems were used to inspect, detect, classify, and interpret visual data across real operational environments."
      />
      <Testimonials
        heading={
          <>
            Client Experiences With{' '}
            <span className="text-[#00CE44]">Computer Vision in Production</span>
          </>
        }
        subtitle="Hear how clients evaluated accuracy, reliability, integration, and business impact after deploying computer vision into live workflows."
      />
      <ComputerVisionIndustryCta />
      <ComputerVisionProcess />
      <ComputerVisionTechStack />
      <ComputerVisionFaqs />
      <ComputerVisionClosingCta />
    </div>
  )
}
