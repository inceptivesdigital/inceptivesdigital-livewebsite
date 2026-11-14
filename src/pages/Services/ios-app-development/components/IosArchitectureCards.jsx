export default function IosArchitectureCards() {
  const cards = [
    {
      num: '01',
      icon: '/assets/ios-app/number-one.png',
      title: 'Native iOS Architecture',
      desc: (
        <>
          SwiftUI and UIKit, the core{' '}
          <a
            href="https://inceptivesdigital.com/blog/ios-app-development-frameworks"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            iOS app development frameworks
          </a>
          , handle native interfaces, while MVVM separates application logic from the presentation layer.
        </>
      ),
    },
    {
      num: '02',
      icon: '/assets/ios-app/number-two.png',
      title: 'Apple Device Integration',
      desc: 'Our iPhone app developers integrate Face ID through LocalAuthentication and manage background operations with BGTaskScheduler.',
    },
    {
      num: '03',
      icon: '/assets/ios-app/number-three.png',
      title: 'Backend Connectivity',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/backend-api-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Backend API development
          </a>{' '}
          pairs with URLSession for secure API communication. For offline iPhone applications, SwiftData or Core Data manages local persistence.
        </>
      ),
    },
    {
      num: '04',
      icon: '/assets/ios-app/number-four.png',
      title: 'Performance Optimization',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-performance-optimization"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Mobile app performance optimization
          </a>{' '}
          starts with Xcode Instruments, which identifies memory bottlenecks, while Swift Concurrency helps manage asynchronous operations in complex iOS applications.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            How We Architect{' '}
            <span className="text-[#00CE44]">Native iPhone and iOS Applications</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every iPhone app has different technical demands. Inceptives Digital approaches custom iOS application development with modular architecture that supports native Apple functionality and future product updates.
          </p>
        </div>

        {/* 4 Numbered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="p-7 rounded-[16px] bg-[#242424] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <div className="mb-4 flex items-center justify-start">
                <img
                  src={c.icon}
                  alt={c.num}
                  className="h-10 w-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {c.title}
              </h3>

              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
