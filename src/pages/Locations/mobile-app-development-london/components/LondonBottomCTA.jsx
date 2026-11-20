import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function LondonBottomCTA() {
  return (
    <FullWidthCtaSection
      heading={<>Let&apos;s Create Your App Roadmap{' '} <span className="text-[#00CE44]">With Precision</span></>}
      description={<>Every strong product starts with a plan worth trusting. Share where you&apos;re headed, and we&apos;ll shape the route to get there.</>}
      ctaText="Schedule Your Roadmap Session"
      bgImage="/assets/locations/london/cta-london.webp"
    />
  )
}
