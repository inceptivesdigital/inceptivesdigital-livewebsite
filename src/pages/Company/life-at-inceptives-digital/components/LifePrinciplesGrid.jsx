export default function LifePrinciplesGrid() {
  const cards = [
    {
      title: 'Clear Goals, Clear Ownership',
      icon: '/assets/life-at-inceptives/lifeicon1.svg',
      image: '/assets/life-at-inceptives/lifeimage1.png',
    },
    {
      title: 'Freedom to Make Decisions',
      icon: '/assets/life-at-inceptives/lifeicon2.svg',
      image: '/assets/life-at-inceptives/lifeimage2.png',
    },
    {
      title: 'Transparent Communication',
      icon: '/assets/life-at-inceptives/lifeicon3.svg',
      image: '/assets/life-at-inceptives/lifeimage3.png',
    },
    {
      title: 'Learn Through Doing',
      icon: '/assets/life-at-inceptives/lifeicon4.svg',
      image: '/assets/life-at-inceptives/lifeimage4.png',
    },
  ]

  const growthPoints = [
    'Direct impact on products',
    'Rapid feedback and learning',
    'Expanding responsibilities',
  ]

  const sharedWorkPoints = [
    'Context Before Handoffs',
    'Ask Questions Early',
    'Respect Each Craft',
    'Joint Problem Ownership',
  ]

  return (
    <div className="bg-[#0a0a0a]">
      {/* 1. Culture Principles 4 Cards Grid */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight mb-2">
              Culture Principles
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-normal">
              A Culture You Can Feel
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-10 h-10 mb-4 flex items-center justify-start p-0">
                    <img
                      src={c.icon}
                      alt={c.title}
                      className="w-8 h-8 object-contain select-none"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors mb-4 leading-snug">
                    {c.title}
                  </h3>
                </div>

                <div className="w-full h-44 rounded-[14px] overflow-hidden bg-neutral-900 mt-2">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Growth Begins Before The Next Title */}
      <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-6">
                Growth Begins Before <br />
                <span className="text-[#00CE44]">The Next Title.</span>
              </h2>

              <ul className="space-y-3.5 mb-6">
                {growthPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-normal">
                    <span className="w-4 h-4 rounded-full bg-[#00CE44] flex items-center justify-center text-black text-[10px] font-black">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/life-at-inceptives/chart-life.png"
                alt="Growth at Inceptives Digital"
                className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Focus Without Pressure (With life-banner2.png and 3 Pill Tags) */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden text-center bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/assets/life-at-inceptives/life-banner2.png")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1200px] relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-none mb-2">
            Focus Without
          </h2>
          <div className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#00CE44] tracking-tight leading-none mb-8">
            Pressure
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="px-6 py-2.5 rounded-full border border-white/20 bg-black/40 text-white/90 text-xs sm:text-sm font-medium">
              Respect for personal time
            </span>
            <span className="px-6 py-2.5 rounded-full border border-white/20 bg-black/40 text-white/90 text-xs sm:text-sm font-medium">
              Clear priorities and planning
            </span>
            <span className="px-6 py-2.5 rounded-full border border-white/20 bg-black/40 text-white/90 text-xs sm:text-sm font-medium">
              Supportive management
            </span>
          </div>
        </div>
      </section>

      {/* 4. Shared Work, Shared Responsibility */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-6">
                Shared Work, <br />
                <span className="text-[#00CE44]">Shared Responsibility</span>
              </h2>

              <ul className="space-y-3.5 mb-6">
                {sharedWorkPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-normal">
                    <span className="w-4 h-4 rounded-full bg-[#00CE44] flex items-center justify-center text-black text-[10px] font-black">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/life-at-inceptives/work-image.png"
                alt="Shared Work at Inceptives"
                className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
