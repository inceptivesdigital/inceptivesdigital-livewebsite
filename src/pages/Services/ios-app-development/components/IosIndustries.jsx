export default function IosIndustries() {
  const industries = [
    {
      title: 'Healthcare iOS App Development',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: (
        <>
          HIPAA-compliant{' '}
          <a
            href="https://inceptivesdigital.com/healthcare-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            healthcare app development
          </a>{' '}
          with secure patient data handling and seamless HealthKit integrations.
        </>
      ),
    },
    {
      title: 'Fintech & Financial Services',
      url: 'https://inceptivesdigital.com/fintech-app-development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: (
        <>
          High-security{' '}
          <a
            href="https://inceptivesdigital.com/fintech-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            fintech app development
          </a>{' '}
          featuring Apple Pay, biometric authentication via Face ID/Touch ID, and PCI-DSS compliance.
        </>
      ),
    },
    {
      title: 'e-Commerce & Retail',
      url: 'https://inceptivesdigital.com/ecommerce-app-development-company',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: (
        <>
          Fast, conversion-focused{' '}
          <a
            href="https://inceptivesdigital.com/ecommerce-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            e-commerce app development
          </a>{' '}
          with one-tap checkout, push notifications, and high-volume catalog search.
        </>
      ),
    },
    {
      title: 'Fitness & Wellness',
      url: 'https://inceptivesdigital.com/fitness-app-development',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/fitness-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            Fitness app development
          </a>{' '}
          for connected health platforms featuring real-time workout tracking, Apple Watch companion apps, and sensor data sync.
        </>
      ),
    },
    {
      title: 'Real Estate & Property',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: (
        <>
          Interactive{' '}
          <a
            href="https://inceptivesdigital.com/real-estate-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            real estate app development
          </a>{' '}
          with custom MapKit location features, virtual property tours, and instant agent messaging.
        </>
      ),
    },
    {
      title: 'On-Demand & Logistics',
      url: 'https://inceptivesdigital.com/food-delivery-app-development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: (
        <>
          Location-based{' '}
          <a
            href="https://inceptivesdigital.com/food-delivery-app-development"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            delivery app development
          </a>{' '}
          for service platforms featuring live GPS tracking, dynamic order status, and automated push alerts.
        </>
      ),
    },
    {
      title: 'e-Learning & Education',
      url: 'https://inceptivesdigital.com/education-app-development-company',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: (
        <>
          Engaging{' '}
          <a
            href="https://inceptivesdigital.com/education-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            education app development
          </a>{' '}
          for mobile learning platforms supporting offline content access, video streaming, and StoreKit course subscriptions.
        </>
      ),
    },
    {
      title: 'Travel & Hospitality',
      url: 'https://inceptivesdigital.com/travel-app-development-company',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: (
        <>
          Comprehensive{' '}
          <a
            href="https://inceptivesdigital.com/travel-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black transition-colors"
          >
            travel app development
          </a>{' '}
          with offline trip itineraries, location-based guides, and instant booking updates.
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
            <span className="text-[#00CE44]">iOS App Development Solutions</span>{' '}
            Across 20+ Industries
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            The custom iOS app development services at Inceptives Digital are informed by sector-specific compliance requirements, user behaviour patterns, and technical constraints understood from day one.
          </p>
        </div>

        {/* Homepage-Style Box Cards Grid (8 Cards, 4 Columns on Desktop, Equal Heights & Clean 1px Borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[290px] lg:min-h-[320px] h-full select-none text-left"
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
