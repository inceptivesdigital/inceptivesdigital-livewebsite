import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery and Planning',
    desc: (
      <>
        Your restaurant operations and delivery business model shape the development roadmap. Through a{' '}
        <Link
          to="/discovery-sprint"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          discovery sprint
        </Link>
        , we assess existing systems to establish the application scope and identify required integrations before engineering begins.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: '2. UI/UX Design',
    desc: 'With the scope approved, our designers map customer ordering journeys and restaurant workflows. Interactive Figma prototypes give your team a clear view of the platform before engineering begins.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: '3. Development and Integration',
    desc: 'Approved prototypes guide the development of customer apps and connected backend systems. Our food delivery app developers implement real-time order processing and payment gateway integrations through planned development sprints.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & QA',
    cardTitle: '4. Testing and QA',
    desc: (
      <>
        As working modules come together, QA engineers apply{' '}
        <Link
          to="/blog/mobile-app-testing-strategies"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app testing strategies
        </Link>{' '}
        to test complete ordering journeys across supported interfaces. Payment failures and driver reassignment scenarios receive particular attention before release approval.
      </>
    ),
  },
  {
    num: '05.',
    tabTitle: 'Deployment',
    cardTitle: '5. Deployment and Support',
    desc: 'Once testing is complete, we prepare the production environment and manage applicable app store submissions. Post-launch support addresses technical issues within the agreed scope as your delivery operations evolve.',
  },
]

export default function FoodDeliveryProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Inceptives Digital’s Agile{' '}
          <span className="text-[#00CE44]">Food Delivery App Development Process</span>
        </>
      }
      subtitle="Our food delivery app development process follows defined milestones around your ordering model and delivery operations. Each stage addresses the technical requirements of your platform, from initial scope to production release."
      steps={steps}
    />
  )
}
