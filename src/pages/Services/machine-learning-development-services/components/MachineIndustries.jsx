import { Activity, BrainCircuit, FileSearch, Network, Settings2, Workflow } from 'lucide-react'

const industries = [
  {
    icon: BrainCircuit,
    name: 'Fintech and Financial Services',
    bullets: ['Fraud and anomaly detection', 'Credit scoring systems', 'Real-time transaction monitoring'],
  },
  {
    icon: Activity,
    name: 'Ecommerce and Retail',
    bullets: ['Recommendation engines', 'Dynamic pricing and demand forecasting', 'Customer segmentation and churn prediction'],
  },
  {
    icon: FileSearch,
    name: 'Healthcare',
    bullets: ['Clinical decision support', 'Medical data classification', 'Patient risk scoring and outcome prediction'],
  },
  {
    icon: Settings2,
    name: 'Manufacturing and Operations',
    bullets: ['Predictive maintenance and equipment monitoring', 'Quality inspection with computer vision', 'Supply chain optimization'],
  },
  {
    icon: Network,
    name: 'SaaS and Technology',
    bullets: [
      <>
        In-product recommendation engines for{' '}
        <a
          href="https://inceptivesdigital.com/blog/ai-powered-mobile-apps-uae-business-operations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline group-hover:text-black"
        >
          AI-powered mobile apps
        </a>{' '}
        and SaaS platforms
      </>,
      'Predictive analytics and user behaviour modelling',
      'Anomaly detection and automated alerts',
    ],
  },
  {
    icon: Workflow,
    name: 'Real Estate',
    bullets: ['Property valuation and price prediction', 'Lead scoring and qualification', 'Market trend analysis'],
  },
]

export default function MachineIndustries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-5 max-w-4xl mx-auto">
          Machine Learning Development Services Across Key Industries
        </h2>
        <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] text-center max-w-[960px] mx-auto mb-12 sm:mb-16">
          Every industry has different data structures, operational requirements, and performance standards. We build for the specific context, not a generic template.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl items-stretch auto-rows-fr">
          {industries.map(({ icon: Icon, name, bullets }) => (
            <article
              key={name}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-colors duration-300 min-h-[280px] h-full"
            >
              <Icon className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-6 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors leading-tight mb-3">
                {name}
              </h3>
              <ul className="space-y-2">
                {bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-300 group-hover:text-black transition-colors leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors" />
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
