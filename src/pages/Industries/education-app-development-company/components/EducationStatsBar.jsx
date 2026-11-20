export default function EducationStatsBar() {
  const stats = [
    {
      value: '70+',
      label: 'Projects Completed',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '100%',
      label: 'Client Success Rate',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '8+',
      label: 'Active Users',
      icon: '/assets/healthcare/developer-resize.png',
    },
    {
      value: 'COPPA / FERPA',
      label: 'Compliance Ready',
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
              <div className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#00CE44] tracking-tight leading-none mb-2">
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
