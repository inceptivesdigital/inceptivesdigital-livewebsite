export default function DubaiAwards() {
  const awards = [
    {
      title: 'Top Artificial Intelligence, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/awards-images/award-rightfirms.png',
      desc: 'Recognized for advanced generative AI integration, predictive algorithms, and custom machine learning workflows across mobile architectures.',
    },
    {
      title: 'Top Mobile App Development, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
      desc: 'National recognition for high-performance iOS, Android, and cross-platform mobile application engineering and deployment.',
    },
    {
      title: 'Top Mobile App Development Company, 2025',
      org: 'SoftwareSuggest',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
      desc: 'Awarded for exceptional product usability, intuitive interface design, and scalable backend architecture for growing enterprises.',
    },
    {
      title: 'Customer Choice Award, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ios-app/top-rated-logo-1024x1024.png',
      desc: 'Honored by clients for technical transparency, clear communication, and dependable post-launch product stability.',
    },
    {
      title: 'Top Trending Digital Agency, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
      desc: 'Ranked among top trending development partners for consistent delivery velocity, code quality, and client satisfaction.',
    },
    {
      title: 'Top Mobile App Developers, 2025',
      org: 'Clutch',
      logoSrc: '/assets/awards-images/award-top-developers.png',
      desc: 'Independent recognition on Clutch reflecting verified client reviews, engineering excellence, and successful mobile launches.',
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

        {/* 6-Card Grid: Real Award Logos, Zero Shadow, Zero Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((item) => (
            <div
              key={item.title + item.org}
              className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border border-white/5 flex flex-col justify-between text-left shadow-none"
            >
              <div>
                {/* Real Award Logo */}
                <div className="h-20 sm:h-24 flex items-center justify-start mb-6">
                  <img
                    src={item.logoSrc}
                    alt={`${item.org} - ${item.title}`}
                    className="max-h-16 sm:max-h-20 max-w-[180px] sm:max-w-[200px] w-auto h-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#00CE44] mb-1.5">
                  {item.org}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
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
