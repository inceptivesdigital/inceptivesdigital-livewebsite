export default function KmpWhyChooseUs() {
  const pillars = [
    {
      title: 'Precision From the First Decision',
      desc: 'Most KMP projects fail at the boundary decision made before any code is written. That decision gets the depth it demands here because a wrong call costs far more to fix at month six than to get right on day one.',
    },
    {
      title: 'Production-Proven Kotlin Expertise',
      desc: 'Ktor, SQLDelight, Koin, and Kotlin Coroutines are not stack names on a slide. These tools have already been stress-tested in production, surfacing the failure points before they reach your build, which is what keeps a KMP project predictable from the first sprint.',
    },
    {
      title: 'Uncompromised iOS Depth',
      desc: 'The interop layer, Kotlin/Swift type mapping, coroutine bridging, and framework configuration carry the real weight of any KMP iOS integration. That layer is engineered with the same precision as the shared Kotlin module, keeping the iOS codebase fully idiomatic from the first build.',
    },
    {
      title: 'Migration Without Disruption',
      desc: 'A native codebase under active development cannot pause its roadmap for migration. The transition runs in validated phases, the highest-value shared layers first, so the product keeps shipping releases while the architecture evolves underneath it.',
    },
    {
      title: 'Architecture-First Recommendations',
      desc: "Every recommendation follows the product's actual constraints, not a predetermined answer where a different architecture serves the product better than KMP, that gets said before any commitment is made because the right fit matters more than the sale.",
    },
    {
      title: 'Multiplatform, Truly Full Stack',
      desc: 'A shared module built only for iOS and Android creates a ceiling the moment web or desktop enters the roadmap. Architecting for the full target surface from day one, Kotlin/Wasm and Compose Multiplatform included, means that the ceiling is never reached.',
    },
  ]

  return (
    <>
      {/* Green CTA Banner: Ready to See If KMP Fits Your Architecture? (Container 6712c03 -> 334e409) */}
      <section className="py-12 sm:py-14 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="rounded-[30px] bg-[#00CE44] px-6 sm:px-10 py-8 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-[#191919] tracking-tight leading-[1.2] mb-2">
                Ready to See If KMP Fits Your Architecture?
              </h2>
              <p className="text-[#191919]/90 text-sm sm:text-[16px] leading-relaxed font-medium max-w-2xl">
                Share your product constraints and get an honest read on whether KMP is the right call, not a sales pitch.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#1d1d1d] hover:bg-white text-[#00CE44] font-medium text-sm sm:text-base transition-colors border-0"
              >
                Talk to Our Engineering Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us 6 Cards Section (Container 0267afe) */}
      <section className="py-16 sm:py-24 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2]">
              Why Choose{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span> as Your Multiplatform App Development Company
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-[20px] bg-[#323232] text-left border-0 shadow-none flex flex-col justify-start"
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
        </div>
      </section>
    </>
  )
}
