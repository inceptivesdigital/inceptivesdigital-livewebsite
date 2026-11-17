export default function CrossPlatformLocations() {
  const locations = [
    { name: 'Austin, TX — HQ', link: 'https://inceptivesdigital.com/mobile-app-development-austin', isHq: true },
    { name: 'New York, NY', link: 'https://inceptivesdigital.com/mobile-app-development-new-york' },
    { name: 'San Francisco, CA', link: 'https://inceptivesdigital.com/mobile-app-development-san-francisco' },
    { name: 'Toronto, Canada', link: 'https://inceptivesdigital.com/mobile-app-development-company-in-toronto-canada' },
    { name: 'London, UK', link: 'https://inceptivesdigital.com/mobile-app-development-company-london-uk' },
    { name: 'Dubai, UAE', link: 'https://inceptivesdigital.com/mobile-app-development-company-dubai-uae' },
    { name: 'Singapore', link: 'https://inceptivesdigital.com/mobile-app-development-company-singapore' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0c] text-white relative overflow-hidden border-t border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
            GLOBAL ENGINEERING HUBS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Where Our <span className="text-[#00CE44]">Cross-Platform Development</span> Teams Work
          </h2>
          <p className="text-white/85 text-[16px] leading-relaxed font-normal text-center">
            Inceptives Digital runs cross-platform engineering from Austin, TX outward, across six more cities spanning North America, Europe, the Middle East, and Asia. Product strategy, Flutter and React Native engineering, compliance, and launch support all hold to one standard, wherever the work is running that sprint.
          </p>
        </div>

        {/* City Cards Grid (No icon bg, no border, no padding) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-[18px] transition-all duration-300 flex flex-col justify-center items-center text-center group ${
                loc.isHq
                  ? 'bg-[#18191e] border border-[#00CE44]/60 shadow-[0_0_25px_rgba(0,206,68,0.15)]'
                  : 'bg-[#14151a] border border-white/10 hover:border-[#00CE44]/60'
              }`}
            >
              <div className="text-[#00CE44] mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                {loc.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
