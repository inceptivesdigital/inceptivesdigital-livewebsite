const ENGINES = [
  {
    name: 'Unity Engine',
    icon: '/assets/mobile-game/mobile-game-sec8-img1.webp',
    bullets: [
      'Best for: 2D & 3D cross-platform games (mobile, PC, console, AR/VR)',
      'Strengths: Workflow, asset store, community',
      'Famous for: Games like Hollow Knight, Super Mario Run, and Pokémon Go',
    ],
  },
  {
    name: 'Unreal Engine',
    icon: '/assets/mobile-game/mobile-game-sec8-img2.webp',
    bullets: [
      'Best for: Realistic 3D games and real-time interactive experiences',
      'Strengths: Visual quality, physics, and scale',
      'Famous for: Games such as Fortnite, Final Fantasy VII Remake, and Street Fighter V',
    ],
  },
  {
    name: 'Godot Engine',
    icon: '/assets/mobile-game/mobile-game-sec8-img3.webp',
    bullets: [
      'Best for: 2D games, mobile platforms, and indie projects',
      'Strengths: Lightweight, open-source, easy to write code/scripts (GDScript)',
      'Famous for: Indie hits such as The Interactive Adventures of Dog Mendonça and Severed Steel',
    ],
  },
  {
    name: 'Cocos Engine',
    icon: '/assets/mobile-game/mobile-game-sec8-img4.webp',
    bullets: [
      'Best for: Mobile, 2D game development',
      'Strengths: Open-source, lightweight, great for rapid deployment or prototyping',
      'Famous for: Clash of Kings, Angry Birds 2',
    ],
  },
  {
    name: 'CryEngine',
    icon: '/assets/mobile-game/mobile-game-sec8-img5.webp',
    bullets: [
      'Best for: High-end 3D games that utilize high-resolution graphics',
      'Strengths: Great visual fidelity, can be used for many genres, especially open-world RPGs (FPS games)',
      'Famous for: Crysis, Hunt: Showdown, Kingdom Come: Deliverance',
    ],
  },
  {
    name: 'GameMaker Studio',
    icon: '/assets/mobile-game/mobile-game-sec8-img6.webp',
    bullets: [
      'Best for: 2D games and quick development of games',
      'Strengths: Simple drag-and-drop interface, solid scripting functionality',
      'Famous for: Undertale, Hyper Light Drifter, Hotline Miami',
    ],
  },
  {
    name: 'Buildbox',
    icon: '/assets/mobile-game/mobile-game-sec8-img7.webp',
    bullets: [
      'Best for: Drag-and-drop mobile game development',
      'Strengths: No coding needed, rapid prototyping of games',
      'Famous for: Colour Switch, The Line Zen',
    ],
  },
  {
    name: 'Defold',
    icon: '/assets/mobile-game/mobile-game-sec8-img8.webp',
    bullets: [
      'Best for: 2D with cross-platform support',
      'Strengths: Lightweight, open source, good for rapid development',
      'Famous for: King of the Hill, Burrito Bison',
    ],
  },
  {
    name: 'Phaser',
    icon: '/assets/mobile-game/mobile-game-sec8-img9.webp',
    bullets: [
      'Best Used For: HTML5 game development',
      'Strengths: Open-source; fast development for browser games',
      'Famous For: Super Mario Bros. Crossover; Cut the Rope',
    ],
  },
  {
    name: 'Roblox Studio',
    icon: '/assets/mobile-game/mobile-game-sec8-img10.webp',
    bullets: [
      'Best Used For: Making and scripting games using the Roblox platform',
      'Strengths: User-generated content, large community, easy-to-learn scripting language',
      'Famous For: Games like Adopt Me!, Brookhaven, and Arsenal',
    ],
  },
]

export default function GameEnginesGrid() {
  return (
    <section
      className="relative py-20 sm:py-28 bg-[#2c3a4d] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/mobile-game/mobile-game-sec8-bg.webp")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Very light scrim so the original atmospheric blue-purple gradient stays bright and clear */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18]">
            Mobile Game Development Backed By The Best Engines
          </h2>
        </div>

        {/* 10 Equal-Height Cards with Top-Centered Floating Icon Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-14 items-stretch auto-rows-fr pt-4">
          {ENGINES.map((engine) => (
            <div
              key={engine.name}
              className="relative px-6 pt-12 pb-7 rounded-[20px] bg-[#1c1c1e]/95 border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left h-full"
            >
              {/* Floating Top-Centered Engine Badge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] flex items-center justify-center">
                <img
                  src={engine.icon}
                  alt={engine.name}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[19px] font-bold text-[#00CE44] mb-4 leading-snug">
                {engine.name}
              </h3>

              <ul className="list-disc pl-4 space-y-3 text-white/90 text-[14px] leading-[1.6] font-normal">
                {engine.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
