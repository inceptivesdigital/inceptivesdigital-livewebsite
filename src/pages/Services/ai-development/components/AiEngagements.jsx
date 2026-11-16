export default function AiEngagements() {
  const models = [
    {
      title: 'Discovery Sprint',
      desc: 'Two weeks to define scope, architecture, and risks. Fixed cost, fixed timeline — the right foundation for any serious AI project.',
      bestFor: 'Founders and teams needing clarity before committing',
    },
    {
      title: 'Fixed-Cost Project',
      desc: 'Everything is defined upfront: scope, milestones, and budget. Delivered on time with no surprises.',
      bestFor: 'MVPs, well-scoped modules, and clearly defined projects',
    },
    {
      title: 'Dedicated AI Team',
      desc: 'A full AI engineering team embedded in your project. Moves with your roadmap and scales with your ambitions.',
      bestFor: 'Long-term AI product development and scaling existing systems',
    },
    {
      title: 'Staff Augmentation',
      desc: 'Access ML engineers, LLM developers, and MLOps experts exactly when you need them — no full-time hiring required.',
      bestFor: 'Teams needing specific skills to accelerate delivery',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Engagements Our <span className="text-[#00CE44]">AI Development Company</span> Offers at Every Stage
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            The right engagement model depends on what you are building, how much is defined, and how quickly you need to move.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00CE44] transition-colors">
                  {m.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {m.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00CE44] block mb-1">
                  Best for:
                </span>
                <p className="text-white/80 text-xs sm:text-sm leading-snug">
                  {m.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
