export default function LeadershipHero() {
  return (
    <section
      className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 bg-black bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/leadership/live/hero-bg.webp')",
      }}
    >
      {/* Left-to-right dark gradient overlay so text stays crisp over background photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.86) 38%, rgba(0,0,0,0.42) 68%, rgba(0,0,0,0.22) 100%)',
        }}
      />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-2xl text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Leadership Should Strengthen Teams, Not Create Dependency
          </h1>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-xl mb-8">
            Our leaders set direction, own results, and enable teams to make sound decisions without waiting for approval.
          </p>
          <a
            href="#contact"
            className="getintouch inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
          >
            Start My Product Roadmap
          </a>
        </div>
      </div>
    </section>
  )
}
