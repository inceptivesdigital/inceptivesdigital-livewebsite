export default function PostLaunchStatsBar() {
  const stats = [
    {
      value: '70+',
      label: 'Products Shipped',
      icon: '/assets/mobile-app/apps-launch.svg',
      alt: 'Products Shipped',
    },
    {
      value: '150+',
      label: 'Active Developers',
      icon: '/assets/mobile-app/active-developer.svg',
      alt: 'Active Developers',
    },
    {
      value: '3M+',
      label: 'App Downloads',
      icon: '/assets/mobile-app/app-downloads.svg',
      alt: 'App Downloads',
    },
    {
      value: '4.7',
      label: 'Rating on Clutch',
      icon: '/assets/mobile-app/rating.svg',
      alt: 'Rating on Clutch',
    },
  ]

  return (
    <section className="py-14 sm:py-16 bg-[#161616] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="mb-3 flex items-center justify-center p-0 border-0 bg-transparent">
                <img
                  src={stat.icon}
                  alt={stat.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none p-0 border-0 bg-transparent"
                  loading="lazy"
                />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#00CE44] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-white text-xs sm:text-sm lg:text-[15px] font-medium tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
