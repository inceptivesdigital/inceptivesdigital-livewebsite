export default function WebAppGrowthOutcomes() {
  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[30px] sm:text-[40px] font-bold text-white leading-[1.2] tracking-tight mb-6">
              60% of Businesses Grew With the Right Web Application
            </h2>
            <p className="text-white/80 text-[16px] leading-[1.7] mb-6">
              Web applications are the software businesses run on: the dashboards, SaaS platforms, customer portals, and operations tools that users interact with daily. Google Workspace, Notion, Salesforce, and Shopify are all web applications. Salesforce alone serves over 150,000 businesses through a single web application. Over 60% of businesses report higher sales after investing in the performance and experience of their web products.
            </p>
            <p className="text-white/80 text-[16px] leading-[1.7] mb-8">
              The architecture behind that performance is what separates products that scale from ones that get rebuilt. A website and a web application are not the same thing, and choosing the wrong one early, a decision our{' '}
              <a
                href="https://inceptivesdigital.com/blog/website-development-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00CE44] underline decoration-[#00CE44] decoration-2 underline-offset-4 hover:text-white transition-colors"
              >
                web development guide
              </a>{' '}
              walks through in more detail, can be costly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Discuss Your Web Architecture
            </a>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#161616] border border-white/10 p-4 sm:p-6">
              <img
                src="/assets/mobile-app/chartsection-1024x622.png"
                alt="Web Application Business Growth"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
