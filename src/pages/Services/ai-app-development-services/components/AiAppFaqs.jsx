import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. How much does AI app development cost?',
    a: 'A simple AI proof of concept starts from $15K. A full-scale web or mobile AI application typically ranges from $60K to $300K, depending on complexity, AI capabilities, and infrastructure requirements. The precise number is defined in the Discovery Sprint.',
  },
  {
    q: '2. How long does it take to build an AI app?',
    a: (
      <>
        A focused{' '}
        <Link
          to="/ai-mvp-development"
>
          AI MVP
        </Link>{' '}
        takes 8 to 12 weeks. A full-scale AI application takes 3 to 9 months, depending on scope, data readiness, and integration complexity.
      </>
    ),
  },
  {
    q: '3. What factors influence AI app development cost?',
    a: 'The main cost drivers are the number of AI features, data availability, model complexity, backend infrastructure, third-party integrations, compliance needs, and whether AI is being built from scratch or integrated into an existing product.',
  },
  {
    q: '4. Can AI features be added to an existing app?',
    a: 'Yes. Chatbots, recommendation engines, predictive analytics, NLP pipelines, and computer vision can all be integrated into existing applications without rebuilding them.',
  },
  {
    q: '5. What is the difference between an AI app and a regular app?',
    a: (
      <>
        A regular app adds AI after the core product is built. An AI app is designed around what the intelligence needs to do from the start. The data model,{' '}
        <Link to="/backend-api-development">backend architecture</Link>, and integration layer are all built around the AI requirements.
      </>
    ),
  },
  {
    q: '6. Can AI apps be built for both iOS and Android?',
    a: 'Yes. We build cross-platform applications using Flutter and React Native, as well as native iOS and Android apps using Swift and Kotlin. The right approach depends on your performance requirements and budget.',
  },
  {
    q: '7. Do AI apps require custom data?',
    a: 'Some AI apps need business-specific datasets to perform precisely. Others can leverage pre-trained models or public datasets depending on the use case. Data readiness is evaluated in Discovery before model selection begins.',
  },
  {
    q: '8. Can we start with an AI app MVP?',
    a: (
      <>
        Yes. An{' '}
        <Link
          to="/blog/ai-mvp-development-guide"
>
          AI MVP development approach
        </Link>{' '}
        validates the core concept and identifies the highest-value features before full investment. Typically scoped and delivered in 8 to 12 weeks.
      </>
    ),
  },
]

export default function AiAppFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About{' '}
          <span className="text-[#00CE44]">AI App Development</span> Worth Asking Before You Build
        </>
      }
    />
  )
}
