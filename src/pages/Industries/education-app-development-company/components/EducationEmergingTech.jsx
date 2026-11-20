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

export default function EducationEmergingTech() {
  const cards = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: 'Personalised learning paths that adapt in real time to individual student performance. AI tutors that identify knowledge gaps before educators notice them. Predictive analytics that surface at-risk learners before they disengage.',
    },
    {
      title: 'AR and VR Integration',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: 'Chemistry labs without chemicals. Historical sites without travel. Surgical procedures without patients. Immersive simulations that make abstract concepts tangible for learners who need to experience before they understand.',
    },
    {
      title: 'Cloud and Scalable Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'A school district is adding ten thousand students mid-semester. A corporate training rollout reaching fifty countries simultaneously. Cloud infrastructure that handles institutional scale without performance degradation or data sync failures.',
    },
    {
      title: 'Gamification and Microlearning',
      icon: '/assets/fintech/data-analytics.svg',
      desc: 'Learners who complete a ten-minute module are more likely to return than learners who abandon a sixty-minute lecture. Badges, streaks, and leaderboards that turn learning consistency into a habit rather than an obligation.',
    },
    {
      title: 'Blockchain and Secure Certification',
      icon: '/assets/healthcare/big-data.svg',
      desc: 'Credentials that cannot be falsified, lost, or disputed. Tamper-proof digital certificates and badges that learners carry across institutions, employers, and borders without verification delays.',
    },
    {
      title: 'Mobile and Web Development',
      icon: '/assets/fitness/Cloud-Integration.svg',
      desc: 'A student on a low-spec Android device in a rural school and a corporate learner on a MacBook in a city office both need the same experience. Cross-platform development that delivers consistent performance regardless of device or connectivity.',
    },
    {
      title: 'Data Analytics and Reporting',
      icon: '/assets/fitness/Cloud-Integration.svg',
      desc: 'Educators who know which module lost thirty percent of learners last week can fix it before next week. Real-time dashboards that turn learner behaviour data into actionable instructional decisions.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Advanced Technologies Powering Our{' '}
            <span className="text-[#00CE44]">Educational App Development Services</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Technology in education is only valuable when it improves how learners engage, retain, and apply knowledge. Here is what each capability enables in practice.
          </p>
        </div>

        {/* 7-Card Architectural Grid with Exact Cell-Corner Anchored 4-Point Stars */}
        <div className="px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, idx) => {
              const isRow1Or2 = idx < 6
              const isCol2Or3 = idx % 3 !== 0

              return (
                <div
                  key={idx}
                  className={`relative bg-[#000000] p-8 sm:p-10 lg:p-12 flex flex-col justify-start text-left border-white/25 ${
                    isRow1Or2 ? 'border-b' : 'border-b md:border-b-0'
                  } ${isCol2Or3 ? 'md:border-l' : ''}`}
                >
                  {/* Row 1 Bottom Divider Stars */}
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

                  {/* Row 2 Bottom Divider Stars */}
                  {idx === 3 && (
                    <>
                      <FourPointStar className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                      <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                    </>
                  )}
                  {idx === 4 && (
                    <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                  )}
                  {idx === 5 && (
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
