export default function LifeEventsFestivals() {
  const events = [
    {
      title: '14th August Celebration',
      desc: 'Green & white patriotic celebrations, office decorating, trivia contests, and traditional sweet feasts.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Eid Party & Team Gala',
      desc: 'Annual festive team gathering, commemorative banner photos, exchange of gifts, and festive culinary banquets.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Rooftop B.B.Q Dinner',
      desc: 'Live sizzling skewers under the open evening sky, casual live music, and conversations that linger for hours.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Xanders Team Lunch',
      desc: 'Stepping out for gourmet brick-oven pizzas, artisan pastas, and winding down together over fresh mocktails.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Farmhouse Weekend Retreat',
      desc: 'Poolside sports, night cricket tournaments, campfire discussions, and uninterrupted downtime away from the city.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="events-highlights" className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Moments From This Year
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Celebrate Life with Inceptives Digital <br />
            <span className="text-white/70 text-2xl sm:text-3xl lg:text-[36px] font-medium">
              The Moments That Bring the Team Together
            </span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            Beyond the work, shared experiences shape the culture. Some of the best parts of working together happen away from the desk. These are the moments when the team connects, unwinds, and enjoys the culture we are building together.
          </p>
        </div>

        {/* Events Cards Carousel / Grid (Untagged Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="group rounded-[18px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
            >
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-900">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors mb-2 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
