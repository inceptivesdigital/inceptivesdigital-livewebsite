export default function LeadershipMetrics() {
  const metrics = [
    {
      value: '70+',
      label: 'Projects Delivered',
      desc: 'Mobile apps, SaaS platforms, and enterprise software engineered to scale.',
    },
    {
      value: '20+',
      label: 'Industries Served',
      desc: 'Deep domain expertise from Healthcare and Logistics to FinTech and Media.',
    },
    {
      value: '3M+',
      label: 'App Downloads',
      desc: 'Consumer and B2B products loved and actively used by millions worldwide.',
    },
    {
      value: '4.7/5',
      label: 'On Clutch',
      desc: 'Independently verified client reviews reflecting exceptional delivery rigor.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0d0b] relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,206,68,0.1),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#00CE44] uppercase tracking-widest mb-3">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What We’ve Built Since 2018
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Seven years of disciplined execution, technical leadership, and relentless focus on commercial impact for our partners.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-8 sm:p-10 bg-[#121417] border border-white/10 hover:border-[#00CE44]/50 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#00CE44] tracking-tight leading-none mb-4 group-hover:scale-105 transition-transform origin-left">
                  {m.value}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                  {m.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed pt-4 border-t border-white/[0.08]">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
