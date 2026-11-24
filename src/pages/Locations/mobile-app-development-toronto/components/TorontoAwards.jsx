export default function TorontoAwards() {
  const awards = [
    {
      title: 'Clutch Top App Development Company Toronto 2026',
      year: '2026',
      logoSrc: '/assets/awards-images/award-clutch-austin.png',
    },
    {
      title: 'Clutch Top Android App Development Company Toronto 2026',
      year: '2026',
      logoSrc: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
    {
      title: 'Clutch Top iPhone App Development Company Toronto 2026',
      year: '2026',
      logoSrc: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      title: 'Clutch Top Flutter Developers Toronto 2026',
      year: '2026',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
    },
    {
      title: 'Clutch Top Kotlin Company Toronto 2026',
      year: '2026',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Industry Awards That Validate Our{' '}
            <span className="text-[#00CE44]">App Development Track Record</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital has earned consistent recognition across app development, AI, and design work. Clutch, RightFirms, SoftwareWorld, and SoftwareSuggest have each honored our team.
          </p>
        </div>

        {/* Clean Floating Award Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((item) => (
            <div
              key={item.title}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.logoSrc}
                alt={item.title}
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
