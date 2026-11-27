export default function SingaporeValueProp() {
  return (
    <section className="py-16 sm:py-24 bg-black text-white relative border-b border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Exact 2-Column Layout matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Built Around Singapore&apos;s{' '}
              <span className="text-[#00CE44]">Business and Technology Landscape</span>
            </h2>
          </div>

          <div className="lg:col-span-7 text-left">
            <p className="text-white/85 text-base sm:text-lg lg:text-[18px] leading-relaxed font-normal">
              Singapore&apos;s financial district, One-North innovation ecosystem, and advanced manufacturing sector serve businesses with very different technology requirements. Financial applications need reliable transaction workflows, while healthtech and enterprise platforms depend on secure data exchange and connected systems. Mobile development must reflect these operational differences from the outset.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
