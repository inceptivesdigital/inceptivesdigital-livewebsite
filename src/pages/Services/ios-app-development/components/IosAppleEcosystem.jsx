import { Link } from 'react-router-dom'

export default function IosAppleEcosystem() {
  const devices = [
    {
      title: 'iPhone',
      icon: '/assets/ios-app/Iphone-Phone.png',
      desc: 'Native iPhone apps with Dynamic Island, Live Activities, Face ID authentication, and advanced camera integration.',
    },
    {
      title: 'iPad',
      icon: '/assets/ios-app/Ipad.png',
      desc: 'Business-focused iPad applications supporting multitasking and Apple Pencil workflows through PencilKit.',
    },
    {
      title: 'Apple Watch',
      icon: '/assets/ios-app/Apple-Watch.png',
      desc: 'Fitness and companion apps with HealthKit integration, workout tracking, and watchOS complications.',
    },
    {
      title: 'Apple TV',
      icon: '/assets/ios-app/Apple-Tv.png',
      desc: 'Streaming and entertainment applications with AVKit playback, Top Shelf content, and Siri Remote navigation.',
    },
    {
      title: 'Vision Pro',
      icon: '/assets/ios-app/Vision-Pro.png',
      desc: 'Immersive business applications using RealityKit, spatial interfaces, and ARKit hand tracking.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            One Shared Codebase.{' '}
            <span className="text-[#00CE44]">Built for Every Apple Device Your Customers Use</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Our iPhone and iPad app development services sit within our wider{' '}
            <Link
              to="/mobile-app-development"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              mobile app development
            </Link>{' '}
            practice and extend across Apple’s ecosystem through shared Swift architecture and device-specific functionality.
          </p>
        </div>

        {/* 5 Apple Device Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {devices.map((dev) => (
            <div
              key={dev.title}
              className="p-6 sm:p-7 rounded-[16px] bg-[#1e1e1e] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={dev.icon}
                alt={dev.title}
                className="w-9 h-9 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {dev.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {dev.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
