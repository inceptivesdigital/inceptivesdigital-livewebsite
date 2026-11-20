export default function AiMvpClosingCta() {
  return (
    <section className="bg-[#111214] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight mb-5">
            Test Your AI Idea Before Investing a Single Line of Code
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed mb-6">
            Rapid MVP development for startups and growth teams, with risks identified, scope defined, and proof delivered before committing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3.5 transition-colors duration-200"
          >
            Start Your MVP <span className="ml-2" aria-hidden="true">→</span>
          </a>
          <p className="text-white/65 text-sm mt-3">30 minutes. Concept validated.</p>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <img
            src="/assets/ai-development/nlp-cta-art.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-[700px] h-auto object-contain select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
