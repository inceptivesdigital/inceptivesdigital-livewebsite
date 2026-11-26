import { Link } from 'react-router-dom'
const industries = [
  {
    title: '1. Fintech',
    icon: '/assets/industries-icons/industries-fintech.svg',
    alt: 'Fintech',
    items: [
      'Transaction validation and automated reporting',
      'Compliance checks and regulatory workflow automation',
      <>
        <Link
          to="/ai-chatbot-development-services"
          className="text-white underline group-hover:text-black"
>
          AI chatbot development
        </Link>{' '}
        for customer query handling and intent-based routing
      </>,
    ],
  },
  {
    title: '2. Healthcare',
    icon: '/assets/industries-icons/industries-healthcare.svg',
    alt: 'Healthcare',
    items: [
      'Clinical documentation extraction and summarisation',
      'Patient workflow automation and symptom triage',
      'Medical record reconciliation and reporting',
    ],
  },
  {
    title: '3. Legal and Professional Services',
    icon: '/assets/industries-icons/industries-realstate.svg',
    alt: 'Professional services',
    items: [
      'Contract analysis and clause extraction',
      'Legal document summarisation and comparison',
      'Research assistance and precedent retrieval',
    ],
  },
  {
    title: '4. E-commerce',
    icon: '/assets/industries-icons/industries-cart.svg',
    alt: 'E-commerce',
    items: [
      'Product catalog updates and content enrichment',
      'Customer order workflow automation',
      'Support ticket routing and intent-based handling',
    ],
  },
  {
    title: '5. Media and Publishing',
    icon: '/assets/industries-icons/industries-education.svg',
    alt: 'Media and publishing',
    items: [
      'Automated content tagging and classification',
      'Semantic search across content libraries',
      <>
        <Link
          to="/generative-ai-development-company"
          className="text-white underline group-hover:text-black"
>
          Generative AI development
        </Link>{' '}
        for content summarisation and repurposing
      </>,
    ],
  },
  {
    title: '6. Enterprise Operations',
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
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
            Industries Where Our AI Automation Services Deliver Operational Impact
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Every industry has unique processes, data flows, and operational bottlenecks. We build automation for the specific context.
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
