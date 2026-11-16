export default function PostLaunchComparisonTable() {
  const rows = [
    {
      aspect: 'Primary goal',
      iteration: 'Improve performance metrics through data-driven changes and testing',
      maintenance: 'Keep the product stable, secure, and running without major disruption',
    },
    {
      aspect: 'Driven by',
      iteration: 'User behavior data, retention curves, and experiment results',
      maintenance: 'Bug reports, security patches, and routine technical upkeep',
    },
    {
      aspect: 'Typical actions',
      iteration: 'A/B testing, feature prioritization, conversion rate optimization',
      maintenance: 'Bug fixes, server updates, dependency upgrades, uptime monitoring',
    },
    {
      aspect: 'Outcome measured',
      iteration: 'Movement in KPIs like retention, conversion, and engagement',
      maintenance: 'System stability, fewer errors, and consistent uptime',
    },
    {
      aspect: 'Frequency',
      iteration: 'Structured cycles tied to data review and hypothesis testing',
      maintenance: 'Continuous, as issues or technical needs arise',
    },
    {
      aspect: 'Mindset',
      iteration: 'Forward-looking, focused on growth and roadmap recalibration',
      maintenance: 'Reactive, focused on keeping existing functionality intact',
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#000000] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Post-Launch Iteration vs.{' '}
            <span className="text-[#00CE44]">Ongoing Maintenance</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Both keep a product running smoothly, but they solve different problems and rely on different signals to guide decisions.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 px-6 text-white font-semibold text-sm sm:text-base w-[22%]">
                  Aspect
                </th>
                <th className="py-4 px-6 text-[#00CE44] font-semibold text-sm sm:text-base w-[39%]">
                  Post-Launch Iteration
                </th>
                <th className="py-4 px-6 text-white/90 font-semibold text-sm sm:text-base w-[39%]">
                  Ongoing Maintenance
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-white/10 ${
                    index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#0a0a0a]'
                  } hover:bg-[#1a1a1a] transition-colors`}
                >
                  <td className="py-5 px-6 text-white font-normal text-sm sm:text-[15px]">
                    {row.aspect}
                  </td>
                  <td className="py-5 px-6 text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed">
                    {row.iteration}
                  </td>
                  <td className="py-5 px-6 text-white/70 text-sm sm:text-[15px] font-normal leading-relaxed">
                    {row.maintenance}
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
