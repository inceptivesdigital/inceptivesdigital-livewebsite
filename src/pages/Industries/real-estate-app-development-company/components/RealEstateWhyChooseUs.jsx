import React from 'react'

const reasons = [
  {
    title: 'Proven Mobile Product Delivery',
    description:
      'Put your real estate project in the hands of engineers experienced in taking complex mobile applications through development and production release.',
  },
  {
    title: 'Multi-Sided Marketplace Expertise',
    description:
      'Our experience with multi-sided platforms like Halwar Connect brings practical engineering knowledge to marketplace operations, where independent agents and centralized administration must work together.',
  },
  {
    title: 'Native and Cross-Platform Specialists',
    description:
      'Choose the right mobile architecture for your product requirements. Our Swift, Kotlin, Flutter, and React Native developers support both native and cross-platform app development delivery.',
  },
  {
    title: 'Specialized Real Estate Integrations',
    description:
      'Connect your application with authorized MLS/IDX data and compatible business systems through integration planning that accounts for listing accuracy and operational dependencies.',
  },
  {
    title: 'Engineering That Protects Investment',
    description:
      'We assess existing infrastructure before committing to custom development, keeping engineering resources focused on functionality that justifies the investment.',
  },
  {
    title: 'Long-Term Product Engineering Support',
    description:
      "Maintain development continuity after launch with engineers familiar with your application's architecture, reducing handover effort when planning updates or future releases.",
  },
]

export default function RealEstateWhyChooseUs() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            What Makes Inceptives Digital an Ideal{' '}
            <span className="text-[#00CE44]">Real Estate Mobile App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            With 8+ years of experience and 70+ applications launched, Inceptives Digital brings established digital product development expertise to real estate projects. Our teams approach development with the technical depth and commercial judgment your investment demands.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 text-left transition-colors duration-200 h-full"
            >
              <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
