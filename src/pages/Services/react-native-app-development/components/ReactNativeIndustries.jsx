export default function ReactNativeIndustries() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
    },
    {
      name: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      url: 'https://inceptivesdigital.com/fintech-app-development',
    },
    {
      name: 'e-Commerce',
      icon: '/assets/industries-icons/industries-cart.svg',
      url: 'https://inceptivesdigital.com/ecommerce-app-development-company',
    },
    {
      name: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
    },
    {
      name: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      url: 'https://inceptivesdigital.com/fitness-app-development',
    },
    {
      name: 'e-Learning',
      icon: '/assets/industries-icons/industries-education.svg',
      url: 'https://inceptivesdigital.com/education-app-development-company',
    },
    {
      name: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      url: 'https://inceptivesdigital.com/travel-app-development-company',
    },
    {
      name: 'Food Delivery',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      url: 'https://inceptivesdigital.com/food-delivery-app-development',
    },
    {
      name: 'Automotive',
      icon: '/assets/android-app/automation-1-1.png',
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
            Industries We Build <span className="text-[#00CE44]">React Native Apps</span> For
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            We are the best React Native app development company in the USA, specializing in providing tailored solutions for 20+ different sectors. Our React Native app development services address sector-specific workflows through custom engineering, helping businesses build applications that fit their operational environments.
          </p>
        </div>

        {/* Box Cards Grid (#26282d 1px Hairline Borders, #18191d -> Hover #00CE44) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 sm:p-7 xl:p-8 flex items-center gap-5 bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[110px] sm:min-h-[120px] select-none text-left"
            >
              {/* Icon (35px x 35px): Green by default, Solid Black on Card Hover */}
              <div className="w-[35px] h-[35px] flex items-center justify-center shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, 22px font-size bold */}
              <h3 className="text-[19px] sm:text-[22px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
