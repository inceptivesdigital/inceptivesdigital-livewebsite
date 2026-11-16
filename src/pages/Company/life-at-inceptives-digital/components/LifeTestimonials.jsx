export default function LifeTestimonials() {
  const testimonials = [
    {
      name: 'Hamza Rehman',
      role: 'Full Stack Engineer',
      quote:
        'What I like most here is that nobody hands you a task and disappears. If something\'s unclear, you can just ask, and someone will actually sit with you until it makes sense.',
      avatar: '/assets/life-at-inceptives/Mask-group-2.png',
    },
    {
      name: 'Sarim Ahmed',
      role: 'Product Manager',
      quote:
        'Honestly, the thing that surprised me the most was how much ownership I got early on. I wasn\'t just executing someone else\'s plan; I was part of shaping it.',
      avatar: '/assets/life-at-inceptives/sarim.png',
    },
    {
      name: 'Fasih Rehman',
      role: 'Senior Backend Engineer',
      quote:
        'Good team. Good problems to solve. I\'ve learned more in a year here than I expected to.',
      avatar: '/assets/life-at-inceptives/atif.png',
    },
    {
      name: 'Muhammad Usman',
      role: 'Growth & SEO Strategist',
      quote:
        'I came in mostly focused on rankings and traffic numbers. What I didn\'t expect was how much the culture around problem-solving would rub off on me. Now I catch myself asking why before how, even outside of work.',
      avatar: '/assets/life-at-inceptives/Mask-group-2.png',
    },
    {
      name: 'Muhammad Ali',
      role: 'Frontend Architect',
      quote:
        'There\'s a kind of honesty here that I hadn\'t really experienced before. If something about a role or a process doesn\'t make sense, people say so instead of quietly going along with it. It changes how you think about your own work too.',
      avatar: '/assets/life-at-inceptives/sarim.png',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Voices From The Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Words From The People We Work With
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-3xl">
            Unfiltered perspectives from the engineers, designers, and strategists who craft our products every day.
          </p>
        </div>

        {/* 5 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[20px] bg-[#141414] border border-white/5 hover:border-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 italic font-normal">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#00CE44]/30 select-none bg-neutral-800"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-[#00CE44] transition-colors leading-tight">
                    {t.name}
                  </h3>
                  <span className="text-white/50 text-xs font-mono block mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
