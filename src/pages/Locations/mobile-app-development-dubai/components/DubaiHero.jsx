import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function DubaiHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050608] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Dubai Skyline & Phone Banner from WordPress */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none bg-no-repeat bg-right lg:bg-center bg-cover opacity-85"
        style={{
          backgroundImage: `url('/assets/locations/dubai/banner-dubai.webp')`,
        }}
      />
      {/* Dark gradient blend on left for high-contrast typography */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 md:via-[#050608]/75 to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">Dubai, UAE</span>
          </h1>

          {/* Subtext with internal links */}
          <p className="text-white/85 text-base sm:text-lg md:text-[18px] font-normal leading-relaxed mb-8 max-w-2xl">
            Mobile applications have become the operating layer behind Dubai&apos;s fastest-growing businesses. That is where Inceptives Digital adds value, working with founders, scale-ups, and SMBs on{' '}
            <Link
              to="/mobile-app-development"
              className="text-[#00CE44] hover:underline font-medium"
            >
              mobile app development
            </Link>{' '}
            that engineers custom iOS, Android, cross-platform, and AI-powered applications shaped by product strategy from the outset. The product-first approach, backed by{' '}
            <Link
              to="/product-strategy-consulting"
              className="text-[#00CE44] hover:underline font-medium"
            >
              product strategy consulting
            </Link>
            , continues through scalable architecture, giving each application the flexibility to support future growth across the UAE.
          </p>

          {/* Sharp Rectangular CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-base transition-colors border-0 uppercase tracking-wide cursor-pointer shadow-none"
            >
              Discuss Your Project
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium text-base transition-colors uppercase tracking-wide cursor-pointer shadow-none"
            >
              Explore Our Portfolio
            </Link>
          </div>

          {/* Social Proof Review Badges from Live Link */}
          <HeroTrustBadges className="pt-4" />
        </div>
      </div>
    </section>
  )
}
