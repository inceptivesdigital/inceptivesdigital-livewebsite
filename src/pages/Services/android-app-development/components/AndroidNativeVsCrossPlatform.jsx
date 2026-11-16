import { Link } from 'react-router-dom'

export default function AndroidNativeVsCrossPlatform() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Should You Build{' '}
            <span className="text-[#00CE44]">Native Kotlin or Go Cross-Platform?</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Native Kotlin fits heavy hardware integration and top-tier performance.{' '}
            <a
              href="https://inceptivesdigital.com/cross-platform-app-development"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              Cross-platform app development
            </a>{' '}
            fits a shared Android and iOS launch. Here&apos;s the honest breakdown.
          </p>
        </div>

        {/* 2 Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
          
          {/* Card 1: Native Kotlin + Android SDK */}
          <div className="p-8 sm:p-10 rounded-[20px] bg-[#1e1e1e] border-t-4 border-[#00CE44] text-left flex flex-col justify-between">
            <div>
              <span className="inline-block px-3.5 py-1 bg-[#00CE44]/15 text-[#00CE44] text-xs font-bold uppercase tracking-wider mb-4">
                Best for performance-critical builds
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Native Kotlin + Android SDK
              </h3>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Build native Android apps with direct access to platform APIs, specialized hardware, and Android-specific features through Kotlin and Jetpack Compose.
              </p>

              <div className="text-xs sm:text-sm font-bold text-[#00CE44] uppercase tracking-wider mb-3.5">
                CHOOSE NATIVE ANDROID WHEN:
              </div>

              <ul className="space-y-2.5 text-white/90 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>
                    <a
                      href="https://inceptivesdigital.com/ai-app-development-services"
                      className="underline text-[#00CE44] hover:text-white transition-colors"
                    >
                      On-device AI
                    </a>{' '}
                    requires ML Kit or Gemini Nano
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Heavy graphics, ARCore, or real-time camera processing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Wear OS, Android TV, Android Auto, Automotive OS, or foldables in scope</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Performance-critical features need native optimization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Long-term Android-only product roadmap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cross-Platform (Flutter / React Native / KMP) */}
          <div className="p-8 sm:p-10 rounded-[20px] bg-[#1e1e1e] border-t-4 border-[#00CE44] text-left flex flex-col justify-between">
            <div>
              <span className="inline-block px-3.5 py-1 bg-[#00CE44]/15 text-[#00CE44] text-xs font-bold uppercase tracking-wider mb-4">
                Best for shared iOS + Android launches
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Cross-Platform (Flutter / React Native / KMP)
              </h3>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Launch on Android and{' '}
                <Link
                  to="/ios-app-development"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  iOS
                </Link>{' '}
                with shared application code.{' '}
                <Link
                  to="/flutter-app-development"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  Flutter
                </Link>{' '}
                and{' '}
                <Link
                  to="/react-native-app-development"
                  className="underline text-[#00CE44] hover:text-white transition-colors"
                >
                  React Native
                </Link>{' '}
                support shared interfaces, while KMP can reuse business logic across platforms.
              </p>

              <div className="text-xs sm:text-sm font-bold text-[#00CE44] uppercase tracking-wider mb-3.5">
                CHOOSE CROSS-PLATFORM WHEN:
              </div>

              <ul className="space-y-2.5 text-white/90 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Android + iOS launch with a shared development budget</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Mostly forms, dashboards, bookings, or content</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>Faster development through reusable code</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>
                    <Link
                      to="/kotlin-multiplatform-app-development"
                      className="underline text-[#00CE44] hover:text-white transition-colors"
                    >
                      Kotlin Multiplatform
                    </Link>{' '}
                    (KMP) for shared Kotlin logic with flexible UI choices
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00CE44] font-bold mt-0.5">✓</span>
                  <span>MVP validation across both mobile markets</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Stack Recommendation Bar */}
        <div className="p-7 sm:p-9 rounded-[20px] bg-[#1e1e1e] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Still Not Sure Which Development Approach Fits Your Android Project?
            </h3>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              Share your requirements with an Android engineering lead and get a stack recommendation suited to your features and budget on a short call.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base whitespace-nowrap transition-colors border-0 shrink-0"
          >
            Find My Best-Fit Stack
          </a>
        </div>
      </div>
    </section>
  )
}
