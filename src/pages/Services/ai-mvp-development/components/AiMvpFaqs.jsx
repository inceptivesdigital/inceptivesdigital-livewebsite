import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. What is an AI MVP?',
    a: (
      <>
        A focused, time-boxed build that validates a single AI concept before full investment begins. The goal of{' '}
        <Link to="/mvp-development">MVP development</Link> is not a finished product; it is proof that the concept is technically feasible, the data supports the model, and the architecture can scale without being rebuilt.
      </>
    ),
  },
  {
    q: '2. How much does AI MVP development cost?',
    a: (
      <>
        <Link to="/blog/mvp-development-cost">MVP development cost</Link> for a focused AI product typically ranges from $15K to $60K, depending on AI complexity, data readiness, and the interface required for real-user testing. Defined precisely in the Discovery Sprint.
      </>
    ),
  },
  {
    q: '3. How long does it take to build an AI MVP?',
    a: (
      <>
        Eight to twelve weeks for a focused{' '}
        <Link to="/blog/ai-mvp-development-guide">AI MVP development</Link>. Timeline depends on data readiness, model complexity, and the scope confirmed in the Concept Lock stage.
      </>
    ),
  },
  {
    q: '4. What is the difference between an AI MVP and a proof of concept?',
    a: 'A proof of concept tests whether something is technically possible. An AI MVP tests whether it works with real data, real users, and real operational conditions. An MVP is a proof of concept built to production-quality standards with a clear path to a full build.',
  },
  {
    q: '5. How do I know if my idea is ready for an AI MVP?',
    a: 'If the use case is defined, some relevant data exists, and the business problem is clear enough to set measurable success criteria, it is ready. The AI Readiness Assessment evaluates your specific situation before the first conversation.',
  },
  {
    q: '6. What data do I need to start an AI MVP?',
    a: 'It depends on the use case. Some MVPs need labelled datasets. Others need documents, transaction records, or API access to existing systems. Data readiness is evaluated in the Data Audit stage before model development begins.',
  },
  {
    q: '7. Can an AI MVP be built on a startup budget?',
    a: 'Yes. The Startup AI MVP engagement is scoped specifically for early-stage companies with limited runway. Core concept validated, architecture confirmed, and proof delivered without over-engineering. Starting from $15K.',
  },
  {
    q: '8. How do you choose the right AI MVP development partner?',
    a: 'Look for a studio that starts with Discovery before development, has shipped production AI systems, not just proofs of concept, and will tell you honestly if the concept is not ready to build. The Discovery Sprint is where that conversation happens.',
  },
]

export default function AiMvpFaqs() {
  return (
    <FAQSection
      heading="Questions About AI MVP Development Worth Asking Before You Start"
      subtitle="The answers that matter before the first conversation."
      faqs={faqs}
    />
  )
}
