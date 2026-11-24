import { Link } from 'react-router-dom'
import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. What is React Native app development?',
    a: 'React Native app development is the process of building iOS and Android apps from one JavaScript and TypeScript codebase. Meta created the framework, and it renders real native components, so apps feel at home on each platform.',
  },
  {
    q: '2. What is the difference between React Native and native app development?',
    a: (
      <>
        React Native uses a shared JavaScript and TypeScript codebase for iOS and Android, while native development uses platform-specific code.
        <br />
        <br />
        Businesses can reduce duplicated engineering work with React Native. Native development offers greater direct control over platform-specific functionality.
      </>
    ),
  },
  {
    q: '3. How do you ensure React Native apps perform like native applications?',
    a: (
      <>
        We optimize React Native performance from the architecture stage, focusing on responsive interactions and efficient JavaScript execution.
        <br />
        <br />
        Our engineers integrate native modules where necessary and test application performance on real iOS and Android devices before launch.
      </>
    ),
  },
  {
    q: '4. Can React Native access native device features?',
    a: (
      <>
        Yes. React Native supports cameras, GPS, Bluetooth, and push notifications through compatible libraries and native APIs.
        <br />
        <br />
        For specialized hardware requirements, our developers build custom Swift or Kotlin modules that extend the application’s native capabilities.
      </>
    ),
  },
  {
    q: '5. When should I choose React Native over Flutter?',
    a: 'Choose React Native when you need fast iOS and Android delivery and deep native integration. Flutter suits products that need identical, highly custom interfaces across platforms. We build with both, so the recommendation follows your product.',
  },
  {
    q: '6. How much does React Native app development cost?',
    a: (
      <>
        React Native{' '}
        <Link
          to="/blog/mobile-app-development-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          app development costs
        </Link>{' '}
        range from $10,000 to $150,000+, depending on project complexity.
        <br />
        <br />
        Basic applications start at $10,000, while advanced platforms require larger investments. Our technical discovery process sets estimates against the scope you approve.
      </>
    ),
  },
  {
    q: '7. How long does React Native app development take?',
    a: (
      <>
        Basic React Native applications typically take 8–12 weeks, while mid-complexity projects require 12–20 weeks.
        <br />
        <br />
        Enterprise applications follow project-specific{' '}
        <Link
          to="/blog/app-development-timeline"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          app development timelines
        </Link>
        . Our engineers assess integration requirements and testing scope before confirming the development schedule.
      </>
    ),
  },
  {
    q: '8. How do I choose the right React Native app development company?',
    a: (
      <>
        Choose a React Native app development company with projects you can verify and clear delivery commitments.
        <br />
        <br />
        Before{' '}
        <Link
          to="/blog/how-to-hire-a-mobile-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          hiring a development partner
        </Link>
        , evaluate:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong className="text-white">Experience:</strong> Relevant React Native applications running in production
          </li>
          <li>
            <strong className="text-white">Testing:</strong> Real-device QA across iOS and Android
          </li>
          <li>
            <strong className="text-white">Ownership:</strong> Clear source code and intellectual property terms
          </li>
          <li>
            <strong className="text-white">Pricing:</strong> Transparent estimates and a written project scope
          </li>
        </ul>
      </>
    ),
  },
  {
    q: '9. How do you handle custom native modules when JavaScript isn’t enough?',
    a: (
      <>
        Our React Native engineers develop custom native modules when standard libraries cannot meet specific hardware or platform requirements.
        <br />
        <br />
        Using Swift or Kotlin, they connect specialized native functionality to the shared React Native codebase while maintaining cross-platform compatibility.
      </>
    ),
  },
  {
    q: '10. Is React Native suitable for enterprise-grade or high-scale applications?',
    a: (
      <>
        Yes. React Native supports{' '}
        <Link
          to="/custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          enterprise applications
        </Link>{' '}
        with complex integrations and demanding performance requirements.
        <br />
        <br />
        Our engineers design secure architectures around business workloads. Where applicable, the development approach incorporates relevant HIPAA, PCI DSS, or GDPR requirements.
      </>
    ),
  },
  {
    q: '11. Who owns the source code and App Store developer accounts?',
    a: (
      <>
        Your business owns the application source code and controls its Apple App Store and Google Play developer accounts.
        <br />
        <br />
        Our development agreement documents intellectual property rights and the conditions for transferring project deliverables.
      </>
    ),
  },
  {
    q: '12. What causes React Native app development budgets to exceed the original estimate?',
    a: (
      <>
        Unclear requirements and underestimated integrations often create{' '}
        <Link
          to="/blog/hidden-costs-custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          hidden costs
        </Link>{' '}
        that push React Native development beyond the original estimate. Our technical discovery process identifies these{' '}
        <Link
          to="/blog/app-development-risk-management"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
        >
          app development risks
        </Link>{' '}
        early.
      </>
    ),
  },
  {
    q: '13. How are OS updates and breaking platform changes handled post-launch?',
    a: (
      <>
        Our React Native maintenance services cover compatibility testing and framework updates as iOS and Android evolve.
        <br />
        <br />
        Engineers review third-party dependencies and resolve compatibility issues, helping applications maintain reliable functionality across supported operating system versions.
      </>
    ),
  },
]

export default function ReactNativeFAQs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          <span className="text-[#00CE44]">React Native</span> App Development FAQs
        </>
      }
    />
  )
}
