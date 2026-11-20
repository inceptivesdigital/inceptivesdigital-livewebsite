function FourPointStar({ className = '' }) {
  return (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 0C22 14 29 22 44 22C29 22 22 30 22 44C22 30 15 22 0 22C15 22 22 14 22 0Z"
        fill="#BDBDBD"
      />
    </svg>
  )
}

export default function FitnessEmergingTech() {
  const cards = [
    {
      title: 'AI-Driven Personalisation',
      icon: '/assets/healthcare/health-ai-icon.svg',
      desc: 'Machine learning models that process individual user data to deliver personalised workouts, nutrition advice, and progress insights. Fitness experiences that adapt to each user’s goals, behaviour, and performance over time.',
    },
    {
      title: 'IoT Integration for Connected Fitness',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Wearables, smart gym equipment, and IoT devices connected to fitness applications for real-time performance tracking and continuous health monitoring. Physical fitness data delivered digitally without manual input.',
    },
    {
      title: 'Blockchain and Secure Payments',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'Encrypted payment processing and secure subscription management built for fitness applications, handling membership transactions and premium content access.',
    },
    {
      title: 'AR and VR Experiences',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: '3D workout environments, real-time posture monitoring, and AR-based training simulations built for fitness applications that need to deliver immersive experiences beyond standard video content.',
    },
    {
      title: 'Gamification',
      icon: '/assets/healthcare/big-data.svg',
      desc: 'Challenges, achievements, streak tracking, and reward systems built into fitness applications that need to build consistent user habits rather than one-time engagement spikes.',
    },
    {
      title: 'Cloud Infrastructure for Scalability',
      icon: '/assets/fitness/Cloud-Integration.svg',
      desc: 'Cloud-based systems are built to handle real-time data processing and user growth without performance degradation. Fitness applications that scale without requiring architectural rebuilds.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Modern{' '}
            <span className="text-[#00CE44]">Fitness App Development Technologies</span>{' '}
            That Keep Users Engaged
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            The capabilities that separate a fitness application built for today from one built for where fitness technology is going.
          </p>
        </div>

        {/* 3x2 Architectural Grid with Exact Cell-Corner Anchored 4-Point Stars */}
        <div className="px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, idx) => {
              const isTopRow = idx < 3
              const isCol2Or3 = idx % 3 !== 0

              return (
                <div
                  key={idx}
                  className={`relative bg-[#000000] p-8 sm:p-10 lg:p-12 flex flex-col justify-start text-left border-white/25 ${
                    isTopRow ? 'border-b' : 'border-b md:border-b-0'
                  } ${isCol2Or3 ? 'md:border-l' : ''}`}
                >
                  {idx === 0 && (
                    <>
                      <FourPointStar className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                      <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                    </>
                  )}
                  {idx === 1 && (
                    <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                  )}
                  {idx === 2 && (
                    <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                  )}

                  <div className="w-12 h-12 flex items-center justify-start mb-5">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="max-h-11 max-w-11 object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
