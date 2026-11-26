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
      link: '/custom-software-development',
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
      link: '/custom-software-development',
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
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 items-stretch">
          {industries.map((ind, idx) => (
            <Link
              key={idx}
              to={ind.link}
              className={`group w-[calc(50%-10px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] px-6 py-8 sm:py-9 rounded-[18px] bg-[#1c1d20] hover:bg-[#222429] border border-white/[0.08] hover:border-[#00CE44]/60 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 self-stretch select-none`}
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
