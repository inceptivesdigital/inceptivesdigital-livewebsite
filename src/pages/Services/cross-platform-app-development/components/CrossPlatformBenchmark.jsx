import { Link } from 'react-router-dom'

export default function CrossPlatformBenchmark() {
  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Cross-Platform Is the New Benchmark for Modern Mobile Development.{' '}
              <span className="text-[#00CE44]">Execute It With the Right Partner.</span>
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.7] mb-6 font-normal">
              Over 40% of all mobile applications shipped today run from a single cross-platform foundation. The market has moved, and the businesses performing best within it chose their engineering partner carefully. Inceptives Digital is the cross-platform app development company that ensures every product holds its ground on iOS and Android equally. Being supported by 150+ engineers operating across{' '}
              <Link
                to="/flutter-app-development"
                className="font-normal text-[#00CE44] underline decoration-[#00CE44] decoration-2 underline-offset-4 hover:opacity-80 transition-colors"
              >
                Flutter
              </Link>{' '}
              and{' '}
              <Link
                to="/react-native-app-development"
                className="font-normal text-[#00CE44] underline decoration-[#00CE44] decoration-2 underline-offset-4 hover:opacity-80 transition-colors"
              >
                React Native
              </Link>
              , every engagement draws on experience built at production scale.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
