export default function IosEngineeringStandard() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: H2 (40px) */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] max-w-xl">
              Custom iOS App Development Services{' '}
              <span className="text-[#00CE44]">Backed by a Proven Engineering Standard</span>
            </h2>
          </div>

          {/* Right Column: Paragraph (16px) */}
          <div className="lg:col-span-6 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              Every shipped product reflects a proven engineering standard in its architecture, codebase, and compliance record. Inceptives Digital builds native Swift applications for iPhone and iPad through Xcode, distributed through the App Store at a 96% first-submission acceptance rate. In an Apple economy valued at $1.4 trillion, that standard is what separates products that hold their market position from those that never reach it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
