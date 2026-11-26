import { useEffect } from 'react'
import ContactHero from './components/ContactHero'
import ContactClients from './components/ContactClients'
import ContactProcess from './components/ContactProcess'
import ContactCtaBanner from './components/ContactCtaBanner'
import ContactDelivered from './components/ContactDelivered'
import ContactAwards from './components/ContactAwards'
import ContactVideoTestimonials from './components/ContactVideoTestimonials'
import ContactMap from './components/ContactMap'
import ContactFaqs from './components/ContactFaqs'

export default function ContactUsPage() {
  useEffect(() => {
    // Meta title & description as published on the WordPress site
    const seoTitle = 'Contact Inceptives Digital | Discuss Your Product Idea'
    const seoDesc =
      'Talk to Inceptives Digital about your mobile app, AI product, or custom software. Share your goals and get clear guidance on the best way forward.'

    document.title = seoTitle

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', seoDesc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', seoTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', seoDesc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoDesc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/contact-us')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      <ContactHero />
      <ContactClients />
      <ContactProcess />
      <ContactCtaBanner
        title="Let's Collaborate on Your Next Product"
        desc="Bring us your idea, mobile, web, AI, or SaaS, and our team will collaborate with you on scope, timeline, and cost, then turn it into a working build within one business day."
      />
      <ContactDelivered />
      <ContactAwards />
      <ContactVideoTestimonials />
      <ContactMap />
      <ContactFaqs />
    </div>
  )
}
