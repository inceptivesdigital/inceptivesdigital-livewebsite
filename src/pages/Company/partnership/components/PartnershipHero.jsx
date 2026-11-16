export default function PartnershipHero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[720px] flex items-center pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-black">
      {/* Background Handshake Image with Left Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-right lg:bg-center-right bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.2) 100%), url("/assets/partnership/partner-bner.png")`,
          backgroundPosition: 'right 30% center',
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <h1 className="font-black tracking-tight leading-[1.12] mb-6">
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Build Through
            </span>
            <span className="block text-[#00CE44] text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Strategic Partnerships
            </span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-xl">
            Inceptives Digital is a digital product development studio responsible for designing and delivering production-grade software for partner-led client engagements. We handle engineering execution so agencies and consultants can scale delivery without building internal teams.
          </p>
        </div>
      </div>
    </section>
  )
}
