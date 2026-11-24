import { Link } from 'react-router-dom'

export default function PartnershipIndustries() {
  const industries = [
    {
      title: 'Healthcare',
      url: '/healthcare-app-development',
      icon: '/assets/mobile-app/heart.svg',
      desc: (
        <>
          HIPAA-compliant telemedicine platforms, EHR integrations, and patient portals built for healthcare partner agencies.{' '}
          <Link
            to="/healthcare-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore healthcare
          </Link>
        </>
      ),
    },
    {
      title: 'Fitness & Wellness',
      url: '/fitness-app-development',
      icon: '/assets/mobile-app/fitness.svg',
      desc: (
        <>
          Custom workout trackers, biometric wearable integrations, and subscription paywall flows for wellness clients.{' '}
          <Link
            to="/fitness-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore fitness
          </Link>
        </>
      ),
    },
    {
      title: 'FinTech',
      url: '/mobile-app-development',
      icon: '/assets/mobile-app/fintech.svg',
      desc: (
        <>
          PCI-DSS compliant payment gateways, investment portals, crypto wallets, and automated ledger infrastructure.{' '}
          <Link
            to="/mobile-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore fintech
          </Link>
        </>
      ),
    },
    {
      title: 'Education & eLearning',
      url: '/education-app-development-company',
      icon: '/assets/mobile-app/education.svg',
      desc: (
        <>
          Interactive learning management systems, video streaming, gamified quizzes, and tutor booking platforms.{' '}
          <Link
            to="/education-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore education
          </Link>
        </>
      ),
    },
    {
      title: 'Real Estate',
      url: '/real-estate-app-development-company',
      icon: '/assets/mobile-app/real-state.svg',
      desc: (
        <>
          MLS property search engines, virtual tour feeds, and multi-tenant agent management systems.{' '}
          <Link
            to="/real-estate-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore real estate
          </Link>
        </>
      ),
    },
    {
      title: 'Travel & Hospitality',
      url: '/travel-app-development-company',
      icon: '/assets/mobile-app/travel.svg',
      desc: (
        <>
          Global booking engines, airline GDS integrations, itinerary organizers, and offline travel companions.{' '}
          <Link
            to="/travel-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore travel
          </Link>
        </>
      ),
    },
    {
      title: 'Logistics & Supply Chain',
      url: '/mobile-app-development',
      icon: '/assets/mobile-app/Startup-Products.svg',
      desc: (
        <>
          Real-time GPS fleet tracking, automated dispatch systems, warehouse inventory managers, and driver apps.{' '}
          <Link
            to="/mobile-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore logistics
          </Link>
        </>
      ),
    },
    {
      title: 'eCommerce & Retail',
      url: '/ecommerce-app-development-company',
      icon: '/assets/mobile-app/ecommerce.svg',
      desc: (
        <>
          Headless Shopify builds, bespoke marketplaces, unified cart systems, and high-conversion checkout flows.{' '}
          <Link
            to="/ecommerce-app-development-company"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore eCommerce
          </Link>
        </>
      ),
    },
    {
      title: 'Manufacturing & Industrial',
      url: '/mobile-app-development',
      icon: '/assets/mobile-app/manufacturing.svg',
      desc: (
        <>
          IoT sensor data aggregation, shop-floor workforce dashboards, and predictive equipment maintenance suites.{' '}
          <Link
            to="/mobile-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore manufacturing
          </Link>
        </>
      ),
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Domain Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Industries Where Our Partnerships <span className="text-[#00CE44]">Deliver Real Impact</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Experience spanning 20+ industries ensures we build with deep compliance awareness, proven domain patterns, and production-tested scalability.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch auto-rows-fr">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group p-8 rounded-[24px] bg-[#141414] hover:bg-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left border-0 shadow-none cursor-pointer h-full"
            >
              <div>
                <div className="mb-6 flex items-center justify-start p-0 border-0 bg-transparent">
                  <img
                    src={ind.icon}
                    alt={ind.title}
                    className="w-[50px] h-[50px] object-contain select-none p-0 bg-transparent border-0 group-hover:brightness-0 transition-all"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-white group-hover:text-black transition-colors mb-3 tracking-tight">
                  {ind.title}
                </h3>
                <div className="text-white/80 group-hover:text-black/85 text-xs sm:text-[14px] leading-relaxed transition-colors font-normal">
                  {ind.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
