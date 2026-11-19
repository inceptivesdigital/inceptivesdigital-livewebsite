import { Link } from 'react-router-dom'

export default function DubaiSmartFeatures() {
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
    <section className="py-20 lg:py-28 relative text-white overflow-hidden bg-black">
      {/* Background with smartbanner-feature.jpg matching Screenshot 9 */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/locations/dubai/smartbanner-feature.jpg"
          alt="Smart Mobile Features Dubai"
          className="w-full h-full object-cover object-center opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/75 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description matching Screenshot 9 */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.14] mb-6">
              Smart Features For{' '}
              <span className="text-[#00CE44]">Smarter Mobile Apps</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Mobile applications serving Dubai&apos;s diverse customer base need reliable interactions across languages, devices, and payment methods. Secure authentication, real-time updates, location services, and connected workflows support everyday transactions and business operations without adding unnecessary steps to the experience.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors uppercase tracking-wider cursor-pointer shadow-none"
              >
                Get A Call Now!
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors uppercase tracking-wider cursor-pointer shadow-none"
              >
                Schedule A Call
              </Link>
            </div>
          </div>

          {/* Right Column: 10 Feature Cards Grid matching Screenshot 9 */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-[18px] bg-[#14151a]/90 backdrop-blur-md border border-white/5 hover:border-[#00CE44]/40 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group"
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
