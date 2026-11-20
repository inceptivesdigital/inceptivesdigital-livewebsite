import React from 'react'

const reasons = [
  {
    title: 'Startup-Specific Engineering',
    description:
      'Timelines, investor milestones, and architecture that evolves as quickly as product-market fit hypotheses are understood before development begins. Not learned during your project at your expense.',
  },
  {
    title: 'Compliance Built In From Day One',
    description:
      'GDPR, SOC 2, PCI DSS, and App Store guidelines are embedded in development workflows from the start. Founders avoid costly remediation work and accelerate enterprise sales conversations that require compliance documentation.',
  },
  {
    title: 'Custom Over Template',
    description:
      'Every product is built from your specific requirements. No repurposed templates. No pre-built SaaS clones dressed up as custom development. Engineering that reflects your brand, your workflows, and your competitive differentiation.',
  },
  {
    title: 'Full-Spectrum Technology Depth',
    description:
      'React Native mobile to serverless AWS backends. TensorFlow ML pipelines to blockchain integrations. Deep expertise across the complete modern technology stack without needing multiple specialist vendors for a single product.',
  },
  {
    title: 'Transparent Agile Delivery',
    description:
      'Two-week sprints. Regular demos. Real-time progress visibility. Not through status update emails, but through working software delivered on a rhythm founders can depend on and investors can see.',
  },
  {
    title: 'Post-Launch Engineering Partnership',
    description:
      'Performance monitoring, crash reporting, feature iteration, A/B testing, and App Store optimisation are delivered continuously after launch. The product that ships is the starting point for a business that grows.',
  },
]

export default function StartupWhyChooseUs() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            What Our{' '}
            <span className="text-[#00CE44]">Startup App Development Company</span> Delivers That Generic Studios Do Not
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            There is no shortage of development agencies. What is rare is a studio that understands the startup context, investor milestones, architecture decisions that compound, and the cost of building the wrong thing the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-[#1b1c21] rounded-[16px] p-7 sm:p-8 text-left transition-colors duration-200 hover:bg-[#22242a]"
            >
              <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
