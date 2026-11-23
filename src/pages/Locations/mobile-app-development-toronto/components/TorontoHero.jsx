import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function TorontoHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050608] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background CN Tower / Toronto Skyline Banner from WordPress Link */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none bg-no-repeat bg-right lg:bg-center bg-cover opacity-60"
        style={{
          backgroundImage: `url('/assets/locations/toronto/banner-toronto.webp')`,
        }}
      />
      {/* Dark gradient blend on left for high-contrast typography */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">Toronto</span>
          </h1>

          {/* Subtext with internal link */}
          <p className="text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
            A mobile app shapes how a business operates, serves customers, and creates new revenue opportunities. Inceptives Digital is a{' '}
            <Link
              to="/mobile-app-development"
              className="text-[#00CE44] hover:underline font-medium"
            >
              mobile app development company
            </Link>{' '}
            that brings product strategy, design, and engineering together to build custom iOS, Android, and cross-platform applications for Toronto startups and enterprises. From founders working within the MaRS innovation ecosystem to established businesses modernizing their platforms, each project begins with the technical and commercial decisions that influence its future.
          </p>

          {/* Sharp Rectangular CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-base transition-colors border-0"
            >
              Schedule a Discovery Call
            </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
          </div>

          {/* Social Proof Review Badges from Live Link */}
          <HeroTrustBadges className="pt-4" />
        </div>
      </div>
    </section>
  )
}
