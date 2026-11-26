import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does AI chatbot development cost?',
    a: (
      <>
        A simple customer support chatbot starts at $15K. A full enterprise knowledge assistant or RAG-based chatbot typically ranges from $40K to $150K, depending on complexity, integrations, and data infrastructure requirements. The precise number is defined in the{' '}
        <Link
          to="/discovery-sprint"
>
          Discovery Sprint
        </Link>
        .
      </>
    ),
  },
  {
    q: '2. How long does it take to build an AI chatbot?',
    a: (
      <>
        A focused{' '}
        <Link
          to="/ai-mvp-development"
>
          AI MVP development
        </Link>{' '}
        cycle for a chatbot takes 6 to 10 weeks. According to the{' '}
        <Link
          to="/blog/ai-mvp-development-guide"
>
          AI MVP development guides
        </Link>
        , a full enterprise chatbot with complex integrations and RAG architecture takes 3 to 6 months, depending on scope, data readiness, and integration complexity.
      </>
    ),
  },
  {
    q: '3. What is the difference between an AI chatbot and a rule-based chatbot?',
    a: 'A rule-based chatbot follows predefined scripts and breaks when users go off-script. An AI chatbot built on natural language processing understands intent, retains context across conversations, and improves with every interaction. The difference shows up immediately in production.',
  },
  {
    q: '4. Can an AI chatbot be integrated with our existing systems?',
    a: (
      <>
        Yes. We integrate chatbots with CRM platforms, helpdesk systems, knowledge bases, databases, and existing{' '}
        <Link to="/web-app-development-company">web applications</Link> and{' '}
        <Link to="/mobile-app-development">mobile applications</Link>. Integration architecture is defined in Discovery before development begins.
      </>
    ),
  },
  {
    q: '5. What is a RAG-based chatbot, and when do we need one?',
    a: "A RAG-based chatbot connects the AI model to your company's knowledge base, databases, and APIs so responses are grounded in your specific data rather than general model knowledge. You need one when accuracy, source traceability, and domain-specific responses are non-negotiable.",
  },
  {
    q: '6. Can AI chatbots handle multiple languages?',
    a: 'Yes. We build multilingual chatbots with NLP pipelines that support multiple languages, context retention across language switches, and consistent conversation quality across every language the chatbot serves.',
  },
  {
    q: '7. How do you ensure chatbot accuracy and reliability?',
    a: 'Through rigorous testing against real conversation data, NLP pipeline validation, and RAG architecture that grounds responses in verified sources. Post-launch monitoring with MLflow detects drift and triggers retraining when accuracy degrades.',
  },
  {
    q: '8. Do you provide support after the chatbot goes live?',
    a: 'Yes. We provide ongoing monitoring, conversation flow optimization, model retraining, and system updates to keep the chatbot performing accurately under real user load over time.',
  },
]

export default function ChatbotFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About{' '}
          <span className="text-[#00CE44]">AI Chatbot Development</span> Worth Asking Before You Build
        </>
      }
    />
  )
}
