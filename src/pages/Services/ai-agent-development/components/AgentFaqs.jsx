import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What is an AI agent?',
    a: 'A software system that takes instructions, breaks them into steps, interacts with external systems, makes decisions along the way, and completes workflows without human input at each stage.',
  },
  {
    q: 'How does an AI agent differ from a chatbot?',
    a: (
      <>
        <Link
          to="/ai-chatbot-development-services"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI chatbot
        </Link>{' '}
        handles conversation. An AI agent executes tasks. It interacts with external systems, makes decisions across multiple steps, and completes workflows autonomously. If you need AI to do something rather than say something, you need an agent.
      </>
    ),
  },
  {
    q: 'How much does AI agent development cost?',
    a: (
      <>
        A single-task agent starts at $30K. A multi-agent system with complex orchestration typically ranges from $80K to $200K and above. The precise number is defined in the{' '}
        <Link
          to="/discovery-sprint"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          Discovery Sprint
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: (
      <>
        An AI agent{' '}
        <Link
          to="/ai-mvp-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          MVP
        </Link>{' '}
        takes 8 to 12 weeks. As covered in our{' '}
        <Link
          to="/blog/ai-mvp-development-guide"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          AI MVP development guide
        </Link>
        , a full multi-agent system takes 3 to 6 months, depending on scope, data readiness, and integration complexity.
      </>
    ),
  },
  {
    q: 'Can AI agents integrate with existing enterprise systems?',
    a: (
      <>
        Yes. We connect agents to CRM, ERP, databases, SaaS platforms, internal APIs, and existing{' '}
        <Link
          to="/web-app-development-company"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          web applications
        </Link>
        . Integration architecture is defined in Discovery before development begins.
      </>
    ),
  },
  {
    q: 'What AI agent frameworks do you build with?',
    a: 'LangChain, LlamaIndex, AutoGen, CrewAI, Hugging Face Transformers, PyTorch, and TensorFlow, among others. Framework selection is made in Discovery based on your specific agent requirements.',
  },
  {
    q: 'Can AI agents learn and adapt over time?',
    a: 'Yes. We implement machine learning and adaptive logic so agents continuously improve decision-making accuracy and optimise performance based on real operational data over time.',
  },
  {
    q: 'How do you ensure AI agent reliability and security?',
    a: 'Through rigorous testing, SOC 2 and GDPR compliant architecture, and post-launch monitoring with MLflow that detects drift and triggers retraining when performance degrades.',
  },
]

export default function AgentFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions Worth Asking About{' '}
          <span className="text-[#00CE44]">AI Agent Development</span>
        </>
      }
    />
  )
}
