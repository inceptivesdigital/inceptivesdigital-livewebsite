import {
  BrainCircuit,
  Database,
  Headset,
  Network,
  Settings2,
  Workflow,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: BrainCircuit,
    title: '1. Custom AI Agent Development',
    description: (
      <>
        Our <Link to="/custom-software-development">custom software development</Link> approach creates autonomous agents around your specific business workflows, operational requirements, and system architecture. Built from the ground up for your use case, not adapted from a generic template.
      </>
    ),
  },
  {
    icon: Workflow,
    title: '2. Enterprise Workflow Automation Agents',
    description: (
      <>
        Our <Link to="/ai-automation-services">AI automation services</Link> use agents to manage multi-step operational processes, reduce manual intervention, and execute decisions across enterprise systems without human input at every stage.
      </>
    ),
  },
  {
    icon: Zap,
    title: '3. AI Copilots and Productivity Assistants',
    description: (
      <>
        In <Link to="/ai-development">AI app development</Link>, the Intelligent agents embedded into internal tools to assist teams with recommendations, task prioritisation, analytics, and workflow automation. Built to augment the tools and teams you already use rather than frame adoption around{' '}
        <Link to="/blog/will-ai-really-replace-app-developers">AI replacing app developers</Link>.
      </>
    ),
  },
  {
    icon: Database,
    title: '4. RAG Enabled Knowledge Agents',
    description: (
      <>
        Agents connected to your structured and unstructured enterprise data for context-aware decision support and knowledge retrieval. Built for organisations where{' '}
        <Link to="/generative-ai-development-company">generative AI development</Link> must be grounded in enterprise data because general model knowledge is not precise enough.
      </>
    ),
  },
  {
    icon: Network,
    title: '5. Multi-System and API Integration',
    description: (
      <>
        <Link to="/system-integration-api-automation">System integration and API automation</Link> connect AI agents to your CRM, ERP, databases, and SaaS platforms for seamless cross-system workflow execution. Built for businesses that need agents to operate across the full technology stack.
      </>
    ),
  },
  {
    icon: Headset,
    title: '6. Voice and Conversational Agents',
    description:
      'Voice-enabled AI agents for call centres, IVR systems, and enterprise voice workflows. Built for operational contexts where real-time speech interaction is a requirement.',
  },
  {
    icon: Settings2,
    title: '7. AI Model Training and Optimization',
    description: (
      <>
        <Link to="/machine-learning-development-services">Machine learning</Link> models trained and fine-tuned for decision-making, predictive analytics, and adaptive agent behaviour. Built for agents who need to improve with every operational cycle.
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
