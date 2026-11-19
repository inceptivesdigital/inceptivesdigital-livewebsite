export default function TorontoSmartFeatures() {
  const features = [
    {
      title: 'AI-Powered Experiences',
      icon: '/assets/mobile-app/ai-experiences.svg',
    },
    {
      title: 'Secure Authentication',
      icon: '/assets/mobile-app/Secure-authentication.svg',
    },
    {
      title: 'Real-Time Sync',
      icon: '/assets/mobile-app/Real-Time-sync.svg',
    },
    {
      title: 'Payments & Subscriptions',
      icon: '/assets/mobile-app/Payment-And-Subscribtion.svg',
    },
    {
      title: 'Maps & Location Services',
      icon: '/assets/mobile-app/Maps-And-location.svg',
    },
    {
      title: 'Push Notifications',
      icon: '/assets/mobile-app/Pus-notification.svg',
    },
    {
      title: 'Analytics & Insights',
      icon: '/assets/mobile-app/monitor.svg',
    },
    {
      title: 'Offline Access',
      icon: '/assets/mobile-app/Offline-Access.svg',
    },
    {
      title: 'Admin Dashboard',
      icon: '/assets/mobile-app/admin.svg',
    },
    {
      title: 'Third-Party Integrations',
      icon: '/assets/mobile-app/Third-Part-Integration-1.svg',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      {/* Background Image from WordPress: Cover with 0.7 Opacity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/locations/toronto/smartbanner-feature.jpg')`,
        }}
      />
      {/* Dark gradient overlay for text readability & theme consistency */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608]/95 via-[#050608]/85 to-[#050608]/90 pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Practical Features That Solve{' '}
              <span className="text-[#00CE44]">Toronto User Problems</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Our Toronto mobile app developers build features around how customers and employees use an application. Secure payments, real-time updates, offline access, and connected workflows support everyday tasks without adding unnecessary complexity.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Get A Call Now!
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/5 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          </div>

          {/* Right Column: 10 Feature Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-[16px] bg-[#14151a]/90 backdrop-blur-sm border-0 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group shadow-none"
                >
                  <div className="w-11 h-11 mb-3 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain p-0 m-0 border-0 bg-transparent select-none transition-transform group-hover:scale-110 duration-200"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
