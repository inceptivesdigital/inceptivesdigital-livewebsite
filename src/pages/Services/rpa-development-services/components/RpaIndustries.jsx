import { Building2, Factory, HeartPulse, Landmark, ShoppingCart, Truck } from 'lucide-react'

const industries = [
  {
    title: 'Finance',
    icon: Landmark,
    items: [
      'Invoice processing and reconciliation automation',
      'Compliance checks and regulatory workflow automation',
      'Cross-system financial data synchronisation',
    ],
  },
  {
    title: 'Healthcare',
    icon: HeartPulse,
    items: [
      'Medical record processing and data extraction automation',
      'Patient scheduling and resource management workflows',
      'Claims processing and insurance workflow automation',
    ],
  },
  {
    title: 'Retail',
    icon: ShoppingCart,
    items: [
      'Order processing and fulfilment workflow automation',
      'Inventory tracking and stock level synchronisation',
      'AI chatbot development combined with customer returns and support workflow automation',
    ],
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    items: [
      'Production tracking and operations reporting automation',
      'Quality control data processing and exception routing',
      'Supply chain data synchronisation across platforms',
    ],
  },
  {
    title: 'Logistics',
    icon: Truck,
    items: [
      'Shipment tracking and status update automation',
      'Cross-platform data syncing and reconciliation',
      'Customs documentation and compliance workflow automation',
    ],
  },
  {
    title: 'Enterprise Operations',
    icon: Building2,
    items: [
      'HR onboarding and offboarding workflow automation',
      'Cross-department task routing and escalation systems',
      'Internal reporting and compliance monitoring automation',
    ],
  },
]

export default function RpaIndustries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#0d0e11] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h2 className="mb-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px] lg:text-[42px]">
            Industries Where Our RPA Development Company Delivers Workflow Automation
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
            Every industry has different processes, compliance requirements, and system architectures. We build automation for the specific operational context.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#26282d] bg-[#26282d] shadow-2xl sm:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr">
          {industries.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="group flex h-full min-h-[300px] flex-col bg-[#18191d] p-6 transition-colors duration-300 hover:bg-[#00CE44] sm:p-7 lg:min-h-[330px] xl:p-8"
            >
              <Icon className="mb-6 h-9 w-9 text-[#00CE44] transition-colors group-hover:text-black sm:mb-8" strokeWidth={2} aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#00CE44] transition-colors group-hover:text-black sm:text-[25px]">
                {title}
              </h3>
              <ul className="list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-slate-300 transition-colors group-hover:text-black sm:text-base">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
