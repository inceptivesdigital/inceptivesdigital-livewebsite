export default function CompanyValues() {
  const values = [
    {
      num: '01',
      title: 'Ownership',
      tagline: 'We stay accountable for the results our work produces.',
      desc: 'Clients always know who owns each part of an engagement, what has already been agreed, and what still needs attention.',
      icon: '/assets/about-us/about-icon1.png',
    },
    {
      num: '02',
      title: 'Judgment Before Execution',
      tagline: 'We study the business problem, the user, and the market before any design or development begins.',
      desc: 'Architecture, scope, security, and delivery priorities get decided early, because fixing these choices later almost always costs more than solving them upfront.',
      icon: '/assets/about-us/about-icon2.png',
    },
    {
      num: '03',
      title: 'Honesty Over Agreement',
      tagline: 'A brief is a starting point, not a fixed instruction.',
      desc: 'We tell clients what should change, what should stay, and what does not belong in the product, even when that means pushing back on the original idea.',
      icon: '/assets/about-us/about-icon3.png',
    },
    {
      num: '04',
      title: 'Commitment Beyond Launch',
      tagline: 'A product proves itself once real users start relying on it.',
      desc: 'We stay involved after release through monitoring, fixes, improvements, and new priorities, not just through the first delivery.',
      icon: '/assets/about-us/about-icon4.png',
    },
    {
      num: '05',
      title: 'Trust Through Consistency',
      tagline: "Every agreement places a client's time, money, and expectations in our hands.",
      desc: 'We treat that responsibility as a standard to meet on every project, not a promise made once during a pitch.',
      icon: '/assets/about-us/about-icon5.png',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Our Values
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            The Principles We <span className="text-[#00CE44]">Never Compromise On</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            Every product decision reflects a standard, and these standards do not change from project to project.
          </p>
        </div>

        {/* 5 Cards Layout: 3 on Top Row, 2 Centered on Bottom Row */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.slice(0, 3).map((v, i) => (
              <div
                key={i}
                className="p-7 sm:p-8 rounded-[22px] bg-[#141414] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <img
                      src={v.icon}
                      alt={v.title}
                      className="w-12 h-12 object-contain select-none p-0 bg-transparent border-0 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#00CE44] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-white/90 text-sm font-semibold mb-3 leading-snug">
                    {v.tagline}
                  </p>

                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>

                
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.slice(3).map((v, i) => (
              <div
                key={i}
                className="p-7 sm:p-8 rounded-[22px] bg-[#141414] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <img
                      src={v.icon}
                      alt={v.title}
                      className="w-12 h-12 object-contain select-none p-0 bg-transparent border-0 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                   
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#00CE44] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-white/90 text-sm font-semibold mb-3 leading-snug">
                    {v.tagline}
                  </p>

                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-normal">
                    {v.desc}
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
