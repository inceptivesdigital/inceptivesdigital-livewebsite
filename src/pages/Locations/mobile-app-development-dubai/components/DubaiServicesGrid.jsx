import { Link } from 'react-router-dom'

export default function DubaiServicesGrid() {
  const services = [
    {
      title: 'iOS App Development',
      link: '/ios-app-development',
      screen: '/assets/mobile-app/Android-App.png',
      desc: (
        <>
          Native iOS applications demand close attention to performance, security, and Apple&apos;s evolving ecosystem. Swift and SwiftUI power{' '}
          <Link to="/ios-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            iOS app development
          </Link>{' '}
          for Dubai businesses, supporting responsive iPhone and iPad experiences, device-specific integrations, and seamless compatibility with Apple’s latest platform capabilities.
        </>
      ),
    },
    {
      title: 'Android App Development',
      link: '/android-app-development',
      screen: '/assets/mobile-app/mobile-screen01.png',
      desc: (
        <>
          Device diversity makes consistent performance a priority across the Android ecosystem. Kotlin and Jetpack Compose provide the technical foundation for{' '}
          <Link to="/android-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Android app development
          </Link>{' '}
          in Dubai, supporting device compatibility, native functionality, and applications designed for sustained use across different operating environments.
        </>
      ),
    },
    {
      title: 'React Native Development',
      link: '/react-native-app-development',
      screen: '/assets/mobile-app/react.png',
      desc: (
        <>
          When product timelines demand faster iteration across platforms,{' '}
          <Link to="/react-native-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            React Native app development
          </Link>{' '}
          provides a practical balance between delivery speed and application quality. A shared codebase reduces unnecessary engineering duplication while maintaining the performance required for continuous product advancement.
        </>
      ),
    },
    {
      title: 'Flutter App Development',
      link: '/flutter-app-development',
      screen: '/assets/mobile-app/flutter.png',
      desc: (
        <>
          Maintaining a consistent experience across platforms requires more than replicating screens.{' '}
          <Link to="/flutter-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Flutter app development
          </Link>{' '}
          enables teams to build unified interfaces with smooth performance, allowing products to preserve visual quality, accelerate iteration, and evolve efficiently across iOS and Android.
        </>
      ),
    },
    {
      title: 'Cross-Platform App Development',
      link: '/cross-platform-app-development',
      screen: '/assets/mobile-app/mobilere.png',
      desc: (
        <>
          The right platform strategy depends on product goals, release timelines, and future maintenance requirements.{' '}
          <Link to="/cross-platform-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Cross platform app development
          </Link>{' '}
          creates a shared foundation for iOS and Android applications while helping teams improve delivery efficiency without sacrificing scalability or product quality.
        </>
      ),
    },
    {
      title: 'Kotlin Multiplatform Development',
      link: '/kotlin-multiplatform-app-development',
      screen: '/assets/mobile-app/Kotlin-Multiplatform-Development.png',
      desc: (
        <>
          Some products require shared engineering efficiency while preserving fully native experiences.{' '}
          <Link to="/kotlin-multiplatform-app-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Kotlin Multiplatform app development
          </Link>{' '}
          allows teams to share core business logic across platforms while maintaining platform-specific interfaces, creating a flexible architecture built for long-term evolution.
        </>
      ),
    },
    {
      title: 'Web Application Development',
      link: '/web-app-development-company',
      screen: '/assets/mobile-app/rowtweo.png',
      desc: (
        <>
          Mobile products often require connected web experiences for customers, teams, and business operations. Web applications from a{' '}
          <Link to="/web-app-development-company" className="text-[#00CE44] font-medium underline underline-offset-4">
            web app development company
          </Link>
          , built alongside shared APIs and scalable architecture, keep digital ecosystems aligned while enabling consistent functionality across every customer touchpoint.
        </>
      ),
    },
    {
      title: 'Backend and Infrastructure Development',
      link: '/backend-api-development',
      screen: '/assets/mobile-app/Post-Launch-Analytics-Iteration-1-1024x638.png',
      desc: (
        <>
          Enterprise applications often depend on existing payment, identity, and operational systems.{' '}
          <Link to="/backend-api-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            Backend api development
          </Link>{' '}
          in Dubai connects mobile products with authorised UAE PASS integrations, regional payment gateways, and business software where required. Secure infrastructure and{' '}
          <Link to="/system-integration-api-automation" className="text-[#00CE44] font-medium underline underline-offset-4">
            system integration api automation
          </Link>{' '}
          keep data exchange controlled and support future system expansion.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching Dubai Location */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
            Mobile App Development Services in{' '}
            <span className="text-[#00CE44]">Dubai</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal">
            Operating as a custom mobile app development company in Dubai, Inceptives Digital evaluates each engagement against a specific business problem. The services below span native builds through backend infrastructure, matched to whatever platform and compliance requirement the product actually has.
          </p>
        </div>

        {/* Services Cards with images matching mobile-app-development service page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="rounded-[18px] bg-[#1b1b1b] overflow-hidden flex flex-col justify-between border-0 shadow-none text-left group transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Top Image Box styled exactly like CustomMobileServices on mobile-app-development */}
              <div className="w-full h-52 sm:h-56 bg-[#151515] flex items-end justify-center pt-6 px-6 overflow-hidden">
                <img
                  src={item.screen}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain object-bottom select-none transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] mb-3 leading-snug">
                    <Link to={item.link} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-white/80 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-sm font-medium text-[#00CE44] hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
