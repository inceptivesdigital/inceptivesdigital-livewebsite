import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function RealEstateCta1() {
  return (
    <FullWidthCtaSection
      heading={
        <>
          Have a Real Estate App Concept{' '}
          <span className="text-[#00CE44]">Ready for Engineering?</span>
        </>
      }
      description="Get a technical review of your real estate app requirements and establish the development scope with Inceptives Digital."
      ctaText="Get My App Scope Reviewed"
      img="/assets/real-estate/rea-cta1.png"
      imgAlt="Have a Real Estate App Concept Ready for Engineering"
    />
  )
}
