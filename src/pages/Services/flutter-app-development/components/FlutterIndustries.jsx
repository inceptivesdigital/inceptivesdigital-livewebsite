export default function FlutterIndustries() {
  const industries = [
    {
      name: 'FinTech',
      desc: 'Secure digital wallets, mobile banking, and real-time payment platforms engineered with Flutter cross-platform precision.',
      icon: '/assets/industries-icons/industries-fintech.svg',
      url: 'https://inceptivesdigital.com/fintech-app-development',
    },
    {
      name: 'Healthcare',
      desc: 'HIPAA-aligned patient engagement, telehealth, and remote monitoring apps built in Flutter across iOS, Android, and web.',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
    },
    {
      name: 'Logistics & Supply Chain',
      desc: 'Fleet tracking, warehouse operations, courier dispatch, and real-time supply chain visibility applications.',
      icon: '/assets/industries-icons/Food-Delivery.svg',
    },
    {
      name: 'eCommerce & Retail',
      desc: 'High-conversion mobile storefronts, personalized catalogs, and seamless checkout flows across iOS, Android, and web.',
      icon: '/assets/industries-icons/industries-cart.svg',
      url: 'https://inceptivesdigital.com/ecommerce-app-development-company',
    },
    {
      name: 'Real Estate',
      desc: 'Property discovery, interactive map search, virtual walkthroughs, and agent CRM workflows in one shared codebase.',
      icon: '/assets/industries-icons/industries-realstate.svg',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
    },
    {
      name: 'Education & eLearning',
      desc: 'Interactive mobile learning platforms with video lessons, assessments, progress tracking, and offline access.',
      icon: '/assets/industries-icons/industries-education.svg',
      url: 'https://inceptivesdigital.com/education-app-development-company',
    },
    {
      name: 'Travel & Hospitality',
      desc: 'Booking engines, live itinerary management, location-based recommendations, and loyalty experiences.',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      url: 'https://inceptivesdigital.com/travel-app-development-company',
    },
    {
      name: 'Manufacturing & Industrial',
      desc: 'Connected field operations, equipment monitoring dashboards, quality inspection apps, and IoT automation workflows.',
      icon: '/assets/android-app/automation-1-1.png',
    },
    {
      name: 'Fitness & Wellness',
      desc: 'Wearable-connected workout tracking, live coaching, and subscription wellness applications for iOS and Android.',
      icon: '/assets/industries-icons/industries-fitness.svg',
      url: 'https://inceptivesdigital.com/fitness-app-development',
    },
  ]

  return (
    <section
      id="industries"
      className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            <span className="text-[#00CE44]">Flutter App Development</span>{' '}
            Across Every Major Industry
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Flutter&apos;s versatility makes it well-suited to a wide range of product categories. Inceptives Digital has shipped across a range of industries and helps them scale in the market.
          </p>
        </div>

        {/* Exact Homepage Box Cards Grid (#26282d 1px Hairline Borders, #18191d -> Hover #00CE44) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[280px] lg:min-h-[300px] h-full select-none text-left"
            >
              {/* Icon (35px x 35px): Green by default, Solid Black on Card Hover */}
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, 23px font-size bold */}
              <h3 className="text-[20px] sm:text-[23px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.url ? (
                  <a
                    href={ind.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00CE44] group-hover:text-black transition-colors"
                  >
                    {ind.name}
                  </a>
                ) : (
                  ind.name
                )}
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
