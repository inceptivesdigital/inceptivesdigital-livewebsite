export default function IndustriesMobile() {
  const industries = [
    {
      title: 'Healthcare App Development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: (
        <>
          Our{' '}
          <a
            href="https://inceptivesdigital.com/healthcare-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            healthcare mobile app development services
          </a>{' '}
          cover patient portals and telehealth applications with EHR integrations and HIPAA-focused architecture.
        </>
      ),
    },
    {
      title: 'Fintech App Development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: (
        <>
          Custom mobile banking and{' '}
          <a
            href="https://inceptivesdigital.com/fintech-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            fintech app development services
          </a>{' '}
          come with KYC verification, digital wallets, and secure payment gateway integrations.
        </>
      ),
    },
    {
      title: 'eCommerce App Development',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: (
        <>
          Personalized shopping experiences with Shopify and WooCommerce through integrated checkouts and inventory APIs with our{' '}
          <a
            href="https://inceptivesdigital.com/ecommerce-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            eCommerce app development
          </a>
          .
        </>
      ),
    },
    {
      title: 'Education App Development',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: (
        <>
          Our{' '}
          <a
            href="https://inceptivesdigital.com/education-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            education app development
          </a>{' '}
          team engineers mobile learning platforms with LMS integrations, AI tutoring capabilities, and real-time student progress tracking.
        </>
      ),
    },
    {
      title: 'Fitness & Wellness App Development',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/fitness-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            Fitness mobile app development
          </a>{' '}
          supports custom mobile apps with workout tracking and personalized coaching, with HealthKit and wearable integrations connecting activity data.
        </>
      ),
    },
    {
      title: 'Real Estate App Development',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: (
        <>
          Custom{' '}
          <a
            href="https://inceptivesdigital.com/real-estate-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            real estate app development
          </a>{' '}
          brings property discovery to iOS and Android through MLS integrations and location-based search.
        </>
      ),
    },
    {
      title: 'Travel & Hospitality App Development',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/travel-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            Travel app development
          </a>{' '}
          covers mobile booking platforms with reservation APIs, live availability, and integrated itinerary management for travelers.
        </>
      ),
    },
    {
      title: 'Food Delivery App Development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/food-delivery-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            Food delivery mobile app development
          </a>{' '}
          connects customer ordering with restaurant operations through GPS tracking and integrated payment gateways.
        </>
      ),
    },
    {
      title: 'Manufacturing App Development',
      icon: '/assets/android-app/automation-1-1.png',
      desc: (
        <>
          Industrial mobile app development covers workforce management with GPS geofencing and offline synchronization for distributed field operations.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            <span className="text-[#00CE44]">Custom Mobile Apps</span> for 20+ Industries We Know Best
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every industry solves different problems, serves different users, and operates under different expectations. Our mobile app development services are built around those realities, not one-size-fits-all solutions.
          </p>
        </div>

        {/* Homepage-Style Box Cards Grid (9 Cards, 3 Columns on Desktop, Equal Heights & Clean 1px Borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[280px] lg:min-h-[300px] h-full select-none text-left"
            >
              {/* Icon (35px x 35px) */}
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, 25px font-size bold */}
              <h3 className="text-[20px] sm:text-[23px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.title}
              </h3>

              {/* Description: 16px font-size */}
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
