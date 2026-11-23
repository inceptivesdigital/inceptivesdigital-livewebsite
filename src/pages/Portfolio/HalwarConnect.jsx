import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const SNAPSHOT_ITEMS = [
  { label: 'CLIENT BUSINESS TYPE', value: 'Two-Sided Service Platform' },
  { label: 'PRODUCT BUILT', value: 'Customer App, Provider App, Admin Platform' },
  { label: 'PLATFORMS', value: 'Flutter Mobile Apps, React.js Dashboard' },
  { label: 'INTEGRATIONS', value: 'Stripe Connect, Firebase, Zego Cloud, Google Maps' },
  { label: 'LANGUAGES', value: 'English, French' },
  { label: 'STATUS', value: 'Live in Production' },
]

const CUSTOMER_CAPABILITIES = [
  'Search local providers',
  'Compare services',
  'View transparent pricing',
  'Book appointments',
  'Track service progress',
  'Communicate directly with providers',
  'Complete payments securely',
]

const PROVIDER_CAPABILITIES = [
  'Job acceptance',
  'Availability management',
  'Schedule control',
  'Earnings tracking',
  'Customer communication',
  'Service delivery workflows',
]

const DASHBOARD_CAPABILITIES = [
  'Users',
  'Service providers',
  'Transactions',
  'Disputes',
  'Payouts',
  'Platform configuration',
  'Marketplace health metrics',
]

const TECH_CATEGORIES = [
  {
    name: 'Customer App',
    items: [{ name: 'Flutter', img: '/assets/portfolio/halwar-connect/flutter.jpg' }],
  },
  {
    name: 'Provider App',
    items: [{ name: 'Flutter', img: '/assets/portfolio/halwar-connect/flutter.jpg' }],
  },
  {
    name: 'Admin Dashboard',
    items: [{ name: 'React.js', img: '/assets/portfolio/halwar-connect/react-native.jpg' }],
  },
  {
    name: 'Payments & Payouts',
    items: [{ name: 'Stripe', img: '/assets/portfolio/halwar-connect/stripe.jpg' }],
  },
  {
    name: 'Messaging',
    items: [{ name: 'Firebase', img: '/assets/portfolio/halwar-connect/firebase-cloud-messaging.jpg' }],
  },
  {
    name: 'Voice Communication',
    items: [{ name: 'Zego Cloud', img: '/assets/portfolio/halwar-connect/zego-cloud.jpg' }],
  },
  {
    name: 'Maps & Location',
    items: [{ name: 'Maps & Location', img: '/assets/portfolio/halwar-connect/google-map.png' }],
  },
  {
    name: 'Search & Discovery',
    items: [{ name: 'Google Places API', img: '/assets/portfolio/halwar-connect/google-map.png' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'JWT', img: '/assets/portfolio/halwar-connect/jwt.jpg' }],
  },
  {
    name: 'Security',
    items: [{ name: 'HTTPS Encryption', img: '/assets/portfolio/halwar-connect/https-encryption.jpg' }],
  },
  {
    name: 'Compliance',
    items: [{ name: 'GDPR', img: '/assets/portfolio/halwar-connect/GDPR.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/halwar-connect/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Three Connected Products Delivered',
    body: 'Customer, provider, and operations workflows were unified into one ecosystem.',
  },
  {
    icon: '/assets/portfolio/halwar-connect/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Marketplace Payments Operational From Day One',
    body: 'Customer transactions and provider payouts were fully automated.',
  },
  {
    icon: '/assets/portfolio/halwar-connect/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Native Multilingual Support',
    body: 'English and French experiences were built directly into the product architecture.',
  },
  {
    icon: '/assets/portfolio/halwar-connect/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Full Marketplace Operations Digitised',
    body: 'Scheduling, communication, payouts, and dispute handling were moved into a single platform.',
  },
  {
    icon: '/assets/portfolio/halwar-connect/product.png',
    iconClass: 'w-12 h-auto',
    title: 'Live Production Deployment',
    body: 'The platform is actively operating across its target markets.',
  },
]

export default function HalwarConnect() {
  useEffect(() => {
    const title = 'Halwar Connect Case Study | Inceptives Digital'
    const desc =
      'A Two-Sided Service Marketplace Built for Trust on Both Sides of Every Transaction. Flutter customer & provider apps, React.js operations dashboard, Stripe Connect.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/halwar-connect')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              Halwar Connect
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[940px] mb-10 sm:mb-14">
            A Two-Sided Service Marketplace Built for Trust on Both Sides of Every Transaction
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/halwar-connect/halwar-banner.png"
              alt="Halwar Connect Marketplace Platform Mockup"
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
        style={{ backgroundImage: 'url("/assets/portfolio/halwar-connect/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Marketplaces fail for predictable reasons.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Customers do not trust providers. Providers do not trust the platform. Halwar Connect was facing both problems simultaneously.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              Customers lacked visibility into pricing, service progress, and provider communication. Providers lacked the operational tools required to manage bookings, earnings, schedules, and client relationships professionally.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The result was friction on both sides of every transaction. And friction is expensive in marketplaces. Because a marketplace only works when both sides decide to come back.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILT (Green Wave CTA Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/halwar-connect/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-7">
              <div>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] mb-4">
                  What We Built
                </h2>
                <p className="text-white text-[16px] sm:text-[18px] leading-[1.65] mb-2">
                  Rather than building another booking application, we built an operating system for service transactions.
                </p>
                <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
                  The platform consisted of three connected products designed around three completely different user groups.
                </p>
              </div>

              {/* Customer Application */}
              <div>
                <h3 className="text-[21px] sm:text-[24px] font-semibold text-[#00CE44] mb-1.5">
                  Customer Application
                </h3>
                <p className="text-white/90 text-[15px] sm:text-[16px] mb-3">
                  Built with Flutter for iOS and Android. Capabilities included:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
                  {CUSTOMER_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px]">
                  The objective was simple: Remove uncertainty before money changes hands.
                </p>
              </div>

              {/* Provider Application */}
              <div>
                <h3 className="text-[21px] sm:text-[24px] font-semibold text-[#00CE44] mb-1.5">
                  Provider Application
                </h3>
                <p className="text-white/90 text-[15px] sm:text-[16px] mb-3">
                  Also built with Flutter. Providers gained a complete business management environment for:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
                  {PROVIDER_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px]">
                  The platform became more than a lead source. It became part of their daily operations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/halwar-connect/halwar-mobile2.png"
                alt="Halwar Connect Mobile Experience"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[400px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT STRATEGY DECISIONS (3 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18] mb-3">
              Product <span className="text-[#00CE44]">Strategy Decisions</span>
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              Three architectural decisions shaped the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/halwar-connect/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Real-Time Communication
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Communication between customers and providers remained inside the platform. Users could:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Confirm service details', 'Send messages', 'Make voice calls', 'Share updates'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Every interaction remained traceable and auditable. The platform became the place where transactions happened rather than merely where they started.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/halwar-connect/price-tag.png"
                alt=""
                loading="lazy"
                className="w-11 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Dynamic Pricing Transparency
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Pricing disputes destroy marketplace trust. The pricing engine was designed to surface changes instantly. Customers could see:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Service costs', 'Add-on pricing', 'Provider adjustments', 'Share updates'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Before confirming a booking. Surprises disappeared from the transaction process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/halwar-connect/market-place.png"
                alt=""
                loading="lazy"
                className="w-11 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Marketplace-Native Payments
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Stripe Connect was selected to support marketplace-specific payment flows. The platform supported:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Customer payments', 'Provider wallets', 'Direct payouts', 'Transaction History', 'Earnings visibility'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Providers could trust the platform with their income because they could see exactly how and when they would be paid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARKETPLACE OPERATIONS DASHBOARD */}
      <section className="w-full bg-[#151515] pt-8 sm:pt-12 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 flex justify-center lg:justify-start self-end">
              <img
                src="/assets/portfolio/halwar-connect/halwar-lap.png"
                alt="Halwar Connect Marketplace Operations Dashboard"
                loading="lazy"
                className="w-full max-w-[580px] h-auto block object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left pb-14 lg:pb-24">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-4">
                Marketplace Operations Dashboard
              </h2>
              <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed mb-4">
                Built using React.js. The administration platform provided oversight across:
              </p>
              <ul className="space-y-2.5 pl-1 mb-5">
                {DASHBOARD_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white/90 text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
                The operational complexity of a marketplace became manageable from a single interface.
              </p>
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
