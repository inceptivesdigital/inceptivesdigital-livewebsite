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
              <div className="w-11 h-11 mb-3 flex items-center justify-center">
                <img
                  src={st.icon}
                  alt={st.label}
                  className="w-11 h-11 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                {st.value}
              </div>
              <div className="text-white text-[14px] sm:text-[15px] font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
