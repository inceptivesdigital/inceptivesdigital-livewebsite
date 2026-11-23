import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'CLIENT', value: 'State of the Art Chiropractic' },
  { label: 'INDUSTRY', value: 'Healthcare' },
  { label: 'Region', value: 'United States' },
  { label: 'Compliance', value: 'HIPAA' },
  { label: 'PRODUCT TYPE', value: 'Patient Mobile App + Physician Portal + Admin Dashboard' },
  { label: 'ENGAGEMENT', value: 'Discovery → Design → Development → Support' },
  { label: 'USERS', value: 'Patients, Physicians, Administrators' },
  { label: 'STATUS', value: 'Live in Production' },
]

const CHALLENGE_BULLETS = [
  'Appointments require phone calls.',
  'Follow-up communication was inconsistent.',
  'Remote consultations were unavailable.',
  'Recovery progress between visits was invisible to clinicians.',
  'Administrative teams were spending valuable time managing schedules manually.',
]

const SOLVED_BULLETS = [
  'Reduce manual appointment management.',
  'Support telehealth consultations.',
  'Improve treatment adherence between visits.',
  'Create secure communication between patients and clinicians.',
  'Meet HIPAA requirements from day one.',
]

const PATIENT_CAPABILITIES = [
  'Appointment scheduling',
  'Telehealth consultations',
  'Secure messaging',
  'Payment processing',
  'Treatment progress tracking',
  'Visit reminders and notifications',
]

const PHYSICIAN_CAPABILITIES = [
  'Schedule management',
  'Patient history access',
  'Consultation notes',
  'Secure video appointments',
  'Patient communication',
  'Treatment follow-up management',
]

const ADMIN_CAPABILITIES = [
  'Platform activity monitoring',
  'Appointment oversight',
  'Revenue reporting',
  'User management',
  'Audit logs',
  'Compliance monitoring',
]

const IMPACT_STATS_ROW_1 = [
  { value: '60%', label: 'REDUCTION IN SCHEDULING ADMINISTRATION' },
  { value: '40%', label: 'INCREASE IN ONLINE CONSULTATIONS' },
  { value: '3', label: 'CONNECTED INTERFACES' },
]

const IMPACT_STATS_ROW_2 = [
  { value: 'HIPAA', label: 'COMPLIANT INFRASTRUCTURE' },
  { value: '100%', label: 'SECURE TELEHEALTH CAPABILITY' },
  { value: 'Active', label: 'PRODUCTION DEPLOYMENT' },
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'Flutter', img: '/assets/portfolio/chiropractic/flutter.jpg' }],
  },
  {
    name: 'Web Portal',
    items: [{ name: 'React.js', img: '/assets/portfolio/chiropractic/react-native.jpg' }],
  },
  {
    name: 'Payments',
    items: [{ name: 'Stripe', img: '/assets/portfolio/chiropractic/stripe.jpg' }],
  },
  {
    name: 'Communication',
    items: [{ name: 'Twilio', img: '/assets/portfolio/chiropractic/twilio.jpg' }],
  },
  {
    name: 'Calendar',
    items: [{ name: 'Google Calendar', img: '/assets/portfolio/chiropractic/google-calendar.jpg' }],
  },
  {
    name: 'Infrastructure',
    items: [{ name: 'AWS HIPAA Environment', img: '/assets/portfolio/chiropractic/aws-hippa.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/chiropractic/location.png',
    iconClass: 'w-9 h-auto',
    title: '60% Reduction in Appointment Management Time',
    body: 'Administrative staff spent significantly less time managing bookings and follow-ups manually.',
  },
  {
    icon: '/assets/portfolio/chiropractic/offline.png',
    iconClass: 'w-14 h-auto',
    title: '40% Increase in Online Consultations',
    body: 'Patients adopted remote care quickly once telehealth became available.',
  },
  {
    icon: '/assets/portfolio/chiropractic/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Three Integrated Interfaces Delivered',
    body: 'Patients, clinicians, and administrators each received workflows designed around how they actually work.',
  },
  {
    icon: '/assets/portfolio/chiropractic/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Platform Running in Active Production',
    body: 'The clinic now manages patient engagement digitally from appointment booking through long-term treatment follow-up.',
  },
]

export default function StateOfTheArtChiropractic() {
  useEffect(() => {
    const title = 'State of the Art Chiropractic Case Study | Inceptives Digital'
    const desc =
      'Connected Patient Engagement Platform for Modern Chiropractic Care. HIPAA-compliant patient mobile app, physician portal, and admin dashboard.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/state-of-the-art-chiropractic')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          {/* Flanked Green Title Row */}
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              State of the Art Chiropractic
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[900px] mb-10 sm:mb-14">
            Connected Patient Engagement Platform for Modern Chiropractic Care
          </h2>

          {/* Hero Laptop + iPhone Mockup */}
          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/chiropractic/stateofart-screen.png"
              alt="State of the Art Chiropractic Platform Mockup"
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
        style={{ backgroundImage: 'url("/assets/portfolio/chiropractic/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-3">
              State of the Art Chiropractic has built strong patient relationships inside the clinic.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-5">
              The problem started when patients left.
            </p>

            <ul className="space-y-3 mb-7 pl-1">
              {CHALLENGE_BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-2">
              The clinic had successfully built clinical trust.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              What it lacked was continuity between appointments.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT HAD TO BE SOLVED */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/chiropractic/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-12 lg:pb-24">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] mb-6">
                What Had
                <span className="block">to Be Solved</span>
              </h2>

              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-5">
                The project started with five operational requirements:
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
                src="/assets/portfolio/chiropractic/art-mobile.png"
                alt="Chiropractic Appointment Calendar Mobile App"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[380px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT STRATEGY DECISIONS */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] mb-3">
              Product <span className="text-[#00CE44]">Strategy Decisions</span>
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              Several early decisions shaped the entire platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-5 border border-white/[0.05]">
              <img
                src="/assets/portfolio/chiropractic/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[23px] font-semibold text-white leading-snug">
                HIPAA Was Treated as Infrastructure
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Compliance was built into the platform architecture before patient functionality was developed.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Encryption, access controls, audit logging, and infrastructure decisions were treated as product requirements rather than legal checkboxes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-5 border border-white/[0.05]">
              <img
                src="/assets/portfolio/chiropractic/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[23px] font-semibold text-white leading-snug">
                Three Distinct User Experiences
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Discovery identified three completely different workflows:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-white text-[15px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                  <span>Patients</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                  <span>Physicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                  <span>Administrators</span>
                </li>
              </ul>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Each required separate permissions, interfaces, and priorities. Trying to serve all three through a single experience would have created friction for all of them.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-5 border border-white/[0.05]">
              <img
                src="/assets/portfolio/chiropractic/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[23px] font-semibold text-white leading-snug">
                Engagement Beyond the Appointment
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                The platform was designed around the idea that treatment outcomes depend heavily on what happens between visits.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Communication, reminders, follow-ups, and progress tracking became core product capabilities rather than optional features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION */}
      <section className="w-full bg-[#151515] pt-8 sm:pt-12 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Left Column: Narrative & 2 Product Capability Lists */}
            <div className="lg:col-span-6 text-left space-y-8 pb-14 lg:pb-20">
              <div>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] mb-3">
                  The Solution
                </h2>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed">
                  The final platform shipped as three connected products.
                </p>
              </div>

              {/* Patient Mobile Application */}
              <div>
                <h3 className="text-[22px] sm:text-[25px] font-semibold text-white mb-2">
                  Patient Mobile Application
                </h3>
                <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed mb-3">
                  Built to help patients manage their care without depending on the clinic&apos;s front desk.
                </p>
                <p className="text-white font-semibold text-[15px] mb-3">Capabilities included:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {PATIENT_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white/90 text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physician Portal */}
              <div>
                <h3 className="text-[22px] sm:text-[25px] font-semibold text-white mb-2">
                  Physician Portal
                </h3>
                <p className="text-white/85 text-[15px] sm:text-[17px] leading-relaxed mb-3">
                  Built around clinical workflows rather than administrative processes.
                </p>
                <p className="text-white font-semibold text-[15px] mb-3">Capabilities included:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {PHYSICIAN_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white/90 text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Patient Mobile Mockup with Green Circle */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/chiropractic/art-mobile1.png"
                alt="Patient Mobile Application Interface"
                loading="lazy"
                className="w-full max-w-[540px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. IMPACT SNAPSHOT (Solid Black #000000) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-[1.15] mb-12 sm:mb-16">
            Impact Snapshot
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

      {/* 8. ADMINISTRATIVE DASHBOARD */}
      <section className="w-full bg-[#151515] pt-16 sm:pt-20 lg:pt-24 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Left Tablet Mockup */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start self-end">
              <img
                src="/assets/portfolio/chiropractic/art-lap.png"
                alt="Administrative Dashboard Tablet View"
                loading="lazy"
                className="w-full max-w-[580px] h-auto block object-contain select-none"
              />
            </div>

            {/* Right Text & Capabilities */}
            <div className="lg:col-span-6 text-left pb-14 lg:pb-20">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-4">
                Administrative Dashboard
              </h2>
              <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed mb-5">
                Built to reduce operational overhead while maintaining compliance visibility.
              </p>
              <p className="text-white font-bold text-[15px] sm:text-[16px] mb-3.5">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {ADMIN_CAPABILITIES.map((cap) => (
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
