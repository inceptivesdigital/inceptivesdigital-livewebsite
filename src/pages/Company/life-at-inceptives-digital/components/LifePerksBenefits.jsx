export default function LifePerksBenefits() {
  const perks = [
    {
      title: 'Quarterly Performance Bonuses',
      desc: 'Transparent profit sharing and milestones that reward dedication and high-impact product launches.',
      icon: '💰',
    },
    {
      title: 'Petrol & Commute Allowance',
      desc: 'Dedicated fuel allowances and ride subsidies to make daily travel convenient and stress-free.',
      icon: '🚗',
    },
    {
      title: 'Xanders Lunches & Dinners',
      desc: 'Company-sponsored dining, team feasts, and gourmet lunches that turn colleagues into close friends.',
      icon: '🍽️',
    },
    {
      title: 'Annual Team Retreat & Gala',
      desc: 'Grand year-end celebration honoring individual accomplishments, awards, and weekend getaways.',
      icon: '🎉',
    },
    {
      title: 'Wellness & Mental Health Days',
      desc: 'Rest days and on-site quiet pods to make sure our team never burns out.',
      icon: '🌿',
    },
    {
      title: 'Continuous Tech Stipends',
      desc: 'Hardware upgrades, mechanical keyboards, dual 4K monitors, and book/course allowances.',
      icon: '💻',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & Perks Cards */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
              Perks & Appreciation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-5">
              The Things That Make the Week Better
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8 max-w-2xl">
              A good workplace should give something back. That might mean a performance bonus after a strong quarter, petrol support that makes the commute easier, or a lunch that turns into an hour of real conversation. Add the annual dinner, the team outings, and the everyday support people give each other, and the experience becomes more than just showing up for work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[16px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all flex items-start gap-4 text-left group"
                >
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-[#00CE44] transition-colors mb-1">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Photo (Three smiling colleagues) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-[24px] overflow-hidden border border-white/10 relative bg-[#141414] max-w-md w-full shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Colleagues at Inceptives Digital"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[#00CE44] text-xs font-mono font-bold block mb-1">
                    PEOPLE FIRST CULTURE
                  </span>
                  <p className="text-white font-semibold text-sm">
                    “The support we give each other makes this more than just showing up for work.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
