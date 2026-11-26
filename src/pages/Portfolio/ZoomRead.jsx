import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const AT_A_GLANCE = [
  { label: 'BUSINESS TYPE', value: 'Consumer Reading Platform' },
  { label: 'PRODUCT BUILT', value: 'Cross-platform reading and monetisation ecosystem' },
  { label: 'PLATFORMS', value: 'Flutter Mobile App, Admin Dashboard' },
  { label: 'INTEGRATIONS', value: 'Stripe, AdMob' },
  { label: 'FILE FORMATS SUPPORTED', value: 'PDF, DOCX, EPUB' },
  { label: 'STATUS', value: 'Live in Production' },
]

const READER_CAPABILITIES = [
  'Import their own reading material',
  'Purchase books directly in-app',
  'Track reading progress',
  'Personalize the reading experience',
  'Subscribe to premium plans',
  'Manage their content library',
]

const OPS_VISIBILITY = [
  'User growth',
  'Subscription performance',
  'Advertising revenue',
  'Book sales',
  'Content engagement',
  'Platform analytics',
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'Flutter', img: '/assets/portfolio/zoom-read/flutter.jpg' }],
  },
  {
    name: 'Admin Dashboard',
    items: [{ name: 'React.js', img: '/assets/portfolio/zoom-read/react-native.jpg' }],
  },
  {
    name: 'Subscription Billing',
    items: [{ name: 'Stripe', img: '/assets/portfolio/zoom-read/stripe.jpg' }],
  },
  {
    name: 'Book Purchases',
    items: [{ name: 'Stripe', img: '/assets/portfolio/zoom-read/stripe.jpg' }],
  },
  {
    name: 'Advertising Platform',
    items: [{ name: 'Google AdMob', img: '/assets/portfolio/zoom-read/google-adMob.jpg' }],
  },
  {
    name: 'Authentication',
    items: [{ name: 'JWT', img: '/assets/portfolio/zoom-read/jwt.jpg' }],
  },
]

const OUTCOMES = [
  {
    icon: '/assets/portfolio/zoom-read/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Three Revenue Streams Unified',
    body: 'Subscriptions, advertising, and book sales operate inside a single product ecosystem.',
  },
  {
    icon: '/assets/portfolio/zoom-read/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Multi-Format Reading From Day One',
    body: 'PDF, DOCX, and EPUB support shipped in the initial release.',
  },
  {
    icon: '/assets/portfolio/zoom-read/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Integrated Reader and Admin Ecosystem',
    body: 'Readers and operators work from separate interfaces designed specifically for their workflows.',
  },
  {
    icon: '/assets/portfolio/zoom-read/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Live Production Platform',
    body: 'The product is actively serving users in production.',
  },
]

export default function ZoomRead() {
  useEffect(() => {
    const title = 'Zoom Read Case Study | Inceptives Digital'
    const desc =
      'A Reading Platform Built for Comprehension, Not Just Content Delivery. Cross-platform Flutter reading app with Focus Mode, multi-format support, Stripe & AdMob.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/zoom-read')
  }, [])

  return (
    <div className="case-study-page w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              Zoom Read
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[920px] mb-10 sm:mb-14">
            A Reading Platform Built for Comprehension, Not Just Content Delivery
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/zoom-read/zoom-banner.png"
              alt="Zoom Read Cross-Platform Reading App Mockup"
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
        style={{ backgroundImage: 'url("/assets/portfolio/zoom-read/challenge-bg.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-6">
              The Business Challenge
            </h2>

            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Most digital reading products compete on one thing: Content availability. Zoom Read was built around a different assumption.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              Readers were not struggling to find books. They were struggling to stay focused while reading them.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              Students reading research papers, professionals reviewing long-form material, and recreational readers consuming books on mobile devices all faced the same problem: Digital reading environments were optimized for content delivery, not comprehension.
            </p>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The client saw an opportunity to compete somewhere larger platforms largely ignored: The reading experience itself.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILT (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/zoom-read/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-7">
              <div>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] mb-4">
                  What We Built
                </h2>
                <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                  Rather than creating another eBook library, we built a reading environment designed around concentration, accessibility, and long-session usability.
                </p>
              </div>

              {/* Reader Application */}
              <div>
                <h3 className="text-[21px] sm:text-[24px] font-semibold text-[#00CE44] mb-1.5">
                  Reader Application
                </h3>
                <p className="text-white/90 text-[15px] sm:text-[16px] mb-3">
                  Built with Flutter for iOS and Android. The application allowed users to:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
                  {READER_CAPABILITIES.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px]">
                  The entire product was designed to reduce friction between opening content and staying engaged with it.
                </p>
              </div>

              {/* Operations Dashboard */}
              <div>
                <h3 className="text-[21px] sm:text-[24px] font-semibold text-[#00CE44] mb-1.5">
                  Operations Dashboard
                </h3>
                <p className="text-white/90 text-[15px] sm:text-[16px] mb-3">
                  Built for platform administrators and content operators. Provided visibility into:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
                  {OPS_VISIBILITY.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-white text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px]">
                  Operational oversight existed without requiring technical involvement from the client team.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/zoom-read/zoom-mobilefull.png"
                alt="Zoom Read Reader Mobile Application"
                loading="lazy"
                className="w-full max-w-[300px] lg:max-w-[340px] h-auto block object-contain select-none"
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
              Three product decisions shaped the reading experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/zoom-read/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Focus Mode Reading
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                A line-by-line reading experience was introduced to reduce cognitive overload during long reading sessions. Instead of presenting an entire page of text at once, readers could narrow the visible reading surface and focus only on the content immediately in front of them.
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Fewer distractions', 'Better retention', 'Longer reading sessions'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/zoom-read/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Deep Reading Personalisation
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Reading preferences vary significantly between users. Customization was treated as product infrastructure rather than a secondary settings screen. Readers could control:
              </p>
              <ul className="space-y-1.5 text-white text-[14.5px]">
                {['Font size', 'Typography', 'Contrast levels', 'Dark mode', 'Reading layouts'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                The platform adapted to the reader instead of forcing the reader to adapt to the platform.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/zoom-read/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Multi-Format Content Support
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Students and researchers rarely consume information from a single source or format. Support for:
              </p>
              <div className="flex flex-wrap gap-2">
                {['PDF', 'DOCX', 'EPUB'].map((fmt) => (
                  <span
                    key={fmt}
                    className="inline-flex items-center justify-center bg-[#1A1A1A] border border-white/40 rounded-[8px] px-4 py-1.5 text-white text-[13.5px] font-medium"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Was included from launch. This removed the friction of moving between multiple applications simply to continue reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MONETISATION ARCHITECTURE */}
      <section className="w-full bg-[#151515] py-0 overflow-hidden">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-6 text-left space-y-6 py-12 lg:py-16">
              <div>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18] mb-3">
                  Monetisation Architecture
                </h2>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed mb-3">
                  The business model required multiple revenue streams to operate simultaneously without creating a fragmented user experience.
                </p>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed">
                  Three monetisation layers were built directly into the product architecture.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-white mb-1">
                    Subscription Revenue
                  </h3>
                  <p className="text-white/85 text-[15px] leading-relaxed">
                    Premium memberships removed advertising and unlocked additional reading capabilities.
                  </p>
                </div>

                <div>
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-white mb-1">
                    Book Purchases
                  </h3>
                  <p className="text-white/85 text-[15px] leading-relaxed">
                    Users could purchase individual books directly inside the platform through an integrated commerce layer.
                  </p>
                </div>

                <div>
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-white mb-1">
                    Advertising Revenue
                  </h3>
                  <p className="text-white/85 text-[15px] leading-relaxed">
                    Free-tier users were supported through carefully positioned advertising that avoided interrupting active reading sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/zoom-read/zoom-mobile.png"
                alt="Zoom Read Purchase History and Monetisation Interface"
                loading="lazy"
                className="w-full max-w-[460px] lg:max-w-[520px] h-auto block object-contain select-none"
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
