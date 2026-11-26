import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What is RPA development?',
    a: 'RPA development is the creation of software bots that execute structured workflows across systems without manual input.',
  },
  {
    q: '2. What processes can RPA automate?',
    a: 'Rule-based workflows such as data entry, reporting, reconciliation, onboarding, and system updates.',
  },
  {
    q: '3. How is RPA different from AI automation?',
    a: (
      <>
        RPA executes structured workflows.{' '}
        <Link to="/ai-development">
          AI development
        </Link>{' '}
        extends automation beyond deterministic RPA by enabling systems to interpret unstructured data and support more complex decision-making.
      </>
    ),
  },
  {
    q: '4. How long does RPA development take?',
    a: (
      <>
        A focused{' '}
        <Link to="/mvp-development">
          MVP development
        </Link>{' '}
        cycle can validate one RPA workflow first, while the broader{' '}
        <Link to="/blog/app-development-timeline">
          app development timeline
        </Link>{' '}
        depends on process complexity, system connections, and deployment requirements.
      </>
    ),
  },
  {
    q: '5. Can RPA connect to existing systems?',
    a: 'Yes. RPA connects to tools through APIs, connectors, and system-level integrations without replacing existing platforms.',
  },
  {
    q: '6. What are the limitations of RPA?',
    a: 'RPA is designed for structured, rule-based workflows. It requires a clearly defined process logic to operate reliably.',
  },
  {
    q: '7. Does RPA require maintenance?',
    a: (
      <>
        Automation systems need continuous improvement as workflows and connected systems evolve, since treating deployment as the finish line is one of the common reasons{' '}
        <Link to="/blog/common-reasons-digital-products-fail">
          digital products fail
        </Link>
        .
      </>
    ),
  },
  {
    q: '8. How do you decide which process to automate?',
    a: (
      <>
        For intelligent automation concepts, the validation approach described in our{' '}
        <Link to="/blog/ai-mvp-development-guide">
          AI MVP development guide
        </Link>{' '}
        can help test feasibility before expanding automation across a larger process.
      </>
    ),
  },
]

export default function RpaFaqs() {
  return (
    <FAQSection
      heading="Questions About RPA Development Services"
      faqs={faqs}
    />
  )
}
