import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'CLIENT', value: 'Pets B4 Profit' },
  { label: 'INDUSTRY', value: 'Pet Healthcare' },
  { label: 'PLATFORMS', value: 'iOS, Android, Web' },
  { label: 'REGION', value: 'United States' },
  { label: 'PRODUCT TYPE', value: 'Mobile Application + AI Platform' },
  { label: 'ENGAGEMENT', value: 'Discovery → Design → Development → Support' },
  { label: 'USERS', value: 'Pet Owners, Platform Administrators' },
  { label: 'STATUS', value: 'Live in Production' },
]

const CHALLENGE_POINTS = [
  'Veterinary billing lacked transparency for pet owners.',
  'Medical invoices were difficult for non-clinical users to understand.',
  'Pet owners had no independent benchmark for treatment pricing.',
  'Financial uncertainty caused some owners to delay treatment decisions.',
  'Veterinary records were fragmented across multiple providers and systems.',
  'Ethical veterinary practices were difficult to identify and verify.',
  'Existing tools focused on clinics rather than on helping owners make informed decisions.',
  'Any AI recommendations carried healthcare implications and required governance mechanisms from day one.',
]

const REQUIREMENTS = [
  'Translate veterinary invoices into a language pet owners could understand.',
  'Provide AI-assisted cost analysis without replacing veterinary judgement.',
  'Support invoice scanning without requiring manual data entry.',
  'Create a centralized medical record system for pets.',
  'Build trust into every recommendation and provider listing.',
]

const MOBILE_CAPABILITIES = [
  'OCR invoice scanning',
  'AI-powered veterinary bill analysis',
  'Cost breakdown explanations',
  'Market price benchmarking',
  'Pet medical record management',
  'Treatment history tracking',
  'Ethical clinic discovery',
  'Subscription management',
]

const ADMIN_CAPABILITIES = [
  'AI output review and moderation',
  'Vet directory governance',
  'User management',
  'Subscription analytics',
  'Content management',
  'Platform reporting',
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'React Native', img: '/assets/portfolio/pets-b4-profit/react-native.jpg' }],
  },
  {
    name: 'AI Processing',
    items: [{ name: 'OpenAI APIs', img: '/assets/portfolio/pets-b4-profit/openai.png' }],
  },
  {
    name: 'OCR',
    items: [{ name: 'Document Recognition Engine', img: '/assets/portfolio/pets-b4-profit/document-recognition-engine.jpg' }],
  },
  {
    name: 'Backend',
    items: [{ name: 'Node.js APIs', img: '/assets/portfolio/pets-b4-profit/node.jpg' }],
  },
  {
    name: 'Payments',
    items: [{ name: 'RevenueCat', img: '/assets/portfolio/pets-b4-profit/revenuecat.jpg' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'JWT', img: '/assets/portfolio/pets-b4-profit/jwt.jpg' }],
  },
  {
    name: 'Infrastructure',
    items: [{ name: 'Cloud Deployment', img: '/assets/portfolio/pets-b4-profit/goole-cloud-platform.jpg' }],
  },
  {
    name: 'Administration',
    items: [{ name: 'React Dashboard', img: '/assets/portfolio/pets-b4-profit/react-native.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/pets-b4-profit/location.png',
    iconClass: 'w-9 h-auto',
    title: 'AI-Powered Veterinary Cost Analysis',
    body: 'Pet owners gained independent visibility into treatment costs before making financial decisions.',
  },
  {
    icon: '/assets/portfolio/pets-b4-profit/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'OCR-Based Invoice Processing',
    body: 'Paper invoices and digital estimates became actionable with a single scan.',
  },
  {
    icon: '/assets/portfolio/pets-b4-profit/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Centralized Medical Records',
    body: 'Owners could maintain healthcare history across multiple clinics and providers.',
  },
  {
    icon: '/assets/portfolio/pets-b4-profit/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Ethical Provider Discovery',
    body: 'The Vet Check directory introduced a trusted mechanism for finding values-aligned clinics.',
  },
  {
    icon: '/assets/portfolio/pets-b4-profit/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Platform Running in Active Production',
    body: 'The system is currently supporting real users and live veterinary cost evaluations.',
  },
]

export default function PetsB4Profit() {
  useEffect(() => {
    const title = 'Pets B4 Profit Case Study | Inceptives Digital'
    const desc =
      'AI-Powered Veterinary Cost Transparency Platform for Pet Owners. OCR invoice scanning, AI-powered veterinary bill analysis, and centralized pet medical records.'
    document.title = title
    window.scrollTo(0, 0)

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', desc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/pets-b4-profit')
  }, [])

  return (
    <div className="case-study-page w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              Pets B4 Profit
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[940px] mb-10 sm:mb-14">
            AI-Powered Veterinary Cost Transparency Platform for Pet Owners
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/pets-b4-profit/pets-banenr.png"
              alt="Pets B4 Profit Mobile App and AI Platform Mockup"
              loading="eager"
              className="w-full h-auto block mx-auto select-none"
            />
          </div>
        </div>
      </section>

      {/* 2. AT A GLANCE (Solid #00CE44 Band) */}
      <section className="w-full bg-[#00CE44] text-black py-16 sm:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-black leading-[1.18] mb-10 sm:mb-12 text-left">
            At a Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 text-left">
            {AT_A_GLANCE.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <h3 className="text-[16px] sm:text-[18px] font-bold text-black tracking-wide">
                  {item.label}
                </h3>
                <p className="text-[15px] sm:text-[17px] text-black/90 font-normal leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/portfolio/pets-b4-profit/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl space-y-5">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Challenge
            </h2>

            <ul className="space-y-2.5 pl-1">
              {CHALLENGE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15.5px] sm:text-[17px] leading-[1.6]">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 space-y-1.5">
              <p className="text-white/90 text-[16px] sm:text-[18px] leading-[1.65]">
                The challenge was not replacing veterinary advice.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[18px] leading-[1.65]">
                The challenge was reducing information asymmetry between clinics and pet owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT HAD TO BE SOLVED (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/pets-b4-profit/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-5">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15]">
                What Had to Be Solved
              </h2>

              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                The project started with five non-negotiable requirements:
              </p>

              <ul className="space-y-3 pl-1">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-white text-[15.5px] sm:text-[17px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/pets-b4-profit/pets-mobile1-1.png"
                alt="Pets B4 Profit Mobile Invoice Scanner"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[400px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT STRATEGY DECISIONS (4 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] mb-3">
              Product Strategy <span className="text-[#00CE44]">Decisions</span>
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              Several early decisions shaped the entire platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pets-b4-profit/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Human-in-the-Loop AI Review
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Healthcare recommendations require accountability. AI-generated cost analysis reports could not operate as unsupervised outputs.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Administrative oversight of recommendation quality became part of the product architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pets-b4-profit/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                OCR as the Primary Input Method
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Most users interact with the product immediately after receiving a paper invoice or PDF estimate.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Typing medical line items manually would have created unnecessary friction. Invoice scanning became the default workflow.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pets-b4-profit/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Moderated Veterinary Directory
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Trust depends on governance.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The Vet Check directory was designed as an actively moderated ecosystem rather than an open listing platform.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pets-b4-profit/cardsinf.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Empathy-First User Experience
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Many users arrive during emotionally stressful situations involving sick pets and unexpected expenses.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Every workflow was designed for users operating under pressure rather than ideal conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION */}
      <section className="w-full bg-[#151515] pt-14 sm:pt-20 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-3">
              The Solution
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              The final product shipped as two connected systems.
            </p>
          </div>

          {/* Mobile Application */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 flex justify-center self-end">
              <img
                src="/assets/portfolio/pets-b4-profit/pets-mobile1.png"
                alt="Pets B4 Profit Mobile Application"
                loading="lazy"
                className="w-full max-w-[440px] h-auto block object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left space-y-5 pb-6 lg:pb-10">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Mobile Application
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Used by pet owners.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px]">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {MOBILE_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Administration Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-5 text-left space-y-5 order-2 lg:order-1 pb-14 lg:pb-20">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Administration Platform
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Used by platform operators.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px]">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {ADMIN_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2 self-end">
              <img
                src="/assets/portfolio/pets-b4-profit/pets-mobile2.png"
                alt="Pets B4 Profit Administration Platform"
                loading="lazy"
                className="w-full max-w-[640px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY DECISIONS (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Decisions"
        categories={TECH_CATEGORIES}
      />

      {/* 8. OUTCOMES (5 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] text-center leading-[1.18] mb-12 sm:mb-14">
            Outcomes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {OUTCOMES.map((card) => (
              <div
                key={card.title}
                className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]"
              >
                <img
                  src={card.icon}
                  alt=""
                  loading="lazy"
                  className={`${card.iconClass} object-contain`}
                />
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#00CE44] leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/90 text-[15px] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
