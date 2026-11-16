import { Link } from 'react-router-dom'

export default function WebAppComparisonTable() {
  const rows = [
    {
      aspect: 'Installation',
      web: 'No install, runs in browser instantly',
      native: 'Requires download from the App Store',
    },
    {
      aspect: 'Performance',
      web: 'Slower, depends on the browser and connection',
      native: 'Faster, optimized for device hardware',
    },
    {
      aspect: 'Device Access',
      web: 'Limited access to camera, sensors, and storage',
      native: 'Full access to device hardware features',
    },
    {
      aspect: 'Updates',
      web: 'Instant, no user action needed',
      native: 'Requires the user to download updates',
    },
    {
      aspect: 'Offline Use',
      web: 'Limited or no offline functionality',
      native: 'Works offline with cached data',
    },
    {
      aspect: 'Discoverability',
      web: 'Found via search engines and links',
      native: 'Found via app stores like Play/App Store',
    },
    {
      aspect: 'User Experience',
      web: 'Generic, less platform-native feel',
      native: 'Tailored, follows platform design guidelines',
    },
    {
      aspect: 'Push Notifications',
      web: 'Limited or browser-dependent support',
      native: 'Full native push notification support',
    },
    {
      aspect: 'Maintenance',
      web: 'Easier, one version to maintain',
      native: 'Harder, multiple platform versions to manage',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mb-12">
          <h2 className="text-[30px] sm:text-[40px] font-bold text-white leading-[1.2] tracking-tight mb-4">
            Web Apps vs Native Apps: Choosing the Right Approach
          </h2>
          <p className="text-white/75 text-[16px] leading-relaxed">
            Selecting between web and native apps depends on your budget, performance needs, target audience, and desired user experience across devices.
          </p>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar border border-white/15 bg-[#1B1B1B]">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 w-[24%]">
                  Aspect
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[38%]">
                  Web Apps
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold border-b border-black/15 border-l border-black/15 w-[38%]">
                  Native Apps
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
                    {row.web}
                  </td>
                  <td className="py-4 px-6 text-white/80 text-sm sm:text-[15px] border-l border-white/10">
                    {row.native}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm sm:text-[15px] text-white/75 leading-relaxed">
          Need native mobile performance or cross-platform mobile reach alongside your web app? Explore our{' '}
          <Link to="/ios-app-development" className="text-[#00CE44] underline hover:text-white transition-colors font-normal">
            iOS app development
          </Link>
          ,{' '}
          <Link to="/android-app-development" className="text-[#00CE44] underline hover:text-white transition-colors font-normal">
            Android app development
          </Link>
          , and{' '}
          <Link to="/flutter-app-development" className="text-[#00CE44] underline hover:text-white transition-colors font-normal">
            Flutter app development
          </Link>{' '}
          services.
        </p>
      </div>
    </section>
  )
}
