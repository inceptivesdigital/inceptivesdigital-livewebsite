import { Link } from 'react-router-dom'
import CaseStudies from '../../../../components/CaseStudies'

export default function KmpCaseStudies() {
  return (
    <CaseStudies
      heading={
        <>
          <span className="text-[#00CE44]">Our Portfolio</span> in Custom Mobile Product Engineering
        </>
      }
      subtitle={
        <>
          Explore the mobile products in our{' '}
          <Link
            to="/portfolio"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            portfolio
          </Link>
          , engineered for businesses with distinct operational requirements. Each project reflects our experience handling complex application workflows and the technical decisions that shape successful product delivery.
        </>
      }
    />
  )
}
