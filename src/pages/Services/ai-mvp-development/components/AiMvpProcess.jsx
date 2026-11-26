import LocationProcessLayout from '../../../../components/LocationProcessLayout'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery Sprint',
    cardTitle: '1. Discovery Sprint',
    image: '/assets/ai-development/dis.png',
    imageAlt: 'AI MVP discovery and scoping',
    desc: (
      <>
        <Link to="/product-strategy-consulting" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          Product strategy consulting
        </Link>{' '}
        defines the business problem, success criteria, and MVP boundaries before development begins. We leave this stage with one clearly scoped AI use case, not three, not five. One. The one worth proving.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Data Audit',
    cardTitle: '2. Data Audit',
    image: '/assets/ai-development/presstwo.png',
    imageAlt: 'AI MVP data readiness audit',
    desc:
      'Data sources are identified, quality is assessed, and feasibility is confirmed against the scoped use case. This is where most AI concepts either get validated or get redirected. Either outcome saves money.',
  },
  {
    num: '03.',
    tabTitle: 'Architecture Blueprint',
    cardTitle: '3. Architecture Blueprint',
    image: '/assets/ai-development/ai-model.png',
    imageAlt: 'AI MVP architecture and model blueprint',
    desc:
      'Model selection, data pipeline design, integration requirements, and deployment environment are defined before development begins. The decisions made here determine whether the full build is a continuation or a rebuild.',
  },
  {
    num: '04.',
    tabTitle: 'Prototype Sprint',
    cardTitle: '4. Prototype Sprint',
    image: '/assets/ai-development/ai-product.png',
    imageAlt: 'AI MVP prototype integrated in a product interface',
    desc: (
      <>
        Through{' '}
        <Link to="/interactive-prototyping" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          interactive prototyping
        </Link>
        , the core AI capability is integrated into a minimal product interface and tested against real data. Eight to twelve weeks. One working system that processes real inputs and produces real outputs.
      </>
    ),
  },
  {
    num: '05.',
    tabTitle: 'Validation Gate',
    cardTitle: '5. Validation Gate',
    image: '/assets/ai-development/proess3.png',
    imageAlt: 'AI MVP validation and model performance testing',
    desc:
      'Model accuracy, edge case performance, and integration reliability are tested against the success criteria defined in Concept Lock. Risks are documented. Limitations are surfaced. No surprises after the gate closes.',
  },
  {
    num: '06.',
    tabTitle: 'Roadmap Handover',
    cardTitle: '6. Roadmap Handover',
    image: '/assets/ai-development/process6.png',
    imageAlt: 'AI MVP roadmap handover and full build plan',
    desc: (
      <>
        The MVP learnings become the foundation for{' '}
        <Link to="/digital-product-development" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
          digital product development
        </Link>{' '}
        and the full build plan that follows. Architecture blueprint, data requirements, team structure, timeline, and investment are defined. The full build starts here, not from scratch.
      </>
    ),
  },
]

export default function AiMvpProcess() {
  return (
    <LocationProcessLayout
      eyebrow=""
      heading={
        <>
          How Our AI MVP Development Company Delivers From Concept to{' '}
          <span className="text-[#00CE44]">Validated Proof</span>
        </>
      }
      subtitle="Six stages. Each one exists because skipping it produces a proof of concept that proves nothing."
      steps={steps}
    />
  )
}
