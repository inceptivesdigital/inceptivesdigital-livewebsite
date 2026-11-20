import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function TorontoBottomCTA() {
  return (
    <FullWidthCtaSection
      heading={<>Bring Your Next Mobile Application{' '} <span className="text-[#00CE44]">Idea to Life</span></>}
      description={<>Share your vision, business goals, and product challenges. Together, we map the path from concept to a successful launch.</>}
      ctaText="Schedule a Discovery Call"
      bgImage="/assets/locations/toronto/cta-toronto.webp"
    />
  )
}
