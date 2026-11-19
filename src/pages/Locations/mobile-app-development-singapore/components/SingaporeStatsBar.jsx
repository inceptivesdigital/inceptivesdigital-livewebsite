export default function SingaporeStatsBar() {
  const stats = [
    {
      value: '70+',
      label: 'Apps Shipped',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '8+',
      label: 'Years in Market',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '4.7★',
      label: 'Rating on Clutch',
      icon: '/assets/mobile-app/rating.svg',
    },
    {
      value: '150+',
      label: 'Developers on Team',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
  ]

  return (
    <section className="py-14 sm:py-18 bg-[#000000] border-y border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
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
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#00CE44] tracking-tight leading-none mb-2">
                {s.value}
              </div>
              <div className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
