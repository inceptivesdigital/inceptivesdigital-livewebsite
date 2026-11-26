import { Link } from 'react-router-dom'

export default function AsoWhyChooseUs() {
  const pillars = [
    {
      title: 'Proven Growth Framework',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'The ASO process is structured around three outcomes: visibility, conversion, and organic growth. Each phase builds on the last, so the results compound rather than plateau after the first optimization cycle.',
    },
    {
      title: 'Platform-Specific Expertise',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          The App Store and Google Play rank apps differently, surface them differently, and convert users differently, much like the platform-level decisions behind{' '}
          <Link
            to="/ios-app-development"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            iOS app development
          </Link>{' '}
          rarely transfer directly to Android. Each platform gets its own strategy rather than a single approach stretched across both.
        </>
      ),
    },
    {
      title: 'Dedicated ASO Specialists',
      icon: '/assets/ios-app/serivces3.svg',
      desc: 'Every engagement is handled by specialists who work exclusively in app store optimization. The depth of category knowledge and platform experience that produces measurable results comes from doing this work every day.',
    },
    {
      title: 'Category-Specific ASO Strategies',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Search behavior, conversion benchmarks, and ranking signals vary across every category. The studio builds app store optimization strategies around how users in your specific category discover, evaluate, and decide to install apps.',
    },
    {
      title: 'Long-Term Growth Focus',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'A strong ASO position takes time to build and compounds the longer it holds. The studio structures every engagement around sustainable organic growth rather than short-term ranking gains that fade when the work stops.',
    },
    {
      title: 'Transparent Reporting',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Rankings, install rates, conversion performance, and keyword movement are reported clearly every cycle. Every metric ties back to a defined KPI, so the team always knows what the numbers mean.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#161616] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Why Growth-Focused Brands Choose{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Proven frameworks, platform-specific depth, and transparent reporting that compounds organic reach over time.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#222222] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={p.icon}
                alt={p.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mid Banner CTA */}
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-[28px] sm:rounded-[36px] bg-[#00CE44] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 text-left">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-black tracking-tight leading-tight mb-2">
              Your App&apos;s Store Performance Has Room to Move
            </h3>
            <p className="text-black/90 text-sm sm:text-base font-normal leading-relaxed">
              Schedule a session with the team. An honest look at where your app page stands and what it would take to move the numbers.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-black hover:bg-[#181818] text-white font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap transition-all duration-150 border-0 self-start lg:self-auto"
          >
            Talk to an ASO Specialist
          </a>
        </div>
      </div>
    </section>
  )
}
