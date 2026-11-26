import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What is system integration in software development?',
    a: 'System integration connects different applications, databases, and platforms so they can exchange data and work as a unified system.',
  },
  {
    q: '2. What is API integration used for?',
    a: 'API integration enables direct communication between systems, allowing data to move automatically without manual transfer or duplication.',
  },
  {
    q: '3. Which systems can be integrated?',
    a: (
      <>
        CRM, ERP, SaaS tools, internal databases, cloud platforms, third-party applications, and products built through{' '}
        <Link to="/ai-app-development-services">
          AI app development
        </Link>{' '}
        can all be connected through API-based integration.
      </>
    ),
  },
  {
    q: '4. How long does system integration take?',
    a: (
      <>
        Timelines depend on system complexity, number of APIs, and data flow requirements. A focused{' '}
        <Link to="/mvp-development">
          MVP development
        </Link>{' '}
        approach can validate a critical integration first, while the broader{' '}
        <Link to="/blog/app-development-timeline">
          app development timeline
        </Link>{' '}
        depends on system complexity, API availability, and data-flow requirements.
      </>
    ),
  },
  {
    q: '5. Can legacy systems be integrated with modern tools?',
    a: 'Yes. Legacy systems can be connected using middleware, API layers, or custom integration bridges.',
  },
  {
    q: '6. What are the benefits of system integration?',
    a: 'It reduces manual work, improves data accuracy, enables real-time synchronization, and improves operational efficiency.',
  },
  {
    q: '7. Is API integration secure?',
    a: 'Yes. Secure authentication methods, encryption, and controlled access layers are used to ensure safe data exchange between systems.',
  },
  {
    q: '8. Do integrations require maintenance?',
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
