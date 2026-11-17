export default function CrossPlatformWhyChooseUs() {
  const pillars = [
    {
      title: 'One Engineering Team. Both Platforms.',
      desc: 'Your iOS and Android apps stay under one development team from the first sprint. Our Flutter and React Native developers work across the shared codebase, bringing native specialists into the build when platform-specific functionality requires them.',
    },
    {
      title: 'The Right Framework for the Product',
      desc: 'Flutter, React Native, and Kotlin Multiplatform solve different engineering problems. We assess your application\'s native dependencies and existing technology before recommending a framework, so the architecture fits the product beyond its first release.',
    },
    {
      title: 'Working Software at Every Milestone',
      desc: 'A project update is no substitute for a working application. Each agreed milestone gives you functionality to review on the target platforms, with feedback reaching the engineering team before the next development stage.',
    },
    {
      title: 'Performance Proven on Actual Devices',
      desc: 'Your customers won\'t judge the app by its code reuse. They\'ll judge how it responds on their devices. We test critical workflows across supported iOS and Android hardware and address performance issues before release.',
    },
    {
      title: 'Your Code. Your Product.',
      desc: 'Future development shouldn\'t depend on the team that wrote the first version. Documented architecture gives your developers a clear understanding of the system, while the project agreement defines source-code ownership and transfer.',
    },
    {
      title: 'Built for the Next OS Release',
      desc: 'Apple and Google don\'t follow the same release schedule. Our cross-platform maintenance support accounts for framework changes and platform compatibility, helping your application remain functional as operating systems evolve.',
    },
  ]

  return (
    <>
      {/* 1. Why Choose Us 6 Cards Section */}
      <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
              What Sets Inceptives Digital&apos;s{' '}
              <span className="text-[#00CE44]">Cross-Platform Mobile App Developers</span> Apart
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed font-normal text-center">
              Building for iOS and Android takes more than sharing code. Inceptives Digital brings 8+ years of mobile development experience to projects where platform consistency matters. Our cross-platform app developers take responsibility for the shared architecture and the native integrations each product needs, keeping both releases aligned with your business goals.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 sm:p-8 rounded-[20px] bg-[#1a1b20] border border-white/5 flex flex-col justify-start text-left"
              >
                <div className="mb-4 text-[#00CE44] flex items-center">
                  <span className="font-mono text-xl font-bold">&lt;/&gt;</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Premium CTA Banner: Reach the Best Cross-Platform Developers Today */}
      <section className="py-12 sm:py-16 bg-[#000000] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div
            className="rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-14 xl:p-16 relative overflow-hidden border border-[#00CE44]/25"
            style={{
              background:
                'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.22) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
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
                <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
                  READY TO START?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
                  Reach the Best Cross-Platform Developers Today.
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-8 max-w-2xl">
                  One conversation is all it takes to move from a product idea to a validated cross-platform strategy.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                  >
                    Talk to a Cross-Platform Development Team
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/react-native/cta-mobile.png"
                  alt="Cross-Platform Development Team"
                  className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] xl:max-w-[430px] h-auto object-contain block select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
