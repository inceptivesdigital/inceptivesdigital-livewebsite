import CaseStudies from '../../../../components/CaseStudies'

export default function WebAppCaseStudies() {
  return (
    <CaseStudies
      heading={<>Selected Case Studies of Web Products We Developed</>}
      subtitle={<>Shipped across industries, scales, and product categories. Each project page covers the brief, the constraints, and what was built. Many of these builds started with lessons learned from{' '} <a href="https://inceptivesdigital.com/blog/common-reasons-digital-products-fail" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00CE44] underline decoration-[#00CE44] underline-offset-4 hover:text-white transition-colors" > why digital products fail </a>{' '} when architecture is treated as an afterthought.</>}
    />
  )
}
