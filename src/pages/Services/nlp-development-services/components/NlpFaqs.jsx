import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What are NLP development services?',
    a: 'The end-to-end process of designing, building, training, and deploying systems that understand, process, and act on human language. Text classification, entity extraction, sentiment analysis, semantic search, and speech recognition are all NLP development services.',
  },
  {
    q: '2. How is NLP different from traditional text search?',
    a: 'Traditional text search matches keywords. NLP understands meaning, context, and intent. A keyword search finds documents containing a word. An NLP system understands what the user is looking for and surfaces the most relevant result regardless of the exact words used.',
  },
  {
    q: '3. How much does NLP development cost?',
    a: (
      <>
        <Link to="/ai-mvp-development">
          AI MVP development
        </Link>{' '}
        for a focused NLP model or proof of concept starts from $15K. A full production NLP system with data preparation, model training, integration, and deployment typically ranges from $50K to $200K. The precise number is defined in the{' '}
        <Link to="/discovery-sprint">
          Discovery Sprint
        </Link>
        .
      </>
    ),
  },
  {
    q: '4. How long does it take to build an NLP system?',
    a: (
      <>
        A focused{' '}
        <Link to="/mvp-development">
          MVP development
        </Link>{' '}
        cycle for an NLP proof of concept typically takes 6 to 10 weeks. The{' '}
        <Link to="/blog/app-development-timeline">
          app development timeline
        </Link>{' '}
        for a production NLP system typically ranges from 3 to 6 months, depending on data readiness, model complexity, and integration requirements.
      </>
    ),
  },
  {
    q: '5. What data do we need to start an NLP project?',
    a: 'It depends on the use case. Text classification requires labelled text examples. Entity extraction requires annotated documents. Semantic search requires a corpus of relevant content. Data readiness is evaluated in Discovery before development begins.',
  },
  {
    q: '6. Can NLP models be integrated with existing software?',
    a: (
      <>
        Yes.{' '}
        <Link to="/backend-api-development">
          Backend API development
        </Link>{' '}
        connects NLP models with existing software, CRM platforms, helpdesk systems, and business workflows. Integration architecture is defined in Discovery before development begins.
      </>
    ),
  },
  {
    q: '7. Can NLP systems handle multiple languages?',
    a: 'Yes. We build multilingual NLP pipelines that process and understand text across multiple languages with consistent accuracy. Multilingual requirements are scoped in Discovery before model development begins.',
  },
  {
    q: '8. How do you hire an NLP developer for a project?',
    a: 'Start with the Discovery Sprint. It defines the scope, architecture, and team requirements before any hiring begins. We then match the right combination of NLP engineers, data scientists, and ML specialists to your specific build.',
  },
]

export default function NlpFaqs() {
  return (
    <FAQSection
      heading="Questions About NLP Development Worth Asking Before You Build"
      faqs={faqs}
    />
  )
}
