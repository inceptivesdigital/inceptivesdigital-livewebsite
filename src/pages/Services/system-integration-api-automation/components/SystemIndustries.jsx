const industries = [
  {
    title: 'Finance',
    icon: '/assets/industries-icons/industries-fintech.svg',
    alt: 'Finance',
    items: [
      'Core banking and accounting system integration',
      'Real-time transaction data synchronization',
      'Regulatory reporting system connectivity',
    ],
  },
  {
    title: 'Healthcare',
    icon: '/assets/industries-icons/industries-healthcare.svg',
    alt: 'Healthcare',
    items: [
      'Patient system and database integration',
      'Insurance and claims platform connectivity',
      'Medical data synchronization across tools',
    ],
  },
  {
    title: 'Retail',
    icon: '/assets/industries-icons/industries-cart.svg',
    alt: 'Retail',
    items: [
      'E-commerce and inventory system integration',
      'Order management and fulfillment syncing',
      'Payment and CRM system connectivity',
    ],
  },
  {
    title: 'Manufacturing',
    icon: '/assets/industries-icons/industries-realstate.svg',
    alt: 'Manufacturing',
    items: [
      'ERP and production system integration',
      'Quality and reporting data synchronization',
      'Supply chain system connectivity',
    ],
  },
  {
    title: 'Logistics',
    icon: '/assets/industries-icons/industries-traveling1.svg',
    alt: 'Logistics',
    items: [
      'Tracking and warehouse system integration',
      'Shipment data synchronization across platforms',
      'Documentation and transport system connectivity',
    ],
  },
  {
    title: 'Internal Operations',
    icon: '/assets/industries-icons/industries-startup.svg',
    alt: 'Internal operations',
    items: [
      'HR, payroll, and internal tool integration',
      'Cross-department system connectivity',
      'Internal reporting and data synchronization',
    ],
  },
]

export default function SystemIndustries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#0d0e11] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
            Industries Operating Through Integrated Software Systems
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            Every industry depends on connected systems. We build integrations that remove manual data transfer and unify operations across platforms and tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#26282d] bg-[#26282d] shadow-2xl sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon, alt, title, items }) => (
            <article
              key={title}
              className="group flex h-full min-h-[300px] flex-col justify-start bg-[#18191d] p-6 transition-all duration-300 hover:bg-[#00CE44] sm:p-7 lg:min-h-[330px] xl:p-8"
            >
              <div className="mb-6 flex h-[35px] w-[35px] shrink-0 items-center justify-start sm:mb-8">
                <img
                  src={icon}
                  alt={alt}
                  className="h-[35px] w-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#00CE44] transition-colors duration-300 group-hover:text-black sm:text-[25px]">
                {title}
              </h3>
              <ul className="list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-black sm:text-base">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
