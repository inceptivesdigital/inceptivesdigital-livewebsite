import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What is RPA development?',
    a: 'RPA development is the creation of software bots that execute structured workflows across systems without manual input.',
  },
  {
    q: 'What processes can RPA automate?',
    a: 'Rule-based workflows such as data entry, reporting, reconciliation, onboarding, and system updates.',
  },
  {
    q: 'How is RPA different from AI automation?',
    a: 'RPA executes structured workflows. AI development extends automation beyond deterministic RPA by enabling systems to interpret unstructured data and support more complex decision-making.',
  },
  {
    q: 'How long does RPA development take?',
    a: 'A focused MVP development cycle can validate one RPA workflow first, while the broader app development timeline depends on process complexity, system connections, and deployment requirements.',
  },
  {
    q: 'Can RPA connect to existing systems?',
    a: 'Yes. RPA connects to tools through APIs, connectors, and system-level integrations without replacing existing platforms.',
  },
  {
    q: 'What are the limitations of RPA?',
    a: 'RPA is designed for structured, rule-based workflows. It requires a clearly defined process logic to operate reliably.',
  },
  {
    q: 'Does RPA require maintenance?',
    a: 'Automation systems need continuous improvement as workflows and connected systems evolve, since treating deployment as the finish line is one of the common reasons digital products fail.',
  },
  {
    q: 'How do you decide which process to automate?',
    a: 'For intelligent automation concepts, the validation approach described in our AI MVP development guide can help test feasibility before expanding automation across a larger process.',
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
