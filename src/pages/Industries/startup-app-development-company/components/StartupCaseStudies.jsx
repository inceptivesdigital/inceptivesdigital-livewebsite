import CaseStudies from '../../../../components/CaseStudies'

export default function StartupCaseStudies() {
  return (
    <CaseStudies
      heading={
        <>
          Startup App Development Portfolio:{' '}
          <span className="text-[#00CE44]">Real Products. Measurable Growth.</span>
        </>
      }
      subtitle="From lean MVPs that secured the first investment to full-scale platforms serving thousands of users. Every project below started with a founder describing a problem worth solving."
    />
  )
}
