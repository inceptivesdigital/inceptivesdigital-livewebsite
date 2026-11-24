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

        {/* Clean Floating Award Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((item) => (
            <div
              key={item.title + item.org}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.logoSrc}
                alt={`${item.org} - ${item.title}`}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
