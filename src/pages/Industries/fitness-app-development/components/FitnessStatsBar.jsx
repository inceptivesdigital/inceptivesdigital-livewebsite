export default function FitnessStatsBar() {
  const stats = [
    {
      value: '70+',
      label: 'Apps Delivered',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '100%',
      label: 'Client Satisfaction Rate',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '8+',
      label: 'Years Of Development Experience',
      icon: '/assets/healthcare/developer-resize.png',
    },
    {
      value: 'HIPAA',
      label: 'Compliance',
      icon: '/assets/healthcare/hippa-icon.webp',
    },
  ]

  return (
    <section className="bg-[#202020] py-10 sm:py-12 relative z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-12 w-12 flex items-center justify-center mb-3">
                <img
                  src={st.icon}
                  alt={st.label}
                  className="max-h-11 max-w-11 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-2">
                {st.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-white/95">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
