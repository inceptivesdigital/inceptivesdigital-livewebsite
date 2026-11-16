export default function PostLaunchConsultationCta() {
  return (
    <section className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div
          className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative"
          style={{
            backgroundImage: `url("/assets/post-launch-analytics/ctabg.png")`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="p-8 sm:p-12 lg:p-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                  Put a Specialist on Your Post-Launch Data{' '}
                  <span className="text-[#00CE44]">Before It Goes Cold</span>
                </h2>

                <p className="text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
                  Our studio identifies the problems and fixes the numbers first. Connect with the team today and put the right expertise behind your next iteration cycle.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                  >
                    Talk to a Post-Launch Analytics Specialist
                  </a>
                </div>
              </div>

              {/* Right Mobile Mockup Image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end">
                <img
                  src="/assets/post-launch-analytics/cta-mobile.png"
                  alt="Post-Launch Consultation"
                  className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto object-contain block select-none -mb-8 sm:-mb-12 lg:-mb-16"
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
