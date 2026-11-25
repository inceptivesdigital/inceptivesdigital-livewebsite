export default function WebAppComparisonTable() {
  const rows = [
    {
      aspect: 'Access',
      web: 'Runs through supported browsers',
      native: 'Installed through app distribution',
    },
    {
      aspect: 'Performance',
      web: 'Depends on browser, workload, and architecture',
      native: 'Direct access to native execution and platform APIs',
    },
    {
      aspect: 'Device Access',
      web: 'Browser-supported hardware and device APIs',
      native: 'Broader access to device capabilities',
    },
    {
      aspect: 'Updates',
      web: 'Central deployment makes updates available directly',
      native: 'Releases follow app distribution processes',
    },
    {
      aspect: 'Offline Use',
      web: 'PWAs support planned offline workflows',
      native: 'Offline functionality depends on implementation',
    },
    {
      aspect: 'Discoverability',
      web: 'Search engines, direct links, and web distribution',
      native: 'App Store and Google Play discovery',
    },
    {
      aspect: 'User Experience',
      web: 'Responsive interfaces across supported browsers',
      native: 'Platform-specific interactions and conventions',
    },
    {
      aspect: 'Notifications',
      web: 'Available on supported browsers and devices',
      native: 'Native notification frameworks',
    },
    {
      aspect: 'Maintenance',
      web: 'Centralized web application updates',
      native: 'Separate platform builds may require additional maintenance',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight mb-4">
            <span className="text-[#00CE44]">Web Apps vs Native Apps:</span> Choosing the Right Approach
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
            Selecting between web and native apps depends on your budget, performance needs, target audience, and desired user experience across devices.
          </p>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar border border-white/15 bg-[#1B1B1B] rounded-xl">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 w-[22%]">
                  Aspect
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[39%]">
                  Web Applications
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[39%]">
                  Native Mobile Apps
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row) => (
                <tr key={row.aspect} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white text-sm sm:text-base">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-6 text-white/90 text-sm sm:text-[15px] border-l border-white/10">
                    {row.web}
                  </td>
                  <td className="py-4 px-6 text-white/85 text-sm sm:text-[15px] border-l border-white/10">
                    {row.native}
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
