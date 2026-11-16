export default function LifeAmenities() {
  const spaces = [
    {
      title: 'Wellness Room',
      desc: 'Quiet contemplation, prayer, and personal downtime equipped with calming ambient lighting.',
      shot: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Common Seating Area',
      desc: 'Plush couches, ergonomic lounge pods, and open collaboration areas for casual cross-team conversations.',
      shot: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Game Zone',
      desc: 'Full-size foosball tables, PlayStation consoles, board games, and competitive team tournaments.',
      shot: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Nap Room & Recharge Pods',
      desc: 'Private, noise-dampened sleep pods designed to provide 20-minute power naps between demanding architectural sprints.',
      shot: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Dining Area & Coffee Bar',
      desc: 'Fully stocked cafeteria with premium espresso machines, seasonal snacks, and daily fresh team lunches.',
      shot: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Spaces & Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            What’s the Catch? <br />
            <span className="text-white/70 text-2xl sm:text-3xl lg:text-[36px] font-medium">
              Inceptives Digital is More Than A Typical Workplace
            </span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            The physical and collaborative spaces that back up our culture claims. Built for focused engineering, intentional resting, and genuine daily camaraderie.
          </p>
        </div>

        {/* Wide Angle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {spaces.map((s, idx) => (
            <div
              key={idx}
              className="group rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
            >
              <div className="w-full h-56 sm:h-64 overflow-hidden bg-neutral-900 relative">
                <img
                  src={s.shot}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                    {s.desc}
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
