import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function EcommerceMidCta2() {
  return (
    <FullWidthCtaSection
      heading={
        <>
          Looking for an{' '}
          <span className="text-[#00CE44]">eCommerce App Development Quote</span> That Matches Your Scope?
        </>
      }
      description="Get a tailored estimate based on your app features, platform requirements, and integration complexity."
      ctaText="Request My Development Quote"
      img="/assets/ecommerce/ecommerces-section.png"
      imgAlt="Request eCommerce App Development Quote"
    />
  )
}
