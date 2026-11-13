import { useEffect } from 'react'
import Hero from '../components/Hero'
import ClientMarquee from '../components/ClientMarquee'
import CoreCapabilities from '../components/CoreCapabilities'
import ServiceVideoCards from '../components/ServiceVideoCards'
import ClientGridSection from '../components/ClientGridSection'
import ShowcaseVideoSection from '../components/ShowcaseVideoSection'
import CaseStudies from '../components/CaseStudies'
import AwardsSection from '../components/AwardsSection'
import IndustriesSection from '../components/IndustriesSection'
import DiscoverySprintCTA from '../components/DiscoverySprintCTA'
import ProcessSection from '../components/ProcessSection'
import ScheduleSection from '../components/ScheduleSection'
import SuccessSection from '../components/SuccessSection'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import BlogSection from '../components/BlogSection'

export default function Home() {
  useEffect(() => {
    const title = 'Inceptives Digital | Digital Product Studio'
    const description =
      'Design and build scalable mobile apps, AI products, and custom software with Inceptives Digital. From discovery and UX to launch and product growth.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', 'https://nextincep.wpenginepowered.com')
  }, [])

  return (
    <>
      <Hero />
      <ClientMarquee />
      <CoreCapabilities />
      <ServiceVideoCards />
      <ClientGridSection />
      <ShowcaseVideoSection />
      <CaseStudies />
      <AwardsSection />
      <Testimonials />
      <IndustriesSection />
      <DiscoverySprintCTA />
      <ProcessSection />
      <ScheduleSection />
      <SuccessSection />
      <BlogSection />
      <FAQSection />
    </>
  )
}
