export default function FlutterWhyChooseUs() {
  const pillars = [
    {
      title: 'One Team, Start to Finish',
      desc: 'Strategy, design, and engineering sit under one roof. The same team that scopes the product builds it, which means context is never lost between disciplines and delivery does not drift from the original intent.',
    },
    {
      title: 'Built for Real-World Performance',
      desc: (
        <>
          Applications are profiled against real-world conditions, not just development environments. Animations stay smooth, load times stay predictable, and most of the groundwork for solid{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-performance-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            mobile app performance optimization
          </a>{' '}
          happens in testing, well before it ever reaches production.
        </>
      ),
    },
    {
      title: 'Scaled Before You Need It',
      desc: 'Products are scoped for where the business is going, not just where it is today. Modular code and integration-ready architecture mean future features do not require rebuilding the foundation.',
    },
    {
      title: 'Built Around Your Requirements',
      desc: 'Every engagement starts from the actual business requirements. UI, feature sets, and integration decisions are made around what the product genuinely needs rather than what fits a standard delivery model.',
    },
    {
      title: 'Complete Transparency',
      desc: 'Regular checkpoints and documented decisions mean the product team always knows where things stand and why specific calls were made, without needing to chase updates between milestones.',
    },
    {
      title: 'Code That Ages Well',
      desc: 'Dart code documented, tested, and structured with the assumption that the product will need to change. Because every product does, and the cost of that change should not compound over time.',
    },
  ]

  return (
    <>
      {/* Collaborate CTA Banner */}
      <section className="py-12 sm:py-16 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div
            className="relative overflow-hidden rounded-[24px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14"
            style={{
              background:
                'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              <div className="lg:col-span-7 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                  <span className="text-[#00CE44]">Collaborate with Our Flutter</span>{' '}
                  Mobile App Development Company for Your Project
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  Talk to the team and get a clear, honest picture of what building your product on Flutter actually involves.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                  >
                    Submit Your Project Brief
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/mobile-app/cta-mobile.webp"
                  alt="Collaborate with Our Flutter Mobile App Development Company for Your Project"
                  className="w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[330px] xl:max-w-[360px] h-auto object-contain block select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us 6 Cards Section */}
      <section className="py-16 sm:py-24 bg-[#1d1d1d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2]">
              What Makes{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span>{' '}
              the Right Flutter Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
              >
                <img
                  src="/assets/mobile-app/icon01.png"
                  alt={p.title}
                  className="w-9 h-9 object-contain mb-4 select-none"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Centered CTA Button */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Talk to the Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
