export default function FoundersHero() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center pt-32 sm:pt-40 pb-16 lg:pb-24 bg-[#01250e] overflow-hidden">
      {/* Background with partner-bner.png and deep emerald gradient overlay matching the exact design */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/assets/partnership/partner-bner.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#012a0f]/98 via-[#01200c]/94 to-[#001206]/98 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00CE44]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading + Excerpt + Founder Credentials */}
          <div className="lg:col-span-7 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-white tracking-tight leading-[1.15] mb-6">
              The company should never depend on one important person
            </h1>

            <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl mb-8 font-normal">
              I started Inceptives Digital through individual work. I now measure its progress by how well the company can think, decide, and deliver without depending on me.
            </p>

            <div className="space-y-1 mb-5">
              <span className="text-[#00CE44] font-bold text-base sm:text-lg block tracking-tight">
                Hannan Shahnoor
              </span>
              <span className="text-white/80 text-xs sm:text-sm block font-normal">
                Founder, Inceptives Digital
              </span>
            </div>

            {/* Official Crisp LinkedIn Brand Button */}
            <a
              href="https://www.linkedin.com/in/hannanshahnoor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hannan Shahnoor LinkedIn Profile"
              className="inline-block transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md rounded-[5px] overflow-hidden"
              title="Connect with Hannan Shahnoor on LinkedIn"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0077B5" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z" />
                <path fill="#ffffff" d="M8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>
          </div>

          {/* Right Column: Founder's Circular Portrait with Green Ring Halo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft ambient green backlight */}
              <div className="absolute inset-0 rounded-full bg-[#00CE44]/25 blur-3xl scale-95" />
              <img
                src="/assets/founders-letter/hanna-founder.png"
                alt="Hannan Shahnoor — Founder, Inceptives Digital"
                className="relative z-10 w-[290px] sm:w-[380px] md:w-[440px] lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
