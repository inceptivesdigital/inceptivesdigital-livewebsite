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
      logoSrc: '/assets/awards-images/award-rightfirms.png',
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
      logoSrc: '/assets/ios-app/top-rated-logo-1024x1024.png',
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

        {/* 6 Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((item) => (
            <div
              key={item.title + item.org}
              className="bg-[#14151a] border border-white/10 hover:border-[#00CE44]/40 rounded-[20px] p-7 text-left transition-all duration-300 flex flex-col items-start"
            >
              <div className="h-20 w-auto flex items-center justify-start mb-5">
                <img
                  src={item.logoSrc}
                  alt={`${item.org} - ${item.title}`}
                  className="h-20 w-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                {item.org}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
