import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What are generative AI development services?',
    a: 'The design, engineering, and deployment of systems that create text, images, summaries, and other outputs from business data and user input.',
  },
  {
    q: '2. How is generative AI different from traditional AI?',
    a: 'Traditional AI classifies and predicts. Generative AI creates. Text, images, summaries, and decisions are produced from learned patterns and supplied context. That difference determines how the system is designed and governed.',
  },
  {
    q: '3. How does generative AI work?',
    a: (
      <>
        <Link to="/machine-learning-development-services">Machine learning</Link> models, including deep learning systems trained on large datasets, recognise patterns and produce new content. In business applications,{' '}
        <Link to="/backend-api-development">backend API development</Link> connects models to private data and retrieval systems to ground outputs in accurate and relevant information.
      </>
    ),
  },
  {
    q: '4. What generative AI applications can you build?',
    a: (
      <>
        Knowledge assistants, document intelligence systems, content generation platforms,{' '}
        <Link to="/ai-chatbot-development-services">AI chatbots</Link> for customer support, embedded copilots,{' '}
        <Link to="/blog/ai-powered-mobile-apps-uae-business-operations">AI-powered mobile apps</Link>, image generation workflows, and generative AI SaaS products.
      </>
    ),
  },
  {
    q: '5. What is RAG in generative AI development?',
    a: 'RAG connects a model to your approved documents, databases, or knowledge sources so responses are grounded in your data rather than general model knowledge.',
  },
  {
    q: '6. Can generative AI connect with our existing software?',
    a: (
      <>
        Yes. It integrates with CRM, ERP, CMS, SaaS platforms, databases, internal APIs, and existing{' '}
        <Link to="/web-app-development-company">web applications</Link> and{' '}
        <Link to="/mobile-app-development">mobile applications</Link> without replacing existing systems. Integration architecture is defined in Discovery before development begins.
      </>
    ),
  },
  {
    q: '7. Do you use proprietary or open-source models?',
    a: 'Both. Model selection depends on privacy, accuracy, latency, context length, and operating cost. We evaluate options in Discovery based on your specific requirements.',
  },
  {
    q: '8. How do you improve accuracy in generative AI systems?',
    a: 'Grounded retrieval, structured prompts, output validation, source attribution, and human review, where the risk justifies it.',
  },
  {
    q: '9. How do you address ethical issues in generative AI?',
    a: 'Through moderation pipelines, bias testing, audit logs, human approval steps, and clear governance rules for how data and generated content are used.',
  },
  {
    q: '10. How much does generative AI development cost?',
    a: (
      <>
        A focused <Link to="/ai-mvp-development">AI MVP</Link> built around a RAG system or generative AI feature starts from $20K. A full platform with complex integrations typically ranges from $80K to $250K. The precise number is defined in the{' '}
        <Link to="/discovery-sprint">Discovery Sprint</Link>.
      </>
    ),
  },
]

export default function GenerativeFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About <span className="text-[#00CE44]">Generative AI Development</span>
        </>
      }
    />
  )
}
