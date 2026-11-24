export default function GameMidCta() {
  return (
    <section
      className="relative w-full bg-[#361404] text-white overflow-visible"
      style={{
        backgroundImage: 'url("/assets/mobile-game/mobile-game-sec6-bg.webp")',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Copy & CTA */}
          <div className="lg:col-span-6 text-left py-14 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
              Ready to Reach Millions of Players Worldwide?
            </h2>
            <p className="text-white/95 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-7 max-w-xl">
              Our games have collectively reached over 3 million downloads across platforms. Let&rsquo;s create the next global hit together.
            </p>
            <a
              href="#contact"
              className="getintouch inline-flex items-center justify-center px-10 py-3.5 rounded-[4px] bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors border-0 shadow-none"
            >
              Get A Call Now!
            </a>
          </div>

          {/* Right Characters popping slightly above the top edge + Flame creature */}
          <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end gap-2 sm:gap-4 self-end">
            <img
              src="/assets/mobile-game/mobile-game-sec6-right-img.webp"
              alt="Mobile Game Characters"
              className="w-[220px] sm:w-[270px] lg:w-[300px] xl:w-[340px] h-auto object-contain select-none lg:-mt-16 z-20"
              loading="lazy"
            />
            <img
              src="/assets/mobile-game/mobile-game-sec6-right-img2.webp"
              alt="Fire Elemental Character"
              className="w-[100px] sm:w-[130px] lg:w-[150px] xl:w-[175px] h-auto object-contain select-none mb-4 sm:mb-8 z-20"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
