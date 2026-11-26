import { Link } from 'react-router-dom'
import CaseStudies from '../../../../components/CaseStudies'

export default function WebAppCaseStudies() {
  return (
    <CaseStudies
      heading={<>Explore Our Portfolio as a Top Web App Development Company</>}
      subtitle={
        <>
          Shipped across industries, scales, and product categories. Each project page covers the brief, the constraints, and what was built. Many of these builds started with lessons learned from{' '}
          <Link
            to="/blog/common-reasons-digital-products-fail"
            className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            why digital products fail
          </Link>{' '}
          when architecture is treated as an afterthought.
        </>
      }
    />
  )
}
