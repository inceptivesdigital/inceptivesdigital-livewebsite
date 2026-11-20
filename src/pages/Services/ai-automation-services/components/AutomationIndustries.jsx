const industries = [
  {
    title: 'Fintech',
    icon: '/assets/industries-icons/industries-fintech.svg',
    alt: 'Fintech',
    items: [
      'Transaction validation and automated reporting',
      'Compliance checks and regulatory workflow automation',
      'AI chatbot development for customer query handling and intent-based routing',
    ],
  },
  {
    title: 'Healthcare',
    icon: '/assets/industries-icons/industries-healthcare.svg',
    alt: 'Healthcare',
    items: [
      'Clinical documentation extraction and summarisation',
      'Patient workflow automation and symptom triage',
      'Medical record reconciliation and reporting',
    ],
  },
  {
    title: 'Legal and Professional Services',
    icon: '/assets/industries-icons/industries-realstate.svg',
    alt: 'Professional services',
    items: [
      'Contract analysis and clause extraction',
      'Legal document summarisation and comparison',
      'Research assistance and precedent retrieval',
    ],
  },
  {
    title: 'E-commerce',
    icon: '/assets/industries-icons/industries-cart.svg',
    alt: 'E-commerce',
    items: [
      'Product catalog updates and content enrichment',
      'Customer order workflow automation',
      'Support ticket routing and intent-based handling',
    ],
  },
  {
    title: 'Media and Publishing',
    icon: '/assets/industries-icons/industries-education.svg',
    alt: 'Media and publishing',
    items: [
      'Automated content tagging and classification',
      'Semantic search across content libraries',
      'Generative AI development for content summarisation and repurposing',
    ],
  },
  {
    title: 'Enterprise Operations',
    icon: '/assets/industries-icons/industries-startup.svg',
    alt: 'Enterprise operations',
    items: [
      'Payroll processing and compliance monitoring',
      'Task automation across departments',
      'Exception handling and escalation routing',
    ],
  },
]

export default function AutomationIndustries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#0d0e11] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto mb-12 max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight sm:mb-16 sm:text-4xl lg:text-[40px]">
          Industries Where Our AI Automation Services Deliver Operational Impact
        </h2>
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
              <p className="text-[15px] font-normal leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-black sm:text-base">
                {items.join('. ')}.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
