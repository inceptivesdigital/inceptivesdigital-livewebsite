import { useEffect } from 'react'
import TechStackTabs from '../Services/mobile-app-development/components/TechStackTabs'

const SNAPSHOT_ITEMS = [
  { label: 'INDUSTRY', value: 'AI / Productivity / EdTech' },
  { label: 'PLATFORM TYPE', value: 'AI Writing Assistant' },
  { label: 'PRODUCTS DELIVERED', value: 'Mobile Application + Admin Dashboard' },
  { label: 'PRIMARY USERS', value: 'Students, Professionals, Creators, Enterprise Teams' },
  { label: 'CORE TECHNOLOGIES', value: 'React Native, React.js, OpenAI APIs, LanguageTool, RevenueCat, OCR' },
  { label: 'BUSINESS MODEL', value: 'Freemium + Subscription + Enterprise Licensing' },
  { label: 'STATUS', value: 'Live in Active Production' },
]

const TOOL_LIMITATIONS = [
  'Corrections arrive without explanation.',
  'Feedback disappears once the document is closed.',
  'Improvement is impossible to measure.',
  'Every writing context receives identical recommendations.',
]

const COMMERCIAL_SEGMENTS = [
  'Free users entering the ecosystem.',
  'Individual professionals paying for advanced functionality.',
  'Enterprise organisations requiring account management and custom writing policies.',
]

const PROGRESS_METRICS = [
  'Clarity scores',
  'Tone consistency',
  'Writing habits',
  'Recurring mistakes',
  'Improvement trends over time',
]

const OCR_INPUTS = [
  'Printed documents',
  'Handouts',
  'Notes',
  'Photographed text',
  'Physical study material',
]

const WRITER_APP_CAPABILITIES = [
  'Real-time AI writing analysis',
  'Grammar and style recommendations',
  'Tone detection',
  'Structural improvement suggestions',
  'Accept or reject edit workflows',
  'Writing progress dashboards',
  'Subscription management',
  'OCR document scanning',
]

const ADMIN_DASHBOARD_CAPABILITIES = [
  'User management',
  'Enterprise account administration',
  'Subscription monitoring',
  'API usage tracking',
  'AI quality monitoring',
  'Conversion analytics',
  'Revenue reporting',
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/wordsmith-pro/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Real-Time Writing Intelligence',
    body: 'Grammar, clarity, tone, and structural analysis are delivered while users write rather than after they finish.',
  },
  {
    icon: '/assets/portfolio/wordsmith-pro/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Three Revenue Models Unified',
    body: 'Free access, premium subscriptions, and enterprise licensing operate inside one commercial architecture.',
  },
  {
    icon: '/assets/portfolio/wordsmith-pro/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'OCR-Powered Text Analysis',
    body: 'Printed and photographed text became first-class inputs rather than unsupported edge cases.',
  },
  {
    icon: '/assets/portfolio/wordsmith-pro/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Measurable User Improvement',
    body: 'Users track writing progress over time instead of treating every document as an isolated event.',
  },
  {
    icon: '/assets/portfolio/wordsmith-pro/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Live in Active Production',
    body: 'The platform is live and operating across consumer and organisational use cases.',
  },
]

export default function WordSmithPro() {
  useEffect(() => {
    const title = 'WordSmith Pro Case Study | Inceptives Digital'
    const desc =
      'An AI Writing Platform Built to Improve Writers, Not Just Their Documents. React Native & React.js platform powered by OpenAI APIs, LanguageTool, RevenueCat, and OCR.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/wordsmith-pro')
  }, [])

  return (
    <div className="case-study-page w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              WordSmith Pro
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[940px] mb-10 sm:mb-14">
            An AI Writing Platform Built to Improve Writers, Not Just Their Documents
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/wordsmith-pro/wordpresssmith.png"
              alt="WordSmith Pro AI Writing Platform Mockup"
              loading="eager"
              className="w-full h-auto block mx-auto select-none"
            />
          </div>
        </div>
      </section>

      {/* 2. PROJECT SNAPSHOT (Solid #00CE44 Band) */}
      <section className="w-full bg-[#00CE44] text-black py-16 sm:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-black leading-[1.18] mb-10 sm:mb-12 text-left">
            Project Snapshot
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 text-left">
            {SNAPSHOT_ITEMS.map((item) => (
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

      {/* 3. THE BUSINESS CONTEXT */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/portfolio/wordsmith-pro/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl space-y-5">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Context
            </h2>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Most writing tools compete on correction speed. WordSmith Pro was built around a different assumption: fixing a sentence and improving a writer are not the same thing.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              The founding team identified an opportunity that most AI writing products ignored. Existing tools highlighted mistakes, suggested replacements, and moved on. Very few helped users understand why a change mattered, whether the same issues appeared repeatedly, or whether their writing was improving over time.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              The ambition was not to build another grammar checker. It was to build a product that could help students write better essays, professionals communicate more clearly, creators improve their content, and enterprise teams maintain consistent communication standards inside a single platform.
            </p>
            <p className="text-white font-medium text-[16px] sm:text-[18px] leading-[1.65]">
              That required something closer to a writing coach than a proofreading tool.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE OPERATIONAL PROBLEM (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/wordsmith-pro/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-4">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15]">
                The Operational Problem
              </h2>

              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Most writing tools suffer from the same limitations:
              </p>

              <ul className="space-y-2 pl-1">
                {TOOL_LIMITATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/90 text-[15px] sm:text-[16.5px] leading-[1.65]">
                A passive voice warning in an academic paper, a sales email, and a product brief rarely deserves the same treatment.
              </p>

              <p className="text-white/90 text-[15px] sm:text-[16.5px] leading-[1.65]">
                The second challenge was technical. Real-time AI feedback only works if it feels instantaneous. An assistant that interrupts writing flow with loading states and delays becomes friction instead of support. Low latency was not a performance objective. It was a usability requirement.
              </p>

              <p className="text-white text-[15.5px] sm:text-[17px] leading-[1.65]">
                The final challenge was commercial. The platform needed to support:
              </p>

              <ul className="space-y-2 pl-1">
                {COMMERCIAL_SEGMENTS.map((seg) => (
                  <li key={seg} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{seg}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[18px] pt-1">
                Three customer segments. Three pricing models. One product experience.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/wordsmith-pro/wordsmith-cta-mobile.png"
                alt="WordSmith Pro Subscription and Plan Mobile Screen"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[400px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT DECISIONS THAT SHAPED THE BUILD (4 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18]">
              Product Decisions <span className="text-[#00CE44]">That Shaped the Build</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/wordsmith-pro/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Contextual AI Instead of Rule-Based Correction
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                OpenAI models were combined with LanguageTool grammar validation to separate contextual intelligence from structured language rules.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Large language models handled clarity, tone, and structural improvement. LanguageTool handled grammatical precision. The result produced more reliable suggestions than either approach independently.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/wordsmith-pro/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Streaming Responses Instead of Delayed Analysis
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                AI suggestions were streamed as users wrote rather than generated after submission.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The goal was simple: Writing flow should never stop waiting for feedback.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/wordsmith-pro/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Progress Tracking Instead of One-Time Corrections
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Improvement analytics became a core product layer rather than an optional reporting feature. Users can monitor:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {PROGRESS_METRICS.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The platform measures progress, not documents.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-8 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/wordsmith-pro/cardsinf.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                OCR as a Native Input Method
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                OCR scanning was integrated directly into the text ingestion layer. Users can analyze:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {OCR_INPUTS.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The platform was designed to support writing workflows beyond digital documents alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLATFORM ARCHITECTURE */}
      <section className="w-full bg-[#151515] pt-14 sm:pt-20 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] text-center leading-[1.18]">
            Platform Architecture
          </h2>

          {/* Writer Application */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 flex justify-center self-end">
              <img
                src="/assets/portfolio/wordsmith-pro/wordsmith-mobile.png"
                alt="WordSmith Pro Writer Mobile Application"
                loading="lazy"
                className="w-full max-w-[440px] h-auto block object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left space-y-5 pb-6 lg:pb-10">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Writer Application
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Built with React Native for iOS and Android.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px]">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {WRITER_APP_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Platform Administration Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-5 text-left space-y-5 order-2 lg:order-1 pb-14 lg:pb-20">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Platform Administration Dashboard
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Built with React.js.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px]">
                Operational capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {ADMIN_DASHBOARD_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2 self-end">
              <img
                src="/assets/portfolio/wordsmith-pro/word-lap.png"
                alt="WordSmith Pro Platform Administration Dashboard"
                loading="lazy"
                className="w-full max-w-[640px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY STACK */}
      <TechStackTabs />

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
