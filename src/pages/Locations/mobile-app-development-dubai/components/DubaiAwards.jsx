export default function DubaiAwards() {
  const awards = [
    {
      title: 'Top Artificial Intelligence, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/awards-images/award-rightfirms.png',
    },
    {
      title: 'Top Mobile App Development, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
    {
      title: 'Top Mobile App Development Company, 2025',
      org: 'SoftwareSuggest',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
    },
    {
      title: 'Top Trending, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
    },
    {
      title: 'Customer Choice, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ios-app/top-rated-logo-1024x1024.png',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Awards &amp; Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Industry Recognition Behind the{' '}
            <span className="text-[#00CE44]">Products We Build</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital has earned recognition from Clutch, RightFirms, SoftwareWorld, and SoftwareSuggest for mobile app development, artificial intelligence, and digital services. These industry distinctions give businesses additional references when evaluating the expertise behind their next mobile application.
          </p>
        </div>

        {/* 5 Centered Dark Award Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((item) => (
            <div
              key={item.title + item.org}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#14151a] border border-white/10 hover:border-[#00CE44]/40 rounded-[20px] p-7 text-left transition-all duration-300 flex flex-col items-start"
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
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
