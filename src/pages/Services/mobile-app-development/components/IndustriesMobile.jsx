export default function IndustriesMobile() {
  const industries = [
    {
      title: 'Healthcare App Development',
      icon: '/assets/mobile-app/heart.svg',
      desc: (
        <>
          Our{' '}
          <a
            href="https://inceptivesdigital.com/healthcare-app-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            healthcare mobile app development services
          </a>{' '}
          cover patient portals and telehealth applications with EHR integrations and HIPAA-focused architecture.
        </>
      ),
    },
    {
      title: 'Fintech App Development',
      icon: '/assets/mobile-app/fintech.svg',
      desc: (
        <>
          Custom mobile banking and{' '}
          <a
            href="https://inceptivesdigital.com/fintech-app-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            fintech app development services
          </a>{' '}
          come with KYC verification, digital wallets, and secure payment gateway integrations.
        </>
      ),
    },
    {
      title: 'eCommerce App Development',
      icon: '/assets/mobile-app/ecommerce.svg',
      desc: (
        <>
          Personalized shopping experiences with Shopify and WooCommerce through integrated checkouts and inventory APIs with our{' '}
          <a
            href="https://inceptivesdigital.com/ecommerce-app-development-company"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            eCommerce app development
          </a>
          .
        </>
      ),
    },
    {
      title: 'Education App Development',
      icon: '/assets/mobile-app/education.svg',
      desc: (
        <>
          Our{' '}
          <a
            href="https://inceptivesdigital.com/education-app-development-company"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            education app development
          </a>{' '}
          team engineers mobile learning platforms with LMS integrations, AI tutoring capabilities, and real-time student progress tracking.
        </>
      ),
    },
    {
      title: 'Fitness & Wellness App Development',
      icon: '/assets/mobile-app/fitness.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/fitness-app-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Fitness mobile app development
          </a>{' '}
          supports custom mobile apps with workout tracking and personalized coaching, with HealthKit and wearable integrations connecting activity data.
        </>
      ),
    },
    {
      title: 'Real Estate App Development',
      icon: '/assets/mobile-app/real-state.svg',
      desc: (
        <>
          Custom{' '}
          <a
            href="https://inceptivesdigital.com/real-estate-app-development-company"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            real estate app development
          </a>{' '}
          brings property discovery to iOS and Android through MLS integrations and location-based search.
        </>
      ),
    },
    {
      title: 'Travel & Hospitality App Development',
      icon: '/assets/mobile-app/travel.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/travel-app-development-company"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Travel app development
          </a>{' '}
          covers mobile booking platforms with reservation APIs, live availability, and integrated itinerary management for travelers.
        </>
      ),
    },
    {
      title: 'Food Delivery App Development',
      icon: '/assets/mobile-app/food-delivery.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/food-delivery-app-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Food delivery mobile app development
          </a>{' '}
          connects customer ordering with restaurant operations through GPS tracking and integrated payment gateways.
        </>
      ),
    },
    {
      title: 'Manufacturing App Development',
      icon: '/assets/mobile-app/manufacturing.svg',
      desc: (
        <>
          Industrial mobile app development covers workforce management with GPS geofencing and offline synchronization for distributed field operations.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      {/* Real Mobile App Screen Background Cover with Dim Opacity + Black Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/mobile-app/industries-bg-cover.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Custom Mobile Apps</span> for 20+ Industries We Know Best
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every industry solves different problems, serves different users, and operates under different expectations. Our mobile app development services are built around those realities, not one-size-fits-all solutions.
          </p>
        </div>

        {/* 9 Cards: 4 + 4 + 1 Centered Grid, Green Border, Centered Text */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] p-6 sm:p-7 rounded-[22px] bg-[#16171a]/90 border border-[#00CE44] flex flex-col items-center text-center shadow-none"
            >
              <div className="w-11 h-11 mb-4 flex items-center justify-center shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base sm:text-[17px] font-bold text-white mb-2.5 leading-snug">
                {ind.title}
              </h3>

              <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
