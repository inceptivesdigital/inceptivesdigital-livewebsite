import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What is an AI agent?',
    a: 'A software system that takes instructions, breaks them into steps, interacts with external systems, makes decisions along the way, and completes workflows without human input at each stage.',
  },
  {
    q: 'How does an AI agent differ from a chatbot?',
    a: (
      <>
        An <a href="https://inceptivesdigital.com/ai-chatbot-development-services">AI chatbot</a> handles conversation. An AI agent executes tasks: it interacts with external systems, makes decisions across multiple steps, and completes workflows autonomously. If you need AI to do something rather than say something, you need an agent.
      </>
    ),
  },
  {
    q: 'How much does AI agent development cost?',
    a: (
      <>
        A single-task agent starts at $30K. A multi-agent system with complex orchestration typically ranges from $80K to $200K and above. The precise number is defined in the{' '}
        <a href="https://inceptivesdigital.com/discovery-sprint">Discovery Sprint</a>.
      </>
    ),
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: (
      <>
        An agent <a href="https://inceptivesdigital.com/ai-mvp-development">MVP</a> takes 8 to 12 weeks. A full multi-agent system takes 3 to 6 months, depending on scope, data readiness, and integration complexity. See our{' '}
        <a href="https://inceptivesdigital.com/blog/ai-mvp-development-guide">AI MVP development guide</a>.
      </>
    ),
  },
  {
    q: 'Can AI agents integrate with existing enterprise systems?',
    a: (
      <>
        Yes. We connect agents to CRM, ERP, databases, SaaS platforms, internal APIs, and existing{' '}
        <a href="https://inceptivesdigital.com/web-app-development-company">web applications</a>. Integration architecture is defined in Discovery before development begins.
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
    a: 'Through rigorous testing, SOC 2- and GDPR-compliant architecture, and post-launch monitoring with MLflow that detects drift and triggers retraining when performance degrades.',
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
