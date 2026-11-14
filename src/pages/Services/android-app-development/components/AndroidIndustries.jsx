export default function AndroidIndustries() {
  const industries = [
    {
      title: 'Healthcare',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: 'Telehealth, clinical workflows, patient engagement, and secure health-data integrations for connected care.',
    },
    {
      title: 'Fintech',
      url: 'https://inceptivesdigital.com/fintech-app-development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: 'Secure financial experiences spanning digital payments, banking workflows, transactions, and sensitive customer data.',
    },
    {
      title: 'eCommerce',
      url: 'https://inceptivesdigital.com/ecommerce-app-development-company',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: 'High-conversion shopping experiences connecting discovery, personalization, checkout, payments, and fulfillment.',
    },
    {
      title: 'Real Estate',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: 'Digital property experiences built around listings, search, buyer engagement, and agent operations.',
    },
    {
      title: 'Fitness',
      url: 'https://inceptivesdigital.com/fitness-app-development',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: 'Connected experiences combining workouts, wearable data, subscriptions, health insights, and personalized engagement.',
    },
    {
      title: 'eLearning',
      url: 'https://inceptivesdigital.com/education-app-development-company',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: 'Interactive learning experiences supporting courses, assessments, live instruction, progress, and learner engagement.',
    },
    {
      title: 'Travel',
      url: 'https://inceptivesdigital.com/travel-app-development-company',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: 'End-to-end travel experiences connecting discovery, bookings, itineraries, navigation, and real-time trip information.',
    },
    {
      title: 'Food Delivery',
      url: 'https://inceptivesdigital.com/blog/food-delivery-app-development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'On-demand platforms coordinating restaurants, customers, payments, dispatch, and real-time delivery operations.',
    },
    {
      title: 'Automotive',
      url: null,
      icon: '/assets/android-app/automation-1-1.png',
      desc: 'Connected mobility experiences spanning vehicle data, navigation, maintenance, driver services, and remote controls.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            <span className="text-[#00CE44]">Industry-Focused Custom Android Development</span>{' '}
            Across Every Screen
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            No two industries build the same Android product. At Inceptives Digital, our Android app development services adapt applications for smartphones, tablets, foldables, wearables, and automotive displays to deliver consistent user experiences across devices. With experience across 20+ industries, we address sector-specific compliance standards and technical requirements to build applications that fit your business operations.
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
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.url ? (
                  <a
                    href={ind.url}
                    className="text-[#00CE44] group-hover:text-black transition-colors"
                  >
                    {ind.title}
                  </a>
                ) : (
                  ind.title
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
