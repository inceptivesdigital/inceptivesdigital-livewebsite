export default function SmartCapabilities() {
  const row1 = [
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
  ]

  const row2 = [
    {
      title: 'Offline Access',
      icon: '/assets/mobile-app/Offline-Access.svg',
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
      title: 'Admin Dashboard',
      icon: '/assets/mobile-app/admin.svg',
    },
  ]

  const row3 = [
    {
      title: 'Third-Party Integrations',
      icon: '/assets/mobile-app/Third-Part-Integration-1.svg',
    },
    {
      title: 'Payments & Subscriptions',
      icon: '/assets/mobile-app/Payment-And-Subscribtion.svg',
    },
    {
      title: 'Maps & Location Services',
      icon: '/assets/mobile-app/Maps-And-location.svg',
    },
  ]

  const allCapabilities = [...row1, ...row2, ...row3]

  const renderBox = (cap, mobileGrid = false) => (
    <div
      key={cap.title}
      className={`${
        mobileGrid
          ? 'w-full min-h-[120px] sm:min-h-[130px]'
          : 'w-[130px] sm:w-[148px] h-[125px] sm:h-[138px]'
      } p-3.5 rounded-[16px] bg-[#111312]/90 border border-[#00CE44] flex flex-col items-center justify-center text-center shadow-none`}
    >
      <div className="w-8 h-8 mb-2 flex items-center justify-center shrink-0">
        <img
          src={cap.icon}
          alt={cap.title}
          className="w-full h-full object-contain select-none"
          loading="lazy"
        />
      </div>
      <h3 className="text-white text-[12px] sm:text-[13px] font-normal leading-snug">
        {cap.title}
      </h3>
    </div>
  )

  return (
    <section className="py-16 sm:py-24 bg-[#070908] relative overflow-hidden">
      {/* Angled App Screens Collage Background matching Screenshot 8 (media_1794571633423_efb6f922.jpg) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -inset-24 opacity-[0.14] flex items-center justify-center gap-8 -rotate-12 scale-110">
          <img src="/assets/mobile-app/dps-screen.png" alt="" className="w-72 h-auto object-cover rounded-2xl" />
          <img src="/assets/mobile-app/wordsmith-screen.png" alt="" className="w-72 h-auto object-cover rounded-2xl" />
          <img src="/assets/mobile-app/stateofart-screen.png" alt="" className="w-72 h-auto object-cover rounded-2xl" />
          <img src="/assets/mobile-app/feg-screen.png" alt="" className="w-72 h-auto object-cover rounded-2xl" />
        </div>
        {/* Dark Vignette + Left Emerald Glow Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 12% 50%, rgba(0, 206, 68, 0.14) 0%, transparent 45%), linear-gradient(90deg, rgba(5,7,6,0.92) 0%, rgba(8,10,9,0.82) 50%, rgba(5,7,6,0.9) 100%)',
          }}
        />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column (CTA H2 = 35px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              The Capabilities Inside{' '}
              <span className="text-[#00CE44]">
                Our Custom Mobile Apps
              </span>
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-xl">
              Great mobile apps aren&apos;t defined by how many features they have, but by how well those features solve real user problems. Our mobile app development services build the capabilities that improve engagement, retention, and long-term product success.
            </p>

            {/* Dual Sharp Rectangular Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-xs sm:text-sm transition-colors border-0"
              >
                Discuss Your App Features
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-transparent hover:bg-white/5 text-white font-medium text-xs sm:text-sm border border-white/60 transition-colors"
              >
                <span>Explore Our Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean 2-col Grid on Small Devices, Staggered 3 - 4 - 3 Grid on lg+ */}
          <div className="lg:col-span-7 w-full">
            {/* Mobile & Tablet (< lg): Balanced 2-column / 5-column grid (no orphan cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 lg:hidden">
              {allCapabilities.map((cap) => renderBox(cap, true))}
            </div>

            {/* Desktop (lg+): Staggered 3 - 4 - 3 Grid */}
            <div className="hidden lg:flex flex-col items-center gap-3.5">
              {/* Row 1: 3 Boxes */}
              <div className="flex flex-wrap justify-center gap-3.5">
                {row1.map((cap) => renderBox(cap, false))}
              </div>

              {/* Row 2: 4 Boxes */}
              <div className="flex flex-wrap justify-center gap-3.5">
                {row2.map((cap) => renderBox(cap, false))}
              </div>

              {/* Row 3: 3 Boxes */}
              <div className="flex flex-wrap justify-center gap-3.5">
                {row3.map((cap) => renderBox(cap, false))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
