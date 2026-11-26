import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const FAQS = [
  {
    question: 'How do you decide which API architecture, REST, GraphQL, or gRPC, fits our product?',
    answer: (
      <>
        The decision follows the product&apos;s actual data shape and client needs, not a default preference. Products with complex, nested data or multiple front-end clients are better served by GraphQL. Products with simpler, predictable data needs are better served by REST. The architecture follows the use case.
      </>
    ),
  },
  {
    question: 'How do you ensure a backend can scale as our user base grows?',
    answer: (
      <>
        Scale is addressed at the architecture stage through database partitioning, service boundaries, and load-aware infrastructure design. Systems are stress-tested under simulated load before deployment, and cloud-native infrastructure on AWS, Google Cloud, or Azure provides auto-scaling as actual demand changes.
      </>
    ),
  },
  {
    question: 'Can you integrate a new backend with our existing legacy systems?',
    answer: (
      <>
        Yes. Integration starts with an audit of the existing system to identify what connects directly and what requires an adapter layer. Migrations and integrations run in phases, starting with the highest-value components, so the current system keeps operating without disrupting the release cadence.
      </>
    ),
  },
  {
    question: 'What security measures do you build into backend systems?',
    answer: (
      <>
        Security is designed into the architecture, not layered on before launch. Authentication uses OAuth2 or JWT, encryption is applied at the field level and in transit, and compliance requirements, including GDPR, HIPAA, and SOC 2, are addressed during architecture design.
      </>
    ),
  },
  {
    question: 'Do you work alongside our existing in-house developers, or only as a full external team?',
    answer: (
      <>
        Both. Some engagements embed alongside an existing team to extend specific capabilities, while others run as a full external build. The structure follows your team&apos;s current capacity, not a fixed engagement model.
      </>
    ),
  },
  {
    question: 'Do you provide ongoing maintenance after the backend is deployed?',
    answer: (
      <>
        Yes. Post-launch retainer engagements cover dependency updates, performance monitoring, scaling adjustments, and feature development. Continuity with the original engineering team matters, since architecture context rarely transfers fully through documentation alone.
      </>
    ),
  },
  {
    question: 'How long does a typical backend or API development project take?',
    answer: (
      <>
        A focused backend covering core API and database architecture typically takes six to twelve weeks. A full-system build, including integrations and deployment, runs fourteen to twenty-four weeks. The final{' '}
        <Link
          to="/blog/app-development-timeline"
          className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
>
          app development timeline
        </Link>{' '}
        for migrations depends on the size and condition of the existing system.
      </>
    ),
  },
  {
    question: 'What happens if our project’s scope changes mid-build?',
    answer: (
      <>
        Scope changes are assessed against the existing architecture before any new work begins, so cost and timeline impact are confirmed upfront. Nothing gets added to a build without a clear estimate attached to it first.
      </>
    ),
  },
  {
    question: 'Who owns the code and documentation after the project is complete?',
    answer: (
      <>
        You do. Full technical documentation, architecture diagrams, and source code are handed off at project completion, with no dependency on Inceptives Digital to maintain or operate the system afterwards.
      </>
    ),
  },
  {
    question: 'Do you work with early-stage or pre-funding startups?',
    answer: (
      <>
        Yes.{' '}
        <Link
          to="/startup-product-development"
          className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
>
          Startup product development
        </Link>{' '}
        is scoped around what the product actually needs at its current stage, not a fixed minimum. A focused backend foundation suits{' '}
        <Link
          to="/blog/software-development-for-startups"
          className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
>
          software development for startups
        </Link>{' '}
        validating early traction; a full-system build suits a product scaling post-funding. For very early products, understanding{' '}
        <Link
          to="/blog/mvp-development-cost"
          className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
>
          MVP development cost
        </Link>{' '}
        also helps define an appropriate first backend scope.
      </>
    ),
  },
  {
    question: 'Can you build APIs that integrate with third-party services like Stripe or Twilio?',
    answer: (
      <>
        Yes. Third-party integrations are built with the same architectural rigor as the core system, including error handling, retry logic, and webhook validation, so a failure in a third-party service does not cascade into the rest of the application.
      </>
    ),
  },
  {
    question: 'How do you price backend & API development projects?',
    answer: (
      <>
        A focused backend engagement typically starts around $20,000, while a full-system build spans a wider range depending on integration complexity and target infrastructure. Cost scales with system scope, integration count, and whether the work is greenfield or migration. The{' '}
        <Link
          to="/blog/signs-startup-needs-custom-software-development"
          className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
>
          signs a startup needs custom software development
        </Link>{' '}
        often become clear when existing infrastructure can no longer support that growth.
      </>
    ),
  },
];

export default function BackendFAQs() {
  return (
    <FAQSection
      faqs={FAQS}
      heading={<>Backend & API Development</>}
    />
  )
}
