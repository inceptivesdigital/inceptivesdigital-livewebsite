import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Requirement Analysis',
    desc: 'Business objectives, target audience, and market positioning are defined before development begins. Competitor analysis, feature prioritisation, and technical feasibility were confirmed to ensure the platform is built for real user needs.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: 'UI/UX Design',
    desc: 'User journeys designed around the moments that matter — onboarding, matching, messaging, and profile discovery. Every screen is built to engage users from the first interaction and retain them beyond the first session.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: 'Development and Integration',
    desc: 'Kotlin, Swift, Flutter, React Native, and Firebase are used to build secure, scalable dating platforms. AI matchmaking, real-time chat, video and voice calling, and location-based services were integrated during development.',
  },
  {
    num: '04.',
    tabTitle: 'QA & Testing',
    cardTitle: 'Quality Assurance and Testing',
    desc: 'Every module is tested for functionality, security, reliability, and cross-device compatibility before deployment. No shortcuts before the platform reaches real users.',
  },
  {
    num: '05.',
    tabTitle: 'Deployment',
    cardTitle: 'Deployment and Launch',
    desc: 'App store submissions, performance tuning, and compliance checks managed at launch. Platform listing optimised for visibility and organic user acquisition from day one.',
  },
  {
    num: '06.',
    tabTitle: 'Post-Launch',
    cardTitle: 'Post-Launch Support and Updates',
    desc: 'Performance monitored, user feedback captured, and updates delivered continuously after launch. New features, security patches, and scaling support are provided as the platform grows.',
  },
]

export default function DatingProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Proven Strategies in Our{' '}
          <span className="text-[#00CE44]">Dating App Development Process</span>
        </>
      }
      subtitle="Every stage is designed around user engagement, platform security, and long-term retention from the first session."
      steps={steps}
    />
  )
}
