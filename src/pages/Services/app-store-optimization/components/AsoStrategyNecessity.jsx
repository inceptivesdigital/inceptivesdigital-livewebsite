import { Link } from 'react-router-dom'

export default function AsoStrategyNecessity() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Why Most Apps Stay Invisible{' '}
              <span className="text-[#00CE44]">Without a Strategy</span>
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              A user searching your category sees a handful of results and decides in 10 seconds. That decision happens above the fold because 90% of iOS visitors never scroll past the first 10% of a page. Pages built for conversion hit 33.7% on the App Store. Most apps sit well below that, and the pattern usually traces back to a handful of{' '}
              <Link
                to="/blog/app-store-optimization-mistakes"
                className="text-[#00CE44] underline font-normal hover:opacity-80 transition-colors"
              >
                app store optimization mistakes
              </Link>{' '}
              rather than a weak product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
