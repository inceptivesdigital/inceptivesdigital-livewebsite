export default function LifeHero() {
  return (
    <section className="compact-hero-50dvh relative flex items-center pt-28 sm:pt-32 pb-12 bg-[#07110a] overflow-hidden">
      {/* Background with Ambient Green Glow and Team Cover Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6,10,8,0.96) 0%, rgba(7,22,12,0.88) 42%, rgba(8,46,20,0.58) 76%, rgba(6,18,10,0.65) 100%), url("/assets/life-at-inceptives/life-incep-banner.png")`,
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <span className="text-white text-[14px] sm:text-[16px] font-semibold leading-[1.35] tracking-[0.5px] block mb-4">
            Life at Inceptives Digital
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] mb-5 text-white">
            Work That Builds{' '}
            <span className="text-[#00CE44] block mt-1">People and Products</span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8 max-w-lg font-normal">
            Responsibility, clarity, and ownership define how we work. Every role matters, every action counts.
          </p>

          <div>
            <a
              href="#careers"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
            >
              Explore Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
