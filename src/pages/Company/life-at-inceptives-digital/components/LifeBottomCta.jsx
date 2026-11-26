export default function LifeBottomCta() {
  return (
    <section
      id="careers"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#161616]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(22,22,22,0.98) 0%, rgba(22,22,22,0.94) 38%, rgba(22,22,22,0.55) 70%, rgba(22,22,22,0.3) 100%), url("/assets/life-at-inceptives/live-banner3.png")`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Responsibility <br />
            Creates Room to Grow
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-md">
            Join a team where your work matters, decisions count, and growth is intentional.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:careers@inceptivesdigital.com"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
            >
              Explore Open Roles
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-colors border border-white/40 cursor-pointer"
            >
              Grow with Responsibility
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
