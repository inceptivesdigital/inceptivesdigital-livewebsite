export default function BlogsHero() {
  return (
    <section className="relative min-h-[480px] flex items-center pt-32 sm:pt-40 pb-16 lg:pb-20 bg-black overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Articles & Insights
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12] mb-6">
            Insights That <br />
            <span className="text-[#00CE44]">Shape Digital Products</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-2xl">
            In-depth guides, architectural blueprints, and engineering analyses from Inceptives Digital on mobile development, SaaS scalability, AI workflows, and product strategy.
          </p>
        </div>
      </div>
    </section>
  )
}
