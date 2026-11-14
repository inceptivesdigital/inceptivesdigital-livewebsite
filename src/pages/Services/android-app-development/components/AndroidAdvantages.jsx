export default function AndroidAdvantages() {
  const pillars = [
    {
      title: '150+ Engineering Professionals',
      desc: 'Our 150+ developers and engineers span mobile, backend, QA, design, and product disciplines. That depth keeps the Android application connected to the systems, workflows, and product decisions around it.',
    },
    {
      title: 'Scalable Android Architecture',
      desc: (
        <>
          New features shouldn&apos;t require major architectural changes with every update. Our Android developers build Kotlin-based applications around existing business systems, keeping the architecture flexible enough to support future{' '}
          <a
            href="https://inceptivesdigital.com/system-integration-api-automation"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            API integrations
          </a>
          .
        </>
      ),
    },
    {
      title: "Built for Android's Device Diversity",
      desc: 'Reach users across smartphones, tablets, foldables, Wear OS, Android TV, and automotive displays. Android device testing addresses OS compatibility and hardware-specific behavior to maintain reliable performance across supported devices.',
    },
    {
      title: 'Security Built Into Android Engineering',
      desc: (
        <>
          Protect sensitive business data with{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-security-best-practices"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app security best practices
          </a>{' '}
          that account for Android-specific risks. Our engineers use Android Keystore for cryptographic key management and biometric authentication where appropriate while securing communication with backend APIs for your Android apps.
        </>
      ),
    },
    {
      title: 'Development With Defined Milestones',
      desc: (
        <>
          Every milestone in the{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-development-timeline"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            app development timeline
          </a>{' '}
          gives clients a tangible view of product progress. Android engineers deliver working functionality for review, allowing stakeholders to evaluate implementation decisions before the next development cycle.
        </>
      ),
    },
    {
      title: 'Cross-Industry Delivery Experience',
      desc: 'Experience across 20+ industries gives the team a practical understanding of different workflows, integrations, user expectations, and technical constraints, from healthcare and fintech to eCommerce, travel, and fitness.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            The Advantage of Working with Inceptives Digital for{' '}
            <span className="text-[#00CE44]">Android App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital brings experienced Android engineers and cross-functional specialists to every project. The team handles complex integrations, device-specific requirements, and product delivery with clear technical ownership.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#242424] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src="/assets/mobile-app/icon01.png"
                alt={p.title}
                className="w-9 h-9 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
          >
            Talk to an Android Engineering Team
          </a>
        </div>
      </div>
    </section>
  )
}
