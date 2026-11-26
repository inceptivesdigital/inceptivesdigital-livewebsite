export default function CompanyCeoQuote() {
  return (
    <section className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-5xl mx-auto rounded-[28px] bg-[#383838] border border-white/10 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Green Glow on Left Border */}
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#00CE44]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left / Quote Column */}
            <div className="lg:col-span-8 text-left">
              <span className="text-[#00CE44] text-5xl sm:text-6xl font-serif leading-none block mb-4 select-none">
                “
              </span>

              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug mb-8">
                We think about the business first, the code second. A product only matters if it helps our clients grow, solves a real problem, and keeps working long after we ship it. If it does not do that, we have not done our job.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00CE44] bg-[#202020] shrink-0">
                  <img
                    src="/assets/about-us/about-men.png"
                    alt="Hannan Shahnoor"
                    className="w-full h-full object-cover object-top select-none"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                    Hannan Shahnoor
                  </h4>
                  <p className="text-[#00CE44] text-xs sm:text-sm font-semibold tracking-wide">
                    CEO, Inceptives Digital
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic / Studio Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
              <div className="p-6 sm:p-8 rounded-[20px] bg-white/[0.03] border border-white/10 text-center w-full max-w-[280px]">
                <div className="text-3xl font-black text-white tracking-tight mb-1">
                  100%
                </div>
                <div className="text-[#00CE44] text-xs font-bold uppercase tracking-wider mb-4">
                  Ownership Mindset
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Every product engineered with end-to-end strategic depth, code transparency, and zero architectural shortcuts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
