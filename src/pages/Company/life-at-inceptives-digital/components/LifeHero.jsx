import { Link } from 'react-router-dom'

export default function LifeHero() {
  const stats = [
    { value: '40+', label: 'Events Hosted' },
    { value: '20,000+', label: 'Cumulative Collaborative Hours' },
    { value: '6', label: 'Onsite Recharge Amenities' },
  ]

  return (
    <section className="relative min-h-[640px] lg:min-h-[780px] flex items-center pt-32 sm:pt-40 pb-16 lg:pb-24 bg-black overflow-hidden">
      {/* Background with Ambient Glow and Team Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-right lg:bg-center-right bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 45%, rgba(0,0,0,0.45) 80%, rgba(0,0,0,0.2) 100%), url("/assets/life-at-inceptives/life-incep-banner.png")`,
          backgroundPosition: 'right 20% center',
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Life at Inceptives Digital
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] mb-5 text-white">
            What Makes People Stay at Inceptives Digital?{' '}
            <span className="text-[#00CE44] block mt-1">Let's Show You.</span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8 max-w-xl font-normal">
            Let's take a look at Inceptives Digital, where we don't just do the job; we live it. From late whiteboard sessions to team events that turn into inside jokes, this is what our everyday life actually looks like.
          </p>

          {/* Zero Radius Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#events-highlights"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
            >
              See Event Highlights
            </a>
            <a
              href="#careers"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-white hover:bg-neutral-100 text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
            >
              View Open Roles
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
            {stats.map((s, idx) => (
              <div key={idx} className="text-left">
                <div className="text-2xl sm:text-3xl font-black text-[#00CE44] leading-tight mb-1">
                  {s.value}
                </div>
                <div className="text-white/60 text-xs sm:text-[13px] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
