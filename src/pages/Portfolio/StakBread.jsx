import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'BUSINESS TYPE', value: 'Creator Marketplace Platform' },
  { label: 'PRODUCT BUILT', value: 'Social Commerce Ecosystem' },
  { label: 'PLATFORMS', value: 'React Native Mobile App, Creator Storefronts, Admin Dashboard' },
  { label: 'INTEGRATIONS', value: 'Stripe Connect, OpenAI APIs' },
  { label: 'CORE CAPABILITIES', value: 'Video Commerce, Creator Monetisation, Professional Discovery' },
  { label: 'STATUS', value: 'Live in Production' },
]

const SOLVED_REQUIREMENTS = [
  'Unite short-form video discovery and instant in-app checkout without external redirects.',
  'Enable creators to launch branded storefronts and manage products directly inside the platform.',
  'Combine professional identity, portfolio visibility, and commerce under a single profile.',
  'Deliver marketplace-native payouts and transparent earnings via Stripe Connect.',
  'Power intelligent creator discovery and profile enrichment with OpenAI APIs.',
]

const MOBILE_CAPABILITIES = [
  'Shoppable creator video feeds',
  'Native in-app product checkout',
  'Creator storefront management',
  'AI-assisted profile discovery',
  'Real-time buyer-creator messaging',
  'Order tracking and purchase history',
  'Direct creator payouts via Stripe Connect',
]

const DASHBOARD_CAPABILITIES = [
  'Creator onboarding and verification',
  'Marketplace catalog moderation',
  'Transaction and payout oversight',
  'Commission and revenue reporting',
  'Content governance and safety tools',
  'Platform growth analytics',
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'React Native', img: '/assets/portfolio/stakbread/react-native.jpg' }],
  },
  {
    name: 'Creator Commerce',
    items: [{ name: 'Stripe Connect', img: '/assets/portfolio/stakbread/stripe.jpg' }],
  },
  {
    name: 'AI Profile Intelligence',
    items: [{ name: 'OpenAI APIs', img: '/assets/portfolio/stakbread/openai.png' }],
  },
  {
    name: 'Messaging',
    items: [{ name: 'Real-Time Chat Infrastructure', img: '/assets/portfolio/stakbread/real-time-chat.jpg' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'JWT', img: '/assets/portfolio/stakbread/jwt.jpg' }],
  },
  {
    name: 'Security',
    items: [{ name: 'HTTPS Encryption', img: '/assets/portfolio/stakbread/https-encryption.jpg' }],
  },
  {
    name: 'Admin Dashboard',
    items: [{ name: 'Web-Based Operations Platform', img: '/assets/portfolio/stakbread/web-based.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/stakbread/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Zero-Redirect Video Commerce',
    body: 'Audiences move directly from watching creator content to purchasing without leaving the application.',
  },
  {
    icon: '/assets/portfolio/stakbread/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Unified Creator Ecosystem',
    body: 'Content, storefronts, messaging, and professional identity operate inside a single mobile product.',
  },
  {
    icon: '/assets/portfolio/stakbread/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Marketplace-Native Monetisation',
    body: 'Stripe Connect powers seamless checkout, split payments, and direct creator payouts at scale.',
  },
  {
    icon: '/assets/portfolio/stakbread/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Live in Active Production',
    body: 'The platform actively supports creator commerce, storefronts, and real-time community discovery.',
  },
]

export default function StakBread() {
  useEffect(() => {
    const title = 'StakBread Case Study | Inceptives Digital'
    const desc =
      'A Social Commerce Platform Built to Remove the Gap Between Watching a Creator and Buying What They Sell. React Native, Stripe Connect, and OpenAI APIs.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/stakbread')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              StakBread
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[960px] mb-10 sm:mb-14">
            A Social Commerce Platform Built to Remove the Gap Between Watching a Creator and Buying What They Sell
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/stakbread/stak-banner.png"
              alt="StakBread Social Commerce Platform Mockup"
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
        style={{ backgroundImage: 'url("/assets/portfolio/stakbread/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The creator economy asks creators to operate three businesses at once. One platform for content. Another for commerce. A third for professional identity.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              Every transition between those platforms creates friction. Every additional click loses attention. Every redirect loses conversion.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              StakBread identified an opportunity hidden inside that fragmentation: Bring content, commerce, and professional identity into a single product experience.
            </p>
            <p className="text-[#00CE44] font-semibold text-[17px] sm:text-[19px] pt-1">
              Not three connected products. One product.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT HAD TO BE SOLVED (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/stakbread/bannersec.png")' }}
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
                {SOLVED_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-white text-[15.5px] sm:text-[17px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/stakbread/stak-mobile2.png"
                alt="StakBread Creator Video Commerce Mobile App"
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
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18]">
              Product <span className="text-[#00CE44]">Strategy Decisions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/stakbread/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Video-First Commerce Flow
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Product discovery and checkout live directly inside the video feed, eliminating link-in-bio drop-offs.
              </p>
            </div>

            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/stakbread/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                AI-Powered Profile Discovery
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                OpenAI APIs enrich creator profiles and surface relevant products, services, and collaborators automatically.
              </p>
            </div>

            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/stakbread/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Marketplace-Native Payouts
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Stripe Connect handles multi-party settlements, creator wallets, and automated disbursements with full transparency.
              </p>
            </div>

            <div className="bg-[#202020] rounded-[15px] p-6 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/stakbread/cardsinf.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#00CE44] leading-snug">
                Real-Time Community Messaging
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Integrated real-time chat keeps buyers, fans, and creators connected from initial inquiry to post-purchase support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION (Bottom-Flush Device Mockups) */}
      <section className="w-full bg-[#151515] pt-10 sm:pt-14 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-3">
              The Solution
            </h2>
            <p className="text-white/85 text-[16px] sm:text-[18px] font-light leading-relaxed">
              The final product shipped as two tightly connected systems.
            </p>
          </div>

          {/* Mobile Application */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 text-left space-y-5 pb-6 lg:pb-10">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Mobile Application &amp; Creator Storefronts
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Built with React Native for creators and shoppers.
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

            <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/stakbread/stak-mobile.png"
                alt="StakBread Mobile Storefront Interface"
                loading="lazy"
                className="w-full max-w-[460px] h-auto block object-contain select-none"
              />
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 flex justify-center lg:justify-start self-end">
              <img
                src="/assets/portfolio/stakbread/stak-lap.png"
                alt="StakBread Web-Based Operations Dashboard"
                loading="lazy"
                className="w-full max-w-[580px] h-auto block object-contain select-none"
              />
            </div>

            <div className="lg:col-span-6 text-left space-y-5 pb-14 lg:pb-20">
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#00CE44] leading-[1.2]">
                Admin Dashboard
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                Used by marketplace operators and administrators.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px]">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {DASHBOARD_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY STACK (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Stack"
        categories={TECH_CATEGORIES}
      />

      {/* 8. OUTCOMES (4 Cards) */}
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
