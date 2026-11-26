import { Link } from 'react-router-dom'
const industries = [
  {
    title: '1. Finance',
    icon: '/assets/industries-icons/industries-fintech.svg',
    alt: 'Finance',
    items: [
      'Invoice processing and reconciliation automation',
      'Compliance and reporting workflow automation',
      'Cross-system financial data synchronization',
    ],
  },
  {
    title: '2. Healthcare',
    icon: '/assets/industries-icons/industries-healthcare.svg',
    alt: 'Healthcare',
    items: [
      'Patient record processing and data handling automation',
      'Scheduling and appointment workflow automation',
      'Claims and insurance processing workflows',
    ],
  },
  {
    title: '3. Retail',
    icon: '/assets/industries-icons/industries-cart.svg',
    alt: 'Retail',
    items: [
      'Order processing and fulfillment automation',
      'Inventory and stock update workflows',
      <>
        <Link
          to="/nlp-development-services"
          className="text-white underline group-hover:text-black"
>
          Natural language processing
        </Link>{' '}
        for customer support automation, request classification, and routing
      </>,
    ],
  },
  {
    title: '4. Manufacturing',
    icon: '/assets/industries-icons/industries-realstate.svg',
    alt: 'Manufacturing',
    items: [
      'Production tracking and reporting automation',
      <>
        <Link
          to="/computer-vision-development-services"
          className="text-white underline group-hover:text-black"
>
          Computer vision
        </Link>{' '}
        for quality control, combined with{' '}
        <Link
          to="/machine-learning-development-services"
          className="text-white underline group-hover:text-black"
>
          machine learning
        </Link>{' '}
        for anomaly detection and exception routing
      </>,
      'Supply chain data synchronization',
    ],
  },
  {
    title: '5. Logistics',
    icon: '/assets/industries-icons/industries-traveling1.svg',
    alt: 'Logistics',
    items: [
      'Shipment tracking and status update automation',
      'Cross-platform data synchronization workflows',
      'Documentation and compliance automation',
    ],
  },
  {
    title: '6. Internal Operations',
    icon: '/assets/industries-icons/industries-startup.svg',
    alt: 'Internal operations',
    items: [
      'HR onboarding and offboarding workflows',
      'Task routing and approval automation',
      'Internal reporting and compliance processes',
    ],
  },
]

export default function BusinessProcessIndustries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#0d0e11] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px] lg:text-[42px]">
            Cross-Industry Business Process Automation Services
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            Every industry runs structured workflows. We automate the processes that still depend on manual execution across tools and teams.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#26282d] bg-[#26282d] shadow-2xl sm:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr">
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
              <ul className="space-y-2">
                {items.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors duration-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
