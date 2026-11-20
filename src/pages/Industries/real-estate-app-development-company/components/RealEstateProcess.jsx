import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Requirement Analysis',
    desc: 'Business model, user requirements, and app objectives are defined before development begins. Core features, technology stack, and integration requirements are confirmed through structured discovery before a line of code is written.',
  },
  {
    num: '02.',
    tabTitle: 'UX Research',
    cardTitle: 'UX Research and Wireframing',
    desc: 'User flow diagrams and wireframes built around property browsing, agent communication, and lead tracking workflows. Every navigation decision is made to reduce friction and keep users moving toward transaction completion.',
  },
  {
    num: '03.',
    tabTitle: 'UI Design',
    cardTitle: 'UI Design and Interactive Prototyping',
    desc: 'Contemporary, intuitive interfaces designed around real estate user behaviour. An interactive prototype is delivered before development begins so the final look, feel, and flow are confirmed before investment is committed.',
  },
  {
    num: '04.',
    tabTitle: 'Development',
    cardTitle: 'Agile Development and API Integrations',
    desc: 'Applications are built in structured sprints with Google Maps, CRM systems, AI modules, virtual tour engines, MLS databases, and secure payment solutions integrated during development rather than added afterward.',
  },
  {
    num: '05.',
    tabTitle: 'QA & Testing',
    cardTitle: 'Quality Assurance and Performance Optimisation',
    desc: 'Navigation, filters, listings, media, and all user interactions are tested for speed, security, and cross-device performance before deployment. No shortcuts before a real estate platform reaches real users.',
  },
  {
    num: '06.',
    tabTitle: 'Launch',
    cardTitle: 'Deployment and Launch',
    desc: 'App store and web platform deployment managed end-to-end. Platform visibility, performance, and user onboarding are confirmed from day one.',
  },
  {
    num: '07.',
    tabTitle: 'Post-Launch',
    cardTitle: 'Post-Launch Support and Continuous Enhancements',
    desc: 'Performance monitored, user feedback analysed, and updates delivered continuously after launch. New features, AI enhancements, and market-driven improvements are applied as the platform evolves.',
  },
]

export default function RealEstateProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          How Our Real Estate App Development Company{' '}
          <span className="text-[#00CE44]">Shapes Every App</span>
        </>
      }
      subtitle="Our real estate app development company follows a comprehensive process that has been designed to help you get a rapid, secure, user-friendly property app that fulfills your business goals and can grow with you."
      steps={steps}
    />
  )
}
