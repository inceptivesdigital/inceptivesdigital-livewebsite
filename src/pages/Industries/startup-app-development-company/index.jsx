import React, { useEffect } from 'react'
import StartupHero from './components/StartupHero'
import StartupStatsBar from './components/StartupStatsBar'
import StartupServicesGrid from './components/StartupServicesGrid'
import StartupMidCta1 from './components/StartupMidCta1'
import StartupClientLogos from './components/StartupClientLogos'
import StartupEconomySection from './components/StartupEconomySection'
import StartupSecuritySection from './components/StartupSecuritySection'
import StartupKeyFeatures from './components/StartupKeyFeatures'
import StartupProcess from './components/StartupProcess'
import StartupCaseStudies from './components/StartupCaseStudies'
import StartupTechStack from './components/StartupTechStack'
import StartupEmergingTech from './components/StartupEmergingTech'
import StartupIndustriesGrid from './components/StartupIndustriesGrid'
import StartupCostTiers from './components/StartupCostTiers'
import StartupWhyChooseUs from './components/StartupWhyChooseUs'
import StartupMidCta2 from './components/StartupMidCta2'
import StartupFaqs from './components/StartupFaqs'
import StartupFinalCta from './components/StartupFinalCta'

export default function StartupAppDevelopmentPage() {
  useEffect(() => {
    const title = 'Startup App Development Company | Inceptives Digital'
    const description =
      'Inceptives Digital is a reputable startup app development company developing high-performance, AI-powered startup apps for growth-stage businesses.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el && selector.startsWith('meta[name=')) {
        el = document.createElement('meta')
        el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        document.head.appendChild(el)
      }
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta(
      'link[rel="canonical"]',
      'href',
      'https://nextincep.wpenginepowered.com/startup-app-development-company/'
    )

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-[#000000] text-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <StartupHero />
      {/* 2. 4-Column Stats Bar */}
      <StartupStatsBar />
      {/* 3. Startup App Development Services (9 Cards) */}
      <StartupServicesGrid />
      {/* 4. Mid CTA 1: Collaborate to Innovate */}
      <StartupMidCta1 />
      {/* 5. Recognized by Innovators Globally (Client Logos) */}
      <StartupClientLogos />
      {/* 6. Multi-Trillion-Dollar Startup App Economy (4 Cards) */}
      <StartupEconomySection />
      {/* 7. Enterprise-Grade Security (Interactive 3-Group Compliance Slider) */}
      <StartupSecuritySection />
      {/* 8. Core Modules (4 Interactive Role Tabs) */}
      <StartupKeyFeatures />
      {/* 9. Agile Startup App Development Process (5 Steps) */}
      <StartupProcess />
      {/* 10. Startup App Development Portfolio (Homepage CaseStudies) */}
      <StartupCaseStudies />
      {/* 11. Technology Stack (8 Categories, Two-Green-Panel) */}
      <StartupTechStack />
      {/* 12. Emerging Technologies (6 Cards with Corner Concave Stars) */}
      <StartupEmergingTech />
      {/* 13. High-Growth Digital Markets (10 Sectors + CTA) */}
      <StartupIndustriesGrid />
      {/* 14. Startup App Development Cost Estimates (3 Tiers) */}
      <StartupCostTiers />
      {/* 15. Why Choose Us (6 Cards) */}
      <StartupWhyChooseUs />
      {/* 16. Mid CTA 2: Get a Personalised Blueprint */}
      <StartupMidCta2 />
      {/* 17. FAQs (6 Questions, Homepage FAQSection) */}
      <StartupFaqs />
      {/* 18. Final CTA: Ready to Launch Your Startup App? Let's Build It Together! */}
      <StartupFinalCta />
    </main>
  )
}
