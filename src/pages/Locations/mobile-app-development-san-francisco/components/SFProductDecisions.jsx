export default function SFProductDecisions() {
  return (
    <section className="py-16 sm:py-20 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              Mobile App Product Strategy for{' '}
              <span className="text-[#00CE44]">San Francisco Businesses</span> Building to Win
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 text-left">
            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
              Start.io counts 773,911 smartphone users in San Francisco, so your app must earn attention from the first download. Our mobile app product strategy aligns your features, budget, and timeline, so you build efficiently, launch confidently, and grow your business faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
