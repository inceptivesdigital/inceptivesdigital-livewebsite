import { Link } from 'react-router-dom'

export default function IndustriesSection({
  heading = 'Digital Products Designed Around Industry Realities',
  subtitle = null,
  showDesc = true,
} = {}) {
  const industries = [
    {
      title: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      alt: 'Healthcare App Development',
      link: '/healthcare-app-development',
      desc: 'HIPAA-compliant platforms for telemedicine, patient engagement, clinical workflows, and medical data intelligence.'
    },
    {
      title: 'Fitness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      alt: 'Fitness app development',
      link: '/fitness-app-development',
      desc: 'Wearable-integrated apps for workout tracking, AI coaching, nutrition planning, and long-term user retention.'
    },
    {
      title: 'Dating',
      icon: '/assets/industries-icons/industries-hearts.svg',
      alt: 'Dating App Development',
      link: '/dating-app-development-company',
      desc: 'Secure matchmaking platforms with AI-powered recommendations, real-time communication, and trust-first architecture.'
    },
    {
      title: 'Fintech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      alt: 'Fintech App Development',
      link: '/fintech-app-development',
      desc: 'Payment systems, digital wallets, lending platforms, and investment tools built to PCI DSS and GDPR compliance standards.'
    },
    {
      title: 'Education',
      icon: '/assets/industries-icons/industries-education.svg',
      alt: 'Education App Development',
      link: '/education-app-development-company',
      desc: 'Adaptive learning platforms, LMS systems, and AI-powered tutoring tools built for engagement and measurable outcomes.'
    },
    {
      title: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      alt: 'Real Estate App Development',
      link: '/real-estate-app-development-company',
      desc: 'Property search platforms, CRM-integrated listing tools, virtual tours, and AI-powered valuation systems.'
    },
    {
      title: 'Travel',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      alt: 'Travel App Development',
      link: '/travel-app-development-company',
      desc: 'Booking platforms, itinerary management tools, and AI-driven personalisation built for seamless end-to-end travel experiences.'
    },
    {
      title: 'Food Delivery',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      alt: 'Food Delivery App Development',
      link: '/food-delivery-app-development',
      desc: 'Real-time ordering, driver dispatch, multi-vendor management, and secure payment infrastructure built for high-volume operations.'
    },
    {
      title: 'Ecommerce',
      icon: '/assets/industries-icons/industries-cart.svg',
      alt: 'Ecommerce App Development',
      link: '/ecommerce-app-development-company',
      desc: 'High-converting storefronts, multi-vendor marketplaces, and AI-powered personalisation built for scale and retention.'
    },
    {
      title: 'Startup',
      icon: '/assets/industries-icons/industries-startup.svg',
      alt: 'Startup App Development',
      link: '/services',
      desc: 'Lean MVPs, scalable architecture, and investor-ready products built for founders who need to move fast without rebuilding later.'
    }
  ]

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Top Heading: H2, 40px bold, text-center */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed mt-3">
              {subtitle}
            </p>
          )}
        </div>

        {/* 10-Cards 5-Column Grid: Equal Heights & Clean Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <Link
              key={ind.title}
              to={ind.link}
              className={`group p-6 sm:p-7 xl:p-8 flex flex-col bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 cursor-pointer h-full select-none ${
                showDesc ? 'justify-start' : 'justify-center'
              }`}
            >
              {/* Icon (35px x 35px) */}
              <div className={`w-[35px] h-[35px] ${showDesc ? 'mb-6 sm:mb-8' : 'mb-4'} flex items-center justify-start shrink-0`}>
                <img
                  src={ind.icon}
                  alt={ind.alt}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, white by default, black on hover */}
              <h3 className={`text-[20px] sm:text-[23px] font-bold text-white group-hover:text-black transition-colors duration-300 leading-tight ${showDesc ? 'mb-3' : 'mb-0'}`}>
                {ind.title}
              </h3>

              {/* Description: 16px font-size */}
              {showDesc && (
                <p className="text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                  {ind.desc}
                </p>
              )}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
