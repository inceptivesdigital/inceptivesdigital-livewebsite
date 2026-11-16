import { Link } from 'react-router-dom'

export default function AsoComparisonTable() {
  const rows = [
    {
      aspect: 'How it works',
      aso: 'Organic ranking and conversion gains via metadata, creative, and keyword optimization',
      asa: 'Paid placement in App Store search results, billed per tap',
      ua: 'Paid placement on ad networks driving installs from outside the store',
    },
    {
      aspect: 'When it stops',
      aso: 'Results compound and persist after the work pauses, eroding slowly without upkeep',
      asa: 'Visibility stops the moment the ad budget stops',
      ua: 'Visibility stops the moment the ad budget stops',
    },
    {
      aspect: 'Best for',
      aso: 'Sustainable, long-term organic visibility and category authority',
      asa: 'Capturing high-intent searchers, including branded and competitor keyword defense',
      ua: 'Driving install volume at scale before users reach the store',
    },
    {
      aspect: 'How Inceptives Digital uses it',
      aso: 'Core engagement building the foundation every other channel depends on',
      asa: 'Defends top-of-funnel search terms, feeding conversion data into organic decisions',
      ua: 'Coordinated with paid teams so UA signals sharpen organic targeting',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            ASO, Apple Search Ads, and Paid UA:{' '}
            <span className="text-[#00CE44]">How They Work Together</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Three different growth levers, three different cost models, and choosing between them often overlaps with broader{' '}
            <Link
              to="/blog/effective-marketing-strategies-for-mobile-apps"
              className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
            >
              effective marketing strategies for mobile apps
            </Link>
            . Here is how ASO, Apple Search Ads, and Paid UA actually compare side by side.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-[16px] border border-white/10 bg-[#141414] shadow-none">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 w-[20%]">
                  Channel / Strategy
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[26.66%]">
                  ASO
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[26.66%]">
                  Apple Search Ads (ASA)
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[26.66%]">
                  Paid UA
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row) => (
                <tr key={row.aspect} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-4 px-6 font-normal text-white text-sm sm:text-base">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.aso}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.asa}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.ua}
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
