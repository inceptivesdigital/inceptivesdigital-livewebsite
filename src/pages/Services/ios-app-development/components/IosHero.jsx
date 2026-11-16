import { Link } from 'react-router-dom'

export default function IosHero() {
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
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#000000] overflow-hidden relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left z-10">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              iOS App Development Company in USA
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Custom iPhone and iPad Apps Built for Business Growth
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Have an iOS app in mind that you want to bring to market? Inceptives Digital is an iOS app development company in the USA with over eight years of experience in developing apps for 20+ industries. Our iOS app developers work with the latest Swift and SwiftUI capabilities to build native apps for iPhone and iPad, alongside specialized applications for Apple Watch, Apple TV, and Vision Pro. HealthKit integrations, ARKit-powered experiences, and on-device AI with Core ML bring advanced Apple capabilities into products that need them.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow, matching live site text: Get a Free Quote & Schedule A Call) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Get a Free Quote
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

          {/* Right Column: 3-Screen iOS App Preview covering flush to right edge */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-none lg:w-[115%] xl:w-[124%] 2xl:w-[130%] lg:-mr-12 xl:-mr-20 2xl:-mr-28 flex justify-center lg:justify-end">
              <img
                src="/assets/ios-app/newios-banner.png"
                alt="Custom iPhone and iPad App Development Preview"
                className="w-full h-auto object-contain max-h-[580px] lg:max-h-[660px] select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
