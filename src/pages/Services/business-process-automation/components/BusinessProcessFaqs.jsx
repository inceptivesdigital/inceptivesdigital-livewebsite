import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What is business process automation?',
    a: 'Business process automation is the design and implementation of systems that execute structured workflows without manual intervention.',
  },
  {
    q: 'What processes can be automated?',
    a: 'Repeatable, rule-based workflows such as approvals, reporting, data movement, onboarding, and operational coordination between systems.',
  },
  {
    q: 'How is BPA different from RPA?',
    a: 'RPA executes individual tasks. Business process automation manages complete workflows made up of multiple connected steps across systems.',
  },
  {
    q: 'How long does BPA implementation take?',
    a: 'A focused MVP development cycle for workflow automation can take 4–10 weeks, while the broader app development timeline depends on process complexity, system connections, and workflow structure.',
  },
  {
    q: 'Can BPA integrate with existing systems?',
    a: 'Yes. Automation is designed to work with existing tools through APIs, connectors, and system-level integrations without replacing infrastructure.',
  },
  {
    q: 'What is needed before starting BPA development?',
    a: 'A defined workflow, clear process steps, and access to the systems involved in execution are mapped during the Discovery Sprint.',
  },
  {
    q: 'Do automation systems require maintenance?',
    a: 'Yes. Workflows evolve, systems change, and automation logic is updated to maintain accuracy and reliability.',
  },
  {
    q: 'What makes a process suitable for automation?',
    a: 'Processes with structured steps, predictable rules, and repetitive execution patterns are ideal candidates for automation.',
  },
]

export default function BusinessProcessFaqs() {
  return (
    <FAQSection
      heading="Questions About Business Process Automation Services"
      faqs={faqs}
    />
  )
}
