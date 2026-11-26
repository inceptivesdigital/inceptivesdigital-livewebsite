import { Link } from 'react-router-dom'
export default function CrossPlatformNativeVsCross() {
  const crossPlatformPoints = [
    'You want to launch on iOS and Android together.',
    'Both platforms share most application features.',
    'Your product relies mainly on standard mobile capabilities.',
    'A shared codebase fits your long-term maintenance plans.',
    'You want to reduce duplicated engineering work.',
  ]

  const nativePoints = [
    'Your app relies on device hardware.',
    'High performance is a core requirement.',
    'You need Native operating-system APIs.',
    'iOS and Android require substantially different experiences.',
    'Platform-specific capabilities drive key features.',
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0e0f12] text-white relative overflow-hidden border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Intro Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
            TECHNICAL DIRECTION & ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Experienced Cross-Platform Developers for{' '}
            <span className="text-[#00CE44]">Complex Mobile Products</span>
          </h2>
          <p className="text-white/85 text-[16px] leading-relaxed font-normal">
            A shared codebase still has to account for how iOS and Android behave on real devices. Inceptives Digital brings 8+ years of mobile engineering experience to custom cross-platform app development, with Flutter and React Native expertise across consumer and business applications. Native integrations enter the architecture where the product requires them, keeping both versions connected to the same development scope.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="bg-[#18191e] rounded-[24px] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00CE44]/15 text-[#00CE44] text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
              <Link
                to="/blog/native-vs-hybrid-vs-cross-platform-app-development"
                className="underline decoration-[#00CE44] decoration-2 underline-offset-4 hover:text-[#00CE44] transition-colors"
>
                Native vs. Cross-Platform App Development
              </Link>
              : What Should You Choose?
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
              Cross-platform development works well when iOS and Android share most of the product&apos;s functionality. Native development becomes more relevant when it involves deeper platform integration, hardware access, or OS-level performance.
            </p>
          </div>

          {/* 2 Column Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Column 1: Choose Cross-Platform When */}
            <div className="p-7 sm:p-8 rounded-[18px] bg-[#22242b] border border-white/5 flex flex-col justify-start">
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Choose Cross-Platform When:
                </h4>
              </div>
              <ul className="space-y-3.5">
                {crossPlatformPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Choose Native When */}
            <div className="p-7 sm:p-8 rounded-[18px] bg-[#22242b] border border-white/5 flex flex-col justify-start">
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Choose Native When:
                </h4>
              </div>
              <ul className="space-y-3.5">
                {nativePoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
