import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import GenerativeChallenges from './components/GenerativeChallenges'
import GenerativeClosingCta from './components/GenerativeClosingCta'
import GenerativeDifference from './components/GenerativeDifference'
import GenerativeFaqs from './components/GenerativeFaqs'
import GenerativeHero from './components/GenerativeHero'
import GenerativeIndustries from './components/GenerativeIndustries'
import GenerativeProcess from './components/GenerativeProcess'
import GenerativeServices from './components/GenerativeServices'
import GenerativeTechStack from './components/GenerativeTechStack'

export default function GenerativeAiDevelopmentPage() {
  useEffect(() => {
    const title = 'Generative AI Development Company'
    const description =
      'A generative AI development company building production-ready systems that automate workflows, generate content, and deliver measurable business impact.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/generative-ai-development-company')
  }, [])

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <GenerativeHero />
      <GenerativeDifference />
      <GenerativeServices />
      <GenerativeChallenges />
      <GenerativeIndustries />
      <CaseStudies
        heading={
          <>
            Generative AI Development Case Studies and{' '}
            <span className="text-[#00CE44]">Business Results</span>
          </>
        }
        subtitle={
          <>
            Explore how our{' '}
            <a
              href="https://inceptivesdigital.com/digital-product-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              digital product development
            </a>{' '}
            work produced generative AI solutions that improved content creation, knowledge access, automation, and decision-making.
          </>
        }
      />
      <Testimonials
        heading={
          <>
            What Clients Say About Our{' '}
            <span className="text-[#00CE44]">Generative AI Solutions</span>
          </>
        }
        subtitle="Hear how clients experienced our strategy, development process, and the measurable value their generative AI products created."
      />
      <GenerativeProcess />
      <GenerativeTechStack />
      <GenerativeFaqs />
      <GenerativeClosingCta />
    </div>
  )
}
