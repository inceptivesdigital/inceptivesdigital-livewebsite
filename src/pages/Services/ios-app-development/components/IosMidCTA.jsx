export default function IosMidCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] px-6 sm:px-12 lg:px-16 py-14 sm:py-20 lg:py-24 text-center"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0, 206, 68, 0.22) 0%, transparent 65%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
          }}
        >
          {/* Top-Left Decorative Graphic */}
          <img
            src="/assets/ios-app/left-top.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-32 sm:w-44 lg:w-56 h-auto pointer-events-none select-none opacity-80"
          />

          {/* Bottom-Right Decorative Graphic */}
          <img
            src="/assets/ios-app/Bottom-right.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-32 sm:w-44 lg:w-56 h-auto pointer-events-none select-none opacity-80"
          />

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
              The Best iPhone Application Your Business Deserves is Developed Here.
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl text-center">
              Speak directly with an iOS engineer. Get honest feedback on your idea, a realistic timeline, and a clear path forward.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Talk to an iOS Engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
