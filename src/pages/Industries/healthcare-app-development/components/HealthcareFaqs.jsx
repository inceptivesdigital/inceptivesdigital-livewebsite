import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'What is the size of the healthcare app market?',
      a: (
        <>
          The global healthcare app market is growing rapidly, driven by demand for digital health, telemedicine, and wearable technologies. The opportunity is significant, and early movers in digital health are establishing defensible positions.
        </>
      ),
    },
    {
      q: 'How do I choose a healthcare mobile app development company?',
      a: (
        <>
          Look for a studio with verified healthcare domain knowledge, demonstrated compliance experience, and a portfolio of production healthcare applications. Explore our guide on{' '}
          <Link
            to="/blog/how-to-choose-the-right-healthcare-app-development-company"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            how to choose the right healthcare app development company
          </Link>{' '}
          to discuss clinical workflows, compliance requirements, and post-launch support before committing.
        </>
      ),
    },
    {
      q: 'Which platform is best for healthcare app development?',
      a: (
        <>
          It depends on your target users and clinical requirements.{' '}
          <Link
            to="/blog/why-choose-flutter"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Flutter
          </Link>{' '}
          and React Native work exceptionally well for cross-platform applications. Native development is the right choice for complex, performance-critical clinical systems where platform-specific capabilities matter.
        </>
      ),
    },
    {
      q: 'What does healthcare app development cost?',
      a: (
        <>
          Typically ranges from $15,000 for focused healthcare tools to $250,000 and above for full hospital management systems. Complexity, compliance requirements, integrations, and platform targets are the primary cost drivers. Defined precisely in the Discovery Sprint.
        </>
      ),
    },
    {
      q: 'Do you build HIPAA and GDPR compliant healthcare apps?',
      a: (
        <>
          Yes. Compliance is built into the architecture from the start. Every application we build meets HIPAA, GDPR, and relevant regional compliance standards before a line of production code is written.
        </>
      ),
    },
    {
      q: 'Do you sign NDAs for healthcare app projects?',
      a: (
        <>
          Yes. Non-Disclosure Agreements are signed before any project details, clinical workflows, or proprietary data are shared.
        </>
      ),
    },
  ]

export default function HealthcareFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Questions About Healthcare App Development{' '} <span className="text-[#00CE44]">Worth Asking Before You Build</span></>}
    />
  )
}
