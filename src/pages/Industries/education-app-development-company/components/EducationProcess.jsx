import { Link } from 'react-router-dom'
import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: '1. Product Discovery',
    desc: 'Our development planning begins with your education business model and target learners. We assess existing academic systems to establish the project scope and identify technical requirements before development begins.',
  },
  {
    num: '02.',
    tabTitle: 'Design',
    cardTitle: '2. Learning Experience Design',
    desc: 'Course navigation and assessment workflows guide the interface design. Our designers create interactive Figma prototypes that demonstrate how students and instructors will use the platform before development.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: '3. Custom App Development',
    desc: 'Approved designs move into planned development sprints. Our engineers build the learning platform around its required functionality, with LMS integrations where existing academic systems require connectivity.',
  },
  {
    num: '04.',
    tabTitle: 'QA Testing',
    cardTitle: '4. Quality Assurance',
    desc: 'Education apps require testing beyond standard screen functionality. Our QA engineers verify course access, assessment submissions, and learner progress tracking across supported devices before release approval.',
  },
  {
    num: '05.',
    tabTitle: 'Launch',
    cardTitle: '5. Deployment and Launch',
    desc: 'Following successful testing, the app moves into production. App store submissions and hosting configurations follow platform requirements, with essential learning workflows checked after deployment.',
  },
  {
    num: '06.',
    tabTitle: 'Support',
    cardTitle: '6. Post-Launch Support',
    desc: 'As your learning platform grows, new requirements shape future releases. Our engineers address technical issues and deliver approved improvements within the agreed maintenance scope.',
  },
]

export default function EducationProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Our Education App Development Process:{' '}
          <span className="text-[#00CE44]">From Concept to Launch</span>
        </>
      }
      subtitle={
        <>
          Every education product has different learning needs and technical requirements. Inceptives Digital follows a structured{' '}
          <Link
            to="/blog/digital-product-development-process"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
          >
            digital product development process
          </Link>{' '}
          shaped by your learning model, existing infrastructure, and product goals.
        </>
      }
      steps={steps}
    />
  )
}
