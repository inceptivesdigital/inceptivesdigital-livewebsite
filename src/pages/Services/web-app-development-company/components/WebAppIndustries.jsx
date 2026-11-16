export default function WebAppIndustries() {
  const industries = [
    {
      name: 'FinTech',
      icon: '/assets/industries-icons/industries-fintech.svg',
      desc: 'Secure trading portals, payment orchestration dashboards, and compliance-ready financial workflows.',
    },
    {
      name: 'Healthcare',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      desc: 'Patient portals, telehealth web platforms, and HIPAA-aligned clinical scheduling systems.',
    },
    {
      name: 'Logistics & Supply Chain',
      icon: '/assets/industries-icons/Food-Delivery.svg',
      desc: 'Real-time fleet tracking, warehouse inventory portals, and automated dispatch dashboards.',
    },
    {
      name: 'eCommerce & Retail',
      icon: '/assets/industries-icons/industries-cart.svg',
      desc: 'High-conversion storefronts, multi-vendor marketplaces, and order management platforms.',
    },
    {
      name: 'Real Estate',
      icon: '/assets/industries-icons/industries-realstate.svg',
      desc: 'Property listing portals, tenant management systems, and interactive map-driven search tools.',
    },
    {
      name: 'Education & eLearning',
      icon: '/assets/industries-icons/industries-education.svg',
      desc: 'Interactive LMS platforms, virtual classrooms, and student progress analytics.',
    },
    {
      name: 'Travel & Hospitality',
      icon: '/assets/industries-icons/industries-traveling1.svg',
      desc: 'Booking engines, dynamic itinerary builders, and multi-property reservation portals.',
    },
    {
      name: 'Manufacturing & Industrial',
      icon: '/assets/industries-icons/industries-startup.svg',
      desc: 'IoT-connected operations dashboards, ERP integrations, and production monitoring tools.',
    },
    {
      name: 'Fitness & Wellness',
      icon: '/assets/industries-icons/industries-fitness.svg',
      desc: 'Coaching portals, subscription workout platforms, and member engagement dashboards.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Industries Our Team Has Shipped Web Products Across
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed">
            Web products carry different requirements depending on the industry. What works architecturally for one sector can be the wrong foundation for another. The studio has delivered across nine industries and is counting.
          </p>
        </div>

        {/* Homepage-Style Hairline Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 cursor-pointer min-h-[260px] h-full select-none"
            >
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.name}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
