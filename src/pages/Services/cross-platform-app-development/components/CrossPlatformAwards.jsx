export default function CrossPlatformAwards() {
  const awards = [
    {
      name: 'RightFirms',
      label: 'Top Mobile App Development Company',
      src: '/assets/awards-images/award-rightfirms.png',
    },
    {
      name: 'Top Developers',
      label: 'Top Entertainment App Developers',
      src: '/assets/awards-images/award-top-developers.png',
    },
    {
      name: 'Clutch Austin',
      label: 'Top App Development Company 2024',
      src: '/assets/awards-images/award-clutch-austin.png',
    },
    {
      name: 'Clutch Texas',
      label: 'Top App Development Company 2025',
      src: '/assets/awards-images/award-clutch-gaming.png',
    },
    {
      name: 'SoftwareWorld',
      label: 'Highly Recommended 2026',
      src: '/assets/ios-app/top-rated-logo-1024x1024.png',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Header Row with Rating & Check Reviews Below */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl text-left">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight mb-3">
              Awards &amp; Recognition That Reflect Our{' '}
              <span className="text-[#00CE44]">Cross-Platform App Development</span> Expertise
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal">
              Inceptives Digital has been recognized across Clutch, SoftwareWorld, and RightFirms for its software and app development capabilities, supported by a 4.7/5 Clutch rating.
            </p>
          </div>

          {/* Rating on Top, Check Reviews Button Directly Below */}
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <div className="text-left lg:text-right">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>4.7 / 5</span>
                <span className="text-[#00CE44] text-xl">★★★★★</span>
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">Clutch Rating</div>
            </div>

            <a
              href="https://clutch.co/profile/inceptives-digital"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-none bg-transparent hover:bg-white/10 text-white font-medium text-sm transition-colors border border-white"
            >
              Check Reviews
            </a>
          </div>
        </div>

        {/* Awards Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
          {awards.map((award) => (
            <div
              key={award.name}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] flex flex-col items-center justify-center transition-transform hover:scale-105 duration-200"
            >
              <img
                src={award.src}
                alt={`${award.name} - ${award.label}`}
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
