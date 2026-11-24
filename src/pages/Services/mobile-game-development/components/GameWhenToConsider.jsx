const SCENARIOS = [
  {
    title: 'Launching a New Game',
    icon: '/assets/mobile-game/mobile-game-sec7-img1.webp',
    desc: 'Launching a new game requires a well-designed strategy, prototyping, and execution. We utilize the most in-demand game engines to build scalable games that are cross-compatible and optimized for performance. We use a detail-oriented development process that ensures the game is ready to grab the market from day one.',
  },
  {
    title: 'Upgrading Existing Apps with Game Features',
    icon: '/assets/mobile-game/mobile-game-sec7-img2.webp',
    desc: 'Not every project has to start with a clean sheet of paper. It is now common to see many US businesses incorporating game-like mechanics to drive user engagement, and we know how to do this. Leaderboards, achievements, reward systems, or interactive challenges, our developers can integrate all these features without affecting the performance of the game app.',
  },
  {
    title: 'Keeping Players Engaged',
    icon: '/assets/mobile-game/mobile-game-sec7-img3.webp',
    desc: 'The real challenge after the launch is retaining the players, and this is where many games lack. At Inceptives Digital, we integrate engaging features like daily quests, reward systems, and other in-app events that foster engagement and loyalty. We use a combination of technical expertise with behavioural insight to ensure the game is being played, shared, and loved.',
  },
]

export default function GameWhenToConsider() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Row: Left All-White Heading + Right Top-Aligned Paragraph */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 mb-10 sm:mb-14">
          <h2 className="lg:w-[50%] text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] text-left">
            When Should You Consider Our Mobile Game Development Services
          </h2>
          <p className="lg:w-[45%] text-white/90 text-sm sm:text-base lg:text-[16px] leading-[1.65] font-normal text-left">
            Our mobile game development company partners with startups and established organizations across the US to create interactive and engaging games. We provide customized, practical, and scalable solutions across 20+ industries.
          </p>
        </div>

        {/* 3 Full-Width Borderless Dark Bars (#202020) */}
        <div className="flex flex-col gap-5">
          {SCENARIOS.map((item) => (
            <div
              key={item.title}
              className="bg-[#202020] rounded-[16px] px-6 py-6 sm:px-8 sm:py-7 grid grid-cols-1 lg:grid-cols-[26%_74%] items-center gap-4 lg:gap-6 border-0"
            >
              <div className="flex items-center gap-4 text-left pr-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-9 h-9 object-contain shrink-0 select-none"
                  loading="lazy"
                />
                <h3 className="text-base sm:text-lg lg:text-[19px] font-extrabold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/95 text-sm sm:text-[15.5px] leading-[1.6] font-normal text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
