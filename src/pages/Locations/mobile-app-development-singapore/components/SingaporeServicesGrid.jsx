import { Link } from 'react-router-dom'

export default function SingaporeServicesGrid() {
  const services = [
    {
      title: 'iOS App Development',
      link: '/ios-app-development',
      img: '/assets/mobile-app/Android-App.png',
      desc: (
        <>
          Apple users expect precision across every interaction. Inceptives Digital builds native{' '}
          <Link to="/ios-app-development" className="text-[#00CE44] hover:underline font-medium">
            iOS app development
          </Link>{' '}
          applications for Singapore businesses using Swift and SwiftUI, with engineering decisions shaped by Apple&apos;s platform conventions, device capabilities, and future product requirements.
        </>
      ),
    },
    {
      title: 'Android App Development',
      link: '/android-app-development',
      img: '/assets/mobile-app/mobile-screen01.png',
      desc: (
        <>
          An Android product may reach customers through smartphones, tablets, and devices running different OS versions. Our{' '}
          <Link to="/android-app-development" className="text-[#00CE44] hover:underline font-medium">
            Android app development
          </Link>{' '}
          work for Singapore businesses accounts for these differences early, with Kotlin-based engineering focused on reliable functionality and maintainable code.
        </>
      ),
    },
    {
      title: 'React Native App Development',
      link: '/react-native-app-development',
      img: '/assets/mobile-app/react.png',
      desc: (
        <>
          React Native works well for products that need efficient multi-platform expansion without sacrificing user experience.{' '}
          <Link to="/react-native-app-development" className="text-[#00CE44] hover:underline font-medium">
            React Native app development
          </Link>{' '}
          engineering decisions around shared components and native capabilities help maintain application quality while keeping future iterations more manageable.
        </>
      ),
    },
    {
      title: 'Flutter App Development',
      link: '/flutter-app-development',
      img: '/assets/mobile-app/flutter.png',
      desc: (
        <>
          Flutter is particularly useful when a product&apos;s interface needs to behave consistently across iOS and Android.{' '}
          <Link to="/flutter-app-development" className="text-[#00CE44] hover:underline font-medium">
            Flutter app development
          </Link>{' '}
          rendering approach gives designers greater control over visual details, while a shared codebase keeps platform-specific differences from complicating routine updates.
        </>
      ),
    },
    {
      title: 'Cross-Platform App Development',
      link: '/cross-platform-app-development',
      img: '/assets/mobile-app/mobilere.png',
      desc: (
        <>
          Not every application benefits from the same cross-platform architecture.{' '}
          <Link to="/cross-platform-app-development" className="text-[#00CE44] hover:underline font-medium">
            Cross platform app development
          </Link>{' '}
          assesses performance demands, device integrations, release schedules, and maintenance requirements before recommending a framework. The decision follows what the product needs to accomplish.
        </>
      ),
    },
    {
      title: 'Backend and API Development',
      link: '/backend-api-development',
      img: '/assets/mobile-app/Kotlin-Multiplatform-Development.png',
      desc: (
        <>
          A mobile interface is only as reliable as the systems supporting it.{' '}
          <Link to="/backend-api-development" className="text-[#00CE44] hover:underline font-medium">
            Backend and API development
          </Link>{' '}
          and cloud infrastructure receive the same level of attention as the application layer to ensure products remain secure, scalable, and ready for future growth.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Core Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Custom Mobile App Development{' '}
            <span className="text-[#00CE44]">Services in Singapore</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Native and cross-platform development serve different product requirements. Platform capabilities, device compatibility, existing integrations, and release priorities determine the engineering approach for each application.
          </p>
        </div>

        {/* 6 Real Cards: Flat Dark Boxes with Real App Screen Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-[16px] bg-[#14151a] border border-white/[0.06] overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-[#00CE44]/40"
            >
              {/* Top Real Image Box */}
              <div className="w-full h-52 sm:h-56 bg-[#0c0d10] flex items-end justify-center pt-6 px-6 overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="max-h-full max-w-full object-contain object-bottom select-none"
                  loading="lazy"
                />
              </div>

              {/* Bottom Text Area */}
              <div className="p-6 sm:p-7 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-white mb-3 leading-snug">
                    <Link to={svc.link} className="hover:text-[#00CE44] transition-colors">
                      {svc.title}
                    </Link>
                  </h3>
                  <div className="text-white/80 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {svc.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
