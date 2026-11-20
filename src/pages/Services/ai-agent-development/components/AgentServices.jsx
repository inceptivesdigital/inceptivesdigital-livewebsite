import {
  BrainCircuit,
  Database,
  Headset,
  Network,
  Settings2,
  Workflow,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI Agent Development',
    description: (
      <>
        Our <a href="https://inceptivesdigital.com/custom-software-development">custom software development</a> approach creates autonomous agents around your business workflows, operational requirements, and system architecture. Built from the ground up for your use case, not adapted from a generic template.
      </>
    ),
  },
  {
    icon: Workflow,
    title: 'Enterprise Workflow Automation Agents',
    description: (
      <>
        Our <a href="https://inceptivesdigital.com/ai-automation-services">AI automation services</a> use agents to manage multi-step processes, reduce manual intervention, and execute decisions across enterprise systems.
      </>
    ),
  },
  {
    icon: Zap,
    title: 'AI Copilots and Productivity Assistants',
    description: (
      <>
        Through <a href="https://inceptivesdigital.com/ai-development">AI app development</a>, intelligent agents are embedded into internal tools to assist teams with recommendations, task prioritisation, analytics, and workflow automation. They augment the tools and teams you already use.
      </>
    ),
  },
  {
    icon: Database,
    title: 'RAG-Enabled Knowledge Agents',
    description: (
      <>
        Agents connect to structured and unstructured enterprise data for context-aware decision support and knowledge retrieval. Our <a href="https://inceptivesdigital.com/generative-ai-development-company">generative AI development</a> grounds responses in your business data when general model knowledge is not precise enough.
      </>
    ),
  },
  {
    icon: Network,
    title: 'Multi-System and API Integration',
    description: (
      <>
        <a href="https://inceptivesdigital.com/system-integration-api-automation">System integration and API automation</a> connect agents to your CRM, ERP, databases, and SaaS platforms for seamless cross-system workflow execution.
      </>
    ),
  },
  {
    icon: Headset,
    title: 'Voice and Conversational Agents',
    description:
      'Voice-enabled AI agents for call centres, IVR systems, and enterprise voice workflows, built for operational contexts where real-time speech interaction is a requirement.',
  },
  {
    icon: Settings2,
    title: 'AI Model Training and Optimization',
    description: (
      <>
        <a href="https://inceptivesdigital.com/machine-learning-development-services">Machine learning</a> models trained and fine-tuned for decision-making, predictive analytics, and adaptive agent behaviour, designed to improve with every operational cycle.
      </>
    ),
  },
]

export default function AgentServices() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            AI Agent Development Services Built Around Every Operational Use Case
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Seven capabilities. Each one is scoped precisely in Discovery and built for the specific workflows and systems your business runs on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200 [&_a]:text-[#00CE44] [&_a]:underline group-hover:[&_a]:text-black"
            >
              <Icon
                className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors"
                strokeWidth={1.7}
              />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl font-bold mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[15px] leading-relaxed transition-colors">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
