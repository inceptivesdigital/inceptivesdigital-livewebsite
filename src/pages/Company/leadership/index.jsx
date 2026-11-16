import { useEffect } from 'react'
import LeadershipHero from './components/LeadershipHero'
import LeadershipFounders from './components/LeadershipFounders'
import LeadershipCollective from './components/LeadershipCollective'
import LeadershipClients from './components/LeadershipClients'
import LeadershipCulture from './components/LeadershipCulture'
import LeadershipMetrics from './components/LeadershipMetrics'
import LeadershipAwards from './components/LeadershipAwards'
import LeadershipConsultation from './components/LeadershipConsultation'

export default function LeadershipPage() {
  useEffect(() => {
    const seoTitle = 'Leadership | Inceptives Digital'
    const seoDesc =
      'Meet the leaders responsible for the direction, standards, and delivery behind Inceptives Digital.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/leadership')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero: Meet the Visionaries Behind Decisions */}
      <LeadershipHero />

      {/* 2. The Founders: The Leaders Shaping Our Standards */}
      <LeadershipFounders />

      {/* 3. The Collective Strength of Inceptives Digital */}
      <LeadershipCollective />

      {/* 4. Businesses We’re Proud to Have Served */}
      <LeadershipClients />

      {/* 5. Beyond the Work, Together: Our People and Culture */}
      <LeadershipCulture />

      {/* 6. What We’ve Built Since 2018: 70+ projects, 20+ industries, 3M+ downloads */}
      <LeadershipMetrics />

      {/* 7. Awards & Recognition Earned Along the Way */}
      <LeadershipAwards />

      {/* 8. Put the Right Minds on Your Idea / Change Catalysts Consultation */}
      <LeadershipConsultation />
    </div>
  )
}
