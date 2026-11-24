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
    <section className="py-14 sm:py-16 bg-[#18191d] border-y border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center">
              <div className="w-11 h-11 mb-3 flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>
              <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                {s.value}
              </div>
              <div className="text-white text-[14px] sm:text-[15px] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
