export default function AustinStartupsNationwide() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtext, CTA */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-6">
              From Austin Startups to{' '}
              <span className="text-[#00CE44]">Nationwide Mobile App Launches</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-6">
              Austin offers an active startup ecosystem, but launching an app in a growing technology market is only the beginning. Inceptives Digital helps businesses prepare mobile applications for an initial market rollout and expansion beyond Central Texas. Our mobile app developers consider how your product will handle new users, changing customer demands, and wider geographic coverage.
            </p>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Whether you're testing your first release with Austin customers or preparing to enter markets across the United States, we help you establish a product foundation that supports your next stage of growth without unnecessary redevelopment.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Discuss Your App Launch
            </a>
          </div>

          {/* Right Column: Graphic Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Subtle green ambient backlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00CE44]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#12141a] shadow-2xl">
                <img
                  src="/assets/locations/austin/austin-nationwide-launch.jpg"
                  alt="From Austin Startups to Nationwide Mobile App Launches"
                  className="w-full h-auto object-cover select-none transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
