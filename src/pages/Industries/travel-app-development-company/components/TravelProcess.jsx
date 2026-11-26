import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery and Requirement Analysis',
    desc: 'Development begins with your travel business model and booking requirements. We assess available supplier APIs before defining the platform scope, ensuring the proposed architecture reflects the integrations your product actually needs.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: '2. UI/UX Design and Prototyping',
    desc: (
      <>
        In the next stage, our{' '}
        <Link
          to="/ui-ux-design"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          UI/UX design
        </Link>{' '}
        process builds wireframes, interactive prototypes, and high-fidelity designs around intuitive navigation, adaptive layouts, and seamless booking flows. Every screen is designed to work across all devices and keep users engaged throughout the journey.
      </>
    ),
  },
  {
    num: '03.',
    tabTitle: 'Frontend & Mobile',
    cardTitle: '3. Frontend and Mobile Development',
    desc: 'Frontend built with Swift, Kotlin, Flutter, or React Native. Offline access, geolocation, route planning, push alerts, and real-time updates are integrated into a single cohesive travel experience.',
  },
  {
    num: '04.',
    tabTitle: 'Backend & API',
    cardTitle: '4. Backend and Architecture Development',
    desc: (
      <>
        Scalable, secure{' '}
        <Link
          to="/backend-api-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          backend API development
        </Link>{' '}
        using RESTful APIs, microservices, and cloud infrastructure. Payment gateways, real-time travel APIs, push notifications, and data synchronization are supported from the architecture stage.
      </>
    ),
  },
  {
    num: '05.',
    tabTitle: 'QA & Testing',
    cardTitle: '5. Quality Assurance and Testing',
    desc: 'Functional, performance, security, and usability testing were completed across all platforms and devices before deployment. No shortcuts before a travel application reaches real users and real bookings.',
  },
  {
    num: '06.',
    tabTitle: 'Launch',
    cardTitle: '6. Deployment and Launch',
    desc: (
      <>
        <Link
          to="/blog/publish-update-an-app-on-app-store-google-play"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          App Store submission
        </Link>{' '}
        and compliance are managed end-to-end. CI/CD pipelines, monitoring, and analytics are configured so the platform performs reliably from day one.
      </>
    ),
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
