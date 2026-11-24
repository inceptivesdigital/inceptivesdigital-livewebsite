export default function SFAwards() {
  const awards = [
    {
      title: 'Customer Choice 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ios-app/top-rated-logo-1024x1024.png',
      desc: 'SoftwareWorld awards Inceptives Digital its 2026 Customer Choice badge, so San Francisco teams gain another outside signal when they shortlist a mobile app partner.',
    },
    {
      title: 'Top iPhone App Development Company 2026',
      org: 'Clutch',
      logoSrc: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
      desc: 'National recognition for iPhone app development expertise, including native iOS applications and Apple-focused engineering capabilities.',
    },
    {
      title: 'Mobile App Development 2026',
      org: 'RightFirms',
      logoSrc: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
      desc: "Recognized in RightFirms' mobile app development category, covering custom applications for businesses across different industries and product requirements.",
    },
    {
      title: 'Artificial Intelligence 2026',
      org: 'RightFirms',
      logoSrc: '/assets/awards-images/award-rightfirms.png',
      desc: 'Recognition in artificial intelligence services, complementing our experience with LLM integrations, intelligent automation, and AI-enabled mobile applications.',
    },
    {
      title: 'Top Mobile App Development Company 2025',
      org: 'SoftwareSuggest',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
      desc: 'Recognized by SoftwareSuggest in its mobile app development category, providing an additional industry credential for prospective clients.',
    },
    {
      title: 'Top Rated 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
      desc: 'SoftwareWorld names Inceptives Digital Top Rated for 2026, giving San Francisco businesses an independent credential to weigh when they compare app development partners.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Award-Winning Mobile App Development Expertise{' '}
            <span className="text-[#00CE44]">Recognized Across the U.S.</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Businesses comparing top app developers in San Francisco should examine independent recognition alongside actual project experience. Inceptives Digital has earned awards across mobile app development, software engineering, and user experience, giving prospective clients additional credentials to assess.
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
