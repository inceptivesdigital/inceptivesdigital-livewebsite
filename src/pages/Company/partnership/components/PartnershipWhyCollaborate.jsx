export default function PartnershipWhyCollaborate() {
  const cards = [
    {
      title: 'Senior Engineering Ownership',
      desc: 'Senior engineers and technical leads stay engaged from kickoff through delivery, with no junior handoff.',
      icon: '/assets/partnership/grey-gear.png',
    },
    {
      title: 'Scalable Architecture Decisions',
      desc: 'Senior engineers and technical leads stay engaged from kickoff through delivery, with no junior handoff.',
      icon: '/assets/partnership/Group.svg',
    },
    {
      title: 'Unified Platform Engineering',
      desc: 'Senior engineers and technical leads stay engaged from kickoff through delivery, with no junior handoff.',
      icon: '/assets/partnership/fi_3002128.svg',
    },
    {
      title: 'Compliance Security Built-In',
      desc: 'Senior engineers and technical leads stay engaged from kickoff through delivery, with no junior handoff.',
      icon: '/assets/partnership/fi_12898048.svg',
    },
    {
      title: 'Delivery Transparency Defined',
      desc: 'Senior engineers and technical leads stay engaged from kickoff through delivery, with no junior handoff.',
      icon: '/assets/partnership/fi_1670915.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Why Collaborate <br />
            With Inceptives Digital
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            If you are evaluating how this partnership works in practice, the following points clarify how Inceptives Digital operates across delivery and execution.
          </p>
        </div>

        {/* 5 Cards Grid with exact hover effect: green background, black text, black icon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-6 rounded-[15px] bg-[#141414] hover:bg-[#00CE44] border border-white/5 hover:border-[#00CE44] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[220px] sm:min-h-[240px] text-left"
            >
              <div className="relative z-10">
                <h3 className="text-[#00CE44] group-hover:text-black font-bold text-base sm:text-[17px] tracking-tight leading-snug mb-3 transition-colors duration-500">
                  {c.title}
                </h3>
                <p className="text-white/80 group-hover:text-black text-xs sm:text-[13px] leading-relaxed font-normal transition-colors duration-500">
                  {c.desc}
                </p>
              </div>

              {/* Faint Grey Line Icon at Bottom-Right in normal state -> Solid Black on Hover */}
              <div className="flex justify-end items-end pt-6 relative z-0">
                <img
                  src={c.icon}
                  alt={c.title}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain opacity-25 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-500 select-none p-0 border-0 bg-transparent"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
