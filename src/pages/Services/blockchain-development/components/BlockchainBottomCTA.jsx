export default function BlockchainBottomCTA() {
  return (
    <section className="py-12 sm:py-16 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Green Gradient CTA Box */}
        <div
          className="relative overflow-hidden rounded-[24px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14 mb-12 sm:mb-16"
          style={{
            background:
              'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
          }}
        >
          {/* Subtle Topographic Wave Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Content Column (CTA H2 = 35px) */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                <span className="text-[#00CE44]">Need a More Accurate Estimate</span>{' '}
                for Your Blockchain Product?
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                Every blockchain application has different requirements. Let’s discuss your goals, features, and technical needs to define the right investment.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                >
                  Get a Project Estimate
                </a>
              </div>
            </div>

            {/* Right Graphic Column Properly Sized Inside Section */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <img
                src="/assets/blockchain/blockcta-2.png"
                alt="Need a More Accurate Estimate for Your Blockchain Product?"
                className="w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[330px] xl:max-w-[360px] h-auto object-contain block select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Budget Allocation Progress Chart */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/blockchain/progresschart-1.png"
            alt="Typical Blockchain App Development Budget Allocation"
            className="w-full max-w-[1140px] h-auto object-contain select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
