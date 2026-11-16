export default function CrossPlatformIndustries() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: 'HIPAA-compliant cross-platform mobile apps for telehealth, patient engagement, and remote vitals tracking.',
    },
    {
      name: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: 'Secure digital wallets, cross-border payment flows, and PCI-DSS compliant financial applications.',
    },
    {
      name: 'e-Commerce',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: 'High-converting mobile storefronts, localized checkouts, and seamless payment gateway integrations.',
    },
    {
      name: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: 'Interactive property map discovery, broker scheduling tools, and virtual unit inspection apps.',
    },
    {
      name: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: 'Cross-platform health tracking apps with Bluetooth wearable syncing and dynamic workout programs.',
    },
    {
      name: 'e-Learning',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: 'Interactive learning platforms, live mobile classrooms, and offline study material synchronization.',
    },
    {
      name: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: 'Comprehensive itinerary organizers, flight and hotel booking engines, and real-time travel alerts.',
    },
    {
      name: 'Food Delivery',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'Multi-vendor food ordering apps, real-time GPS driver tracking, and instant digital payments.',
    },
    {
      name: 'Automotive',
      icon: '/assets/industries-icons/industries-startup.svg',
      desc: 'Connected vehicle telemetry dashboards, EV charging locators, and roadside service booking systems.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Tailored Cross-Platform Solutions for{' '}
            <span className="text-[#00CE44]">20+ Market Sectors</span>
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed">
            Different sectors present unique technical constraints and compliance rules. Inceptives Digital&apos;s cross platform mobile app development services are adapted to match the precise requirements, user habits, and integration demands of your specific industry.
          </p>
        </div>

        {/* Homepage-Style Hairline Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 cursor-pointer min-h-[260px] h-full select-none"
            >
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0 p-0 border-0 bg-transparent">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.name}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
