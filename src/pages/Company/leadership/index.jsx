import { useEffect } from 'react'
import LeadershipHero from './components/LeadershipHero'
import LeadershipPrinciples from './components/LeadershipPrinciples'
import LeadershipFounders from './components/LeadershipFounders'
import LeadershipMetrics from './components/LeadershipMetrics'

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
      {/* 1. Hero: Leadership Should Strengthen Teams, Not Create Dependency */}
      <LeadershipHero />

      {/* 2 & 3. Good Leadership Leaves Stronger People Behind + Leader Responsibilities (5 Cards) */}
      <LeadershipPrinciples />

      {/* 4. Clear Ownership Starts at the Top: Hannan Shahnoor, Areeb Rehman, Aaron Francis */}
      <LeadershipFounders />

      {/* 5, 6, 7, 8. Senior Involvement + Leadership is Judged By + Founder's Letter + Bottom CTA */}
      <LeadershipMetrics />
    </div>
  )
}
