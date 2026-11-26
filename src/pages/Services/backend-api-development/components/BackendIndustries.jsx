import { Link } from 'react-router-dom'

export default function BackendIndustries() {
  const industries = [
    {
      name: 'Fintech',
      desc: 'High-throughput transaction ledgers, payment gateway orchestration, and PCI-compliant APIs built for deterministic financial reliability.',
      icon: '/assets/industries-icons/industries-fintech.svg',
      url: '/fintech-app-development',
    },
    {
      name: 'Healthcare',
      desc: 'HIPAA-aligned patient data pipelines, EHR/HL7 integrations, and encrypted clinical APIs engineered for strict compliance.',
      icon: '/assets/industries-icons/industries-healthcare.svg',
      url: '/healthcare-app-development',
    },
    {
      name: 'E-Commerce',
      desc: 'Real-time inventory synchronization, multi-vendor checkout APIs, and distributed order processing that hold steady under peak traffic.',
      icon: '/assets/industries-icons/industries-cart.svg',
      url: '/ecommerce-app-development-company',
    },
    {
      name: 'SaaS',
      desc: 'Multi-tenant backend architectures, role-based access control, webhook engines, and usage metering built for enterprise scale.',
      icon: '/assets/android-app/automation-1-1.png',
    },
    {
      name: 'Logistics & Supply Chain',
      desc: 'Event-driven fleet tracking, warehouse APIs, and automated dispatch pipelines designed for real-time operational visibility.',
      icon: '/assets/industries-icons/Food-Delivery.svg',
    },
    {
      name: 'EdTech',
      desc: 'Scalable learning content APIs, live assessment backends, and student analytics pipelines supporting concurrent cohorts.',
      icon: '/assets/industries-icons/industries-education.svg',
      url: '/education-app-development-company',
    },
    {
      name: 'Real Estate',
      desc: 'MLS/IDX data ingestion pipelines, geospatial property search APIs, and CRM-integrated booking backends.',
      icon: '/assets/industries-icons/industries-realstate.svg',
      url: '/real-estate-app-development-company',
    },
    {
      name: 'Travel & Hospitality',
      desc: 'GDS and booking aggregator integrations, dynamic pricing APIs, and real-time reservation synchronization across regions.',
      icon: '/assets/industries-icons/industries-traveling1.svg',
    },
    {
      name: 'Media & Entertainment',
      desc: 'Low-latency content delivery APIs, subscription entitlement engines, and real-time streaming telemetry backends.',
      icon: '/assets/industries-icons/industries-fitness.svg',
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
            Building the Infrastructure Across{' '}
            <span className="text-[#00CE44]">20+ High-Growth Markets</span>
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Backend &amp; API development services at Inceptives Digital span 20+ industries, each with its own technical demands, regulatory environment, and infrastructure requirements. The architecture adapts to the sector, not the other way around.
          </p>
        </div>

        {/* Exact Homepage Box Cards Grid (#26282d 1px Hairline Borders, #18191d -> Hover #00CE44) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl items-stretch auto-rows-fr">
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
                  <Link
                    to={ind.url}
                    className="text-[#00CE44] group-hover:text-black transition-colors underline underline-offset-4"
                  >
                    {ind.name}
                  </Link>
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
