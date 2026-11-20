export default function SystemIndustryCta() {
  return (
    <section className="bg-[#0d0e11] px-4 pb-16 text-black sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 rounded-[20px] bg-[#00CE44] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:px-10">
        <div>
          <h2 className="mb-2 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
            Your industry may not be listed.
          </h2>
          <p className="text-[15px] leading-relaxed text-black/85 sm:text-base">
            Your systems almost certainly need to be connected.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center bg-[#111214] px-7 py-3.5 text-sm font-semibold text-[#00CE44] transition-colors hover:bg-black"
        >
          Start System Integration <span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
