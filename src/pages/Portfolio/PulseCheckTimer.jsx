import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const SNAPSHOT_ITEMS = [
  { label: 'BUSINESS TYPE', value: 'Clinical Support Software' },
  { label: 'PRODUCT BUILT', value: 'CPR protocol timing and documentation platform' },
  { label: 'PLATFORMS', value: 'Flutter Mobile App' },
  { label: 'STANDARDS SUPPORTED', value: 'American Heart Association (AHA) CPR Guidelines' },
  { label: 'OUTPUT FORMATS', value: 'PDF, DOCX' },
  { label: 'STATUS', value: 'Live in Production' },
]

const RESPONDER_TASKS = [
  'Deliver compressions',
  'Manage airway interventions',
  'Coordinate team communication',
  'Monitor patient response',
  'Track protocol timing',
  'Document rhythm changes',
]

const ENGINE_AUTOMATION = [
  'Starts two-minute CPR cycles',
  'Triggers intervention prompts',
  'Tracks elapsed session time',
  'Maintains protocol sequencing',
  'Logs critical events',
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'Flutter', img: '/assets/portfolio/pulse-check/flutter.jpg' }],
  },
  {
    name: 'Session Storage',
    items: [{ name: 'Local Offline Database', img: '/assets/portfolio/pulse-check/local-database.jpg' }],
  },
  {
    name: 'Synchronization',
    items: [{ name: 'Automatic Background Sync', img: '/assets/portfolio/pulse-check/automatic.jpg' }],
  },
  {
    name: 'Report Generation',
    items: [{ name: 'PDF and DOCX Export', img: '/assets/portfolio/pulse-check/pdf-dovx.jpg' }],
  },
  {
    name: 'Security',
    items: [{ name: 'Encrypted Session Storage', img: '/assets/portfolio/pulse-check/encrypted-session-storage.jpg' }],
  },
  {
    name: 'Compliance Reference',
    items: [{ name: 'AHA', img: '/assets/portfolio/pulse-check/aHA-cPR-guidelines.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/pulse-check/location.png',
    iconClass: 'w-9 h-auto',
    title: 'AHA-Compliant CPR Timing',
    body: 'Every cycle follows recommended protocol intervals automatically.',
  },
  {
    icon: '/assets/portfolio/pulse-check/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Zero Manual Timing',
    body: 'Responders no longer monitor clocks during active resuscitation.',
  },
  {
    icon: '/assets/portfolio/pulse-check/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Automatic Rhythm Documentation',
    body: 'Every event receives precise timestamps without additional workload.',
  },
  {
    icon: '/assets/portfolio/pulse-check/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Offline Clinical Reliability',
    body: 'The application remains fully operational without internet connectivity.',
  },
  {
    icon: '/assets/portfolio/pulse-check/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Production Deployment',
    body: 'The platform is actively used in live environments.',
  },
]

export default function PulseCheckTimer() {
  useEffect(() => {
    const title = 'Pulse Check Timer Case Study | Inceptives Digital'
    const desc =
      'A CPR Timing Application Built to Keep Emergency Responders Focused on the Patient, Not the Clock. AHA-compliant Flutter clinical support app with offline reliability.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/pulse-check-timer')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              Pulse Check Timer
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[940px] mb-10 sm:mb-14">
            A CPR Timing Application Built to Keep Emergency Responders Focused on the Patient, Not the Clock
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/pulse-check/pluse-banner.png"
              alt="Pulse Check Timer CPR Application Mockup"
              loading="eager"
              className="w-full h-auto block mx-auto select-none"
            />
          </div>
        </div>
      </section>

      {/* 2. SNAPSHOT (Solid #00CE44 Band) */}
      <section className="w-full bg-[#00CE44] text-black py-16 sm:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-black leading-[1.18] mb-10 sm:mb-12 text-left">
            Snapshot
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

      {/* 3. THE BUSINESS CHALLENGE */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/portfolio/pulse-check/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              During cardiac arrest, seconds matter. CPR protocols exist because consistency saves lives. Yet in the middle of an active resuscitation, responders are expected to simultaneously:
            </p>

            <ul className="space-y-2.5 pl-1 py-1">
              {RESPONDER_TASKS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] pt-1">
              The timer itself becomes another task competing for attention. Pulse Check Timer was created to remove that burden entirely.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              The objective was simple: Allow emergency responders to focus completely on the patient while the application handles timing, prompts, and documentation automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILT (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/pulse-check/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-5">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15]">
                What We Built
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Rather than building a stopwatch with extra buttons, we built a clinical workflow tool designed specifically around active cardiac arrest response. The application was built around one principle:
              </p>

              <p className="text-[#00CE44] text-[20px] sm:text-[24px] font-bold leading-snug">
                One tap should start the entire protocol.
              </p>
              <p className="text-white/90 text-[15.5px] sm:text-[17px]">
                Everything after that should happen automatically.
              </p>

              <h3 className="text-[22px] sm:text-[25px] font-semibold text-[#00CE44] pt-2">
                CPR Session Engine
              </h3>
              <p className="text-white/90 text-[15.5px] sm:text-[17px]">
                The application manages complete resuscitation cycles in real time. The system automatically:
              </p>

              <ul className="space-y-2.5 pl-1">
                {ENGINE_AUTOMATION.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/90 text-[15px] sm:text-[16px] pt-1">
                Responders no longer need to watch a timer while managing a patient.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/pulse-check/mobile-pluse.png"
                alt="Pulse Check Timer CPR Session Engine"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[400px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE PRODUCT DECISIONS (3 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] mb-3">
              Core <span className="text-[#00CE44]">Product Decisions</span>
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              Three architectural decisions defined the product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pulse-check/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                AHA Guidelines as Product Specification
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                The application follows:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {[
                  'Two-minute CPR cycles',
                  'Defibrillator preparation prompts',
                  'Pulse check intervals',
                  'Rhythm reassessment timing',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The application was designed to support clinical protocol rather than asking clinicians to adapt to software behaviour.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pulse-check/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                One-Tap Operation Model
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Emergency responders do not have spare attention. The interaction model was intentionally constrained:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {[
                  'One tap starts the cycle.',
                  'Prompts occur automatically.',
                  'Rhythm entries require minimal input.',
                  'Reports generate automatically.',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The responder interacts with the patient, not the software.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/pulse-check/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Offline Reliability
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Emergency environments are unpredictable. Connectivity cannot be assumed. The platform operates fully offline with:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {[
                  'Local session storage',
                  'Offline event logging',
                  'Automatic synchronization after reconnection',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                A clinical tool that fails without a signal is not a clinical tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Stack"
        categories={TECH_CATEGORIES}
      />

      {/* 7. OUTCOMES (5 Cards) */}
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
