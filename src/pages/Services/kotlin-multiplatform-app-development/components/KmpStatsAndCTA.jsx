export default function KmpStatsAndCTA() {
  const stats = [
    {
      value: '150+',
      label: 'Developers',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '20+',
      label: 'Industries Served',
      icon: '/assets/kmp-app/Industries-Servedd.svg',
    },
    {
      value: '99%',
      label: 'Infrastructure Uptime',
      icon: '/assets/kmp-app/Infrastructure-Uptime-2.svg',
    },
    {
      value: '8+',
      label: 'Years Building Products',
      icon: '/assets/kmp-app/smart-home-1.svg',
    },
  ]

  return (
    <>
      {/* Proof Metrics Bar (Container 2771446) */}
      <section className="py-14 sm:py-16 bg-[#232323] border-y border-white/10">
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

      {/* Green CTA Banner: Ready to Scope Your KMP Project? (Container 5031d2b -> 9014164) */}
      <section className="py-12 sm:py-14 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="rounded-[30px] bg-[#00CE44] px-6 sm:px-10 py-8 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-[#191919] tracking-tight leading-[1.2]">
                Ready to Scope Your KMP Project?
              </h2>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#1d1d1d] hover:bg-white text-[#00CE44] font-medium text-sm sm:text-base transition-colors border-0"
              >
                Book a Technical Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
