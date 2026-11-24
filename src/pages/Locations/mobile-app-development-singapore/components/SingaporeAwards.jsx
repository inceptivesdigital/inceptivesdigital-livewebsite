export default function SingaporeAwards() {
  const awards = [
    {
      title: 'Top App Development Company SE Asia 2026',
      org: 'Clutch',
      logoSrc: '/assets/awards-images/award-top-developers.png',
      desc: 'Independent recognition on Clutch reflecting verified client reviews, engineering excellence, and successful mobile launches across Southeast Asia.',
    },
    {
      title: 'Top Artificial Intelligence, 2026',
      org: 'RightFirms',
      logoSrc: '/assets/awards-images/award-rightfirms.png',
      desc: 'Recognized for advanced generative AI integration, predictive algorithms, and custom machine learning workflows across mobile architectures.',
    },
    {
      title: 'Top Mobile App Development Company, 2025',
      org: 'SoftwareSuggest',
      logoSrc: '/assets/ios-app/top-mobile-app-development-company-2025.png',
      desc: 'Awarded for exceptional product usability, intuitive interface design, and scalable backend architecture for growing enterprises.',
    },
    {
      title: 'Top Trending, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ai-development/top-rated-logo.png',
      desc: 'Ranked among top trending development partners for consistent delivery velocity, code quality, and client satisfaction.',
    },
    {
      title: 'Customer Choice, 2026',
      org: 'SoftwareWorld',
      logoSrc: '/assets/ios-app/top-rated-logo-1024x1024.png',
      desc: 'Honored by clients for technical transparency, clear communication, and dependable post-launch product stability.',
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
            Industry Recognition That Reflects{' '}
            <span className="text-[#00CE44]">Our Development Expertise</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital has received recognition from RightFirms, SoftwareWorld, and SoftwareSuggest for mobile app development, artificial intelligence, and digital services. These distinctions provide Singapore startups and enterprises with additional references when evaluating technical expertise for custom iOS, Android, and cross-platform applications.
          </p>
        </div>

        {/* Clean Floating Award Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.logoSrc}
                alt={`${item.org} ${item.title}`}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none brightness-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
