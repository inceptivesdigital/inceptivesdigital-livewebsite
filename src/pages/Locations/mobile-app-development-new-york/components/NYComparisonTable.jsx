import { Link } from 'react-router-dom'

export default function NYComparisonTable() {
  const rows = [
    {
      factor: 'Best project type',
      inceptives: 'Custom apps, business platforms, scalable MVPs',
      aiBuilder: 'Simple prototypes, internal tools, basic apps',
      freelancer: 'Small builds, one-off tasks, lightweight apps',
    },
    {
      factor: 'Typical project complexity',
      inceptives: 'Handles complex workflows, integrations, and compliance needs',
      aiBuilder: 'Best for low-complexity use cases',
      freelancer: 'Usually suitable for limited-scope requirements',
    },
    {
      factor: 'Product strategy support',
      inceptives: 'Yes, with planning, architecture, and delivery guidance',
      aiBuilder: 'Limited to templates and prompts',
      freelancer: 'Depends on individual experience',
    },
    {
      factor: 'Custom UI/UX design',
      inceptives: 'Yes',
      aiBuilder: 'Limited',
      freelancer: 'Variable',
    },
    {
      factor: 'Backend and API integrations',
      inceptives: 'Yes, including CRM, ERP, payments, and custom systems',
      aiBuilder: 'Limited or connector-based',
      freelancer: 'Possible, but depends on skill set',
    },
    {
      factor: 'Compliance and security planning',
      inceptives: 'Considers NY SHIELD, applicable NYDFS requirements, HIPAA, and payment-security controls.',
      aiBuilder: 'Rare',
      freelancer: 'Usually limited',
    },
    {
      factor: 'Code quality and scalability',
      inceptives: 'Built for maintainability and future growth',
      aiBuilder: 'Can be restrictive as complexity grows',
      freelancer: 'Variable by developer',
    },
    {
      factor: 'Testing and QA',
      inceptives: 'Structured QA and launch readiness process',
      aiBuilder: 'Minimal',
      freelancer: 'Often limited',
    },
    {
      factor: 'Dedicated team support',
      inceptives: 'Yes, including designers, developers, QA, and leads',
      aiBuilder: 'No',
      freelancer: 'No',
    },
    {
      factor: 'Post-launch support',
      inceptives: 'Yes, with ongoing maintenance options',
      aiBuilder: 'Platform-dependent',
      freelancer: 'Variable',
    },
    {
      factor: 'Speed to launch',
      inceptives: 'Fast, with structured delivery',
      aiBuilder: 'Very fast for simple apps',
      freelancer: 'Can be fast for small tasks',
    },
    {
      factor: 'Ownership and long-term control',
      inceptives: 'Clear delivery process and production-ready development',
      aiBuilder: 'Often tied to platform limitations',
      freelancer: 'Depends on contract',
    },
    {
      factor: 'Best for',
      inceptives: 'Businesses building serious products with growth plans',
      aiBuilder: 'Founders validating simple ideas quickly',
      freelancer: 'Small businesses with narrow requirements',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Building an App in NYC:{' '}
            <span className="text-[#00CE44]">Inceptives Digital vs AI Builder vs Freelancer</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            If you're comparing speed, cost, flexibility, and long-term reliability, the right choice depends on what you're building. AI app builders can help with simple prototypes, as the debate over{' '}
            <Link
              to="/blog/ai-app-builders-vs-human-developers"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              app builders vs. developers
            </Link>{' '}
            shows. Freelancers can support small tasks or lightweight builds. Inceptives Digital fits businesses that need custom development, stronger architecture, and a team that can carry the product from planning to launch and beyond.
          </p>
        </div>

        {/* Comparison Table Container with Card Rows & Hidden Scrollbar */}
        <div className="w-full overflow-x-auto no-scrollbar pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full text-left border-separate border-spacing-y-2.5 min-w-[640px]">
            {/* Table Head: Solid Green Background (#00CE44) with Black Text */}
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black rounded-l-xl">
                  Factor
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black text-center">
                  Inceptives Digital
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center">
                  AI App Builder
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center rounded-r-xl">
                  Freelancer
                </th>
              </tr>
            </thead>

            {/* Table Body: Smooth Lift, Cursor Pointer, Zero Border (Matching San Francisco) */}
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.factor}
                  className="bg-[#121318] hover:bg-[#181922] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] group relative z-0 hover:z-10 cursor-pointer select-none"
                >
                  {/* Factor */}
                  <td className="py-4 px-6 text-sm sm:text-[15px] font-medium text-white/90 rounded-l-xl border-0 group-hover:text-white transition-all duration-300 ease-out">
                    {row.factor}
                  </td>

                  {/* Inceptives Digital */}
                  <td className="py-4 px-6 text-xs sm:text-sm text-[#00CE44] font-normal leading-relaxed text-center border-0 transition-all duration-300 ease-out">
                    {row.inceptives}
                  </td>

                  {/* AI App Builder */}
                  <td className="py-4 px-6 text-xs sm:text-sm text-white/75 font-normal leading-relaxed text-center border-0 transition-all duration-300 ease-out">
                    {row.aiBuilder}
                  </td>

                  {/* Freelancer */}
                  <td className="py-4 px-6 text-xs sm:text-sm text-white/75 font-normal leading-relaxed text-center rounded-r-xl border-0 transition-all duration-300 ease-out">
                    {row.freelancer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
