import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: 'What is system integration in software development?',
    a: 'System integration connects different applications, databases, and platforms so they can exchange data and work as a unified system.',
  },
  {
    q: 'What is API integration used for?',
    a: 'API integration enables direct communication between systems, allowing data to move automatically without manual transfer or duplication.',
  },
  {
    q: 'Which systems can be integrated?',
    a: 'CRM, ERP, SaaS tools, internal databases, cloud platforms, third-party applications, and products built through AI app development can all be connected through API-based integration.',
  },
  {
    q: 'How long does system integration take?',
    a: 'Timelines depend on system complexity, number of APIs, and data flow requirements. A focused MVP development approach can validate a critical integration first, while the broader app development timeline depends on system complexity, API availability, and data-flow requirements.',
  },
  {
    q: 'Can legacy systems be integrated with modern tools?',
    a: 'Yes. Legacy systems can be connected using middleware, API layers, or custom integration bridges.',
  },
  {
    q: 'What are the benefits of system integration?',
    a: 'It reduces manual work, improves data accuracy, enables real-time synchronization, and improves operational efficiency.',
  },
  {
    q: 'Is API integration secure?',
    a: 'Yes. Secure authentication methods, encryption, and controlled access layers are used to ensure safe data exchange between systems.',
  },
  {
    q: 'Do integrations require maintenance?',
    a: 'Yes. APIs and connected systems evolve, so ongoing monitoring and updates are needed to maintain stability and performance.',
  },
]

export default function SystemFaqs() {
  return (
    <FAQSection
      heading="Questions About System Integration & API Automation Services"
      faqs={faqs}
    />
  )
}
