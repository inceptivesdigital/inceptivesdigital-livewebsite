import { Link } from 'react-router-dom'

export default function FlutterHero() {
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
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-[#000000] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Flutter App Development Company
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Where Complex Flutter Apps Are Engineered With Precision
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Flutter now powers apps used by more than 500 million people worldwide, and the companies behind those products chose it for the same reasons: one codebase, consistent performance, and faster time to market. Inceptives Digital is a digital product studio built around Flutter engineering as part of a broader{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development
              </Link>{' '}
              practice spanning every major platform. The portfolio covers 70+ shipped products across multiple industries, ranging from early-stage MVPs to enterprise-scale platforms.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Start a Conversation
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

          {/* Right Column: Flutter App Preview */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[460px] lg:max-w-[540px] flex items-center justify-center">
              <img
                src="/assets/flutter-app/comflutter-banner.webp"
                alt="Flutter App Development Company"
                className="w-full h-auto object-contain block select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
