export default function LifeBottomCta() {
  return (
    <section
      id="careers"
      className="py-24 sm:py-32 relative overflow-hidden bg-black text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url("/assets/life-at-inceptives/live-banner3.png")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1000px] relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-5">
          Think This Could Be Your Kind of Workplace?
        </h2>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
          If honest work, real ownership, and a team that has your back sound like a good fit, we would love to hear from you. Join our global team where ambitious ideas become real-world impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:careers@inceptivesdigital.com"
            className="inline-flex items-center justify-center px-10 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-base transition-colors border-0 shadow-none cursor-pointer"
          >
            Explore Careers ↗
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-none bg-black/60 hover:bg-black/80 text-white font-semibold text-base transition-colors border border-white/20 cursor-pointer"
          >
            Grow with Responsibility
          </a>
        </div>
      </div>
    </section>
  )
}
