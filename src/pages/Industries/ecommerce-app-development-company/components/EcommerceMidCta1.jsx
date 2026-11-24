import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function EcommerceMidCta1() {
  return (
    <FullWidthCtaSection
      heading={
        <>
          Planning a Custom{' '}
          <span className="text-[#00CE44]">eCommerce App</span> to Grow Your Retail Business?
        </>
      }
      description="Get your application requirements reviewed by our eCommerce developers and identify the right engineering approach for your business model."
      ctaText="Book a Free Consultation"
      img="/assets/ecommerce/ecommerces-section.png"
      imgAlt="Planning a Custom eCommerce App"
    />
  )
}
