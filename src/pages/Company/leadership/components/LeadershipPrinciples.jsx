function GreenCheckDot() {
  return (
    <span className="w-4 h-4 rounded-full bg-[#00CE44] text-black inline-flex items-center justify-center shrink-0 mt-1">
      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.5 6.2L4.9 8.6L9.5 3.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

const GOOD_LEADERSHIP_POINTS = [
  'Leaders set direction, define standards, and give capable people room to act',
  'Each leader is responsible for their team’s judgment, early risk reporting, and functional outcomes',
  'Leadership is measured by team strength and decision quality, not personal control',
]

const RESPONSIBILITIES = [
  {
    title: 'Set the Direction',
    icon: '/assets/leadership/live/set-direction.svg',
    alt: 'Set the Direction',
    desc: 'Teams understand goals, priorities, and critical decisions. Leaders remove uncertainty before it slows work.',
  },
  {
    title: 'Own the Result',
    icon: '/assets/leadership/live/own-result.png',
    alt: 'Own the Result',
    desc: 'Titles don’t remove accountability. Leaders own team outcomes and the quality of decisions.',
  },
  {
    title: 'Build Judgment',
    icon: '/assets/leadership/live/build-judgment.png',
    alt: 'Build Judgment',
    desc: 'Leaders teach team members to solve problems independently and make sound decisions.',
  },
  {
    title: 'Raise Risks Early',
    icon: '/assets/leadership/live/raise-risks.png',
    alt: 'Raise Risks Early',
    desc: 'Surface issues before they impact scope, quality, or delivery.',
  },
  {
    title: 'Share Knowledge',
    icon: '/assets/leadership/live/share-knowledge.png',
    alt: 'Share Knowledge',
    desc: 'Decisions, processes, and lessons are documented and passed across the team.',
  },
]

export default function LeadershipPrinciples() {
  return (
    <>
      {/* Section 2: Good Leadership Leaves Stronger People Behind */}
      <section className="py-16 sm:py-24 bg-[#141414] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Rounded Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden border border-white/10 bg-black">
                <img
                  src="/assets/leadership/live/principles-arrow.webp"
                  alt="Good Leadership Leaves Stronger People Behind"
                  className="w-full h-auto object-cover block select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#00CE44] tracking-tight leading-[1.2] mb-6">
                Good Leadership Leaves Stronger People Behind
              </h2>
              <ul className="space-y-4">
                {GOOD_LEADERSHIP_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <GreenCheckDot />
                    <span className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leader Responsibilities (Floating Green Icon Boxes — 3 top, 2 centered bottom) */}
      <section
        className="relative py-16 sm:py-24 bg-[#0e0f11] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/leadership/live/responsibilities-bg.png')",
        }}
      >
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2]">
              Leader Responsibilities
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
            {RESPONSIBILITIES.map((item) => (
              <div
                key={item.title}
                className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[16px] bg-[#1e1e1e]/95 border border-white/10 pt-12 pb-8 px-7 flex flex-col items-center justify-start text-center"
              >
                {/* Floating Green Rounded Square Badge with Black Icon */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-xl bg-[#00CE44] border-2 border-white flex items-center justify-center p-3 shadow-lg">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-full h-full object-contain brightness-0 select-none"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
