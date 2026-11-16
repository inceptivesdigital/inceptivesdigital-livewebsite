export default function AiMidCta() {
  const scrollToContact = () => {
    const el = document.getElementById('consultation-cta') || document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-16 bg-[#0c0c0c] text-white overflow-hidden border-t border-b border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto shadow-2xl">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
              Don't see your industry?
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              That is what the first conversation is for. The AI capability that works in one sector often applies directly to another.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-sm sm:text-base tracking-tight rounded-none transition-all duration-150 shrink-0 cursor-pointer shadow-lg shadow-[#00CE44]/20 active:scale-95"
          >
            Book an AI Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
