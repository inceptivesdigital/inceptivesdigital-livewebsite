export default function ReactNativeStatsAndCTA() {
  const stats = [
    {
      value: '70+',
      label: 'Products Shipped',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '150+',
      label: 'Engineers',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '3M+',
      label: 'App Downloads',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
    {
      value: '4.7',
      label: 'Rating on Clutch',
      icon: '/assets/mobile-app/rating.svg',
    },
  ]

  return (
    <>
      {/* 4 Stats Counter Bar */}
      <section className="py-14 sm:py-16 bg-[#18191d] border-y border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-1.5">
                  {s.value}
                </div>
                <div className="text-white text-xs sm:text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA Banner: Stop Building Twice. Start Building Smarter. */}
      <section
        className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-0 pb-0"
        style={{
          background:
            'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
          }}
        />

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column (CTA H2 = 35px) */}
            <div className="lg:col-span-6 lg:py-16 pb-4 lg:pb-16 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Stop Building Twice.{' '}
                <span className="text-[#00CE44]">Start Building Smarter.</span>
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-xl">
                Send us a brief of what needs to be built, and our team will provide the plan within a day.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                >
                  Let&apos;s Build It
                </a>
              </div>
            </div>

            {/* Right Image Properly Sized Inside Section */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center py-6 lg:py-10">
              <img
                src="/assets/mobile-app/cta-mobile.webp"
                alt="Stop Building Twice. Start Building Smarter."
                className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[350px] xl:max-w-[380px] h-auto object-contain block select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
