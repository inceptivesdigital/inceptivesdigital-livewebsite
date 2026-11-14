export default function IosTechStackTable() {
  const rows = [
    {
      area: 'Native Development',
      tech: 'Swift, SwiftUI, UIKit, Objective-C',
    },
    {
      area: 'App Architecture',
      tech: 'MVVM, Swift Concurrency, async/await',
    },
    {
      area: 'Data Storage',
      tech: 'SwiftData, Core Data, CloudKit',
    },
    {
      area: 'API Integration',
      tech: 'URLSession, REST APIs, GraphQL, WebSockets',
    },
    {
      area: 'Apple Frameworks',
      tech: 'HealthKit, MapKit, StoreKit, WidgetKit',
    },
    {
      area: 'AI and Spatial Computing',
      tech: 'Foundation Models, Core ML, Vision, ARKit, RealityKit',
    },
    {
      area: 'App Security',
      tech: 'Keychain, LocalAuthentication, CryptoKit',
    },
    {
      area: 'Testing',
      tech: 'XCTest, XCUITest, Swift Testing, TestFlight',
    },
    {
      area: 'Deployment',
      tech: 'Xcode, Xcode Cloud, GitHub Actions',
    },
    {
      area: 'Backend Infrastructure',
      tech: 'AWS, Firebase, Node.js, PostgreSQL',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Technologies Behind Our{' '}
            <span className="text-[#00CE44]">Native iOS App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Our iOS developers use Apple’s latest SDKs and native frameworks to develop custom iPhone and iPad applications. Every{' '}
            <a
              href="https://inceptivesdigital.com/blog/mobile-app-tech-stack"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              mobile app tech stack
            </a>{' '}
            we choose varies according to the product’s functionality and integration requirements.
          </p>
        </div>

        {/* 10-Row Engineering Area / Technologies Table */}
        <div className="w-full overflow-x-auto no-scrollbar rounded-[20px] border border-white/15 bg-[#161616]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold w-1/3 border-b border-black/10">
                  Engineering Area
                </th>
                <th className="py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b border-black/10">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, idx) => (
                <tr
                  key={r.area}
                  className={idx % 2 === 0 ? 'bg-[#181818]' : 'bg-[#202020]'}
                >
                  <td className="py-4 px-6 sm:px-8 text-sm sm:text-[15px] font-bold text-[#00CE44] whitespace-nowrap">
                    {r.area}
                  </td>
                  <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm text-white/90 font-normal">
                    {r.tech}
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
