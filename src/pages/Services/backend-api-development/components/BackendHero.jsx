import { Link } from 'react-router-dom'

export default function BackendHero() {
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
    <section className="relative min-h-[640px] lg:min-h-[90vh] flex items-center pt-28 sm:pt-36 lg:pt-36 pb-0 lg:pb-24 bg-[#191919] overflow-hidden lg:bg-[url('/assets/backend-api/backendapi.png')] lg:bg-no-repeat lg:bg-right lg:bg-cover">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left pb-8 lg:pb-0">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Backend &amp; API Development Services
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Scalable Systems Start with Advanced Backend Engineering
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              The backend determines what a product can become. Database structure, API design, and service boundaries set the ceiling on speed, scale, and integration long before a user ever sees a screen. Inceptives Digital, a{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development company
              </Link>
              , designs and builds custom backend systems and APIs with that boundary defined correctly from the first architectural decision.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Start Your Backend Project
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

          {/* Right Column: Mobile/Tablet fallback image */}
          <div className="lg:hidden flex justify-center w-full">
            <img
              src="/assets/backend-api/backendapi.png"
              alt="Backend & API Development Services"
              className="w-full max-w-[460px] h-auto object-contain block select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
