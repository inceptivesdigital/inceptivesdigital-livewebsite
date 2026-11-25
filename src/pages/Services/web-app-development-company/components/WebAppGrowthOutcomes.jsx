export default function WebAppGrowthOutcomes() {
  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Our Custom Web Applications, Engineered Around{' '}
              <span className="text-[#00CE44]">Real Operations</span>
            </h2>
          </div>

          {/* Right Column Description */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-[1.75] mb-8">
              When off-the-shelf tools force your teams to work around the software, it&apos;s time to rethink the system. As a web application development company, Inceptives Digital builds custom platforms around the workflows, data, and integrations your business depends on. React, Next.js, and Vue shape the interfaces, while Node.js and Python connect application logic with backend systems. We select AWS, Google Cloud, or Azure according to your product&apos;s infrastructure, integration, and workload requirements, so the finished web application can scale with changing business demands.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Consult our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
