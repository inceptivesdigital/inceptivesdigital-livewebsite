import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function NYBottomCTA() {
  return (
    <FullWidthCtaSection
      heading={<>Before You Invest Six Figures in an App,{' '} <span className="text-[#00CE44]">Invest 30 Minutes in the Right Conversation.</span></>}
      description={<>Get honest feedback on your idea, budget, feature scope, and launch strategy from a team that has shipped 70+ products.</>}
      ctaText="Book Your Discovery Call"
      bgImage="/assets/locations/new-york/cta-ny.webp"
    />
  )
}
