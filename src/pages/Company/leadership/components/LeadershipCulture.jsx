export default function LeadershipCulture() {
  const pillars = [
    {
      title: 'Decentralized Ownership',
      desc: 'Expertise is distributed, decisions are owned at every level, and quality never hinges on any single individual.',
    },
    {
      title: 'Craft & Engineering Rigor',
      desc: 'From daily architectural crits to UX prototypes, our standards are driven by genuine pride in how products perform.',
    },
    {
      title: 'Radical Transparency',
      desc: 'No silos, no hidden friction. Clients and internal teams share direct access to roadmaps, timelines, and technical decisions.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-black relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[400px] bg-[#00CE44]/[0.07] rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-16">
          <div className="text-[12px] sm:text-[13px] font-bold text-[#00CE44] tracking-[0.2em] uppercase mb-3">
            Beyond the Work, Together
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.15] mb-4">
            Our People and Culture
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
            Behind every product launch are passionate individuals who challenge assumptions, test ideas, and celebrate collective milestones.
          </p>
        </div>

        {/* 3-Photo Culture Collage (Attachment 6) */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 bg-[#121316] shadow-2xl p-2 sm:p-4">
          <img
            src="/assets/leadership/culture-collage.png"
            alt="Our people and culture at Inceptives Digital"
            className="w-full h-auto object-contain rounded-xl select-none"
            loading="lazy"
          />
        </div>

        {/* Culture Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="p-6 sm:p-8 bg-[#121316] border border-white/10 hover:border-[#00CE44]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[#00CE44] font-mono text-sm font-bold tracking-wider mb-3 block">
                  0{idx + 1} // CULTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
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
