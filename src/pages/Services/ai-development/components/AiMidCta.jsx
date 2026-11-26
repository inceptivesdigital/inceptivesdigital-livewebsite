export default function AiMidCta() {
  const scrollToContact = () => {
    const el =
      document.getElementById('contact') ||
      document.getElementById('consultation-cta') ||
      document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="consultation-cta"
      className="relative overflow-hidden pt-14 sm:pt-20 lg:pt-0 pb-0"
      style={{
        background:
          'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
      }}
    >
      {/* Subtle Topographic Wave Pattern Overlay matching Mobile-App DoublePhoneCTA */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Content Column */}
          <div className="lg:col-span-7 lg:py-16 pb-4 lg:pb-16 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
              &ldquo;Build AI Into the Foundation or Spend Years Fixing What You Bolted On.&rdquo;
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-3 max-w-2xl">
              The right architecture question asked early saves six months of expensive answers later. Your competitors are already exploring AI — the systems that win are built around a specific workflow and clear operational scope, not a long generic feature list.
            </p>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
              Our custom AI development services begin with a defined Discovery Sprint. Senior engineers shape the architecture around your critical workflows and existing data systems, so the first release validates value and future releases scale effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 cursor-pointer shadow-lg shadow-[#00CE44]/20"
              >
                Book an AI Consultation
              </button>
            </div>
          </div>

          {/* Right Phones Image Column Aligned Flush to Section Bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-6 pb-0">
            <img
              src="/assets/mobile-app/cta-mobile.webp"
              alt="Custom AI Development Architecture"
              className="w-full max-w-[260px] sm:max-w-[310px] lg:max-w-[340px] xl:max-w-[360px] h-auto object-contain object-bottom block select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
