import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery and Conversational Strategy',
    desc: (
      <>
        Our{' '}
        <a
          href="https://inceptivesdigital.com/product-strategy-consulting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          product strategy consulting
        </a>{' '}
        process maps business objectives, identifies user personas, and defines key chatbot use cases before development begins. The output is a clear build plan before a line of code is written.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Conversation Design',
    cardTitle: '2. Conversation Design and Architecture Planning',
    desc: 'Dialogue flows, response patterns, fallback mechanisms, and escalation paths are designed upfront. Multi-layer architecture, tech stack, and integration requirements are defined before development starts.',
  },
  {
    num: '03.',
    tabTitle: 'AI Models',
    cardTitle: '3. AI Model Selection and Development',
    desc: (
      <>
        <Link
          to="/ai-development"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          AI development
        </Link>{' '}
        starts with models selected for your specific use case. LLMs like GPT and Claude for{' '}
        <a
          href="https://inceptivesdigital.com/generative-ai-development-company"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          generative AI development
        </a>{' '}
        and conversational experiences. RAG architectures with Pinecone or Weaviate for knowledge-grounded responses. NLP pipelines for intent recognition and context management.
      </>
    ),
  },
  {
    num: '04.',
    tabTitle: 'Build & QA',
    cardTitle: '4. Development, Integration, and Testing',
    desc: 'Chatbot built and integrated with your CRM, knowledge bases, and existing systems. Unit, integration, and system testing completed before deployment. AI outputs validated against real conversations.',
  },
  {
    num: '05.',
    tabTitle: 'Deploy & MLOps',
    cardTitle: '5. Deployment, Monitoring and Optimization',
    desc: (
      <>
        Deployed on AWS SageMaker, Google Vertex AI, or Azure ML. MLflow tracks performance and detects drift.{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
        >
          Post-launch analytics and iteration
        </Link>{' '}
        keep conversation flows updated based on real user interactions.
      </>
    ),
  },
]

export default function ChatbotProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          The Process Our AI Chatbot Development Company Follows{' '}
          <span className="text-[#00CE44]">to Ship Production</span>
        </>
      }
      subtitle={
        <>
          Our{' '}
          <a
            href="https://inceptivesdigital.com/digital-product-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:opacity-80 transition-colors"
          >
            digital product development
          </a>{' '}
          process moves fast because we know exactly where we are going before we start.
        </>
      }
      steps={steps}
    />
  )
}
