import { Link } from 'react-router-dom'

export default function CrossPlatformHero() {
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
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-12 lg:pb-16 bg-[#000000] overflow-hidden">
      {/* Desktop Right-Bottom Flush Banner Image (Slightly Larger) */}
      <div
        className="hidden lg:block absolute right-0 bottom-0 lg:w-[46%] xl:w-[46%] max-w-[760px] lg:h-[84%] xl:h-[90%] max-h-[860px] bg-contain bg-right-bottom bg-no-repeat pointer-events-none select-none z-[1]"
        style={{ backgroundImage: 'url("/assets/cross-platform/crossnew-banner.png")' }}
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 lg:pr-6 flex flex-col items-start text-left z-10">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Cross-Platform App Development Company
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Custom iOS and Android Applications, Engineered as One Product
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Launch your app on iOS and Android without managing two separate development projects. Inceptives Digital is a{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
              >
                cross-platform mobile app development company
              </Link>{' '}
              with 8+ years of experience building custom applications using{' '}
              <Link
                to="/flutter-app-development"
                className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
              >
                Flutter
              </Link>{' '}
              and{' '}
              <Link
                to="/react-native-app-development"
                className="underline font-normal text-[#00CE44] hover:opacity-80 transition-colors"
              >
                React Native
              </Link>
              . Our cross-platform app developers handle shared architecture and native integrations exactly around your product requirements. With us, you get a coordinated path to both app stores, with less duplicated engineering and greater control over your development investment.
            </p>

            {/* Rectangular Button (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Start Your Cross-Platform Build
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {trustBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
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

          {/* Mobile Right-Bottom App Preview */}
          <div className="lg:hidden flex justify-end items-end -mr-4 sm:-mr-6 -mb-12 pt-4">
            <img
              src="/assets/cross-platform/crossnew-banner.png"
              alt="Cross-Platform App Development Company Preview"
              className="w-full max-w-[440px] sm:max-w-[500px] h-auto object-contain object-right-bottom select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
