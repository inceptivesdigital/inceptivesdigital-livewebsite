import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import ClientMarquee from '../components/ClientMarquee'

// Lazy-load below-the-fold homepage sections so Mobile & Desktop initial JS & network stay minimal
const CoreCapabilities = lazy(() => import('../components/CoreCapabilities'))
const ServiceVideoCards = lazy(() => import('../components/ServiceVideoCards'))
const ClientGridSection = lazy(() => import('../components/ClientGridSection'))
const ShowcaseVideoSection = lazy(() => import('../components/ShowcaseVideoSection'))
const CaseStudies = lazy(() => import('../components/CaseStudies'))
const AwardsSection = lazy(() => import('../components/AwardsSection'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const IndustriesSection = lazy(() => import('../components/IndustriesSection'))
const DiscoverySprintCTA = lazy(() => import('../components/DiscoverySprintCTA'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const ScheduleSection = lazy(() => import('../components/ScheduleSection'))
const SuccessSection = lazy(() => import('../components/SuccessSection'))
const BlogSection = lazy(() => import('../components/BlogSection'))
const FAQSection = lazy(() => import('../components/FAQSection'))
const HomeBottomCTA = lazy(() => import('../components/HomeBottomCTA'))

function LazyOnScroll({ children, minHeight = 200 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '450px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  )
}

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
    setMeta('link[rel="canonical"]', 'href', 'https://inceptivesdigital.com')
  }, [])

  return (
    <>
      <Hero />
      <ClientMarquee />
      <LazyOnScroll minHeight={360}>
        <CoreCapabilities />
        <ServiceVideoCards />
      </LazyOnScroll>
      <LazyOnScroll minHeight={360}>
        <ClientGridSection />
        <ShowcaseVideoSection />
      </LazyOnScroll>
      <LazyOnScroll minHeight={420}>
        <CaseStudies />
        <AwardsSection />
        <Testimonials />
      </LazyOnScroll>
      <LazyOnScroll minHeight={420}>
        <IndustriesSection />
        <DiscoverySprintCTA />
        <ProcessSection />
      </LazyOnScroll>
      <LazyOnScroll minHeight={420}>
        <ScheduleSection />
        <SuccessSection />
        <BlogSection />
        <FAQSection />
        <HomeBottomCTA />
      </LazyOnScroll>
    </>
  )
}
