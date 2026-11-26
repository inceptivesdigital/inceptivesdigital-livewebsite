import { useEffect } from 'react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import MachineClosingCta from './components/MachineClosingCta'
import MachineDifference from './components/MachineDifference'
import MachineFaqs from './components/MachineFaqs'
import MachineHero from './components/MachineHero'
import MachineIndustries from './components/MachineIndustries'
import MachineIndustryCta from './components/MachineIndustryCta'
import MachineModels from './components/MachineModels'
import MachineProcess from './components/MachineProcess'
import MachineServices from './components/MachineServices'
import MachineTechStack from './components/MachineTechStack'
import { Link } from 'react-router-dom'

export default function MachineLearningDevelopmentPage() {
  useEffect(() => {
    const title = 'Machine Learning Software Development Services & Solutions'
    const description =
      'Our Machine learning development services reduce manual tasks by 50%, improve forecasting accuracy, and deliver scalable, reliable AI systems.'
    const canonical = 'https://inceptivesdigital.com/machine-learning-development-services'

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
      <MachineHero />
      <MachineDifference />
      <MachineServices />
      <MachineModels />
      <MachineIndustries />
      <CaseStudies
        heading={
          <>
            Machine Learning Development Case Studies and{' '}
            <span className="text-[#00CE44]">Outcomes</span>
          </>
        }
        subtitle={
          <>
            See how{' '}
            <Link
              to="/digital-product-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              digital product development
            </Link>{' '}
            with machine learning improved forecasting, automation, personalization, and data-driven decision-making.
          </>
        }
      />
      <Testimonials
        heading={
          <>
            What Clients Say About Our{' '}
            <span className="text-[#00CE44]">Machine Learning Solutions</span>
          </>
        }
        subtitle="Hear how clients experienced our development process and the operational value created by their machine learning systems."
      />
      <MachineIndustryCta />
      <MachineProcess />
      <MachineTechStack />
      <MachineFaqs />
      <MachineClosingCta />
    </div>
  )
}
