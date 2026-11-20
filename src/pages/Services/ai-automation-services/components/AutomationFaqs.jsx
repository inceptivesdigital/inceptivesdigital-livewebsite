import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What are AI automation services?',
    a: 'AI automation services cover the end-to-end process of designing, building, and deploying systems that automate workflows, make decisions, and handle repetitive tasks. They include RPA, ML-powered decision pipelines, and exception management.',
  },
  {
    q: 'How is AI automation different from simple rule-based automation?',
    a: 'Traditional automation follows fixed rules. AI automation can learn from data, adapt to exceptions, and optimize workflows without manual intervention.',
  },
  {
    q: 'How much do AI automation services cost?',
    a: 'A focused AI MVP for automation starts from $15K. Broader project costs depend on workflow complexity, data readiness, integrations, and the level of production infrastructure required.',
  },
  {
    q: 'How long does it take to build an AI automation system?',
    a: 'A focused MVP development cycle for an automation proof of concept typically takes 6–10 weeks. A full application development timeline can extend to 3–6 months depending on process complexity, data readiness, and integration needs.',
  },
  {
    q: 'What data or inputs are needed to start an AI automation project?',
    a: 'It depends on the workflow. Structured data, operational rules, documents, or API access may be required. All requirements are assessed in the Discovery Sprint.',
  },
  {
    q: 'Can AI automation systems integrate with existing software?',
    a: 'Yes. AI automation integrates with your CRM, ERP, helpdesk, databases, and internal platforms. Integration architecture is scoped in Discovery.',
  },
  {
    q: 'Can AI automation handle multiple workflows or departments?',
    a: 'Yes. We design scalable automation pipelines capable of managing multiple processes simultaneously with consistent accuracy and reliability.',
  },
  {
    q: 'How do you hire AI automation developers for a project?',
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
