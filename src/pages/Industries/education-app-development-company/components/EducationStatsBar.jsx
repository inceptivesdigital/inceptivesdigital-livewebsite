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
      value: '3M+',
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
    <section className="bg-[#202020] py-12 sm:py-14 relative z-20 border-y border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <h2 className="text-center text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-10 max-w-3xl mx-auto">
          Education App Development Company{' '}
          <span className="text-[#00CE44]">Trusted by Leading EdTech Innovators</span>
        </h2>

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
                  className="w-full h-full object-contain select-none p-0 border-0 bg-transparent"
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
