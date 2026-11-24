import { Link } from 'react-router-dom'

export default function PostLaunchNecessity() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#000000] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Headline */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
              Why Products That Launch Well Still Struggle to Grow
            </h2>
          </div>

          {/* Right Copy with Stats & Links */}
          <div className="lg:col-span-7 text-left space-y-6 text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
            <p>
              Mobile apps lose roughly 58% of users within 30 days and 75% by day 90. Meanwhile, B2B SaaS products that iterate on post-launch data hold annual retention rates between 74% and 90%. The gap is not in product quality. It is a process.
            </p>
            <p>
              Without structured analytics after launch, the{' '}
              <Link
                to="/blog/common-reasons-digital-products-fail"
                className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
              >
                common reasons digital products fail
              </Link>{' '}
              often go unresolved as teams patch symptoms rather than causes. That is also why 94% of app developers earn under $1,000 per month, while the top 1% captures over 90% of store revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
