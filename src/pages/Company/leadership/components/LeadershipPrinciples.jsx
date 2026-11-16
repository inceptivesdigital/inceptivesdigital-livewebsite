export default function LeadershipPrinciples() {
  const responsibilities = [
    {
      title: 'Set the Direction',
      desc: 'Define clear engineering objectives and architecture frameworks that give teams clarity without micromanagement.',
      num: '01',
    },
    {
      title: 'Own the Result',
      desc: 'Senior leaders stay accountable for system outcomes, production stability, and client satisfaction from start to finish.',
      num: '02',
    },
    {
      title: 'Build Judgment',
      desc: 'Empower engineers with decision-making context, elevating team-wide critical thinking and problem resolution.',
      num: '03',
    },
    {
      title: 'Raise Risks Early',
      desc: 'Identify bottlenecks, performance regressions, and architectural debt before they impact production environments.',
      num: '04',
    },
    {
      title: 'Share Knowledge',
      desc: 'Foster cross-functional learning so innovations and best practices scale across every product team.',
      num: '05',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Core Mandate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Leader Responsibilities Across Engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {responsibilities.map((r, i) => (
            <div
              key={i}
              className="group p-6 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-xs font-mono text-[#00CE44] block mb-4 font-bold">
                  {r.num}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3">
                  {r.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
