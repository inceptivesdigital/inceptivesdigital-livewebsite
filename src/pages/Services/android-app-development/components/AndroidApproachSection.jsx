export default function AndroidApproachSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: H2 (40px) */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] max-w-xl">
              Your Android Product Deserves{' '}
              <span className="text-[#00CE44]">More Than an Off-the-Shelf Approach</span>
            </h2>
          </div>

          {/* Right Column: Paragraph (16px) */}
          <div className="lg:col-span-6 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              Eight years of software delivery across 20+ industries have made Inceptives Digital a trusted Android app development company for startups and established businesses across the USA. The team takes on custom Android application development for enterprise platforms with complex integrations and for consumer products entering competitive markets. Each project begins with clear technical decisions, so the build that follows reflects what the product actually needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
