import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function RealEstateCta2() {
  return (
    <FullWidthCtaSection
      heading={
        <>
          Get a{' '}
          <span className="text-[#00CE44]">Real Estate App Development Quote</span> for Your Actual Scope
        </>
      }
      description="Our engineers review your development requirements before preparing a cost estimate based on the proposed application."
      ctaText="Request My Project Quote"
      bgImage="/assets/healthcare/health-cta.webp"
    />
  )
}
