import { Link } from 'react-router-dom'

export default function SingaporeSmartFeatures() {
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
      {/* Background Image: Cover with 0.7 Opacity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/locations/singapore/smartbanner-feature.jpg')`,
        }}
      />
      {/* Dark gradient overlay for text readability & theme consistency */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608]/95 via-[#050608]/85 to-[#050608]/90 pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-6">
              Mobile App Capabilities for{' '}
              <span className="text-[#00CE44]">Singapore’s Tech-Savvy Users</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Our Singapore mobile app developers design apps that meet the expectations of a{' '}
              <Link
                to="/blog/singapore-businesses-mobile-apps-user-experience"
                className="text-[#00CE44] font-medium underline underline-offset-4"
              >
                tech-savvy, fast-moving audience
              </Link>
              . Each feature, shaped by{' '}
              <Link
                to="/ui-ux-design"
                className="text-[#00CE44] font-medium underline underline-offset-4"
              >
                UI/UX design
              </Link>
              , is crafted to solve real user problems, enable smooth interactions, and deliver reliable performance. From intuitive navigation to responsive workflows, these capabilities ensure engagement, retention, and measurable success in a highly dynamic market.
            </p>

            {/* CTAs: rounded-none & font-medium */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-base transition-colors border-0"
              >
                Get A Call Now!
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#12141a] hover:bg-[#1c1f2a] text-white font-medium text-base transition-colors border border-white/20"
              >
                Schedule A Call
              </Link>
            </div>
          </div>

          {/* Right Column: 10 Feature Boxes in a responsive grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[20px] bg-[#12141a]/90 backdrop-blur-sm border-0 shadow-none flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:border hover:border-[#00CE44]/40 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3.5 flex items-center justify-center">
                  <img
                    src={feat.icon}
                    alt={feat.title}
                    className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                  {feat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
