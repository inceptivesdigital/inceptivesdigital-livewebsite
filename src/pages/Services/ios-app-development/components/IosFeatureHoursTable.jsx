export default function IosFeatureHoursTable() {
  const rows = [
    {
      feature: 'Authentication & User Profiles',
      ios: '18–70 hrs',
      backend: '12–40 hrs',
      uiux: '8–20 hrs',
    },
    {
      feature: 'Payments & Subscriptions',
      ios: '20–80 hrs',
      backend: '30–120 hrs',
      uiux: '12–30 hrs',
    },
    {
      feature: 'Push Notifications & APNs',
      ios: '8–20 hrs',
      backend: '14–30 hrs',
      uiux: '3–8 hrs',
    },
    {
      feature: 'Maps, Location & Geofencing',
      ios: '20–60 hrs',
      backend: '16–80 hrs',
      uiux: '10–30 hrs',
    },
    {
      feature: 'Real-Time Chat & Messaging',
      ios: '40–120 hrs',
      backend: '60–180 hrs',
      uiux: '18–40 hrs',
    },
    {
      feature: 'Social Login & Account Linking',
      ios: '10–30 hrs',
      backend: '8–20 hrs',
      uiux: '2–6 hrs',
    },
    {
      feature: 'HealthKit & Fitness Integrations',
      ios: '30–120 hrs',
      backend: '10–40 hrs',
      uiux: '12–30 hrs',
    },
    {
      feature: 'ARKit & Augmented Reality',
      ios: '60–240 hrs',
      backend: '10–60 hrs',
      uiux: '40–120 hrs',
    },
    {
      feature: 'AI & CoreML Integration',
      ios: '30–100 hrs',
      backend: '20–100 hrs',
      uiux: '8–30 hrs',
    },
    {
      feature: 'IoT & Bluetooth Connectivity',
      ios: '50–180 hrs',
      backend: '30–120 hrs',
      uiux: '15–50 hrs',
    },
    {
      feature: 'Offline Mode & Data Sync',
      ios: '30–100 hrs',
      backend: '20–70 hrs',
      uiux: '6–20 hrs',
    },
    {
      feature: 'Admin & Role-Based Access',
      ios: '20–60 hrs',
      backend: '30–100 hrs',
      uiux: '10–30 hrs',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            How Many Hours Does{' '}
            <span className="text-[#00CE44]">Each iOS Feature Take to Build</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Not every iPhone app feature requires the same development effort. For businesses planning custom iOS applications, the table below shows estimated engineering hours for individual features across native iOS, backend, and UI/UX work.
          </p>
        </div>

        {/* 12-Row Feature Hours Table */}
        <div className="w-full overflow-x-auto no-scrollbar rounded-[20px] border border-white/15 bg-[#1a1a1a]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b border-black/10">
                  iOS Feature
                </th>
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b border-black/10">
                  iOS Development
                </th>
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b border-black/10">
                  Backend Development
                </th>
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b border-black/10">
                  UI/UX Design
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, idx) => (
                <tr
                  key={r.feature}
                  className={idx % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#222222]'}
                >
                  <td className="py-4 px-6 sm:px-8 text-sm sm:text-[15px] font-bold text-white">
                    {r.feature}
                  </td>
                  <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm text-[#00CE44] font-bold">
                    {r.ios}
                  </td>
                  <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm text-white/90 font-medium">
                    {r.backend}
                  </td>
                  <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm text-white/90 font-medium">
                    {r.uiux}
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
