export default function WebAppStatsBar() {
  const stats = [
    { value: '70+', label: 'Products Shipped' },
    { value: '150+', label: 'Active Developers' },
    { value: '8 Years', label: 'Without a Rebuild' },
    { value: '4.7', label: 'Rating on Clutch' },
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
        style={{ backgroundImage: "url('/assets/web-app/ctabg.png')" }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-3xl">
            <h2 className="text-[28px] sm:text-[35px] font-bold text-white leading-[1.22] tracking-tight mb-5">
              Ready to Build the Web Application Your Business Will Be Known For?
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed mb-8">
              From customer portals and SaaS platforms to enterprise web app development, every successful web application starts with the right foundation and a clear{' '}
              <a
                href="https://inceptivesdigital.com/product-launch-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00CE44] underline decoration-[#00CE44] underline-offset-4 hover:opacity-80 transition-colors"
              >
                product launch strategy
              </a>
              . Let&apos;s build a product that drives growth long after launch.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
