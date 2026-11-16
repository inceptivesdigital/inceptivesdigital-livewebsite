import { Link } from 'react-router-dom'

export default function PostLaunchIndustries() {
  const industries = [
    {
      title: 'Healthcare',
      url: '/healthcare-app-development',
      icon: '/assets/mobile-app/heart.svg',
      desc: (
        <>
          HIPAA-compliant data pipelines and session analysis that surface patient onboarding friction, booking bottlenecks, and provider communication workflows.{' '}
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
          Workout retention curves, habit loop verification, and subscription paywall experimentation that convert free trialists into long-term active subscribers.{' '}
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
      title: 'Education & eLearning',
      url: '/education-app-development-company',
      icon: '/assets/mobile-app/education.svg',
      desc: (
        <>
          Lesson completion telemetry, gamification drop-off audits, and cohort engagement tracking across virtual classrooms and LMS applications.{' '}
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
          Lead funnel optimization, virtual tour engagement benchmarks, and agent inquiry conversion rates refined through live session analytics.{' '}
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
          Search-to-booking funnel tracking, checkout drop-off recovery, and loyalty re-engagement loops optimized for seasonal demand spikes.{' '}
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
      title: 'FinTech',
      url: '/mobile-app-development',
      icon: '/assets/mobile-app/fintech.svg',
      desc: (
        <>
          KYC verification drop-off reduction, transaction completion speed audits, and security-first conversion rate optimization.{' '}
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
      title: 'Logistics & Supply Chain',
      url: '/mobile-app-development',
      icon: '/assets/mobile-app/Startup-Products.svg',
      desc: (
        <>
          Driver routing telemetry, warehouse task completion speed, and offline sync error resolution in high-velocity field environments.{' '}
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
          Cart abandonment diagnosis, multi-step checkout experiments, and personalization algorithms tuned against live purchasing data.{' '}
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
          Equipment operator adoption tracking, workflow error diagnosis, and operational dashboard telemetry that eliminate shop-floor friction.{' '}
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
    <section className="py-16 sm:py-24 bg-[#050505] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Industries Where{' '}
            <span className="text-[#00CE44]">Post-Launch Analytics</span> and Iteration Make a Measurable Difference
          </h2>
          <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Inceptives Digital has run post-launch engagements across categories where iteration speed and analytical precision directly determine how far a product travels from its launch position.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group p-8 rounded-[24px] bg-[#141414] hover:bg-[#00CE44] transition-all duration-300 flex flex-col justify-between text-left border-0 shadow-none cursor-pointer"
            >
              <div>
                <div className="mb-6">
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
