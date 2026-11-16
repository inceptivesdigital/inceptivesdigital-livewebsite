import { Link } from 'react-router-dom'

export default function AsoIndustries() {
  const industries = [
    {
      title: 'FinTech',
      url: '/fintech-app-development',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: (
        <>
          High-intent search keyword ranking, compliance-friendly metadata, and conversion trust optimization for banking and wealth management apps.{' '}
          <Link
            to="/fintech-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore fintech
          </Link>
        </>
      ),
    },
    {
      title: 'Healthcare',
      url: '/healthcare-app-development',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: (
        <>
          HIPAA-compliant copy, clinical trust badges, and telehealth discovery targeting on both App Store and Google Play.{' '}
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
      title: 'Logistics & Supply Chain',
      url: '/custom-software-development',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: (
        <>
          B2B and enterprise keyword optimization for fleet management, freight tracking, and delivery operations.{' '}
          <Link
            to="/custom-software-development"
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
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: (
        <>
          Conversion-focused screenshot testing, high-volume seasonal keyword updates, and product catalog showcase optimization.{' '}
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
      title: 'Real Estate',
      url: '/real-estate-app-development-company',
      icon: '/assets/industries-icons/real-estate.svg',
      desc: (
        <>
          Geo-targeted keyword visibility, virtual tour feature highlights, and lead conversion listing structures.{' '}
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
      title: 'Education & eLearning',
      url: '/education-app-development-company',
      icon: '/assets/industries-icons/education.svg',
      desc: (
        <>
          Student and parent search intent mapping, interactive course previews, and global localization for learning platforms.{' '}
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
      title: 'Travel & Hospitality',
      url: '/travel-app-development-company',
      icon: '/assets/industries-icons/travel.svg',
      desc: (
        <>
          Seasonal travel search optimization, booking engine feature highlights, and multi-currency listing localization.{' '}
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
      title: 'Manufacturing & Industrial',
      url: '/custom-software-development',
      icon: '/assets/mobile-app/manufacturing.svg',
      desc: (
        <>
          Targeted industrial search visibility, IIoT equipment monitoring highlights, and enterprise portal optimization.{' '}
          <Link
            to="/custom-software-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore manufacturing
          </Link>
        </>
      ),
    },
    {
      title: 'Fitness & Wellness',
      url: '/fitness-app-development',
      icon: '/assets/industries-icons/fitness.svg',
      desc: (
        <>
          Workout streaming and wearable integration highlights, trial-to-subscriber conversion testing, and community keywords.{' '}
          <Link
            to="/fitness-app-development"
            className="underline text-[#00CE44] group-hover:text-black font-normal transition-colors"
          >
            Explore fitness
          </Link>
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#101010] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            The Industries Where Our Better ASO{' '}
            <span className="text-[#00CE44]">Changes the Growth Trajectory</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            The studio has run ASO engagements across a range of product categories, each with its own ranking dynamics, user intent patterns, and conversion benchmarks.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[260px] h-full select-none text-left"
            >
              <div className="w-[35px] h-[35px] mb-5 sm:mb-6 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-2.5">
                {ind.title}
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
