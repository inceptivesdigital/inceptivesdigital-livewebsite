export default function PartnershipMidCta() {
  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-24 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-8 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              Waiting to Start a <br />
              Partnership with You
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl">
              Every relationship above started with a single project. The path to the next one begins the same way.
            </p>

            {/* Zero Radius Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
              >
                Start My Product Roadmap
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-white hover:bg-neutral-100 text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-none cursor-pointer"
              >
                Schedule A Call
              </a>
            </div>
          </div>

          {/* Right Column 3D Puzzle Graphic */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <img
              src="/assets/partnership/partner-cta.png"
              alt="Start a Partnership"
              className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] h-auto object-contain block select-none p-0 border-0 bg-transparent"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
