import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Discovery & Requirements Analysis',
    desc: (
      <>
        We run a{' '}
        <Link
          to="/discovery-sprint"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          discovery sprint
        </Link>{' '}
        to review your business model and existing commerce systems and establish the application&apos;s scope. The team identifies user roles, purchasing workflows, and integration dependencies before preparing the development roadmap.
      </>
    ),
  },
  {
    num: '02.',
    tabTitle: 'Architecture',
    cardTitle: '2. Architecture & Technical Planning',
    desc: (
      <>
        Our architects define how the mobile application will connect with payment gateways and existing commerce infrastructure. Database design, API specifications, and{' '}
        <Link
          to="/blog/mobile-app-security-best-practices"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app security best practices
        </Link>{' '}
        guide the technical blueprint before development begins.
      </>
    ),
  },
  {
    num: '03.',
    tabTitle: 'UI/UX Design',
    cardTitle: '3. UI/UX Design & Prototyping',
    desc: (
      <>
        Expert{' '}
        <Link
          to="/ui-ux-design"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          UI/UX designers
        </Link>{' '}
        map customer journeys from product discovery through checkout, then translate approved workflows into{' '}
        <Link
          to="/interactive-prototyping"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          interactive prototypes
        </Link>{' '}
        in Figma. We review usability and navigation with stakeholders before finalizing the application designs.
      </>
    ),
  },
  {
    num: '04.',
    tabTitle: 'Development',
    cardTitle: '4. eCommerce App Development & Integration',
    desc: 'Development begins in planned sprints, with working features reviewed against agreed requirements. Our engineers build the application modules and connect payment services, inventory systems, and commerce APIs as development progresses.',
  },
  {
    num: '05.',
    tabTitle: 'QA & Deployment',
    cardTitle: '5. Quality Assurance & Deployment',
    desc: (
      <>
        QA engineers apply{' '}
        <Link
          to="/blog/mobile-app-testing-strategies"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app testing strategies
        </Link>{' '}
        to checkout transactions, payment failures, and inventory synchronization across supported devices. After resolving critical issues and completing release checks, we prepare the application to{' '}
        <Link
          to="/blog/publish-update-an-app-on-app-store-google-play"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          publish on the App Store and Google Play
        </Link>
        .
      </>
    ),
  },
  {
    num: '06.',
    tabTitle: 'Maintenance',
    cardTitle: '6. Post-Launch Maintenance & Optimization',
    desc: (
      <>
        Once the application goes live, our team monitors performance through{' '}
        <Link
          to="/post-launch-analytics-iteration"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          post-launch analytics
        </Link>{' '}
        and resolves issues within the agreed support scope. Subsequent releases address platform updates and enhancements informed by operational feedback.
      </>
    ),
  },
]

export default function EcommerceProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Our <span className="text-[#00CE44]">eCommerce App Development Process</span>
        </>
      }
      subtitle="Every eCommerce project starts with understanding how the business operates and what the application needs to support. Our eCommerce mobile app development process follows a defined workflow, with clear technical decisions and deliverables from discovery through launch."
      steps={steps}
    />
  )
}
