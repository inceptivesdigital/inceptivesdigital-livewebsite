import { Link } from 'react-router-dom'

export default function SingaporeIndustries() {
  const industries = [
    {
      title: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      link: '/fintech-app-development',
    },
    {
      title: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      link: '/healthcare-app-development',
    },
    {
      title: 'Logistics & Supply Chain',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      link: '/logistics-app-development',
    },
    {
      title: 'eCommerce & Retail',
      icon: '/assets/industries-icons/industries-cart.svg',
      link: '/ecommerce-app-development-company',
    },
    {
      title: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      link: '/real-estate-app-development-company',
    },
    {
      title: 'Education',
      icon: '/assets/industries-icons/industries-education.svg',
      link: '/education-app-development-company',
    },
    {
      title: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      link: '/travel-app-development-company',
    },
    {
      title: 'Manufacturing',
      icon: '/assets/industries-icons/industries-startup.svg',
      link: '/enterprise-software-development',
    },
    {
      title: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      link: '/fitness-app-development',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Industry Specialisation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Deep Engineering Expertise{' '}
            <span className="text-[#00CE44]">Across 20+ Sectors</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Fintech app development in Singapore involves payment security, customer verification, and financial system integrations. Healthcare products face different demands around patient information and clinical workflows. Experience across 20+ industries informs the engineering decisions behind these applications.
          </p>
        </div>

        {/* 9 Industry Cards Grid: Matching screenshot #6 exactly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-center">
          {industries.map((ind, idx) => (
            <Link
              key={idx}
              to={ind.link}
              className={`p-6 sm:p-8 rounded-[20px] bg-[#12141a] border-0 shadow-none flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(0,206,68,0.1)] group ${
                idx === 8 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                {ind.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
