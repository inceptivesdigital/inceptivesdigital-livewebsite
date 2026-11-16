import { Link } from 'react-router-dom'

export default function KmpHero() {
  const trustBadges = [
    {
      name: 'Clutch',
      url: 'https://clutch.co/profile/inceptives-digital',
      src: '/assets/clutch.png',
      alt: 'Clutch Review Badge',
    },
    {
      name: 'Bark',
      url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
      src: '/assets/bark.png',
      alt: 'Bark Review Badge',
    },
    {
      name: 'Trustpilot',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      src: '/assets/trustpilot.png',
      alt: 'Trustpilot Review Badge',
    },
  ]

  return (
    <section className="relative min-h-[640px] lg:min-h-[90vh] flex items-center pt-28 sm:pt-36 lg:pt-36 pb-0 lg:pb-24 bg-black overflow-hidden lg:bg-[url('/assets/kmp-app/com-kotlin-banner.webp')] lg:bg-no-repeat lg:bg-right-bottom lg:bg-[length:48%_auto]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left pb-8 lg:pb-0">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Kotlin Multiplatform App Development Services
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Architect Your Multiplatform Product on Kotlin&apos;s Full Potential
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              KMP consolidates your business logic into one shared Kotlin module, giving Android, iOS, web, and desktop a unified foundation, while each platform still runs its own native UI. That architecture only holds at scale when the module boundaries and platform interfaces are defined correctly from the start, which is precisely where Inceptives Digital, as a{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development company
              </Link>
              , begins and engineers production-grade KMP systems.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Start Your KMP Project
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/5 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-9">
              {trustBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Mobile/Tablet fallback image (Desktop uses right-bottom banner background) */}
          <div className="lg:hidden flex justify-center w-full">
            <img
              src="/assets/kmp-app/com-kotlin-banner.webp"
              alt="Kotlin Multiplatform App Development Services"
              className="w-full max-w-[460px] h-auto object-contain block select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
