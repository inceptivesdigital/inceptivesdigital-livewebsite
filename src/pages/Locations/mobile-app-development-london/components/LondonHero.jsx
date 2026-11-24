import { Link } from 'react-router-dom'

import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function LondonHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050608] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background London Skyline Banner from WordPress Link */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none bg-no-repeat bg-right lg:bg-center bg-cover opacity-60"
        style={{
          backgroundImage: `url('/assets/locations/london/banner-london.webp')`,
        }}
      />
      {/* Dark gradient blend on left for high-contrast typography */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">London</span>
          </h1>

          {/* Subtext with internal links */}
          <p className="text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
            A mobile product has to work for its customers and the business behind it. Inceptives Digital is a{' '}
            <Link
              to="/mobile-app-development"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              mobile app development company
            </Link>{' '}
            in the UK, developing custom iOS, Android, and cross-platform applications for London startups and SMBs. Planning, backed by{' '}
            <Link
              to="/product-strategy-consulting"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              product strategy consulting
            </Link>
            , covers the systems in use, features worth launching first, and where AI integration could add value. The result is software with a clear purpose and room to evolve.
          </p>

          {/* Sharp Rectangular CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-base transition-colors border-0"
            >
              Book a Free Product Strategy Session
            </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
          </div>

          {/* Social Proof Review Badges */}
          <HeroTrustBadges className="pt-4 border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
