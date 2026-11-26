import { Link } from 'react-router-dom'

export default function AndroidAwardsSection() {
  const badges = [
    {
      title: 'Top Android App Development Company by Clutch',
      src: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      title: 'Top App Development Company Miami 2026 by Clutch',
      src: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
    {
      title: 'Top App Development Company Plano 2026 by Clutch',
      src: '/assets/ios-app/top-mobile-app-development-company-2025.png',
    },
    {
      title: 'Highly Recommended by SoftwareWorld 2026',
      src: '/assets/ios-app/top-rated-logo-1024x1024.png',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy, Internal Links & CTA */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
              HIRE ANDROID DEVELOPERS WITH CONFIDENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              An Award-Recognized{' '}
              <span className="text-[#00CE44]">Android App Development Company</span>{' '}
              in the USA
            </h2>

            <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7">
              <p>
                Clutch recognized Inceptives Digital as a top Android app development company in Fort Worth, Texas, alongside recognition for design services in Dallas. These achievements strengthen the company&apos;s credibility among US businesses seeking an experienced{' '}
                <Link
                  to="/mobile-app-development"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
                >
                  mobile app development
                </Link>{' '}
                partner.
              </p>

              <p>
                With a presence in{' '}
                <Link
                  to="/mobile-app-development-austin"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                  Austin
                </Link>
                ,{' '}
                <Link
                  to="/mobile-app-development-new-york"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                  New York
                </Link>
                ,{' '}
                <Link
                  to="/mobile-app-development-san-francisco"
                  className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                  San Francisco
                </Link>
                , and the Dallas–Fort Worth area, the team serves clients nationwide. Businesses can engage our Android developers for custom applications with direct technical collaboration and clearly defined delivery milestones.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Discuss Your Android Project
              </a>
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
