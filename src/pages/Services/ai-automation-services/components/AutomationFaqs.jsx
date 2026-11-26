import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What are AI automation services?',
    a: 'The end-to-end process of designing, building, and deploying systems that automate workflows, make decisions, and handle repetitive tasks. Includes RPA, ML-powered decision pipelines, and exception management.',
  },
  {
    q: '2. How is AI automation different from simple rule-based automation?',
    a: 'Traditional automation follows fixed rules. AI automation can learn from data, adapt to exceptions, and optimize workflows without manual intervention.',
  },
  {
    q: '3. How much do AI automation services cost?',
    a: (
      <>
        A focused{' '}
        <Link to="/ai-mvp-development">
          AI MVP
        </Link>{' '}
        for automation starts from $15K, while broader{' '}
        <Link to="/blog/mvp-development-cost">
          MVP development cost
        </Link>{' '}
        depends on workflow complexity, data readiness, integrations, and the level of production infrastructure required.
      </>
    ),
  },
  {
    q: '4. How long does it take to build an AI automation system?',
    a: (
      <>
        A focused{' '}
        <Link to="/mvp-development">
          MVP development
        </Link>{' '}
        cycle for an automation proof of concept typically takes 6–10 weeks, while the full{' '}
        <Link to="/blog/app-development-timeline">
          app development timeline
        </Link>{' '}
        can extend to 3–6 months depending on process complexity, data readiness, and integration needs.
      </>
    ),
  },
  {
    q: '5. What data or inputs are needed to start an AI automation project?',
    a: (
      <>
        It depends on the workflow. Structured data, operational rules, documents, or API access may be required. All requirements are assessed in the{' '}
        <Link to="/discovery-sprint">
          Discovery Sprint
        </Link>
        .
      </>
    ),
  },
  {
    q: '6. Can AI automation systems integrate with existing software?',
    a: 'Yes. AI automation integrates with your CRM, ERP, helpdesk, databases, and internal platforms. Integration architecture is scoped in Discovery.',
  },
  {
    q: '7. Can AI automation handle multiple workflows or departments?',
    a: 'Yes. We design scalable automation pipelines capable of managing multiple processes simultaneously with consistent accuracy and reliability.',
  },
  {
    q: '8. How do you hire AI automation developers for a project?',
    a: 'Start with a Discovery Sprint to define scope, architecture, and team requirements. We then assign the right mix of AI engineers, ML specialists, and RPA developers to your project.',
  },
]

export default function AutomationFaqs() {
  return (
    <FAQSection
      heading="Questions About AI Automation Worth Asking Before You Build"
      faqs={faqs}
    />
  )
}
