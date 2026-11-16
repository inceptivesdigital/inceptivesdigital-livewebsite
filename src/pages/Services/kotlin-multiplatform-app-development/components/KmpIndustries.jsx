export default function KmpIndustries() {
  const industries = [
    {
      name: 'Fintech',
      desc: 'Deterministic financial calculations, encrypted transactions, and multi-currency ledger logic shared identically across iOS and Android.',
      icon: '/assets/industries-icons/industries-fintech.svg',
      url: 'https://inceptivesdigital.com/fintech-app-development',
    },
    {
      name: 'Healthtech',
      desc: 'HIPAA-aligned clinical workflows, medical data processing, and offline-first patient records with native iOS and Android interfaces.',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      url: 'https://inceptivesdigital.com/healthcare-app-development',
    },
    {
      name: 'Enterprise SaaS',
      desc: 'Complex multi-tenant state management, offline synchronization, and role-based workflows shared across mobile, web, and desktop.',
      icon: '/assets/android-app/automation-1-1.png',
    },
    {
      name: 'Logistics',
      desc: 'Route calculation engines, real-time fleet telemetry, and offline warehouse scanning modules engineered in shared Kotlin.',
      icon: '/assets/industries-icons/Food-Delivery.svg',
    },
    {
      name: 'Legal and Compliance Tech',
      desc: 'Audit-ready regulatory rule engines, encrypted document workflows, and compliance validation layers shared across all client platforms.',
      icon: '/assets/industries-icons/industries-realstate.svg',
    },
    {
      name: 'EdTech',
      desc: 'Adaptive learning algorithms, offline course synchronization, and real-time assessment scoring unified in one Kotlin module.',
      icon: '/assets/industries-icons/industries-education.svg',
      url: 'https://inceptivesdigital.com/education-app-development-company',
    },
    {
      name: 'Media',
      desc: 'Cross-platform content indexing, playback state synchronization, and subscription entitlement logic with native platform players.',
      icon: '/assets/industries-icons/industries-traveling1.svg',
    },
    {
      name: 'Insurance',
      desc: 'Actuarial quoting rules, policy management logic, and offline claims inspection workflows shared cleanly across Android and iOS.',
      icon: '/assets/industries-icons/industries-cart.svg',
    },
    {
      name: 'Real Estate',
      desc: 'Property valuation models, mortgage calculation engines, and offline inspection sync paired with native SwiftUI and Jetpack Compose UI.',
      icon: '/assets/industries-icons/industries-realstate.svg',
      url: 'https://inceptivesdigital.com/real-estate-app-development-company',
    },
  ]

  return (
    <section
      id="industries"
      className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            Industries We Build{' '}
            <span className="text-[#00CE44]">KMP Solutions</span> For
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            KMP earns its place in products where business logic is complex, platform standards are non-negotiable, and multi-platform delivery is the baseline requirement. Proficient in KMP across 20-plus verticals where that experience runs deepest.
          </p>
        </div>

        {/* Exact Homepage Box Cards Grid (#26282d 1px Hairline Borders, #18191d -> Hover #00CE44) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[280px] lg:min-h-[300px] h-full select-none text-left"
            >
              {/* Icon (35px x 35px): Green by default, Solid Black on Card Hover */}
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              {/* Title: H3 tag, 23px font-size bold */}
              <h3 className="text-[20px] sm:text-[23px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.url ? (
                  <a
                    href={ind.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00CE44] group-hover:text-black transition-colors"
                  >
                    {ind.name}
                  </a>
                ) : (
                  ind.name
                )}
              </h3>

              {/* Description: 16px font-size */}
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
