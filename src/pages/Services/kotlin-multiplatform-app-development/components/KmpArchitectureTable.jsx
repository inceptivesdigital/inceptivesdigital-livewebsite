export default function KmpArchitectureTable() {
  const rows = [
    {
      layer: 'Shared Module',
      responsibility:
        'Business logic, networking (Ktor), persistence (SQLDelight), domain models, use cases, application state',
      coverage: 'Android, iOS, Web, Desktop',
    },
    {
      layer: 'Platform Layer',
      responsibility:
        'Native UI, OS integrations, hardware access, framework bindings',
      coverage:
        'Android (Jetpack Compose), iOS (SwiftUI/UIKit), Web (Kotlin/Wasm), Desktop (Compose Multiplatform)',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">How Kotlin Multiplatform Works:</span> Architecture Overview
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            KMP separates a product into two distinct layers. What belongs in shared Kotlin code and what remains platform-specific is the architectural decision that determines everything beneath it.
          </p>
        </div>

        {/* Comparison Table with no-scrollbar for horizontal scroll on small devices */}
        <div className="w-full overflow-x-auto no-scrollbar rounded-[18px] bg-[#202020] border border-white/10">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-1/4">
                  Layer
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-[42.5%] border-l border-black/15">
                  Responsibility
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-[32.5%] border-l border-black/15">
                  Platform Coverage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr
                  key={row.layer}
                  className={idx % 2 === 0 ? 'bg-[#1c1c1c]' : 'bg-[#242424]'}
                >
                  <td className="py-5 px-6 font-bold text-[#00CE44] text-sm sm:text-base">
                    {row.layer}
                  </td>
                  <td className="py-5 px-6 text-white font-medium border-l border-white/10 leading-relaxed">
                    {row.responsibility}
                  </td>
                  <td className="py-5 px-6 text-white/90 font-normal border-l border-white/10 leading-relaxed">
                    {row.coverage}
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
