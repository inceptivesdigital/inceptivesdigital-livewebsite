const GAME_TYPES = [
  { name: 'Adventure Games', icon: '/assets/mobile-game/mobile-game-sec13-img1.webp' },
  { name: 'Action Games', icon: '/assets/mobile-game/mobile-game-sec13-img2.webp' },
  { name: 'First-Person Shooter', icon: '/assets/mobile-game/mobile-game-sec13-img3.webp' },
  { name: 'Puzzle Games', icon: '/assets/mobile-game/mobile-game-sec13-img4.webp' },
  { name: 'Racing Games', icon: '/assets/mobile-game/mobile-game-sec13-img5.webp' },
  { name: 'Strategy Games', icon: '/assets/mobile-game/mobile-game-sec13-img6.webp' },
  { name: 'Simulation Games', icon: '/assets/mobile-game/mobile-game-sec13-img7.webp' },
  { name: 'Role-Playing Games (RPG)', icon: '/assets/mobile-game/mobile-game-sec13-img8.webp' },
  { name: 'Sports Games', icon: '/assets/mobile-game/mobile-game-sec13-img9.webp' },
  { name: 'Multiplayer Online Games (MOBA)', icon: '/assets/mobile-game/mobile-game-sec13-img10.webp' },
]

export default function GameTypesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0c0f] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Types of Games <span className="text-[#00CE44]">We Develop</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            Our mobile game development experts specialize in creating modern and interactive games across multiple categories, tailored to provide an unmatched experience for players of all types.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {GAME_TYPES.map((g) => (
            <div
              key={g.name}
              className="flex items-center gap-3.5 px-5 py-4 rounded-[16px] bg-[#1A1B1B] border border-[#3F3F3F] hover:border-[#00CE44] transition-colors"
            >
              <img
                src={g.icon}
                alt={g.name}
                className="w-8 h-8 object-contain shrink-0 select-none"
                loading="lazy"
              />
              <span className="font-bold text-[#E5E5E5] text-sm sm:text-base">
                {g.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="getintouch inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
          >
            Get a Call Now!
          </a>
          <button
            type="button"
            className="openpop-shedule inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-transparent border border-white/30 hover:border-[#00CE44] text-white hover:text-[#00CE44] font-semibold text-sm sm:text-base transition-colors cursor-pointer"
          >
            Schedule A Call
          </button>
        </div>
      </div>
    </section>
  )
}
