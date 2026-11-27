export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-24 lg:py-32 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Column: Heading + Descriptive Text */}
          <div className="w-full lg:w-[48%] xl:w-[46%] text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.15]">
              Core Capabilities Behind Modern Digital Products
            </h2>
            
            <p className="mt-6 sm:mt-8 text-slate-300 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-xl">
              Successful digital products begin with understanding the problem, users, and business goals before technology decisions are made. Inceptives Digital combines product strategy, design thinking, engineering expertise, and AI capabilities to create products that are built for adoption, scalability, and long-term value.
            </p>
          </div>

          {/* Right Column: 3D Stacked Phones & Green Circles Visual */}
          <div className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[720px]">
              <picture>
                <source srcSet="/assets/homesection.avif" type="image/avif" />
                <img
                  src="/assets/homesection.avif"
                  alt="Core Capabilities Behind Modern Digital Products Mockups"
                  width={1024}
                  height={754}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
