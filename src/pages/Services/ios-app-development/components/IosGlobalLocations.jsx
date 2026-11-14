export default function IosGlobalLocations() {
  const locations = [
    {
      name: 'London, UK',
      url: 'https://inceptivesdigital.com/mobile-app-development-company-london-uk',
      icon: '/assets/ios-app/big-ben-1.png',
    },
    {
      name: 'Toronto, Canada',
      url: 'https://inceptivesdigital.com/mobile-app-development-company-in-toronto-canada',
      icon: '/assets/ios-app/cn-tower-1.png',
    },
    {
      name: 'Austin, TX',
      url: 'https://inceptivesdigital.com/mobile-app-development-austin',
      icon: '/assets/ios-app/american-1.png',
    },
    {
      name: 'San Francisco, CA',
      url: 'https://inceptivesdigital.com/mobile-app-development-san-francisco',
      icon: '/assets/ios-app/golden-gate-bridge-1.png',
    },
    {
      name: 'New York, NY',
      url: 'https://inceptivesdigital.com/mobile-app-development-new-york',
      icon: '/assets/ios-app/newyork-1.png',
    },
    {
      name: 'Dubai, UAE',
      url: 'https://inceptivesdigital.com/mobile-app-development-company-dubai-uae',
      icon: '/assets/ios-app/united-arab-emirates-1.png',
    },
    {
      name: 'Singapore',
      url: 'https://inceptivesdigital.com/mobile-app-development-company-singapore',
      icon: '/assets/ios-app/marina-bay-sands-1.png',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
            iOS App Development Company in the USA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Meet the Dedicated iOS Engineering Team{' '}
            <span className="text-[#00CE44]">Serving Across 7 Global Tech Hubs</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Looking for an iPhone app development company in the USA? Inceptives Digital delivers native iOS development services to businesses across US markets and international locations. Our engineering team supports iPhone and iPad projects through a consistent development process, regardless of where clients operate.
          </p>
        </div>

        {/* 7 Global Tech Hubs Grid */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={loc.url}
              className="w-[calc(50%-10px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(14.285%-21px)] min-w-[155px] p-6 rounded-[16px] bg-[#1e1e1e] hover:bg-[#262626] border border-white/10 hover:border-[#00CE44] transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 mb-3.5 flex items-center justify-center">
                <img
                  src={loc.icon}
                  alt={loc.name}
                  className="max-h-full max-w-full object-contain select-none"
                  loading="lazy"
                />
              </div>
              <span className="text-white group-hover:text-[#00CE44] text-sm sm:text-[15px] font-bold transition-colors">
                {loc.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
