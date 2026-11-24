import { Link } from 'react-router-dom'

export default function GameHero() {
  return (
    <section
      className="relative w-full min-h-[82vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-start bg-[#1a1a1c] text-white pt-28 sm:pt-36 lg:pt-40 pb-[240px] sm:pb-[340px] lg:pb-[460px] xl:pb-[520px] overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/mobile-game/mobile-game-banner-bg.webp")',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle top-only scrim so text is crisp while keeping the 5 warriors & starry sky 100% vibrant */}
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-black/35 via-black/15 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
          Mobile Game Development Company
        </h1>

        <p className="text-white/95 text-sm sm:text-base lg:text-[17px] leading-[1.65] font-normal max-w-[880px] mx-auto mb-8">
          Inceptives Digital is a leading{' '}
          <Link
            to="/mobile-game-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
          >
            mobile game development company
          </Link>{' '}
          with 8+ years of experience in crafting rip-roaring games for enthusiasts around the world. Our tech team possesses hands-on expertise to execute your game idea with creativity, precision, and cutting-edge technology. No matter what you need or want, a concept design, 3D modeling, or AI-driven gameplay, we have got you covered.
        </p>

        <a
          href="#contact"
          className="getintouch inline-flex items-center justify-center px-10 sm:px-12 py-4 rounded-[6px] bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors border-0 shadow-none"
        >
          Get A Call Now!
        </a>
      </div>
    </section>
  )
}
