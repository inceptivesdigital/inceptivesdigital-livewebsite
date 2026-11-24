import { Link } from 'react-router-dom'

export default function KmpWhyChooseUs() {
  const pillars = [
    {
      title: 'Experienced KMP Architecture Specialists',
      desc: 'Senior engineers take responsibility for critical architecture decisions early in your engagement. Their experience helps limit expensive rework as your application expands across platforms.',
    },
    {
      title: 'Skilled Kotlin Multiplatform Developers',
      desc: 'Our Kotlin development services cover shared application architecture and native platform integration. Engineers work with technologies such as Ktor, SQLDelight, and Kotlin Coroutines to address the requirements of each product.',
    },
    {
      title: 'Expertise in Native iOS Integration',
      desc: 'Experienced iOS engineers work alongside Kotlin developers throughout implementation, giving your project dedicated expertise on both sides of the integration. This coordinated approach helps address platform compatibility issues before they affect delivery.',
    },
    {
      title: 'KMP Migration With Minimal Disruption',
      desc: 'A native codebase under active development cannot pause its roadmap for migration. The transition runs in validated phases, the highest-value shared layers first, so the product keeps shipping releases while the architecture evolves underneath it.',
    },
    {
      title: 'Architecture-First Recommendations',
      desc: (
        <>
          Our engineers evaluate your existing architecture before recommending Kotlin Multiplatform. If another{' '}
          <Link
            to="/blog/cross-platform-frameworks-for-mobile-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            cross-platform framework
          </Link>{' '}
          better supports your requirements, we explain the trade-offs before you commit to development.
        </>
      ),
    },
    {
      title: 'Kotlin Multiplatform Web & Desktop',
      desc: (
        <>
          Planning to extend your product beyond Android and iOS? Our engineers assess Kotlin/Wasm and Compose Multiplatform when{' '}
          <Link
            to="/web-app-development-company"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            web app development
          </Link>{' '}
          or desktop development enters the roadmap, keeping expansion decisions aligned with actual product requirements.
        </>
      ),
    },
  ]

  const badges = [
    {
      title: 'Top Mobile App Development Company in the United States by Clutch',
      src: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      title: 'Top App Development Company by RightFirms',
      src: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
    {
      title: 'Top Mobile App Developers 2025',
      src: '/assets/ios-app/top-mobile-app-development-company-2025.png',
    },
    {
      title: 'Top Rated Mobile App Studio',
      src: '/assets/ios-app/top-rated-logo-1024x1024.png',
    },
  ]

  return (
    <>
      {/* Green CTA Banner: Bring Your KMP Project to Experienced Kotlin Developers */}
      <section className="py-12 sm:py-14 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="rounded-[30px] bg-[#00CE44] px-6 sm:px-10 py-8 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-[#191919] tracking-tight leading-[1.2] mb-2">
                Bring Your KMP Project to Experienced Kotlin Developers
              </h2>
              <p className="text-[#191919]/90 text-sm sm:text-[16px] leading-relaxed font-medium max-w-2xl">
                Work with our engineering team to establish the development scope around your existing architecture and target platforms.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#1d1d1d] hover:bg-white text-[#00CE44] font-medium text-sm sm:text-base transition-colors border-0"
              >
                Start Your KMP Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us 6 Cards Section */}
      <section className="py-16 sm:py-24 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              Why Choose{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span> as Your Kotlin Multiplatform Development Company?
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Building with Kotlin Multiplatform requires the right balance between shared code and native functionality. Inceptives Digital brings Kotlin development services and native engineering expertise to your project, helping control costs and simplify future development.
            </p>
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

      {/* Award-Winning Expertise in Mobile Product Engineering */}
      <section className="py-16 sm:py-24 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
                <span className="text-[#00CE44]">Award-Winning Expertise</span> in Mobile Product Engineering
              </h2>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                Inceptives Digital has earned recognition from{' '}
                <Link
                  to="/press-release/clutch-top-app-development-company-plano-2026"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
                >
                  Clutch
                </Link>{' '}
                and{' '}
                <Link
                  to="/press-release/rightfirms-top-mobile-app-development-company-2026"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
                >
                  RightFirms
                </Link>{' '}
                for its mobile app development work, reinforcing the experience our engineering teams bring to complex multiplatform projects.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 items-center justify-items-center">
                {badges.map((b) => (
                  <div
                    key={b.title}
                    className="h-24 sm:h-28 lg:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={b.src}
                      alt={b.title}
                      className="max-h-full max-w-[140px] w-auto h-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
