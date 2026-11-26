import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'BUSINESS TYPE', value: 'Multi-location entertainment venue operator' },
  { label: 'PRODUCT BUILT', value: 'Automated video capture and delivery platform' },
  { label: 'PLATFORMS', value: 'Flutter Mobile App, Tablet App, Web Dashboard' },
  { label: 'INTEGRATIONS', value: 'GoPro, Twilio, SendGrid, AWS S3, Google Cloud' },
  { label: 'STATUS', value: 'Live in Production' },
]

const STAFF_BOTTLENECKS = [
  'Managing camera recordings',
  'Transferring footage manually',
  'Editing videos',
  'Delivering finished files to guests',
]

const LOST_OPPORTUNITIES = [
  'Lost ancillary revenue',
  'Lost social exposure',
  'Lost marketing reach',
  'Lost post-visit engagement',
]

const CAPTURE_CAPABILITIES = [
  'Connect and monitor GoPro cameras',
  'Register guest sessions',
  'Preview live footage',
  'Trigger automated processing',
  'Deliver videos through email or SMS',
]

const DASHBOARD_VISIBILITY = [
  'Session activity',
  'Video processing status',
  'Device health monitoring',
  'Content libraries',
  'Delivery analytics',
  'Multi-location operations',
]

const TECH_CATEGORIES = [
  {
    name: 'Staff Application',
    items: [{ name: 'Flutter', img: '/assets/portfolio/feg/flutter.jpg' }],
  },
  {
    name: 'Admin Dashboard',
    items: [{ name: 'React.js', img: '/assets/portfolio/feg/react-native.jpg' }],
  },
  {
    name: 'Camera Infrastructure',
    items: [{ name: 'GoPro Integration', img: '/assets/portfolio/feg/goPro-integration.jpg' }],
  },
  {
    name: 'Video Storage',
    items: [
      { name: 'AWS S3', img: '/assets/portfolio/feg/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/portfolio/feg/goole-cloud-platform.jpg' },
    ],
  },
  {
    name: 'Notifications',
    items: [{ name: 'Twilio', img: '/assets/portfolio/feg/twilio.jpg' }],
  },
  {
    name: 'Email Delivery',
    items: [{ name: 'SendGrid', img: '/assets/portfolio/feg/sendGrid.jpg' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'JWT', img: '/assets/portfolio/feg/jwt.jpg' }],
  },
  {
    name: 'Security & Compliance',
    items: [
      { name: 'HTTPS', img: '/assets/portfolio/feg/https-encryption.jpg' },
      { name: 'GDPR', img: '/assets/portfolio/feg/GDPR.jpg' },
    ],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/feg/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Fully Automated Video Workflow',
    body: 'Recording, editing, rendering, and delivery now operate without manual production work.',
  },
  {
    icon: '/assets/portfolio/feg/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Multi-Camera Capture System',
    body: 'Dual GoPro synchronization introduced professional-quality multi-angle video experiences.',
  },
  {
    icon: '/assets/portfolio/feg/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Three Connected Interfaces',
    body: 'Staff operations, guest delivery, and management oversight all run through one ecosystem.',
  },
  {
    icon: '/assets/portfolio/feg/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Live Across Production Venues',
    body: 'The platform operates across active Family Entertainment Group locations.',
  },
]

export default function FamilyEntertainmentGroup() {
  useEffect(() => {
    const title = 'Family Entertainment Group Case Study | Inceptives Digital'
    const desc =
      'An Automated Video Platform Built to Turn Live Attractions Into Shareable Highlight Reels Before the Guest Leaves the Venue.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/family-entertainment-group')
  }, [])

  return (
    <div className="case-study-page w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              Family Entertainment Group
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-semibold text-white leading-[1.22] max-w-[960px] mb-10 sm:mb-14">
            An Automated Video Platform Built to Turn Live Attractions Into Shareable Highlight Reels Before the Guest Leaves the Venue
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/feg/family-banner.png"
              alt="Family Entertainment Group Automated Video Platform Mockup"
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

      {/* 3. THE BUSINESS CHALLENGE */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/portfolio/feg/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Family Entertainment Group operates attraction-based venues where the experience itself is the product. Roller coasters, escape rooms, and interactive attractions create moments guests want to remember and share.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The problem was not creating memorable experiences. It was capturing them.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              Guests increasingly expected professional-quality video content of their visit, but producing that content manually created an operational bottleneck that did not scale with venue traffic. Staff was responsible for:
            </p>

            <ul className="space-y-2.5 pl-1 py-1">
              {STAFF_BOTTLENECKS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              The workflow was slow, inconsistent, and dependent on staff having skills they were never hired for. Every guest who left without receiving a video represented:
            </p>

            <ul className="space-y-2.5 pl-1 py-1">
              {LOST_OPPORTUNITIES.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] pt-2">
              The venue already had GoPro cameras installed throughout its attractions. What it lacked was the product infrastructure connecting those cameras to a guest-ready delivery experience.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILT (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/feg/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-5">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15]">
                What We Built
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Rather than building another media management tool, we designed an automated production pipeline that transformed raw footage into branded highlight videos without human intervention. The platform consisted of two tightly connected products:
              </p>

              <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#00CE44] pt-2">
                Staff Capture Application
              </h3>
              <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
                Built with Flutter for tablets and mobile devices. Used by venue staff to:
              </p>

              <ul className="space-y-2.5 pl-1">
                {CAPTURE_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.65] pt-1">
                The experience was intentionally simplified for high-volume environments where speed mattered more than flexibility. No editing skills required. No training dependency. No production decisions.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/feg/family-mobile1.png"
                alt="Staff Capture Mobile Application"
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
              Three architectural decisions shaped the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/feg/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Automated Editing as Core Infrastructure
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                The editing engine became the product itself rather than a supporting feature. The platform automatically:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {[
                  'Combined footage from multiple cameras',
                  'Applied branded intros and outros',
                  'Added music overlays',
                  'Rendered finished videos',
                  'Prepared delivery assets',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                No manual intervention existed between recording and delivery.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/feg/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Dual-Camera Synchronization
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Each experience used synchronized multi-angle recording through existing GoPro infrastructure. This created:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {[
                  'More cinematic output',
                  'Better replay value',
                  'Higher perceived quality',
                  'Greater social shareability',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The result felt closer to professional production than to consumer video capture.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/feg/cardsinf.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Instant Delivery Pipeline
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Delivery speed directly influenced sharing behavior. Videos were automatically delivered via:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Email', 'SMS'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Guests typically received their highlight reel while still inside the venue, preserving the emotional momentum that drives sharing and repeat engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT IMPACT */}
      <section className="w-full bg-[#151515] pt-6 sm:pt-10 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 text-left space-y-4 pb-14 lg:pb-20">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-2">
                Product Impact
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                The project transformed video delivery from an operational burden into a scalable revenue capability.
              </p>
              <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
                Venue staff no longer act as editors. Guests leave with content worth sharing. Management gains visibility across every session and every location.
              </p>
              <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
                Most importantly, the memory now travels beyond the venue itself. Every delivered video becomes a marketing asset, a retention mechanism, and a new revenue opportunity generated automatically.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/feg/family-mobile.png"
                alt="Family Entertainment Group Guest Highlight Video"
                loading="lazy"
                className="w-full max-w-[520px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. OPERATIONS DASHBOARD */}
      <section className="w-full bg-[#151515] pt-14 sm:pt-20 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 flex justify-center lg:justify-start self-end">
              <img
                src="/assets/portfolio/feg/family-lap.png"
                alt="Family Entertainment Group Operations Dashboard"
                loading="lazy"
                className="w-full max-w-[580px] h-auto block object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left pb-14 lg:pb-24">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-4">
                Operations Dashboard
              </h2>
              <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed mb-4">
                Built with React for venue management teams. Provided visibility into:
              </p>
              <ul className="space-y-2.5 pl-1 mb-5">
                {DASHBOARD_VISIBILITY.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white/90 text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
                Management gained operational oversight without introducing complexity into frontline workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY DECISIONS (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Decisions"
        categories={TECH_CATEGORIES}
      />

      {/* 9. OUTCOMES (4 Cards) */}
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
