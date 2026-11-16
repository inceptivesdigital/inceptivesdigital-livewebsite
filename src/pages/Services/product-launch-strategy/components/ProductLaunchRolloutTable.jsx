import { Link } from 'react-router-dom'

export default function ProductLaunchRolloutTable() {
  const rows = [
    {
      aspect: 'What it is',
      soft: 'Limited release in select test markets before wider rollout begins',
      full: 'Simultaneous release across all target markets and platforms at once',
      phased: 'Sequential rollout across markets or user segments in planned stages',
    },
    {
      aspect: 'Primary goal',
      soft: (
        <>
          Validate your{' '}
          <Link
            to="/blog/how-to-validate-your-mobile-app-idea"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            mobile app idea
          </Link>
          , fix bugs, and test{' '}
          <Link
            to="/blog/mobile-app-monetization-strategies"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            mobile app monetization strategies
          </Link>{' '}
          before scaling
        </>
      ),
      full: 'Maximize visibility and momentum with one coordinated, high-impact market entry',
      phased: 'Balance risk and learning while expanding reach gradually and deliberately',
    },
    {
      aspect: 'Risk level',
      soft: 'Low, since issues surface in smaller markets before major exposure',
      full: 'High, since problems affect the entire audience simultaneously on day one',
      phased: 'Moderate, since each stage limits exposure while still building toward scale',
    },
    {
      aspect: 'Best for',
      soft: 'Early-stage apps needing real user data before committing a full marketing budget',
      full: 'Established products with proven retention, ready for immediate large-scale growth',
      phased: 'Apps balancing market testing with steady, controlled user growth',
    },
    {
      aspect: 'ASO implication',
      soft: (
        <>
          Early testing helps avoid{' '}
          <Link
            to="/blog/app-store-optimization-mistakes"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            app store optimization mistakes
          </Link>{' '}
          before broad distribution
        </>
      ),
      full: (
        <>
          Demands proven{' '}
          <Link
            to="/blog/10-aso-strategies-to-increase-your-app-store-rankings"
            className="text-[#00CE44] underline font-normal hover:text-white transition-colors"
          >
            ASO strategies to increase app store rankings
          </Link>{' '}
          to capitalize on initial launch traffic
        </>
      ),
      phased: 'Allows step-by-step keyword and conversion rate optimization as new markets are added',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Soft Launch vs Full Launch vs Phased Launch:{' '}
            <span className="text-[#00CE44]">Choosing the Right Rollout Strategy</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Every app launch strategy carries different risks, costs, and learning tradeoffs. Choosing between soft, full, and phased launch shapes how quickly issues surface and scale.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-[16px] border border-white/10 bg-[#141414] shadow-none">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 w-[18%]">
                  Rollout Aspect
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[27.33%]">
                  Soft Launch
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[27.33%]">
                  Full Launch
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[27.33%]">
                  Phased Launch
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
                    {row.soft}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.full}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.phased}
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
