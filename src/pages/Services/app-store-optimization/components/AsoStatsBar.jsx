import { Link } from 'react-router-dom'

export default function AsoStatsBar() {
  const stats = [
    {
      value: '70+',
      label: 'Apps Optimized',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '150+',
      label: 'iOS & Android Coverage',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '3M+',
      label: 'App Downloads',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
    {
      value: '4.7',
      label: 'Clutch Rating',
      icon: '/assets/mobile-app/rating.svg',
    },
  ]

  return (
    <>
      {/* Stats Counter Bar Matching Reference Screenshot */}
      <section className="py-16 sm:py-20 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center p-0 border-0 bg-transparent">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none p-0 border-0 bg-transparent"
                    loading="lazy"
                  />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#00CE44] tracking-tight leading-none mb-3">
                  {s.value}
                </div>
                <div className="text-white text-sm sm:text-[15px] lg:text-base font-medium tracking-normal">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA Banner with ctabg.png & cta-mobile.png */}
      <section className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-black">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div
            className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden relative"
            style={{
              backgroundImage: `url("/assets/post-launch-analytics/ctabg.png")`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="p-8 sm:p-12 lg:p-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                    Your App Belongs in the 10% of the Page That Users Actually See
                  </h2>

                  <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-8 max-w-2xl">
                    90% of App Store visitors never scroll past the first 10% of a page. That is where installs get decided, and it is the same window a solid{' '}
                    <Link
                      to="/product-launch-strategy"
                      className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
                    >
                      product launch strategy
                    </Link>{' '}
                    has to account for before an app ever ships. Our ASO team builds and optimizes exactly that space.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                    >
                      Optimize My App Page
                    </a>
                  </div>
                </div>

                {/* Right Phones Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end">
                  <img
                    src="/assets/post-launch-analytics/cta-mobile.png"
                    alt="App Store Optimization"
                    className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto object-contain block select-none -mb-8 sm:-mb-12 lg:-mb-16"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
