export default function NYAwards() {
  const awards = [
    {
      title: 'Top iPhone App Development Company, USA 2026',
      org: 'Clutch',
      logoSrc: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
      desc: "Recognized in Clutch's U.S. iPhone app development company rankings.",
    },
    {
      title: 'Top Mobile App Development, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
      desc: "Featured in RightFirms' 2026 mobile app development recognition.",
    },
    {
      title: 'Top Mobile App Development Company, 2025',
      org: 'SoftwareSuggest',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
      desc: 'Recognized by SoftwareSuggest for mobile app development services.',
    },
    {
      title: 'Top Artificial Intelligence, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/awards-images/award-clutch-austin.png',
      desc: "Featured in RightFirms' 2026 artificial intelligence recognition.",
    },
    {
      title: 'Top Trending, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
      desc: "Received SoftwareWorld's Top Trending recognition for 2026.",
    },
    {
      title: 'Customer Choice, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/awards-images/top-app-dev.png',
      desc: "Received SoftwareWorld's Customer Choice distinction for 2026.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Awards &amp; Industry Recognition for Our Mobile App Development{' '}
            <span className="text-[#00CE44]">Expertise in New York</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital has received recognition from Clutch, RightFirms, SoftwareSuggest, and SoftwareWorld across mobile application development, artificial intelligence, and customer experience. These distinctions give New York startups and enterprises additional references when evaluating a mobile app development company for their next project.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((item) => (
            <div
              key={item.title + item.org}
              className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group shadow-none"
            >
              <div>
                {/* Original Award Logo */}
                <div className="h-16 sm:h-20 flex items-center justify-start mb-4">
                  <img
                    src={item.logoSrc}
                    alt={`${item.org} - ${item.title}`}
                    className="max-h-14 sm:max-h-16 max-w-[160px] sm:max-w-[180px] w-auto h-auto object-contain select-none group-hover:scale-105 transition-transform duration-300 shadow-none"
                    loading="lazy"
                  />
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#00CE44] mb-1.5">
                  {item.org}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
