export default function AustinProductDecisions() {
  return (
    <section className="py-16 sm:py-20 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              Ideas Need <span className="text-[#00CE44]">Direction</span> Before They Need Development
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 text-left">
            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
              A strong product starts with clarity, not code. We help businesses turn early concepts into defined product strategies by validating assumptions, prioritizing features, and choosing the right technical path before development begins. The goal is simple: build with purpose, avoid costly detours, and create something users actually need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
