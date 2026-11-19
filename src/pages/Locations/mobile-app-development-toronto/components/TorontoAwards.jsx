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

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {awards.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1 group shadow-none"
            >
              <div className="flex flex-col items-center">
                <div className="h-20 flex items-center justify-center mb-5">
                  <img
                    src={item.logoSrc}
                    alt={item.title}
                    className="max-h-16 max-w-[140px] w-auto h-auto object-contain select-none group-hover:scale-105 transition-transform duration-300 shadow-none"
                    loading="lazy"
                  />
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#00CE44] mb-2">
                  {item.year}
                </span>

                <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
