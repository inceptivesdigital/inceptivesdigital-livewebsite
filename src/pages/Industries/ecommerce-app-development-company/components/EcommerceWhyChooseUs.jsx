import React from 'react'

const reasons = [
  {
    title: 'eCommerce Domain Expertise',
    description:
      'Modern shopping behaviour, secure payment architecture, inventory management complexity, and multi-vendor operational requirements are understood before development begins. Products built around genuine commerce workflows rather than generic app templates adapted for retail.',
  },
  {
    title: 'Conversion-Focused Engineering',
    description:
      'Every technical decision, page load speed, checkout flow design, search accuracy, and recommendation relevance is evaluated against one metric: does it increase the probability of a completed purchase? Performance is not a post-launch optimisation. It is an architectural commitment.',
  },
  {
    title: 'Seamless Third-Party Integrations',
    description:
      'Payment gateways, ERP systems, CRM platforms, shipping APIs, and marketing tools are connected into a unified commerce ecosystem. No data silos. No manual reconciliation between systems that should communicate automatically.',
  },
  {
    title: 'Custom Over Template',
    description:
      'Every ecommerce solution is built around your specific business model, product catalog, and target audience. No Shopify theme dressed up as a custom build. No generic marketplace template repurposed for your category.',
  },
  {
    title: 'Transparent Development Process',
    description:
      'Defined milestones, documented decisions, and regular progress updates from discovery through deployment. Every stage visible. No surprise scope additions at the delivery stage.',
  },
  {
    title: 'Post-Launch Growth Partnership',
    description:
      'Performance monitoring, feature updates, security patches, and platform scaling are provided continuously after launch. The ecommerce platform that launches is the starting point for a business that grows — not a finished product handed over and forgotten.',
  },
]

export default function EcommerceWhyChooseUs() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Why Choose Inceptives Digital’s{' '}
            <span className="text-[#00CE44]">eCommerce App Development Services</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Any studio can build a product page and a checkout flow. Here is what we build that determines whether the platform grows, converts, and operates without constant manual intervention.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 text-left transition-colors duration-200 cursor-pointer"
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
