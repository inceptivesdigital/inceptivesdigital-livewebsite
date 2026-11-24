import { Link } from 'react-router-dom'

export default function ReactNativeVsFlutterTable() {
  const rows = [
    {
      factor: 'Language',
      rn: 'JavaScript, TypeScript',
      flutter: 'Dart',
    },
    {
      factor: 'UI',
      rn: 'Native platform components',
      flutter: 'Impeller rendering engine',
    },
    {
      factor: 'Performance',
      rn: 'Native-level performance',
      flutter: 'Consistent rendering performance',
    },
    {
      factor: 'Device access',
      rn: 'Extensive libraries, custom modules',
      flutter: 'Plugins and platform channels',
    },
    {
      factor: 'Talent pool',
      rn: 'Larger JavaScript pool',
      flutter: 'Smaller Dart pool',
    },
    {
      factor: 'Best suited to',
      rn: 'Deep device integration',
      flutter: 'Identical, custom visuals',
    },
    {
      factor: 'Examples',
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
            Both frameworks deliver cross-platform efficiency, but they solve the problem differently, so your product goals decide the fit.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto no-scrollbar rounded-[18px] bg-[#202020] border border-white/10 mb-8">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 px-6 text-sm sm:text-base font-bold w-1/4">
                  Factor
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
                  key={row.factor}
                  className={idx % 2 === 0 ? 'bg-[#1c1c1c]' : 'bg-[#242424]'}
                >
                  <td className="py-4 px-6 font-bold text-[#00CE44]">
                    {row.factor}
                  </td>
                  <td className="py-4 px-6 text-white font-medium border-l border-white/10 leading-relaxed">
                    {row.rn}
                  </td>
                  <td className="py-4 px-6 text-white/90 font-normal border-l border-white/10 leading-relaxed">
                    {row.flutter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-white/90 text-[15px] sm:text-[16px] text-center max-w-3xl mx-auto leading-relaxed">
          We build with both, including{' '}
          <Link
            to="/flutter-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            Flutter app development
          </Link>
          , so our recommendation follows your product requirements.
        </p>
      </div>
    </section>
  )
}
