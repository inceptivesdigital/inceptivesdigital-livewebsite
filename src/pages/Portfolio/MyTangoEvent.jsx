import { useEffect } from 'react'
import StandardTechStack from '../../components/StandardTechStack'

const ATTENDEE_PAIN_POINTS = [
  'No trusted source of event information',
  'No way to verify reviews',
  'No consistent booking experience',
  'No location-based discovery',
]

const ORGANIZER_PAIN_POINTS = [
  'No attendee verification',
  'No analytics',
  'No promotion tools',
  'No operational platform is designed for dance events',
]

const ATTENDEE_CAPABILITIES = [
  'Event creation and publishing',
  'Booking management',
  'Attendee verification',
  'Review analytics',
  'Subscription management',
  'Promotional campaigns',
  'Exportable attendee reports',
]

const ADMIN_CAPABILITIES = [
  'User management',
  'Organizer approval workflows',
  'Review moderation',
  'Subscription management',
  'Platform analytics',
  'Content governance',
]

const TECH_CATEGORIES = [
  {
    name: 'Mobile Application',
    items: [{ name: 'React Native', img: '/assets/portfolio/my-tango-event/react-native.jpg' }],
  },
  {
    name: 'Organizer Dashboard',
    items: [{ name: 'React.js', img: '/assets/portfolio/my-tango-event/react-native.jpg' }],
  },
  {
    name: 'Admin Platform',
    items: [{ name: 'React.js', img: '/assets/portfolio/my-tango-event/react-native.jpg' }],
  },
  {
    name: 'Infrastructure',
    items: [{ name: 'AWS + CloudFront', img: '/assets/portfolio/my-tango-event/cloudfront.jpg' }],
  },
  {
    name: 'Notifications',
    items: [{ name: 'Firebase Cloud Messaging', img: '/assets/portfolio/my-tango-event/firebase-cloud-messaging.jpg' }],
  },
  {
    name: 'Email Delivery',
    items: [{ name: 'SendGrid', img: '/assets/portfolio/my-tango-event/sendGrid.jpg' }],
  },
  {
    name: 'Payments',
    items: [{ name: 'Stripe', img: '/assets/portfolio/my-tango-event/stripe.jpg' }],
  },
]

const PRODUCT_OUTCOMES = [
  {
    icon: '/assets/portfolio/my-tango-event/location.png',
    iconClass: 'w-9 h-auto',
    title: '3 Connected Products',
    body: 'Attendee application, organizer dashboard, and platform administration console operate as a single ecosystem.',
  },
  {
    icon: '/assets/portfolio/my-tango-event/offline.png',
    iconClass: 'w-14 h-auto',
    title: 'Verified Community Reviews',
    body: 'Every review is tied directly to a confirmed booking.',
  },
  {
    icon: '/assets/portfolio/my-tango-event/emergy.png',
    iconClass: 'w-12 h-auto',
    title: 'Global Event Discovery',
    body: 'Location-aware search supporting international event participation.',
  },
  {
    icon: '/assets/portfolio/my-tango-event/cardsinf.png',
    iconClass: 'w-14 h-auto',
    title: 'Subscription-Based Organizer Monetization',
    body: 'Professional tooling delivered through recurring revenue rather than transaction dependency.',
  },
  {
    icon: '/assets/portfolio/my-tango-event/location.png',
    iconClass: 'w-9 h-auto',
    title: 'Live In Production',
    body: 'The platform currently supports event discovery and organizer operations across global tango markets.',
  },
]

export default function MyTangoEvent() {
  useEffect(() => {
    const title = 'My Tango Event Case Study | Inceptives Digital'
    const desc =
      'Building the Infrastructure Behind a Global Dance Community. A global event discovery and management platform connecting tango organizers and attendees.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio/my-tango-event')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#151515] pt-32 sm:pt-36 lg:pt-44 pb-0">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15] tracking-tight">
              My Tango Event
            </h1>
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-[4px] bg-[#00CE44] shrink-0" />
          </div>

          <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.2] max-w-[940px] mb-10 sm:mb-14">
            Building the Infrastructure Behind a Global Dance Community
          </h2>

          <div className="w-full max-w-[960px] mx-auto">
            <img
              src="/assets/portfolio/my-tango-event/tango-screen.png"
              alt="My Tango Event Organizer Dashboard and Mobile App"
              loading="eager"
              className="w-full h-auto block mx-auto select-none"
            />
          </div>
        </div>
      </section>

      {/* 2. THE PRODUCT & THE CHALLENGE */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/portfolio/my-tango-event/leaderbanner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-4xl space-y-5">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.18]">
              The Product
            </h2>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              A global event discovery and management platform connecting tango organisers and attendees through verified bookings, trusted reviews, and purpose-built community tools.
            </p>

            <h3 className="text-[24px] sm:text-[30px] font-bold text-[#00CE44] pt-4">
              The Challenge
            </h3>
            <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
              The global tango community already existed. The infrastructure supporting it did not.
            </p>
            <p className="text-white/90 text-[15.5px] sm:text-[17px] leading-[1.65]">
              Event discovery relied on fragmented Facebook groups, local websites, WhatsApp communities, and spreadsheets maintained by organisers themselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-3">
                <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[18px]">
                  For attendees:
                </p>
                <ul className="space-y-2.5 pl-1">
                  {ATTENDEE_PAIN_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[18px]">
                  For organisers:
                </p>
                <ul className="space-y-2.5 pl-1">
                  {ORGANIZER_PAIN_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <p className="text-white/90 text-[15.5px] sm:text-[17px]">
                The result was predictable:
              </p>
              <p className="text-white font-medium text-[16px] sm:text-[18px] leading-[1.65]">
                A community built on trust was operating on systems that could not provide it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILT (Green Wave Banner + Bottom-Flush Mobile Mockup) */}
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#151515] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/assets/portfolio/my-tango-event/bannersec.png")' }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 text-left pb-14 lg:pb-24 space-y-5">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] leading-[1.15]">
                What We Built
              </h2>

              <h3 className="text-[22px] sm:text-[26px] font-semibold text-white">
                Attendee Application
              </h3>

              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                A React Native mobile application designed around event discovery and community participation.
              </p>

              <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[17px]">
                Core capabilities included:
              </p>

              <ul className="space-y-2.5 pl-1">
                {ATTENDEE_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <img
                src="/assets/portfolio/my-tango-event/mytango-mobile-2.png"
                alt="My Tango Event Mobile Review Screen"
                loading="lazy"
                className="w-full max-w-[340px] lg:max-w-[400px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CRITICAL PRODUCT DECISIONS (3 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.18]">
              Critical <span className="text-[#00CE44]">Product Decisions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/my-tango-event/location.png"
                alt=""
                loading="lazy"
                className="w-9 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Verified Reviews Instead of Open Reviews
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Reviews were only unlocked for attendees with confirmed bookings.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Because community trust disappears the moment reviews become anonymous opinions rather than verified experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/my-tango-event/offline.png"
                alt=""
                loading="lazy"
                className="w-14 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Geography as the Primary Search Layer
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Most attendees first ask: &ldquo;What tango events are happening near me?&rdquo;
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Not: &ldquo;What event categories exist?&rdquo; Google Maps-powered discovery became the primary navigation model for the product.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#202020] rounded-[15px] p-6 sm:p-7 flex flex-col gap-4 border border-white/[0.05]">
              <img
                src="/assets/portfolio/my-tango-event/emergy.png"
                alt=""
                loading="lazy"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#00CE44] leading-snug">
                Organizer Subscriptions Instead of Booking Commissions
              </h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                The platform generates value for organizers through visibility and management tooling rather than transaction extraction.
              </p>
              <p className="text-white/85 text-[14.5px] leading-relaxed">
                Subscription infrastructure allowed monetization without introducing friction into attendee bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLATFORM ADMINISTRATION CONSOLE */}
      <section className="w-full bg-[#151515] py-14 sm:py-18 lg:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 text-left space-y-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#00CE44] leading-[1.18]">
                Platform Administration Console
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.65]">
                A centralized management layer responsible for trust, moderation, and growth.
              </p>
              <p className="text-[#00CE44] font-semibold text-[16px] sm:text-[17px]">
                Capabilities included:
              </p>
              <ul className="space-y-2.5 pl-1">
                {ADMIN_CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white text-[15px] sm:text-[16px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <img
                src="/assets/portfolio/my-tango-event/trango-section.png"
                alt="My Tango Event Platform Administration Console"
                loading="lazy"
                className="w-full max-w-[640px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK (Two-Green-Panel Tabs) */}
      <StandardTechStack
        heading="Technology Stack"
        categories={TECH_CATEGORIES}
      />

      {/* 7. PRODUCT OUTCOMES (5 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#00CE44] text-center leading-[1.18] mb-12 sm:mb-14">
            Product Outcomes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {PRODUCT_OUTCOMES.map((card) => (
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
