import { Link } from 'react-router-dom'

export default function WebAppIndustries() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: (
        <>
          HIPAA-aligned{' '}
          <Link
            to="/healthcare-app-development"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            healthcare application development
          </Link>{' '}
          for secure patient portals and integrated clinical management systems.
        </>
      ),
    },
    {
      name: 'Fintech & Financial Services',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: (
        <>
          Transaction-ready{' '}
          <Link
            to="/fintech-app-development"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            fintech web applications
          </Link>{' '}
          with encrypted payment processing and audit-ready financial records.
        </>
      ),
    },
    {
      name: 'Fitness & Wellness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: (
        <>
          <Link
            to="/fitness-app-development"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Fitness web app development
          </Link>{' '}
          for connected health platforms featuring member dashboards, workout progress tracking, and device data sync through APIs.
        </>
      ),
    },
    {
      name: 'eCommerce & Retail',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: (
        <>
          From multi-vendor marketplaces to B2B commerce platforms,{' '}
          <Link
            to="/ecommerce-app-development-company"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            custom eCommerce development
          </Link>{' '}
          connects purchasing with centralized seller operations.
        </>
      ),
    },
    {
      name: 'Education & eLearning',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: (
        <>
          <Link
            to="/education-app-development-company"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Education application development
          </Link>{' '}
          for browser-based learning platforms, with course administration and individual student progress tracking.
        </>
      ),
    },
    {
      name: 'Logistics & Workforce Management',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'Centralized workforce management web apps with GPS-verified attendance, built for businesses managing field operations across multiple locations.',
    },
    {
      name: 'Real Estate & Property',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: (
        <>
          Property listings meet agent workflows through{' '}
          <Link
            to="/real-estate-app-development-company"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            real estate web application development
          </Link>
          , with advanced search and integrated lead management.
        </>
      ),
    },
    {
      name: 'Media & Entertainment',
      icon: '/assets/industries-icons/industries-startup.svg',
      desc: 'Cloud-based media platforms that turn on-site video capture into automated content delivery, supported by web administration tools.',
    },
    {
      name: 'Travel & Hospitality',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: (
        <>
          Comprehensive{' '}
          <Link
            to="/travel-app-development-company"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            travel web app development
          </Link>{' '}
          with booking engines, itinerary management, and real-time availability updates.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Shipping Web Products Across{' '}
            <span className="text-[#00CE44]">20+ Industries</span>
          </h2>
          <p className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed">
            Web products carry different requirements depending on the industry. What works architecturally for one sector can be the wrong foundation for another. As a web application development company with experience across 20+ industries, Inceptives Digital engineers custom platforms around the workflows and operational requirements that define each sector.
          </p>
        </div>

        {/* 9-Card Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl items-stretch auto-rows-fr">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-[25px] flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[240px] h-full select-none"
            >
              <div className="w-[35px] h-[35px] mb-6 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[20px] sm:text-[23px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.name}
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
