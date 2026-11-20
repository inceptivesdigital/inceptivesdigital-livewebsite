import React, { useEffect } from 'react'
import ChatbotHero from './components/ChatbotHero'
import ChatbotDifference from './components/ChatbotDifference'
import ChatbotServicesGrid from './components/ChatbotServicesGrid'
import ChatbotTypesGrid from './components/ChatbotTypesGrid'
import ChatbotIndustries from './components/ChatbotIndustries'
import ChatbotCaseStudies from './components/ChatbotCaseStudies'
import ChatbotTestimonials from './components/ChatbotTestimonials'
import ChatbotProcess from './components/ChatbotProcess'
import ChatbotTechStack from './components/ChatbotTechStack'
import ChatbotFaqs from './components/ChatbotFaqs'
import ChatbotClosingCta from './components/ChatbotClosingCta'

export default function AiChatbotDevelopmentServicesPage() {
  useEffect(() => {
    const title = 'AI Chatbot Development Services | Custom AI Assistants'
    const description =
      'AI chatbot development services building custom AI assistants, support bots, and LLM-powered solutions that automate workflows and customer interactions.'

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
      'https://nextincep.wpenginepowered.com/ai-chatbot-development-services/'
    )

    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-[#000000] text-white overflow-x-hidden">
      {/* Section 01 — Hero (Full-Cover Background) */}
      <ChatbotHero />
      {/* Section 02 — What Makes a Well-Built AI Chatbot Different (3 Cards) */}
      <ChatbotDifference />
      {/* Section 03 — AI Chatbot Development Services (8 Cards) */}
      <ChatbotServicesGrid />
      {/* Section 04 — Types of Chatbots We Build (6 Cards) */}
      <ChatbotTypesGrid />
      {/* Section 05 — Industries We Serve (6 Verticals + CTA) */}
      <ChatbotIndustries />
      {/* Section 06 — Case Studies (Homepage 1400px Component) */}
      <ChatbotCaseStudies />
      {/* Testimonials (Homepage Component) */}
      <ChatbotTestimonials />
      {/* Section 07 — Process (Location Design, 5 Steps) */}
      <ChatbotProcess />
      {/* Section 08 — Tech Stack (Two-Green-Panel, 4 Categories) */}
      <ChatbotTechStack />
      {/* Section 09 — FAQs (Homepage Component, 8 Questions) */}
      <ChatbotFaqs />
      {/* Section 10 — Closing CTA (Full-Width Section) */}
      <ChatbotClosingCta />
    </main>
  )
}
