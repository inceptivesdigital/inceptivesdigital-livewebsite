import { Link } from 'react-router-dom'

export default function KmpServicesGrid() {
  const services = [
    {
      title: 'KMP Architecture & Shared Module Design',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'The shared module boundary shapes scalability, testability, and the cost of every feature built after launch. That decision carries more long-term consequences than any other in a KMP product, and it is established with architectural precision before a line of product logic is written.',
    },
    {
      title: 'Shared Business Logic Development',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          Our Kotlin app development services bring networking and business logic into a shared module that works cleanly with your{' '}
          <Link
            to="/backend-api-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            backend API development
          </Link>
          . Engineers structure reusable components around your product&apos;s requirements while retaining essential platform-specific functionality. Every component is tested at the shared layer before it reaches a platform target, ensuring the bugs are caught before the UI is ever built on top of it.
        </>
      ),
    },
    {
      title: 'iOS Integration (Swift / SwiftUI / UIKit)',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          <Link
            to="/ios-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            iOS app development
          </Link>{' '}
          integration is the most technically demanding layer in any KMP product. At Inceptives Digital, the interop layer, Kotlin/Swift type mapping, coroutine-to-async bridging, and framework configuration are owned end to end so the iOS codebase stays fully idiomatic. The same principles that shape{' '}
          <Link
            to="/blog/guide-to-custom-ios-app-development-for-businesses"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            custom iOS app development for businesses
          </Link>{' '}
          still apply at the native UI layer.
        </>
      ),
    },
    {
      title: 'Android Integration (Jetpack Compose / View System)',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          The{' '}
          <Link
            to="/android-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            Android app development
          </Link>{' '}
          layer consumes the shared module directly with zero translation overhead. Jetpack Compose UIs bind cleanly to shared ViewModels and domain layers, keeping Android-specific code thin, purposeful, and architecturally aligned from the first commit to the last. Understanding{' '}
          <Link
            to="/blog/what-is-android-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            what Android app development involves
          </Link>{' '}
          remains important because KMP does not remove Android-specific UI and OS responsibilities.
        </>
      ),
    },
    {
      title: 'Compose Multiplatform (UI Sharing)',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          Extend your product across platforms with custom{' '}
          <Link
            to="/ui-ux-design"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            UI/UX design
          </Link>{' '}
          built using Compose Multiplatform. Our Kotlin engineers develop shared UI for Android, iOS, and desktop, reducing duplicate interface development. Web support remains in beta, so we assess its suitability against your product requirements.
        </>
      ),
    },
    {
      title: 'Kotlin Multiplatform Migration Services',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Have an existing Android and iOS codebase and want to consolidate toward a shared module incrementally? Plan and execute the migration without disrupting your current release cadence. We start with the highest-value shared layers and expand scope in phases.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Our Wide Range of{' '}
            <span className="text-[#00CE44]">Kotlin Multiplatform App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital provides end-to-end Kotlin Multiplatform app development services, from shared module architecture through platform-specific integration, deployment, and long-term engineering support.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={svc.icon}
                alt={svc.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
