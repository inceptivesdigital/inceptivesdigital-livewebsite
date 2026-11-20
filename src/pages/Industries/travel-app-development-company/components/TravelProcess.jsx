import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Requirement Analysis',
    desc: 'Business model, target audience, and travel market requirements are defined before development begins. Core features, technology stack, and post-launch strategy are confirmed through structured discovery before a line of code is written.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: 'UI/UX Design and Prototyping',
    desc: 'Wireframes, interactive prototypes, and high-fidelity designs built around intuitive navigation, adaptive layouts, and seamless booking flows. Every screen is designed to work across all devices and keep users engaged throughout the journey.',
  },
  {
    num: '03.',
    tabTitle: 'Frontend & Mobile',
    cardTitle: 'Frontend and Mobile Development',
    desc: 'Frontend built with Swift, Kotlin, Flutter, or React Native. Offline access, geolocation, route planning, push alerts, and real-time updates are integrated into a single cohesive travel experience.',
  },
  {
    num: '04.',
    tabTitle: 'Backend & API',
    cardTitle: 'Backend and Architecture Development',
    desc: 'Scalable, secure backend built with RESTful APIs, microservices, and cloud infrastructure. Payment gateways, real-time travel APIs, push notifications, and data synchronisation are supported from the architecture stage.',
  },
  {
    num: '05.',
    tabTitle: 'QA & Testing',
    cardTitle: 'Quality Assurance and Testing',
    desc: 'Functional, performance, security, and usability testing were completed across all platforms and devices before deployment. No shortcuts before a travel application reaches real users and real bookings.',
  },
  {
    num: '06.',
    tabTitle: 'Launch',
    cardTitle: 'Deployment and Launch',
    desc: 'App Store compliance is managed end-to-end. CI/CD pipelines, monitoring, and analytics are configured so the platform performs reliably from day one.',
  },
]

export default function TravelProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          How Our Travel App Development Company{' '}
          <span className="text-[#00CE44]">Maps Out Successful Apps</span>
        </>
      }
      subtitle="Every stage is planned around traveler behavior, booking reliability, and long-term scalability."
      steps={steps}
    />
  )
}
