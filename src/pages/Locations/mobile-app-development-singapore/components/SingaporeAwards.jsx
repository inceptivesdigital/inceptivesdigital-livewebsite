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

        {/* 5-Card Grid: Real Award Logos, Zero Shadow, Zero Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#12141a] rounded-[22px] p-7 sm:p-9 border-0 shadow-none flex flex-col justify-between text-left"
            >
              <div>
                <div className="h-16 sm:h-20 mb-6 flex items-center justify-start">
                  <img
                    src={item.logoSrc}
                    alt={`${item.org} ${item.title}`}
                    className="max-h-full max-w-[180px] w-auto object-contain select-none brightness-100"
                    loading="lazy"
                  />
                </div>

                <div className="inline-block px-3 py-1 rounded-none bg-white/5 text-[#00CE44] text-xs font-semibold uppercase tracking-wider mb-3">
                  {item.org}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
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
