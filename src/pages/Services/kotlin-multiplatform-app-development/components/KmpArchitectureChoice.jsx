import { Link } from 'react-router-dom'

export default function KmpArchitectureChoice() {
  const kmpPoints = [
    'Your product needs consistent business logic across Android and iOS.',
    'You want to extend an existing Android app to iOS without a full rewrite.',
    'Native interfaces, OS integrations, and accessibility requirements are priorities.',
    'Your application handles financial calculations, health data, or offline synchronization.',
    'You plan to share Kotlin code across mobile, web, or desktop.',
  ]

  const flutterRnPoints = [
    'Your development team already specializes in Dart or JavaScript.',
    'You need consistent interfaces across Android and iOS.',
    'Your budget favors sharing UI code alongside business logic.',
    'You need faster delivery of UI-heavy applications.',
  ]

  return (
    <>
      {/* Part A: Why Are Experienced Product Teams Moving to KMP? */}
      <section className="py-14 sm:py-20 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column Heading */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Why Are{' '}
                <span className="text-[#00CE44]">Experienced Product Teams</span> Moving to KMP?
              </h2>
            </div>

            {/* Right Column Description */}
            <div className="lg:col-span-7 text-left">
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                Kotlin Multiplatform is a{' '}
                <Link
                  to="/cross-platform-app-development"
                  className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
                >
                  cross-platform app development
                </Link>{' '}
                approach that lets businesses share application logic while retaining native Android and iOS interfaces, reducing duplicated development effort. This architectural advantage has attracted established engineering teams, including Netflix and VMware, which use KMP in production. According to JetBrains, KMP adoption among cross-platform developers rose from 7% in 2024 to 18% in 2025, reflecting its growing use in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part B: Is Kotlin Multiplatform the Right Architecture for Your Product? */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/assets/kmp-app/kotline-bg-scaled.webp')",
        }}
      >
        {/* 80% Dark Overlay */}
        <div className="absolute inset-0 bg-[#191919]/80 pointer-events-none" />

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="flex flex-col items-start text-left max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Is Kotlin Multiplatform the Right Architecture for Your Product?
            </h2>

            <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6">
              The choice between KMP and{' '}
              <Link
                to="/blog/native-vs-hybrid-vs-cross-platform-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                native vs hybrid vs cross-platform app development
              </Link>{' '}
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
                className="underline underline-offset-4 text-white hover:text-[#00CE44] transition-colors"
              >
                Flutter App Development
              </Link>{' '}
              or{' '}
              <Link
                to="/react-native-app-development"
                className="underline underline-offset-4 text-white hover:text-[#00CE44] transition-colors"
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
              Still unsure whether Kotlin Multiplatform development fits your product? Our engineers assess your platform requirements and recommend the architecture that best supports them.
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
