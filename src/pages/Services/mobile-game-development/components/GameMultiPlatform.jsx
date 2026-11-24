import { Link } from 'react-router-dom'

const PLATFORMS = [
  {
    title: 'Web Games',
    icon: '/assets/mobile-game/mobile-game-sec5-img1.webp',
    desc: 'We design immersive browser-based games, optimized for speed and accessibility, that can run without an extra download.',
  },
  {
    title: 'Mobile Games',
    icon: '/assets/mobile-game/mobile-game-sec5-img2.webp',
    desc: (
      <>
        Our{' '}
        <Link
          to="/mobile-game-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile game development company
        </Link>{' '}
        offers iOS and Android games that perform smoothly across screen sizes, yet with lightweight coding and high-quality graphics.
      </>
    ),
  },
  {
    title: 'AR/VR Games',
    icon: '/assets/mobile-game/mobile-game-sec5-img3.webp',
    desc: 'We create engaging AR and VR games that break the barriers of gameplay and combine virtual space with real-life immersion.',
  },
  {
    title: 'PC & Console Games',
    icon: '/assets/mobile-game/mobile-game-sec5-img4.webp',
    desc: 'We develop games with stunning graphics rendering and custom mechanics that offer high-performance games on PC and console platforms, which will remain engaging over time.',
  },
]

export default function GameMultiPlatform() {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-32 bg-[#070814] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/mobile-game/mobile-game-sec5-bg.webp")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Light top scrim so heading stays crisp while keeping the glowing fantasy scene vibrant */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/30 pointer-events-none" />

      {/* Bottom-left overlapping character illustration */}
      <img
        src="/assets/mobile-game/mobile-game-sec5-left-img.webp"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-0 left-0 z-20 w-[140px] xl:w-[175px] 2xl:w-[200px] h-auto object-contain pointer-events-none select-none"
        loading="lazy"
      />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
            Our Multi-Platform Mobile Game Development Expertise
          </h2>
          <p className="text-white/90 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Our mobile game development services utilize industry-leading game engines, including Unity, Unreal, Godot Engine, and Cocos2D, to design high-quality, engaging, and scalable games tailored for various devices.
          </p>
        </div>

        {/* 4 Equal-Height Cards in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch auto-rows-fr">
          {PLATFORMS.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-[14px] bg-[#202020]/95 border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left h-full"
            >
              <div className="w-11 h-11 mb-5 flex items-center justify-start shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-[#00CE44] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-[15px] leading-[1.65] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
