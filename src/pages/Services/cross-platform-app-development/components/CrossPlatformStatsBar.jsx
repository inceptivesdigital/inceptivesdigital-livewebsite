export default function CrossPlatformStatsBar() {
  const stats = [
    { value: '70+', label: 'Products Delivered' },
    { value: '3M+', label: 'User Downloads' },
    { value: '150+', label: 'Developers' },
    { value: '4.7', label: 'Clutch Rating' },
  ]

  return (
    <>
      <section className="bg-[#0B0B0B] border-y border-white/10 py-12 sm:py-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-2">
                <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA Banner */}
      <section
        className="relative py-16 sm:py-20 bg-[#141414] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/assets/backend-api/ctabg.png')" }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-3xl">
            <h2 className="text-[28px] sm:text-[35px] font-bold text-white leading-[1.22] tracking-tight mb-5">
              Ready to Launch Your Multi-Platform Strategy?
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed mb-8">
              Submit your project briefs to receive a detailed, fixed-cost estimate within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Get Your Fixed Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
