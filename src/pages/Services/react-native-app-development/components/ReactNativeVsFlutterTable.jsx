import { Link } from 'react-router-dom'

export default function ReactNativeVsFlutterTable() {
  const rows = [
    {
      req: 'Language',
      rn: 'JavaScript and TypeScript',
      flutter: 'Dart',
    },
    {
      req: 'Rendering',
      rn: 'Native components via bridge or Fabric',
      flutter: 'Custom rendering engine (Skia)',
    },
    {
      req: 'Performance',
      rn: 'Native-grade with Hermes and Turbo Modules',
      flutter: 'Consistent but renders its own UI layer',
    },
    {
      req: 'Native Module Access',
      rn: 'Deep, mature ecosystem',
      flutter: 'Growing, less extensive',
    },
    {
      req: 'Talent Availability',
      rn: 'Larger pool, JavaScript-based',
      flutter: 'Smaller pool, Dart-specific',
    },
    {
      req: 'UI Consistency',
      rn: 'Platform-native look and feel',
      flutter: 'Identical UI across platforms',
    },
    {
      req: 'Best For',
      rn: 'Apps needing deep device integration and faster team scaling',
      flutter: 'Apps prioritising pixel-perfect visual consistency',
    },
    {
      req: 'Proven At Scale',
      rn: 'Facebook, Instagram, Shopify',
      flutter: 'Google Pay, BMW',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">React Native vs Flutter:</span> Which Framework Fits Your Product?
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Both frameworks deliver cross-platform efficiency, but they solve the problem differently, and the decision usually comes down to how{' '}
            <Link
              to="/flutter-app-development"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              Flutter app development
            </Link>{' '}
            compares against React Native on the specific product at hand. Factors such as rendering approach, developer ecosystem, native module access, and long-term maintenance all matter when evaluating{' '}
            <a
              href="https://inceptivesdigital.com/blog/why-choose-flutter-for-app-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              why businesses choose Flutter
            </a>{' '}
            or React Native. The right choice depends on what the product needs to do.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto no-scrollbar rounded-[18px] bg-[#202020] border border-white/10 mb-10">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-1/4">
                  Requirements
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-[37.5%] border-l border-black/15">
                  React Native
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-[37.5%] border-l border-black/15">
                  Flutter
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr
                  key={row.req}
                  className={idx % 2 === 0 ? 'bg-[#1c1c1c]' : 'bg-[#242424]'}
                >
                  <td className="py-4 px-6 font-bold text-[#00CE44]">
                    {row.req}
                  </td>
                  <td className="py-4 px-6 text-white font-medium border-l border-white/10">
                    {row.rn}
                  </td>
                  <td className="py-4 px-6 text-white/80 font-normal border-l border-white/10">
                    {row.flutter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Paragraph */}
        <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-4xl mx-auto">
          For businesses that need native-grade performance and deep device integration, React Native remains the stronger commercial decision, a distinction that becomes clearer when comparing{' '}
          <a
            href="https://inceptivesdigital.com/blog/native-vs-hybrid-vs-cross-platform-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            native vs hybrid vs cross-platform app development
          </a>
          . It is the framework Inceptives Digital has engineered to its full potential for eight years.
        </p>
      </div>
    </section>
  )
}
