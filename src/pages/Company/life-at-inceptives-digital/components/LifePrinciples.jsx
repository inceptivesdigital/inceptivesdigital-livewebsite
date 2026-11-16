export default function LifePrinciples() {
  const principles = [
    {
      title: 'Clear Goals, Clear Ownership',
      desc: 'No ambiguity. Every team member understands their deliverable, their impact on the product roadmap, and owns the execution end-to-end.',
    },
    {
      title: 'Freedom to Make Decisions',
      desc: 'We trust our engineers and designers. Context is shared broadly so people can act decisively without bureaucratic red tape.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Direct, honest feedback delivered with mutual respect. We talk openly about risks, lessons learned, and opportunities to improve.',
    },
    {
      title: 'Learn Through Doing',
      desc: 'Continuous craft refinement by building real, production-scale platforms used by millions of people across diverse industries.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Our Culture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Culture Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#00CE44] text-xs font-mono font-bold block mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3">
                  {p.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
