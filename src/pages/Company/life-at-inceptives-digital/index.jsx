import { useEffect } from 'react'
import LifeHero from './components/LifeHero'
import LifeEventsFestivals from './components/LifeEventsFestivals'
import LifeWorkdayTimeline from './components/LifeWorkdayTimeline'
import LifeAmenities from './components/LifeAmenities'
import LifeDiversity from './components/LifeDiversity'
import LifeRecreation from './components/LifeRecreation'
import LifePerksBenefits from './components/LifePerksBenefits'
import LifePrinciplesGrid from './components/LifePrinciplesGrid'
import LifeTestimonials from './components/LifeTestimonials'
import LifeBottomCta from './components/LifeBottomCta'

export default function LifeAtInceptivesPage() {
  useEffect(() => {
    const seoTitle = 'Life at Inceptives Digital | Culture, People & Careers'
    const seoDesc =
      'What makes people stay at Inceptives Digital? Explore our day-to-day culture, team events, amenities, diversity, and career growth.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/life-at-inceptives-digital')
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <LifeHero />

      {/* 2. Celebrate Life with Inceptives Digital (Events & Festivals) */}
      <LifeEventsFestivals />

      {/* 3. From Login to Logout (A Day in the Life Timeline) */}
      <LifeWorkdayTimeline />

      {/* 4. What's the Catch (Spaces & Amenities) */}
      <LifeAmenities />

      {/* 5. We Believe in Diversity (The People Who Keep It Moving) */}
      <LifeDiversity />

      {/* 6. Break The Corporate Walls and Live A Little (Recreation) */}
      <LifeRecreation />

      {/* 7. The Things That Make the Week Better (Perks & Commute Support) */}
      <LifePerksBenefits />

      {/* 8. Culture Principles, Growth & Focus Without Pressure */}
      <LifePrinciplesGrid />

      {/* 9. Words From The People We Work With (Testimonials) */}
      <LifeTestimonials />

      {/* 10. Think This Could Be Your Kind of Workplace? (Bottom CTA) */}
      <LifeBottomCta />
    </div>
  )
}
