import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function StartupMidCta2() {
  return (
    <FullWidthCtaSection
      heading={<>Get a Personalised Blueprint for Your{' '} <span className="text-[#00CE44]">Startup App Idea</span></>}
      description={<>Share your idea, and we&apos;ll turn it into a powerful digital product that improves experiences and garners meaningful change.</>}
      ctaText="Request My Free Proposal"
      bgImage="/assets/homecta.png"
    />
  )
}
