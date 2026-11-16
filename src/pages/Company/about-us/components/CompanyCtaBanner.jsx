export default function CompanyCtaBanner() {
  return (
    <section className="w-full relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div
          className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative border border-white/10"
          style={{
            backgroundImage: `url("/assets/post-launch-analytics/ctabg.png")`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="p-8 sm:p-14 lg:p-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-8 text-left">
                <div className="inline-block px-3 py-1 rounded bg-black/40 text-[#00CE44] text-xs font-bold uppercase tracking-wider mb-4">
                  Partner With Us
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-3xl">
                  We Don’t Just Develop Digital Products.{' '}
                  <span className="text-[#00CE44]">We Solve the Business Problems Behind Them.</span>
                </h2>

                <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
                  Tell us what is actually broken in your business. We will tell you honestly whether we are the right team to fix it.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base tracking-tight transition-colors border-0 shadow-none"
                  >
                    Talk to Our Team
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-black/40 hover:bg-black/60 text-white font-semibold text-sm sm:text-base tracking-tight transition-colors border border-white/20"
                  >
                    View Our Shipped Work
                  </a>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end items-end self-end">
                <img
                  src="/assets/post-launch-analytics/cta-mobile.png"
                  alt="Inceptives Digital Product Strategy"
                  className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-auto object-contain block select-none -mb-8 sm:-mb-14 lg:-mb-20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
