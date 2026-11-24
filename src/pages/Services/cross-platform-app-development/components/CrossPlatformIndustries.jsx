export default function CrossPlatformIndustries() {
  const industries = [
    {
      name: 'Healthcare',
      link: 'https://inceptivesdigital.com/healthcare-app-development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: 'HIPAA-aware architecture for patient portals, telehealth, and remote monitoring apps.',
    },
    {
      name: 'Fintech',
      link: 'https://inceptivesdigital.com/fintech-app-development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: 'Secure authentication and PCI-DSS-compliant payment flows for wallets and investment platforms.',
    },
    {
      name: 'e-Commerce',
      link: 'https://inceptivesdigital.com/ecommerce-app-development-company',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: 'Real-time inventory, checkout, and order tracking built for high-traffic release cycles.',
    },
    {
      name: 'Real Estate',
      link: 'https://inceptivesdigital.com/real-estate-app-development-company',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: 'Listing search, virtual tours, and scheduling built for both platforms simultaneously.',
    },
    {
      name: 'Fitness',
      link: 'https://inceptivesdigital.com/fitness-app-development',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: 'Wearable integration and activity tracking synced across iOS and Android.',
    },
    {
      name: 'e-Learning',
      link: 'https://inceptivesdigital.com/education-app-development-company',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: 'Offline-capable course delivery and progress tracking for distributed user bases.',
    },
    {
      name: 'Travel',
      link: 'https://inceptivesdigital.com/travel-app-development-company',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: 'Booking, itinerary, and real-time notification systems built for on-the-go use.',
    },
    {
      name: 'Food Delivery',
      link: 'https://inceptivesdigital.com/food-delivery-app-development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'Live order tracking and driver-facing apps running on the same shared backend.',
    },
    {
      name: 'Automotive',
      link: null,
      icon: '/assets/industries-icons/industries-startup.svg',
      desc: 'Connected-vehicle and dealership apps requiring consistent cross-device performance.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0c] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4 text-center">
            Tailored Cross-Platform Solutions for{' '}
            <span className="text-[#00CE44]">20+ Market Sectors</span>
          </h2>
          <p className="text-white/85 text-[16px] leading-relaxed font-normal text-center">
            Different sectors present unique technical constraints and compliance rules. Inceptives Digital&apos;s cross platform mobile app development services are adapted to match the precise requirements, user habits, and integration demands of your specific industry.
          </p>
        </div>

        {/* 9 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="p-7 sm:p-8 rounded-[20px] bg-[#15161a] border border-white/5 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left group h-full"
            >
              <div className="mb-5 shrink-0 flex items-center">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-10 h-10 object-contain p-0 m-0 border-0 bg-transparent"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#00CE44] mb-2 leading-snug">
                {ind.link ? (
                  <a
                    href={ind.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {ind.name}
                  </a>
                ) : (
                  ind.name
                )}
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
