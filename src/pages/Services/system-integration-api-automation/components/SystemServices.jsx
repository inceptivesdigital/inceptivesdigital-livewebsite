import { Activity, Cloud, Code2, Database, GitBranch, Layers, Network, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'API Integration Development',
    description:
      'Our custom software development approach includes API integrations that connect applications, databases, and platforms into a unified operational environment.',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Data Synchronization',
    description:
      'Systems that ensure data consistency across tools by enabling continuous, real-time synchronization between platforms.',
  },
  {
    icon: GitBranch,
    title: 'Cross-System Workflow Integration',
    description:
      'Cross-system connections support digital product development by allowing workflows to move between applications without manual transfer or interruption.',
  },
  {
    icon: Layers,
    title: 'Enterprise Application Integration',
    description:
      'Enterprise integration connects CRM, ERP, internal platforms, AI chatbots, and other business applications into a single connected ecosystem.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Third-Party System Integration',
    description:
      'Secure integration between cloud services, SaaS platforms, and external APIs can connect generative AI, machine learning, and other external intelligence services to existing software.',
  },
  {
    icon: Database,
    title: 'Legacy System Modernization Integration',
    description:
      'Product rescue and scaling can include connecting older systems with modern applications through API layers and middleware-based integration structures.',
  },
  {
    icon: Activity,
    title: 'Middleware & Integration Layer Development',
    description:
      'Middleware systems manage communication, data transformation, and routing between disconnected applications, including data exchanged with NLP systems and computer vision services.',
  },
  {
    icon: Code2,
    title: 'Automation-Ready API Architecture',
    description:
      'API structures designed for future AI development enable scalable system expansion, while early AI MVP development can validate those integrations before a larger automation rollout.',
  },
]

export default function SystemServices() {
  return (
    <section className="bg-[#111214] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mx-auto mb-12 max-w-[1000px] text-center sm:mb-16">
          <h2 className="mb-4 text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">
            System Integration &amp; API Automation Services Built for Connected Operations
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
            Services focused on connecting applications, synchronizing data, and enabling direct system-to-system communication through structured API integration.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-2xl bg-[#1b1c21] p-6 transition-colors duration-200 hover:bg-[#00CE44] sm:p-7"
            >
              <Icon className="mb-5 h-9 w-9 text-[#00CE44] transition-colors group-hover:text-black" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold leading-tight text-[#00CE44] transition-colors group-hover:text-black sm:text-xl">
                {index + 1}. {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80 transition-colors group-hover:text-black/85">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
