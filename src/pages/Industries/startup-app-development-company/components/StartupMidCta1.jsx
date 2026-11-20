import FullWidthCtaSection from '../../../../components/FullWidthCtaSection'

export default function StartupMidCta1() {
  return (
    <FullWidthCtaSection
      heading={<>You&apos;ve Got the Idea. We&apos;ve Got the Engineers, the Stack, and the Roadmap.{' '} <span className="text-[#00CE44]">Collaborate to Innovate!</span></>}
      description={<>Your idea deserves engineering that matches its ambition. The first conversation is where we figure out what it needs.</>}
      ctaText="Get a Project Estimate"
      img="/assets/app-store-optimization/cta-mobile.png"
      imgAlt="Collaborate to Innovate Startup App Engineering"
    />
  )
}
