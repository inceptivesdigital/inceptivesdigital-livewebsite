export default function TorontoStatsBar() {
  const stats = [
    { value: '70+', label: 'Digital Products Delivered', icon: '/assets/mobile-app/apps-launch.svg' },
    { value: '3+M', label: 'Downloads', icon: '/assets/mobile-app/app-downloads.svg' },
    { value: '8+', label: 'years of Product Engineering', icon: '/assets/mobile-app/active-developer.svg' },
    { value: '4.7★', label: 'Clutch Ratings', icon: '/assets/mobile-app/rating.svg' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#000000] border-y border-white/5 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <div className="w-11 h-11 mb-3 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>
              <span className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                {item.value}
              </span>
              <span className="text-white text-[14px] sm:text-[15px] font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
