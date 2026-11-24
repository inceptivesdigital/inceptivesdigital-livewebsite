import { useEffect } from 'react'
import { useJsonLdSchema } from '../../../utils/useJsonLdSchema'
import postLaunchSchema from '../../../schemas/post-launch-analytics-iteration.json'
import PostLaunchHero from './components/PostLaunchHero'
import PostLaunchTrustedLogos from './components/PostLaunchTrustedLogos'
import PostLaunchNecessity from './components/PostLaunchNecessity'
import PostLaunchServicesGrid from './components/PostLaunchServicesGrid'
import PostLaunchStatsBar from './components/PostLaunchStatsBar'
import PostLaunchComparisonTable from './components/PostLaunchComparisonTable'
import PostLaunchMidCta from './components/PostLaunchMidCta'
import PostLaunchIndustries from './components/PostLaunchIndustries'
import PostLaunchCaseStudies from './components/PostLaunchCaseStudies'
import PostLaunchConsultationCta from './components/PostLaunchConsultationCta'
import PostLaunchWhyChooseUs from './components/PostLaunchWhyChooseUs'
import PostLaunchProcess from './components/PostLaunchProcess'
import PostLaunchTechStack from './components/PostLaunchTechStack'
import PostLaunchTestimonials from './components/PostLaunchTestimonials'
import PostLaunchCostSection from './components/PostLaunchCostSection'
import PostLaunchFAQs from './components/PostLaunchFAQs'

export default function PostLaunchAnalyticsIterationPage() {
  useJsonLdSchema(postLaunchSchema, 'schema-post-launch-analytics-iteration')
  useEffect(() => {
    const seoTitle = 'Post-Launch Analytics & Iteration Services — Inceptives Digital'
    const seoDesc =
      'Inceptives Digital helps digital products grow after launch through structured iteration cycles, data-driven decisions, and continuous improvement.'

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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/post-launch-analytics-iteration')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Section */}
      <PostLaunchHero />

      {/* 2. Trusted Client Logos */}
      <PostLaunchTrustedLogos />

      {/* 3. Why Products That Launch Well Still Struggle to Grow */}
      <PostLaunchNecessity />

      {/* 4. Post-Launch Analytics & Iteration Services */}
      <PostLaunchServicesGrid />

      {/* 5. Stats Bar */}
      <PostLaunchStatsBar />

      {/* 6. Comparison Table: Post-Launch Iteration vs Ongoing Maintenance */}
      <PostLaunchComparisonTable />

      {/* 7. Mid 90-Day CTA Banner */}
      <PostLaunchMidCta />

      {/* 8. Industries Where Post-Launch Analytics Makes a Difference */}
      <PostLaunchIndustries />

      {/* 9. Case Studies */}
      <PostLaunchCaseStudies />

      {/* 10. Mid Consultation CTA */}
      <PostLaunchConsultationCta />

      {/* 11. Why Choose Us */}
      <PostLaunchWhyChooseUs />

      {/* 12. 5-Step Iteration Process */}
      <PostLaunchProcess />

      {/* 13. Tools & Data Systems Stack */}
      <PostLaunchTechStack />

      {/* 14. Client Testimonials */}
      <PostLaunchTestimonials />

      {/* 15. Pricing Costs + Full-Width Bottom CTA */}
      <PostLaunchCostSection />

      {/* 16. FAQs */}
      <PostLaunchFAQs />
    </div>
  )
}
