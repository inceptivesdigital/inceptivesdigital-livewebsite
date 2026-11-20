import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What are NLP development services?',
    a: 'The end-to-end process of designing, building, training, and deploying systems that understand, process, and act on human language. Text classification, entity extraction, sentiment analysis, semantic search, and speech recognition are all NLP development services.',
  },
  {
    q: 'How is NLP different from traditional text search?',
    a: 'Traditional text search matches keywords. NLP understands meaning, context, and intent. A keyword search finds documents containing a word. An NLP system understands what the user is looking for and surfaces the most relevant result regardless of the exact words used.',
  },
  {
    q: 'How much does NLP development cost?',
    a: (
      <>
        <a href="https://inceptivesdigital.com/ai-mvp-development" target="_blank" rel="noopener noreferrer">
          AI MVP development
        </a>{' '}
        for a focused NLP model or proof of concept starts from $15K. A full production NLP system with data preparation, model training, integration, and deployment typically ranges from $50K to $200K. The precise number is defined in the{' '}
        <a href="https://inceptivesdigital.com/discovery-sprint" target="_blank" rel="noopener noreferrer">
          Discovery Sprint
        </a>
        .
      </>
    ),
  },
  {
    q: 'How long does it take to build an NLP system?',
    a: (
      <>
        A focused{' '}
        <a href="https://inceptivesdigital.com/mvp-development" target="_blank" rel="noopener noreferrer">
          MVP development
        </a>{' '}
        cycle for an NLP proof of concept typically takes 6 to 10 weeks. The{' '}
        <a href="https://inceptivesdigital.com/blog/app-development-timeline" target="_blank" rel="noopener noreferrer">
          app development timeline
        </a>{' '}
        for a production NLP system typically ranges from 3 to 6 months, depending on data readiness, model complexity, and integration requirements.
      </>
    ),
  },
  {
    q: 'What data do we need to start an NLP project?',
    a: 'It depends on the use case. Text classification requires labelled text examples. Entity extraction requires annotated documents. Semantic search requires a corpus of relevant content. Data readiness is evaluated in Discovery before development begins.',
  },
  {
    q: 'Can NLP models be integrated with existing software?',
    a: (
      <>
        Yes.{' '}
        <a href="https://inceptivesdigital.com/backend-api-development" target="_blank" rel="noopener noreferrer">
          Backend API development
        </a>{' '}
        connects NLP models with existing software, CRM platforms, helpdesk systems, and business workflows. Integration architecture is defined in Discovery before development begins.
      </>
    ),
  },
  {
    q: 'Can NLP systems handle multiple languages?',
    a: 'Yes. We build multilingual NLP pipelines that process and understand text across multiple languages with consistent accuracy. Multilingual requirements are scoped in Discovery before model development begins.',
  },
  {
    q: 'How do you hire an NLP developer for a project?',
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
