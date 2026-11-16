export default function LifeRecreation() {
  const activities = [
    {
      title: 'Foosball & Table Tennis Clashes',
      desc: 'High-intensity post-lunch matches where designers and backend architects battle for studio bragging rights.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Weekend Farmhouse Escapes',
      desc: 'Night cricket under floodlights, open-air barbecues, swimming, and leaving pull requests behind.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Console Tournaments & FIFA Nights',
      desc: 'Big screen gaming championships in the central lounge with takeout and lively spectator commentary.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Recharge & Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Break The Corporate Walls and Live A Little
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            We do not believe good work comes from running people into the ground. Time to recharge matters here too, because stepping away for a while helps people return with more focus, better judgment, and stronger work.
          </p>
        </div>

        {/* Recreation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="group rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
            >
              <div className="w-full h-64 overflow-hidden bg-neutral-900 relative">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-2 leading-snug">
                  {act.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
