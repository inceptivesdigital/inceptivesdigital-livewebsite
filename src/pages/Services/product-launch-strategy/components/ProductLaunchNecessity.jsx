import { Link } from 'react-router-dom'
export default function ProductLaunchNecessity() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              A Strong Launch Strategy Is Now a{' '}
              <span className="text-[#00CE44]">Business Necessity</span>
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              The market has already shifted. 72% of marketers have adopted AI tools, 69% of digital ad spend happens on mobile, and global app install spend hit $94 billion in 2026. A digital product launch today is not just about going live. It is about reaching the right audience, on the right platform, at the right moment. Without a strategy built around that, the{' '}
              <Link
                to="/blog/common-reasons-digital-products-fail"
                className="text-[#00CE44] underline font-normal hover:opacity-80 transition-colors"
>
                common reasons digital products fail
              </Link>{' '}
              can bury even the best products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
