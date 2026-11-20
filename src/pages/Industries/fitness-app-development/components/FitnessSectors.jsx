export default function FitnessSectors() {
  const sectors = [
    { name: 'Gyms and Fitness Studios', icon: '/assets/fitness/dumbbell.png' },
    { name: 'Personal Trainers and Coaches', icon: '/assets/fitness/personal.png' },
    { name: 'Corporate Wellness Programs', icon: '/assets/fitness/good-heart.png' },
    { name: 'Yoga and Meditation Centers', icon: '/assets/fitness/meditation.png' },
    { name: 'Nutrition and Diet Planning Businesses', icon: '/assets/fitness/diet.png' },
    { name: 'Sports and Athletic Organizations', icon: '/assets/fitness/sports.png' },
    { name: 'Health Clubs and Recreation Centers', icon: '/assets/healthcare/sector9.svg' },
    { name: 'Wearable Tech and IoT Companies', icon: '/assets/fitness/health-tech.png' },
    { name: 'Online Fitness Marketplaces', icon: '/assets/fitness/online-fitness.png' },
    { name: 'Rehabilitation and Physiotherapy Centers', icon: '/assets/fitness/Physiotherapy.png' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <span className="text-[#00CE44]">Fitness App Development</span> Across Every Sector That Needs It
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Each fitness sector has distinct user motivations, operational requirements, and engagement mechanisms. We build for the specific context.
          </p>
        </div>

        {/* 5x2 Grid (10 Icon Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-6 sm:p-7 flex flex-col items-center justify-center text-center border border-[#2B2B2B] hover:border-[#00CE44] transition-all duration-300 group min-h-[175px]"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <img
                  src={sec.icon}
                  alt={sec.name}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                {sec.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
