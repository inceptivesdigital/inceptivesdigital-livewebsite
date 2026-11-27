import { Link } from 'react-router-dom'

export default function IosAchievements() {
  const badges = [
    {
      title: 'Top iPhone App Development Company in the United States for 2026 by Clutch',
      src: '/assets/ios-app/clutch-top-iphone-us-2026.png',
    },
    {
      title: 'Top Clutch App Development Company Plano by Clutch',
      src: '/assets/ios-app/clutch-top-app-plano-2026.png',
    },
    {
      title: 'Highly Recommended by SoftwareWorld 2026',
      src: '/assets/ios-app/softwareworld-highly-recommended-2026.png',
    },
    {
      title: 'Customer Choice by SoftwareWorld 2026',
      src: '/assets/ios-app/softwareworld-customer-choice-2026.png',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Internal Links */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
              Inceptives Digital’s Achievements
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Recognized as a{' '}
              <span className="text-[#00CE44]">Top iPhone App Development Company</span>{' '}
              in the United States
            </h2>

            <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              <p>
                Inceptives Digital was recognized by Clutch as a Top iPhone App Development Company in the United States for 2026, reinforcing the engineering standards behind our iOS and mobile development practice. That recognition is supported by additional distinctions from Clutch for app development, UX, and design, along with recognition from RightFirms, SoftwareSuggest, and SoftwareWorld across mobile development,{' '}
                <Link
                  to="/ai-development"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                  artificial intelligence development
                </Link>
                , customer support, value, and client satisfaction.
              </p>

              <p>
                Our iOS app development services are built around the same standards these recognitions reflect: disciplined{' '}
                <Link
                  to="/product-strategy-consulting"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                  product strategy consulting
                </Link>
                , native Swift and SwiftUI engineering, Apple compliance, secure architecture, and accountable post-launch support. From custom iPhone applications to enterprise iOS platforms backed by broader{' '}
                <Link
                  to="/custom-software-development"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
                >
                  custom software development
                </Link>{' '}
                capabilities, we engineer every product to perform reliably in production and scale with the business behind it.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Award Badges Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 items-center justify-items-center">
            {badges.map((b) => (
              <div
                key={b.title}
                className="h-24 sm:h-28 lg:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={b.src}
                  alt={b.title}
                  className="max-h-full max-w-[140px] w-auto h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
