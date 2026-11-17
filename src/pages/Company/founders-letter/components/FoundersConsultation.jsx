import ContactForm from '../../contact-us/components/ContactForm'

export default function FoundersConsultation() {
  const ratings = [
    { src: '/assets/clutch.png', alt: 'Clutch 5.0', url: 'https://clutch.co/profile/inceptives-digital' },
    { src: '/assets/bark.png', alt: 'Bark 5.0', url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/' },
    { src: '/assets/trustpilot.png', alt: 'Trustpilot 4.7', url: 'https://www.trustpilot.com/review/inceptivesdigital.com' },
  ]

  return (
    <section id="consultation-form" className="py-20 sm:py-28 bg-[#090a0c] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00CE44]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Context + Ratings */}
          <div className="lg:col-span-5 text-left pt-2">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
              Direct Access
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5">
              Get in touch!
            </h2>
            <p className="text-[#00CE44] text-base sm:text-lg font-semibold mb-4">
              Scalable solutions from teams worldwide!
            </p>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Have an architectural question, a product brief, or an idea ready for validation? Speak directly with our leadership and senior product engineers. We respond within 24 hours under full mutual NDA.
            </p>

            <div className="space-y-3 mb-10 text-sm sm:text-base text-white/90">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00CE44]" />
                <span>info@inceptivesdigital.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00CE44]" />
                <span>(469) 807-8028</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-white/10">
              {ratings.map((r) => (
                <a
                  key={r.alt}
                  href={r.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-100"
                >
                  <img
                    src={r.src}
                    alt={r.alt}
                    className="h-10 sm:h-12 w-auto object-contain select-none opacity-85 hover:opacity-100 transition"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Consultation & Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[20px] bg-[#121316] border border-white/10 p-6 sm:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
