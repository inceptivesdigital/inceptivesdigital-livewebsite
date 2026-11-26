import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery & Requirements Analysis',
    desc: 'We begin by assessing your business model and existing systems to define the application scope. Your team reviews the proposed features and integration requirements before approving the development roadmap.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: '2. UI/UX Design & Prototyping',
    desc: 'With the scope agreed, our designers map user journeys and prepare wireframes. Interactive prototyping in Figma then gives you a working view of the interface before development begins.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: '3. Application Development & Integrations',
    desc: 'Our engineers translate approved designs into functional application modules through planned sprints. We demonstrate working features during development while connecting authorized MLS/IDX data sources and required business systems.',
  },
  {
    num: '04.',
    tabTitle: 'QA & Testing',
    cardTitle: '4. Quality Assurance & Testing',
    desc: 'As features take shape, QA engineers apply mobile app testing strategies to verify functionality against approved requirements. Before release, we test listing synchronization and critical user workflows across supported devices, then resolve identified issues.',
  },
  {
    num: '05.',
    tabTitle: 'Deployment',
    cardTitle: '5. Deployment & Product Launch',
    desc: 'After testing and client approval, we configure the production environment and prepare the release. Our team manages applicable app store submissions and verifies platform functionality following deployment.',
  },
  {
    num: '06.',
    tabTitle: 'Support',
    cardTitle: '6. Post-Launch Support & Optimization',
    desc: 'Once your application goes live, we monitor performance through post-launch analytics iteration and address technical issues within the agreed support scope. Future releases follow your product roadmap and operational priorities.',
  },
]

export default function RealEstateProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Our Real Estate App Development Process:{' '}
          <span className="text-[#00CE44]">From Scope to Launch</span>
        </>
      }
      subtitle="Our real estate app development process follows defined milestones from initial requirements through production. Each stage moves your project forward with clear deliverables and opportunities to review progress."
      steps={steps}
    />
  )
}
