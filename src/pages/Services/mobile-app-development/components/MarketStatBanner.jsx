export default function MarketStatBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      {/* Full-Width 100% Edge-to-Edge Mobile App Screen Background Cover + Black Overlay (No Right Gap) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/mobile-app/market-bg-cover.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading (35px) + Intro */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Claim Your Place in a{' '}
              <a
                href="https://www.grandviewresearch.com/press-release/global-mobile-application-market"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-[#00e04b]"
              >
                $626B
              </a>{' '}
              Mobile App Market, Before Your Competitors Do.
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              Grab your opportunity before it&apos;s too late. Our custom mobile app development services help your product earn a share of that growth.
            </p>
          </div>

          {/* Right Column: Bar Chart Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src="/assets/mobile-app/chartsection-1024x622.png"
              alt="Mobile App Market Growth Chart 2024 to 2030 ($626B)"
              className="w-full max-w-[600px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
