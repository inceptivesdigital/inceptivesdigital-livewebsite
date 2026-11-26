export default function NlpIndustryCta() {
  return (
    <section className="bg-[#0d0e11] px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-[1600px] mx-auto rounded-[20px] bg-[#00CE44] px-6 sm:px-8 lg:px-10 pt-5 pb-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-black text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-tight mb-2">
            Your industry may not be listed.
          </h2>
          <p className="text-black/85 text-[15px] sm:text-[16px] leading-relaxed">
            Your language problem almost certainly is. Let&apos;s find out.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 inline-flex items-center justify-center bg-[#111214] hover:bg-black text-[#00CE44] font-medium text-[14px] px-7 py-3.5 transition-colors duration-200"
        >
          Discuss Your Industry Use Case →
        </a>
      </div>
    </section>
  )
}
