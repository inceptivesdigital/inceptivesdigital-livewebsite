import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PORTFOLIO_ITEMS = [
  {
    id: 'state-of-the-art-chiropractic',
    title: 'State of the Art Chiropractic',
    slug: '/portfolio/state-of-the-art-chiropractic',
    bgImage: '/assets/portfolio/case-bnr1.png',
    mockupImage: '/assets/portfolio/case-card1.png',
    mockupClass: 'w-[86%] max-w-[380px] object-contain translate-y-4',
    description:
      'State of the Art Chiropractic needed a secure way to keep patients connected with their care beyond in-clinic visits. We designed and developed a HIPAA-compliant digital health platform that supports appointment management, encrypted video consultations, and ongoing patient progress tracking within one connected product experience.',
  },
  {
    id: 'dps-airem',
    title: 'DPS Airem',
    slug: '/portfolio/dps-airem',
    bgImage: '/assets/portfolio/casebnr2.png',
    mockupImage: '/assets/portfolio/cas-card2.png',
    mockupClass: 'w-[70%] max-w-[300px] object-contain translate-y-3',
    description:
      'DPS Airem relied on paper-based processes that limited visibility across its distributed security workforce. We transformed those workflows into a cloud-based workforce management platform with geofenced attendance, employee scheduling, incident reporting, and real-time operational oversight across multiple locations.',
  },
  {
    id: 'halwar-connect',
    title: 'Halwar Connect',
    slug: '/portfolio/halwar-connect',
    bgImage: '/assets/portfolio/case-banr-3.png',
    mockupImage: '/assets/portfolio/case-card3.png',
    mockupClass: 'w-[72%] max-w-[320px] object-contain translate-y-3',
    description:
      'Halwar Connect needed to transform an outdated service marketplace into a modern platform built around trust, accessibility, and local connections. We developed a bilingual digital marketplace with service discovery, real-time messaging, voice calls, live location tracking, and Stripe Connect payments for secure transactions between customers and service providers.',
  },
  {
    id: 'family-entertainment-group',
    title: 'Family Entertainment Group',
    slug: '/portfolio/family-entertainment-group',
    bgImage: '/assets/portfolio/card-banr-4.png',
    mockupImage: '/assets/portfolio/Mockup-3-2.png',
    mockupClass: 'w-[60%] max-w-[260px] object-contain translate-y-4',
    description:
      'Family Entertainment Group needed a faster way to turn guest experiences into branded video souvenirs. We developed a cloud-connected media platform that captures footage from on-site cameras, processes and combines videos automatically, and delivers the finished content directly to guests with minimal staff involvement.',
  },
  {
    id: 'zoom-read',
    title: 'Zoom Read',
    slug: '/portfolio/zoom-read',
    bgImage: '/assets/portfolio/case-bnr5.png',
    mockupImage: '/assets/portfolio/case-card5.png',
    mockupClass: 'w-[78%] max-w-[350px] object-contain translate-y-2',
    description:
      'Zoom Read was created to help users read digital content without the distractions of conventional reading applications. We developed a cross-platform reading product with guided line-by-line reading, extensive personalization, content management, subscriptions, in-app purchases, and advertising-based monetization through Stripe and Google AdMob.',
  },
  {
    id: 'pulse-check-timer',
    title: 'Pulse Check Timer',
    slug: '/portfolio/pulse-check-timer',
    bgImage: '/assets/portfolio/case-bnr6.png',
    mockupImage: '/assets/portfolio/case-card6.png',
    mockupClass: 'w-[66%] max-w-[280px] object-contain translate-y-4',
    description:
      'Emergency responders need to maintain accurate timing and documentation during high-pressure CPR procedures. We developed Pulse Check Timer as a cross-platform clinical support app that provides synchronized voice and visual prompts, records cardiac rhythm entries, and generates timestamped PDF and DOCX reports for review, training, and documentation.',
  },
  {
    id: 'my-tango-event',
    title: 'My Tango Event',
    slug: '/portfolio/my-tango-event',
    bgImage: '/assets/portfolio/case-8.png',
    mockupImage: '/assets/portfolio/case-card9.png',
    mockupClass: 'w-[74%] max-w-[320px] object-contain translate-y-2',
    description:
      'MyTangoEvent needed to replace fragmented event discovery and manual organizer workflows with trusted infrastructure for the global tango community. We developed a three-part digital ecosystem with location-based event discovery, bookings, verified attendee reviews, organizer subscriptions, promotional tools, and centralized platform administration across mobile and web.',
  },
  {
    id: 'wordsmith-pro',
    title: 'WordSmith Pro',
    slug: '/portfolio/wordsmith-pro',
    bgImage: '/assets/portfolio/case-card9-2.png',
    mockupImage: '/assets/portfolio/WordSmithcard.png',
    mockupClass: 'w-[88%] max-w-[380px] object-contain translate-y-2',
    description:
      'WordSmith Pro needed to move beyond one-time grammar correction and help users improve their writing over time. We developed an AI-powered writing platform with real-time grammar, clarity, tone, and structural feedback, OCR document scanning, progress analytics, subscription management, and enterprise administration across a cross-platform mobile app and web dashboard.',
  },
  {
    id: 'stakbread',
    title: 'StakBread',
    slug: '/portfolio/stakbread',
    bgImage: '/assets/portfolio/banner-case.png',
    mockupImage: '/assets/portfolio/StakBread-icon.png',
    mockupClass: 'w-[86%] max-w-[370px] object-contain translate-y-2',
    description:
      'StakBread needed to remove the friction between discovering creator content and purchasing the products featured within it. We developed a social commerce ecosystem that combines short-form video, product tagging, creator storefronts, marketplace payments, real-time messaging, and AI-assisted professional profiles across a React Native mobile app and web-based operations dashboard.',
  },
  {
    id: 'pets-b4-profit',
    title: 'Pets B4 Profit',
    slug: '/portfolio/pets-b4-profit',
    bgImage: '/assets/portfolio/pets-bnr.png',
    mockupImage: '/assets/portfolio/Pets-B4-Profit.png',
    mockupClass: 'w-[86%] max-w-[370px] object-contain translate-y-3',
    description:
      'Pets B4 Profit needed to give pet owners clearer, independent insight into complex veterinary costs without replacing professional medical advice. We developed an AI-powered pet healthcare platform with OCR invoice scanning, treatment cost explanations, market price benchmarking, centralized medical records, a moderated veterinary directory, and administrative oversight of AI-generated recommendations.',
  },
]

function PortfolioCard({ item }) {
  return (
    <article className="bg-[#1E1E1E] rounded-[25px] overflow-hidden flex flex-col pb-8 sm:pb-10 border border-white/[0.04] transition-transform duration-300 hover:-translate-y-1">
      {/* Top Media Container: WordPress background banner + foreground mockup */}
      <Link
        to={item.slug}
        className="relative w-full h-[300px] sm:h-[360px] lg:h-[420px] rounded-[25px] overflow-hidden bg-[#1E1E1E] bg-cover bg-center bg-no-repeat flex items-end justify-center px-5 pt-8"
        style={{ backgroundImage: `url("${item.bgImage}")` }}
      >
        <img
          src={item.mockupImage}
          alt={item.title}
          loading="lazy"
          className={`max-h-[88%] h-auto select-none transition-transform duration-500 hover:scale-[1.03] ${item.mockupClass}`}
        />
      </Link>

      {/* Bottom Text Body */}
      <div className="px-6 sm:px-7 pt-6 sm:pt-7 flex flex-col gap-4 text-left">
        <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-bold text-[#00CE44] leading-[1.22] tracking-tight">
          <Link to={item.slug} className="text-[#00CE44] hover:text-[#2ef06d] transition-colors">
            {item.title}
          </Link>
        </h2>

        <p className="text-white/95 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.6] font-normal">
          {item.description}
        </p>

        <Link
          to={item.slug}
          className="inline-flex items-center gap-3.5 text-[#00CE44] hover:text-white text-[16px] sm:text-[17px] font-medium transition-colors group mt-1 w-fit"
        >
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default function Portfolio() {
  useEffect(() => {
    const title = 'Portfolio & Case Studies | Inceptives Digital'
    const desc =
      'We design and build software that helps companies run smoother, move faster, and grow with confidence. Explore our mobile app and software portfolio.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/portfolio')
  }, [])

  const leftColumnItems = PORTFOLIO_ITEMS.filter((_, idx) => idx % 2 === 0)
  const rightColumnItems = PORTFOLIO_ITEMS.filter((_, idx) => idx % 2 === 1)

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-hidden">
      {/* Section 1: Hero Banner (exact WordPress case-banner.png + green divider) */}
      <section
        className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[625px] flex items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#151515]"
        style={{
          backgroundImage: 'url("/assets/portfolio/case-banner.png")',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.18] tracking-tight text-white max-w-[760px] mb-5">
            <span className="text-[#00CE44]">Software Built</span> for Today and Ready for Tomorrow
          </h1>

          <p className="text-white/90 text-[14.5px] sm:text-[16px] lg:text-[18px] leading-[1.6] font-normal max-w-[820px] mb-8">
            We design and build software that helps companies run smoother, move faster, and grow with confidence. Every project in our portfolio shows how we solve real problems with clean code, smart architecture, and a focus on long-term value. Take a look at what our mobile app development company has built and how we approach each challenge.
          </p>

          {/* 5px Solid #00CE44 Green Divider */}
          <div className="w-[65%] sm:w-[50%] max-w-[460px] h-[5px] bg-[#00CE44]" />
        </div>
      </section>

      {/* Section 2: 2-Column Staggered Masonry Portfolio Grid (10 Case Studies) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1140px] mx-auto px-6 sm:px-8">
          {/* Desktop & Tablet: 2-Column Staggered Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-start">
            {/* Left Column (Cards 1, 3, 5, 7, 9) */}
            <div className="flex flex-col gap-16 lg:gap-24">
              {leftColumnItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>

            {/* Right Column (Cards 2, 4, 6, 8, 10 — staggered downward matching WP) */}
            <div className="flex flex-col gap-16 lg:gap-24 md:mt-36 lg:mt-48">
              {rightColumnItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile: Exact 1-10 Sequential Single-Column Stack */}
          <div className="flex md:hidden flex-col gap-10">
            {PORTFOLIO_ITEMS.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
