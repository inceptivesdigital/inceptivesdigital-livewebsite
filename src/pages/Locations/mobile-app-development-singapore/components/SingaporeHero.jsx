import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function SingaporeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050608] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Singapore Skyline Banner */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none bg-no-repeat bg-right lg:bg-center bg-cover opacity-60"
        style={{
          backgroundImage: `url('/assets/locations/singapore/singapore-hero-banner-hd.jpg')`,
        }}
      />
      {/* Dark gradient blend on left for high-contrast typography */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">Singapore</span>
          </h1>

          {/* Subtext with internal links */}
          <p className="text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
            Growth rarely comes from an application alone. It comes from building the right product with the right strategy behind it. Inceptives Digital is a{' '}
            <Link
              to="/mobile-app-development"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              custom mobile app development company
            </Link>{' '}
            in Singapore that brings together product thinking, design, and engineering. Every iOS, Android, and AI-powered application starts with{' '}
            <Link
              to="/product-strategy-consulting"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              product strategy consulting
            </Link>{' '}
            and carries the adaptability to accommodate evolving business priorities over time.
          </p>

          {/* Sharp Rectangular CTA Buttons: rounded-none & font-medium */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-base transition-colors border-0"
            >
              Book a Free Strategy Consultation
            </Link>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 text-white font-medium text-base transition-colors border border-white/20"
            >
              View Our Work
            </a>
          </div>

          {/* Social Proof Review Badges from Live Site */}
          <HeroTrustBadges className="pt-4" />
        </div>
      </div>
    </section>
  )
}
