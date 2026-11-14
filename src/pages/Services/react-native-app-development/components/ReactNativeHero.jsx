import { Link } from 'react-router-dom'

export default function ReactNativeHero() {
  const trustBadges = [
    {
      name: 'Clutch',
      url: 'https://clutch.co/profile/inceptives-digital',
      src: '/assets/clutch.png',
      alt: 'Clutch 5.0 Rating',
    },
    {
      name: 'Bark',
      url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
      src: '/assets/bark.png',
      alt: 'Bark 5.0 Rating',
    },
    {
      name: 'Trustpilot',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      src: '/assets/trustpilot.png',
      alt: 'Trustpilot 4.7 Rating',
    },
  ]

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[92vh] flex items-center pt-28 sm:pt-36 lg:pt-36 pb-0 lg:pb-24 bg-[#000000] overflow-hidden lg:bg-[url('/assets/react-native/reactnative.png')] lg:bg-no-repeat lg:bg-right lg:bg-[length:auto_100%]"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left pb-8 lg:pb-0">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              React Native App Development Company
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Engineered for Performance, Built for Rapid Market Delivery
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              A single codebase reaching iOS and Android at native-grade performance is not a compromise. It is an engineering decision. Inceptives Digital, a renowned React Native app development company, has been making that decision precisely for eight years as a{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development company
              </Link>
              . With 150+ developers managing every stage from architecture to dual-platform submission, applications in JavaScript and TypeScript are delivered to businesses that need to compete faster.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Discuss Your Project
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

          {/* Right Column: Mobile/Tablet fallback image (Desktop uses full-height right-aligned banner background) */}
          <div className="lg:hidden flex justify-center w-full">
            <img
              src="/assets/react-native/reactnative.png"
              alt="React Native App Development Company"
              className="w-full max-w-[520px] h-auto object-cover select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
