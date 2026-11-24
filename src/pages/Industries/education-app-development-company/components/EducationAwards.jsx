const awards = [
  {
    title: 'Clutch Top iPhone App Development Company United States · 2026',
    src: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
  },
  {
    title: 'Clutch Top Android App Development Company San Francisco · 2026',
    src: '/assets/ios-app/top-rated-logo-1024x1024.png',
  },
  {
    title: 'Clutch Top App Development Company San Francisco · 2026',
    src: '/assets/ios-app/top-mobile-app-development-company-2025.png',
  },
  {
    title: 'RightFirms Top Mobile App Development Company 2026',
    src: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
  },
]

export default function EducationAwards() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white border-y border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-4">
          Recognized for{' '}
          <span className="text-[#00CE44]">Mobile Product Engineering</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto mb-12 sm:mb-16">
          Inceptives Digital&apos;s recognition across mobile app development reflects the engineering experience behind our digital products. We bring that same technical expertise to custom EdTech platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
          {awards.map((award) => (
            <div
              key={award.title}
              className="h-28 sm:h-32 lg:h-36 w-auto max-w-[160px] sm:max-w-[180px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
              title={award.title}
            >
              <img
                src={award.src}
                alt={award.title}
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
