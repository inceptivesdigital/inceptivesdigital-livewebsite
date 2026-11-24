import { Link } from 'react-router-dom'

export default function AustinIndustries() {
  const industries = [
    {
      title: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      link: '/healthcare-app-development',
    },
    {
      title: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      link: '/fitness-app-development',
    },
    {
      title: 'Dating',
      icon: '/assets/industries-icons/industries-hearts.svg',
      link: '/dating-app-development-company',
    },
    {
      title: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      link: '/fintech-app-development',
    },
    {
      title: 'Education',
      icon: '/assets/industries-icons/industries-education.svg',
      link: '/education-app-development-company',
    },
    {
      title: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      link: '/real-estate-app-development-company',
    },
    {
      title: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      link: '/travel-app-development-company',
    },
    {
      title: 'On-Demand & Delivery Apps',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      link: '/food-delivery-app-development',
    },
    {
      title: 'Ecommerce',
      icon: '/assets/industries-icons/industries-cart.svg',
      link: '/ecommerce-app-development-company',
    },
    {
      title: 'SaaS & Startup',
      icon: '/assets/industries-icons/industries-startup.svg',
      link: '/services',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0b0c0f] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Fueling Austin's Most Competitive Industries as a{' '}
            <span className="text-[#00CE44]">Top Mobile App Development Company</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile app development across Austin's most active industries, from HIPAA-compliant healthtech to PCI-DSS fintech and beyond.
          </p>
        </div>

        {/* 10 Industry Cards */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 items-stretch">
          {industries.map((ind) => (
            <Link
              key={ind.title}
              to={ind.link}
              className="group w-[calc(50%-10px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] px-6 py-8 sm:py-9 rounded-[18px] bg-[#1c1d20] hover:bg-[#222429] border border-white/[0.08] hover:border-[#00CE44]/60 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 self-stretch select-none"
            >
              {/* Clean Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-10 h-10 object-contain p-0 m-0 border-0 bg-transparent transition-transform group-hover:scale-110 duration-200"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                {ind.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
