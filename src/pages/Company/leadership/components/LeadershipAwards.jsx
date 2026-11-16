export default function LeadershipAwards() {
  const awards = [
    { title: 'Clutch', category: 'Top 1000 Companies Global' },
    { title: 'Right Firms', category: 'Top Mobile App Development Company' },
    { title: 'Top Developers', category: 'Top Entertainment App Developers' },
    { title: 'Expertise.com', category: 'Best Mobile App Developer' },
    { title: 'INC. 5000', category: 'America’s Fastest Growing Companies' },
    { title: 'Horizon Award', category: 'Gold Awards Winner' },
    { title: 'Software World', category: 'Top App Development Companies US' },
    { title: 'Horizon Award', category: 'Silver Awards Winner' },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#08090b] relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-[#00CE44]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#00CE44] uppercase tracking-widest mb-3">
            Industry Recognition
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-white tracking-tight mb-4">
            Awards &amp; Recognition Earned Along the Way
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Independent validation from premier tech analysts and global industry benchmarks for engineering excellence and product design.
          </p>
        </div>

        {/* Authentic 8-Badge Composite Grid Image (Attachment 7) */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 bg-[#121316] shadow-2xl p-2 sm:p-4">
          <img
            src="/assets/leadership/awards-grid.png"
            alt="Awards and Recognition Earned Along the Way - Inceptives Digital"
            className="w-full h-auto object-contain rounded-xl select-none"
            loading="lazy"
          />
        </div>

        {/* Awards Badges Metadata List (4x2 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
          {awards.map((a, i) => (
            <div
              key={i}
              className="p-5 bg-[#121316] border border-white/10 hover:border-[#00CE44]/40 transition-colors flex flex-col justify-between"
            >
              <div className="text-xs font-mono text-[#00CE44] mb-2 font-bold">
                0{i + 1} // AWARD
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                  {a.title}
                </h4>
                <p className="text-xs text-white/60 font-medium">
                  {a.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
