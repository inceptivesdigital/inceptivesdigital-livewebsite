export default function AustinComparisonTable() {
  const rows = [
    {
      capability: 'Fixed-Price & Scope Protection',
      inceptives: 'Guaranteed milestone pricing with strict change orders',
      company1: 'Variable hourly billing',
      company2: 'T&M without budget caps',
      company3: 'Opaque estimates',
    },
    {
      capability: '100% IP & Source Code Ownership',
      inceptives: 'Transferred to client upon milestone completion',
      company1: 'Retained until final payment + licensing fees',
      company2: 'Shared proprietary components',
      company3: 'Vendor lock-in libraries',
    },
    {
      capability: 'Texas Compliance (TDPSA, CUBI, HB 300)',
      inceptives: 'Architected & verified before development begins',
      company1: 'Generic out-of-state templates',
      company2: 'Addressed post-launch as an audit',
      company3: 'Not covered',
    },
    {
      capability: 'Senior Engineering Team Only',
      inceptives: 'Dedicated senior engineers with 7+ yrs average exp',
      company1: 'Junior developers with offshore relay',
      company2: 'Rotated contractors',
      company3: 'Outsourced white-label teams',
    },
    {
      capability: 'Two-Week Sprint Demos & Staging Builds',
      inceptives: 'Working, testable build delivered at every sprint',
      company1: 'Monthly status summaries',
      company2: 'Screen mockups until final QA',
      company3: 'Black-box development',
    },
    {
      capability: 'Post-Launch Warranty & App Store Guarantee',
      inceptives: '30-day warranty & 100% store submission guarantee',
      company1: 'Billable support retainer only',
      company2: 'Limited 14-day defect window',
      company3: 'No post-launch warranty',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Comparing Mobile App Development Companies in{' '}
            <span className="text-[#00CE44]">Austin</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Development partners differ in their engineering capabilities, commercial terms, and project responsibilities. Review source code ownership, compliance architecture, quality assurance, and post-launch arrangements before committing to a mobile application project.
          </p>
        </div>

        {/* Comparison Table Container with no-scrollbar */}
        <div className="max-w-5xl mx-auto overflow-x-auto no-scrollbar pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full text-left border-separate border-spacing-y-2.5 min-w-[640px]">
            {/* Table Head: Green Background (#00CE44) with Black Text */}
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black rounded-l-xl">
                  Development Capabilities
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black text-center">
                  Inceptives Digital
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center">
                  Company 1
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center">
                  Company 2
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center rounded-r-xl">
                  Company 3
                </th>
              </tr>
            </thead>

            {/* Table Body: Smooth Lift, Cursor Pointer, Border Removed on Hover like San Francisco */}
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="bg-[#121318] hover:bg-[#181922] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] group relative z-0 hover:z-10 cursor-pointer select-none"
                >
                  <td className="py-4 px-6 text-sm font-normal text-white/90 rounded-l-xl border-l border-y border-white/5 group-hover:border-transparent group-hover:text-white transition-all duration-300 ease-out">
                    {row.capability}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-center text-[#00CE44] font-normal border-y border-white/5 bg-[#00CE44]/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.inceptives}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-center text-white/70 font-normal border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.company1}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-center text-white/70 font-normal border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.company2}
                  </td>
                  <td className="py-4 px-6 text-xs sm:text-sm text-center text-white/70 font-normal rounded-r-xl border-r border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.company3}
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
