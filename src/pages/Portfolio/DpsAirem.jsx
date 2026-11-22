import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'CLIENT', value: 'DPS Airem' },
  { label: 'INDUSTRY', value: 'Workforce Management' },
  { label: 'PLATFORMS', value: 'iOS, Android, Web' },
  { label: 'REGION', value: 'United States' },
  { label: 'PRODUCT TYPE', value: 'Mobile Application + Web Platform' },
  { label: 'ENGAGEMENT', value: 'Discovery → Design → Development → Support' },
  { label: 'USERS', value: 'Guards, Supervisors, Managers, Super Admins' },
  { label: 'STATUS', value: 'Live in Production' },
]

const CHALLENGE_BULLETS = [
  'Shift changes happened through phone calls and WhatsApp.',
  'Incident reporting was inconsistent.',
  'Managers had no reliable way to confirm whether staff were physically present at assigned locations.',
  'Site performance depended on manual follow-ups.',
]

const SOLVED_BULLETS = [
  'Verify field presence without manual supervision.',
  'Track workforce activity across multiple sites in real time.',
  'Maintain operations in low-connectivity environments.',
  'Reduce paperwork and administrative overhead.',
  'Improve emergency response capability for field personnel.',
]

const MOBILE_CAPABILITIES = [
  'Geo-fenced clock-in and clock-out',
  'QR-based attendance verification',
  'Shift schedules',
  'Incident reporting',
  'Document uploads',
  'SOS emergency alerts',
  'Offline operation with automatic sync',
]

const DASHBOARD_CAPABILITIES = [
  'Live workforce visibility',
  'GPS monitoring',
  'Shift compliance tracking',
  'Attendance reporting',
  'Exemption approvals',
  'Payroll workflows',
  'Incident management',
]

const IMPACT_STATS_ROW_1 = [
  { value: '90%', label: 'REDUCTION IN PAPERWORK' },
  { value: '1,000+', label: 'ACTIVE FIELD OPERATIVES' },
  { value: '4', label: 'ROLE-SPECIFIC INTERFACES' },
]

const IMPACT_STATS_ROW_2 = [
  { value: 'Live', label: 'REAL-TIME GPS MONITORING' },
  { value: '100%', label: 'OFFLINE SUPPORT' },
  { value: 'Active', label: 'PRODUCTION DEPLOYMENT' },
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'React Native', img: '/assets/portfolio/dps-airem/react-native.jpg' }],
  },
  {
    name: 'Backend',
    items: [{ name: 'Node.js APIs', img: '/assets/portfolio/dps-airem/node.jpg' }],
  },
  {
    name: 'Mapping',
    items: [{ name: 'GPS + Geofencing', img: '/assets/portfolio/dps-airem/map-geofencing.jpg' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'Role-Based Access', img: '/assets/portfolio/dps-airem/role-based-access.jpg' }],
  },
  {
    name: 'Infrastructure',
    items: [{ name: 'Cloud Deployment', img: '/assets/portfolio/dps-airem/cloud-deployment.jpg' }],
  },
  {
    name: 'Synchronization',
    items: [{ name: 'Offline Caching + Background Sync', img: '/assets/portfolio/dps-airem/offline-cache.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/dps-airem/location.png',
    iconClass: 'w-9 h-auto',
    title: '90% Reduction in Manual Paperwork',
    body: 'Attendance tracking, shift changes, payroll preparation, and incident reporting were moved into a single platform.',
  },
  {
    icon: '/assets/portfolio/dps-airem/offline.png',
    iconClass: 'w-14 h-auto',
    title: '1,000+ Operatives Tracked in Real Time',
    body: 'Managers gained live visibility across multiple operational sites without relying on phone calls.',
  },
  {
    icon: '/assets/portfolio/dps-airem/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Four Distinct Interfaces Delivered',
    body: 'Every role received an interface designed around its own workflow rather than adapting a generic dashboard.',
  },
  {
    icon: '/assets/portfolio/dps-airem/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Platform Running in Active Production',
    body: 'The system is currently supporting live field operations across client locations.',
  },
]

export default function DpsAirem() {
  useEffect(() => {
    const title = 'DPS Airem Case Study | Inceptives Digital'
    const desc =
      'Workforce Management Platform for Distributed Field Operations. Geofenced attendance, offline-first mobile app, live GPS monitoring, and payroll workflows.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/dps-airem')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              DPS Airem
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[900px] mb-10 sm:mb-14">
            Workforce Management Platform for Distributed Field Operations
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/dps-airem/hero-screen.png"
              alt="DPS Airem Workforce Management Platform Mockup"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 text-left">
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
        style={{ backgroundImage: 'url("/assets/portfolio/dps-airem/challenge-bg.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-3">
              DPS Airem manages security personnel across multiple client locations.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-5">
              As the business grew, operational visibility disappeared.
            </p>

            <ul className="space-y-3 mb-7 pl-1">
              {CHALLENGE_BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The business was reaching a scale where operational blind spots had become contractual risk.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT HAD TO BE SOLVED */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/dps-airem/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-12 lg:pb-24">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] mb-6">
                What Had
                <span className="block">to Be Solved</span>
              </h2>

              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-5">
                The project started with five non-negotiable requirements:
              </p>

              <ul className="space-y-3 pl-1">
                {SOLVED_BULLETS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px] leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/dps-airem/dpsmobile.png"
                alt="DPS Airem Field Mobile App"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[380px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT STRATEGY DECISIONS (4 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18]">
              Product <span className="text-[#00CE44]">Strategy Decisions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/dps-airem/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Geo-Fenced Attendance Verification
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Clock-ins only count when performed within approved site boundaries.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Presence could not rely on trust or phone calls at this scale.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/dps-airem/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Offline-First Mobile Architecture
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Field teams regularly operate in areas with unreliable connectivity.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Critical actions continue to work offline and automatically synchronize when a connection returns.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/dps-airem/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Emergency Response as Core Infrastructure
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                SOS alerts were treated as operational infrastructure rather than an optional feature.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Emergency notifications route simultaneously to Supervisors and Managers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/dps-airem/cardsinf.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Role-Based Product Architecture
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Four user groups emerged during discovery:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Super Admin', 'Manager', 'Supervisor', 'Guard'].map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center justify-center bg-[#1A1A1A] border border-white/40 rounded-[8px] px-3 py-2 text-white text-[13.5px] font-medium text-center"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Each received different permissions, workflows, and interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION */}
      <section className="w-full bg-[#151515] pt-8 sm:pt-12 pb-16 sm:pb-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left space-y-6">
              <div>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-3">
                  The Solution
                </h2>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed">
                  The final product shipped as two tightly connected systems.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] sm:text-[25px] font-semibold text-[#00CE44] mb-2">
                  Mobile Application
                </h3>
                <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed mb-3">
                  Used by Guards and Supervisors in the field.
                </p>
                <p className="text-white font-semibold text-[15px] mb-3">Capabilities included:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {MOBILE_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white/90 text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/portfolio/dps-airem/solution-mobile.png"
                alt="DPS Airem Mobile Application Interface"
                loading="lazy"
                className="w-full max-w-[540px] h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUTCOMES & IMPACT (Solid Black #000000) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-[1.15] mb-12 sm:mb-16">
            Outcomes &amp; Impact
          </h2>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-10 mb-10 gap-8 md:gap-0">
            {IMPACT_STATS_ROW_1.map((stat, idx) => (
              <div
                key={stat.label}
                className={`px-6 flex flex-col items-center justify-center ${
                  idx < 2 ? 'md:border-r md:border-white/10' : ''
                }`}
              >
                <div className="text-[42px] sm:text-[52px] lg:text-[60px] font-semibold text-[#00CE44] leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-[#6B7280] text-[13px] sm:text-[15px] tracking-wider uppercase font-normal max-w-[260px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {IMPACT_STATS_ROW_2.map((stat, idx) => (
              <div
                key={stat.label}
                className={`px-6 flex flex-col items-center justify-center ${
                  idx < 2 ? 'md:border-r md:border-white/10' : ''
                }`}
              >
                <div className="text-[42px] sm:text-[52px] lg:text-[60px] font-semibold text-[#00CE44] leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-[#6B7280] text-[13px] sm:text-[15px] tracking-wider uppercase font-normal max-w-[260px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MANAGEMENT DASHBOARD */}
      <section className="w-full bg-[#151515] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <img
                src="/assets/portfolio/dps-airem/dashboard-mockup.png"
                alt="DPS Airem Management Dashboard"
                loading="lazy"
                className="w-full max-w-[580px] h-auto object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-4">
                Management Dashboard
              </h2>
              <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed mb-5">
                Used by Managers and Administrators.
              </p>
              <p className="text-white font-bold text-[15px] sm:text-[16px] mb-3.5">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {DASHBOARD_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white/90 text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY DECISIONS (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Decisions"
        categories={TECH_CATEGORIES}
      />

      {/* 10. OUTCOMES (4 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] text-center leading-[1.18] mb-12 sm:mb-14">
            Outcomes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
