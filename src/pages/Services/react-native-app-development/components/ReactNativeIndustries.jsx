import { Link } from 'react-router-dom'

export default function ReactNativeIndustries() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      url: '/healthcare-app-development',
    },
    {
      name: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      url: '/fintech-app-development',
    },
    {
      name: 'e-Commerce',
      icon: '/assets/industries-icons/industries-cart.svg',
      url: '/ecommerce-app-development-company',
    },
    {
      name: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      url: '/real-estate-app-development-company',
    },
    {
      name: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      url: '/fitness-app-development',
    },
    {
      name: 'e-Learning',
      icon: '/assets/industries-icons/industries-education.svg',
      url: '/education-app-development-company',
    },
    {
      name: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      url: '/travel-app-development-company',
    },
    {
      name: 'Food Delivery',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      url: '/food-delivery-app-development',
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
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            Industries We Build <span className="text-[#00CE44]">React Native Apps</span> For
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            We are the best React Native app development company in the USA, specializing in providing tailored solutions for 20+ different sectors. Our React Native app development services address sector-specific workflows through custom engineering, helping businesses build applications that fit their operational environments.
          </p>
        </div>

        {/* 9 Icon + Heading Cards (5 on top + 4 centered on bottom, matching screenshot) */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 items-stretch">
          {industries.map((ind) => {
            const inner = (
              <>
                <div className="w-12 h-12 mb-4 flex items-center justify-center shrink-0">
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110 select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-[#00CE44] transition-colors duration-200 leading-snug">
                  {ind.name}
                </h3>
              </>
            )
            const cardCls =
              'group w-[calc(50%-10px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] px-6 py-8 sm:py-9 rounded-[18px] bg-[#1c1d20] hover:bg-[#222429] border border-white/[0.08] hover:border-[#00CE44]/60 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 self-stretch select-none'

            return ind.url ? (
              <Link key={ind.name} to={ind.url} className={cardCls}>
                {inner}
              </Link>
            ) : (
              <div key={ind.name} className={cardCls}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
