import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function NYHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#050608] text-white overflow-hidden">
      {/* Background Queensboro / NYC Skyline Banner */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('/assets/locations/new-york/banner-ny.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Subtle blend gradients for crisp contrast behind left text while showing NYC skyline on right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/75 md:via-[#050608]/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.14] mb-4">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">New York</span>
          </h1>

          {/* Subtitle H2 */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/95 tracking-tight leading-snug mb-5">
            Custom Mobile App Development in New York for{' '}
            <span className="text-[#00CE44]">Ambitious Businesses</span>
          </h2>

          {/* Subtext with internal link */}
          <p className="text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8 font-normal">
            In New York, a strong app idea is only the starting point. Product decisions must account for demanding users, established competitors, and the systems a business already runs. Inceptives Digital is a{' '}
            <Link
              to="/mobile-app-development"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              mobile application development company
            </Link>{' '}
            helping startups, growth-stage companies, and enterprise teams build custom iOS, Android, and cross-platform applications with AI integrations that serve real business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-lg shadow-[#00CE44]/20"
            >
              Schedule a Strategy Call
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
            >
              Schedule A Call
            </a>
          </div>

          {/* Social Proof Review Badges */}
          <HeroTrustBadges className="pt-2" />
        </div>
      </div>
    </section>
  )
}
