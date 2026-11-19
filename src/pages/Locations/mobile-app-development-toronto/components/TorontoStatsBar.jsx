export default function TorontoStatsBar() {
  const stats = [
    { value: '70+', label: 'Digital Products Delivered' },
    { value: '3+M', label: 'Downloads' },
    { value: '8+', label: 'years of Product Engineering' },
    { value: '4.7★', label: 'Clutch Ratings' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#000000] border-y border-white/5 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00CE44] tracking-tight mb-2">
                {item.value}
              </span>
              <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
