export default function EducationChallenges() {
  const challenges = [
    {
      title: 'COPPA and FERPA Compliance',
      icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
      desc: 'Applications handling student data, especially for users under 13, require strict compliance with COPPA and FERPA from the architecture stage. Consent management, data minimisation, and access controls are built in before a line of code is written.',
    },
    {
      title: 'Offline Functionality in Low-Connectivity Environments',
      icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
      desc: 'Learners in areas with unreliable internet access cannot be excluded from the product experience. Offline content access, progress syncing, and cached assessments are built into the application architecture from day one.',
    },
    {
      title: 'Content Scalability Across Device Types',
      icon: '/assets/healthcare/Telemedicine-App-Development.svg',
      desc: 'Educational content that performs on a high-end laptop must perform equally on a low-spec mobile device. Adaptive content delivery, optimised media compression, and cross-device performance are built into the platform before content volume grows.',
    },
    {
      title: 'Accessibility for Differently-Abled Learners',
      icon: '/assets/healthcare/Laboratory-Information-Management-Systems.svg',
      desc: 'Education applications that exclude learners with visual, auditory, or cognitive differences fail a significant portion of their intended audience. Voice assistance, adaptive interfaces, and screen reader compatibility are built into the product from the design stage.',
    },
    {
      title: 'Learner Engagement Beyond the First Session',
      icon: '/assets/healthcare/Pharmacy-Management-App.svg',
      desc: 'Most education applications see a significant drop-off after the first week. Gamification, adaptive learning paths, push notification systems, and progress visualisation were built into the retention architecture before launch.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <span className="text-[#00CE44]">Education App Development Challenges</span>{' '}
            We Solve Before They Reach Production
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Most education app failures are predictable. We address them during architecture and design before development begins.
          </p>
        </div>

        {/* Centered 3 + 2 Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {challenges.map((ch, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#202020] rounded-[20px] p-7 sm:p-8 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-start mb-5">
                <img
                  src={ch.icon}
                  alt={ch.title}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight leading-snug mb-3">
                {ch.title}
              </h3>

              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                {ch.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
