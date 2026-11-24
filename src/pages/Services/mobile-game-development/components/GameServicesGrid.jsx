const SERVICES = [
  {
    title: '2D Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img1.webp',
    desc: 'Our 2D game development services combine creativity and technical expertise we gained from our 08+ years of experience. We make use of modern game engines and follow best practices to develop responsive games that are engaging and perform exceptionally on all devices. Our experienced 2D game developers are used to building games that offer high-performance, smooth graphics rendering.',
  },
  {
    title: '3D Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img2.webp',
    desc: 'We expertly bring your wildest dreams into games with stunning graphics, realistic environments, and smooth gameplay mechanics through powerful game engines like Unity and Unreal Engine. Our 3D game development team builds games that are refined for raw performance, expandability, and compatibility across platforms. We create interactive landscapes and simulations to boost the playing experience and engagement.',
  },
  {
    title: 'Android Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img3.webp',
    desc: 'As a leading Android game development company, we leverage modern tools like Unity, Kotlin, and Android Studio to build game applications that run smoothly across all devices and screen sizes. Our mobile game app development offers small 2D games as well as graphics-heavy 3D and AR/VR experiences. We make sure the game is scalable, performs up to the mark, and fosters player engagement.',
  },
  {
    title: 'iOS Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img4.webp',
    desc: "Inceptives Digital uses the latest frameworks (Swift, Unity, Xcode) to create engaging and high-performance iOS games. Our iOS game development services range from simple 2D games to sophisticated 3D and AR/VR games that provide outstanding overall performance on both iPhones and iPads. Every game we develop will be scalable, beautiful, and tuned for the best engagement in Apple's ecosystem.",
  },
  {
    title: 'Browser Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img5.webp',
    desc: 'Our browser game development offers 2D games to complex 3D games that can be played on all devices without downloading. We use powerful web technologies like HTML5, WebGL, and Phaser to develop those games and provide post-launch support to ensure their optimal performance on all devices.',
  },
  {
    title: 'AR/VR Game Development',
    icon: '/assets/mobile-game/mobile-game-sec3-img6.webp',
    desc: 'AR/VR game development is revolutionizing the gaming industry, and we are making it happen. We utilize game engines like Unity, Unreal Engine, ARKit, and ARCore to create interactive and engaging experiences, while keeping in mind the scalability, security, and performance of the game to ensure smooth performance across all types of devices.',
  },
]

const STATS = [
  {
    value: '150+',
    label: 'Developers',
    icon: '/assets/mobile-app/active-developer.svg',
  },
  {
    value: '08+',
    label: 'Years Experience',
    icon: '/assets/mobile-app/apps-launch.svg',
  },
  {
    value: '70+',
    label: 'Clients Entertained',
    icon: '/assets/mobile-app/app-downloads.svg',
  },
  {
    value: '5.0',
    label: 'Clutch Rating',
    icon: '/assets/mobile-app/rating.svg',
  },
]

export default function GameServicesGrid() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-[#0b0c0f] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Diverse Mobile Game Development{' '}
              <span className="text-[#00CE44]">Services We Offer</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              We offer mobile game development services that are designed to support you at every stage of the process. We start with game prototyping while closely collaborating with you to make sure it aligns with your vision, then we advance to the full-scale development phase. From immersive AR/VR environments to 3D high-graphic games and simple 2D games for both iOS and Android, our team makes sure the game is secure, scalable, and most importantly, it performs up to the mark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="group p-7 sm:p-8 rounded-[20px] bg-[#16181d] border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left h-full"
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-start shrink-0">
                  <img
                    src={svc.icon}
                    alt={svc.title}
                    className="w-12 h-12 object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/85 text-[14.5px] sm:text-[15px] leading-relaxed font-normal">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Column Stats Bar (Same exact style as other Service pages) */}
      <section className="py-14 sm:py-16 bg-[#18191d] border-y border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 mb-3 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                  {s.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
