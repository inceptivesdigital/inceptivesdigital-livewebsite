import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function CompanyCtaBanner() {
  return (
    <FullWidthCtaSection
      heading={<>We Don’t Just Develop Digital Products.{' '} <span className="text-[#00CE44]">We Solve the Business Problems Behind Them.</span></>}
      description={<>Tell us what is actually broken in your business. We will tell you honestly whether we are the right team to fix it.</>}
      ctaText="Talk to Our Team"
      img="/assets/post-launch-analytics/cta-mobile.png"
      imgAlt="Inceptives Digital Product Strategy"
      bgImage="/assets/post-launch-analytics/ctabg.png"
    />
  )
}
