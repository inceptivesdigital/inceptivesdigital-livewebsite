import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import NlpChallenges from './components/NlpChallenges'
import NlpClosingCta from './components/NlpClosingCta'
import NlpFaqs from './components/NlpFaqs'
import NlpHero from './components/NlpHero'
import NlpIndustries from './components/NlpIndustries'
import NlpIndustryCta from './components/NlpIndustryCta'
import NlpProcess from './components/NlpProcess'
import NlpServices from './components/NlpServices'
import NlpTechStack from './components/NlpTechStack'
import NlpUseCases from './components/NlpUseCases'

export default function NlpDevelopmentPage() {
  useEffect(() => {
    const title = 'NLP Development Services | Custom NLP Solutions'
    const description =
      'Build custom NLP solutions for text classification, sentiment analysis, entity extraction, semantic search, document processing, and speech recognition. Conversational systems understand intent, retain context, and respond accurately across customer support, sales, and internal knowledge use cases.'
    const canonical = 'https://inceptivesdigital.com/nlp-development-services'

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
      <NlpHero />
      <NlpUseCases />
      <NlpServices />
      <NlpChallenges />
      <NlpIndustries />
      <CaseStudies
        heading={
          <>
            NLP Solutions Applied to{' '}
            <span className="text-[#00CE44]">Real Business Language</span>
          </>
        }
        subtitle="See how NLP systems helped businesses understand conversations, classify text, extract information, and automate language-heavy workflows."
      />
      <Testimonials
        heading={
          <>
            How Clients Experienced{' '}
            <span className="text-[#00CE44]">NLP in Production</span>
          </>
        }
        subtitle="Clients share how their NLP solutions performed with real data, real users, and the language complexity their operations demanded."
      />
      <NlpIndustryCta />
      <NlpProcess />
      <NlpTechStack />
      <NlpFaqs />
      <NlpClosingCta />
    </div>
  )
}
