export default function CrossPlatformAdvantages() {
  const cards = [
    {
      percentage: '50%',
      badge: 'Up to 50%',
      title: 'Lower Development Costs',
      desc: 'Reuse core features across iOS and Android instead of paying for separate implementations. Shared development puts more of your budget toward the product itself.',
    },
    {
      percentage: '30%',
      badge: 'Up to 30%',
      title: 'Faster Time-to-Market',
      desc: 'Move both apps toward launch through one development roadmap. Shared engineering reduces duplicated work and helps teams prepare both releases sooner.',
    },
    {
      percentage: '90%',
      badge: 'Single-Source Maintenance',
      title: 'One Codebase to Update',
      desc: 'No duplicate release cycles. Every patch and feature update pushes through a single architecture, once, for both platforms.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0c] text-white relative overflow-hidden border-t border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
              EFFICIENCY & SCALABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Why Growing Businesses Begin with{' '}
              <span className="text-[#00CE44]">Cross-Platform App Development</span>
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed mb-8 font-normal">
              One shared codebase to reach iOS and Android users. Inceptives Digital delivers custom cross-platform app development solutions using Flutter and React Native, giving growing businesses a more efficient path to both markets. Shared engineering reduces duplicated work from the first release and makes future updates easier to manage.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Contact us →
              </a>
            </div>
          </div>

          {/* Right Column: 3 Advantage Cards (Dark Theme, No round container border/padding on metric) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {cards.map((c) => (
              <div
                key={c.title}
                className="p-6 sm:p-7 rounded-[20px] bg-[#16171c] border border-white/5 hover:border-[#00CE44]/40 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 transition-all duration-200"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#00CE44] shrink-0 leading-none">
                  {c.percentage}
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#00CE44] mb-1">
                    {c.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
