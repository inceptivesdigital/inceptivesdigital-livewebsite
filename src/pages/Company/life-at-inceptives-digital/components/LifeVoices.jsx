export default function LifeVoices() {
  const testimonials = [
    {
      name: 'Abrar',
      role: 'Senior UI/UX Designer',
      quote: 'What makes Inceptives different is the balance between high design ambition and engineering reality. We design systems that actually get built cleanly.',
    },
    {
      name: 'Salim',
      role: 'Product Manager',
      quote: 'Autonomy here is real. You are empowered to guide client architecture, prioritize outcomes, and deliver products that scale to millions of users.',
    },
    {
      name: 'Atif',
      role: 'Senior QA Engineer',
      quote: 'Quality is a studio-wide standard, not a last-minute checkpoint. Being surrounded by engineers who care about zero regressions makes work deeply fulfilling.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Team Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            It's All About People. Let’s Hear Them Out.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-[20px] bg-[#141414] border border-white/5 hover:border-white/20 transition-all text-left flex flex-col justify-between"
            >
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 italic">
                “{t.quote}”
              </p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-white font-bold block">{t.name}</span>
                <span className="text-[#00CE44] text-xs">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
