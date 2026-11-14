export default function FlutterRealImpact() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              The Real Impact of{' '}
              <span className="text-[#00CE44]">Flutter Mobile App Development</span> on Your Product
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              Flutter app development runs on a single codebase across iOS, Android, web, and desktop, delivering native-quality performance on every platform without maintaining separate builds. The framework is well past the early adopter stage. Google, Nubank, and BMW each run mission-critical products on it at scale. For teams still weighing frameworks,{' '}
              <a
                href="https://inceptivesdigital.com/blog/why-choose-flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                why choose flutter
              </a>{' '}
              usually comes down to exactly these numbers: a 35% smaller codebase, 100 million customers served, 30+ markets from one build. That is the baseline now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
