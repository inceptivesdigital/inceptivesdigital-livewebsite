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
    <section className="relative min-h-[640px] lg:min-h-[88vh] flex items-center pt-28 sm:pt-36 lg:pt-36 pb-16 lg:pb-24 bg-[#000000] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left z-10">
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
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
              >
                cross-platform mobile app development company
              </Link>{' '}
              with 8+ years of experience building custom applications using{' '}
              <Link
                to="/flutter-app-development"
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
              >
                Flutter
              </Link>{' '}
              and{' '}
              <Link
                to="/react-native-app-development"
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
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

          {/* Right Column: App Preview */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] xl:max-w-[600px] flex justify-center lg:justify-end">
              <img
                src="/assets/cross-platform/crossnew-banner.png"
                alt="Cross-Platform App Development Company Preview"
                className="w-full h-auto object-contain max-h-[520px] lg:max-h-[580px] xl:max-h-[620px] select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
