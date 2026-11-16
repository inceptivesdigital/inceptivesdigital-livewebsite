import { Link } from 'react-router-dom'

export default function KmpArchitectureChoice() {
  const kmpPoints = [
    'Your team has stronger Dart or JavaScript proficiency than Kotlin',
    'A product carrying significant business logic, financial calculations, offline sync, health data processing, or custom algorithms must behave identically across platforms',
    'An existing native Android codebase needs to extend to iOS without a full rewrite',
    'Platform-specific UI, OS integrations, and accessibility compliance are non-negotiable',
    'The product targets iOS, Android, web, and desktop from a single shared module',
  ]

  const flutterRnPoints = [
    'Speed to market and UI consistency matter more than platform-native behavior',
    'Budget constraints require sharing UI code as well as logic',
    <>
      Teams evaluating{' '}
      <a
        href="https://inceptivesdigital.com/blog/why-choose-flutter"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-[#00CE44] hover:text-white transition-colors"
      >
        why choose Flutter
      </a>{' '}
      against KMP should weigh UI sharing against native platform control.
    </>,
  ]

  return (
    <>
      {/* Part A: Why Are Experienced Product Teams Moving to KMP? (Container 9596463) */}
      <section className="py-14 sm:py-20 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column Heading (40px) */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Why Are{' '}
                <span className="text-[#00CE44]">Experienced Product Teams</span> Moving to KMP?
              </h2>
            </div>

            {/* Right Column Description (16px) */}
            <div className="lg:col-span-7 text-left">
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                KMP reached stable release in November 2023, backed by JetBrains and Google. The architecture it offers has no credible alternative for teams that need shared business logic without surrendering native UI control on any platform. With Netflix and VMware among the engineering teams that have committed to it at production scale, adoption has increased threefold, from 7% to over 20%. Inceptives Digital applies the same level of architectural accuracy to each KMP project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part B: Is Kotlin Multiplatform the Right Architecture for Your Product? (Container 6d4a1d3 with kotline-bg-scaled.webp cover) */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/assets/kmp-app/kotline-bg-scaled.webp')",
        }}
      >
        {/* 80% Dark Overlay matching Elementor --overlay-opacity: 0.8 */}
        <div className="absolute inset-0 bg-[#191919]/80 pointer-events-none" />

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="flex flex-col items-start text-left max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Is Kotlin Multiplatform the Right Architecture for Your Product?
            </h2>

            <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6">
              The choice between KMP and{' '}
              <a
                href="https://inceptivesdigital.com/blog/native-vs-hybrid-vs-cross-platform-app-development"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                native vs hybrid vs cross-platform app development
              </a>{' '}
              depends on how much logic, UI, and platform behavior should be shared.
            </p>

            {/* Subheading 1 */}
            <h3 className="text-xl sm:text-[25px] font-bold text-white leading-snug mt-2 mb-4">
              KMP is the stronger choice when:
            </h3>

            {/* List 1 with Green Left Border */}
            <ul className="pl-6 sm:pl-[30px] border-l-2 border-[#00CE44]/70 space-y-2.5 text-white/95 text-sm sm:text-[16px] leading-relaxed mb-6">
              {kmpPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Subheading 2 */}
            <h3 className="text-xl sm:text-[25px] font-bold text-white leading-snug mt-2 mb-4">
              <Link
                to="/flutter-app-development"
                className="underline text-white hover:text-[#00CE44] transition-colors"
              >
                Flutter App Development
              </Link>{' '}
              or{' '}
              <Link
                to="/react-native-app-development"
                className="underline text-white hover:text-[#00CE44] transition-colors"
              >
                React Native App Development
              </Link>{' '}
              may serve you better when:
            </h3>

            {/* List 2 with Green Left Border */}
            <ul className="pl-6 sm:pl-[30px] border-l-2 border-[#00CE44]/70 space-y-2.5 text-white/95 text-sm sm:text-[16px] leading-relaxed mb-6">
              {flutterRnPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7">
              If you are not certain which{' '}
              <a
                href="https://inceptivesdigital.com/cross-platform-app-development"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00CE44] hover:text-white transition-colors"
              >
                cross-platform app development
              </a>{' '}
              architecture fits your product constraints, we will tell you directly, including when we would recommend a different path.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base whitespace-nowrap transition-colors border-0"
            >
              Discuss Your Architecture
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
