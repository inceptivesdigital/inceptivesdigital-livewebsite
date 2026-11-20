const outcomes = [
  {
    value: '80%',
    description:
      'Reduction in manual processing time for document-heavy workflows when AI extraction and routing replace human handling.',
  },
  {
    value: '95%',
    description:
      'Straight-through processing rate is achievable on high-volume operational workflows when exception handling is built into the automation architecture.',
  },
  {
    value: '60%',
    description:
      'Reduction in operational errors in compliance-critical processes when AI validation replaces manual review at every stage.',
  },
  {
    value: '3x',
    description:
      'Faster reporting cycles when automated data pipelines replace manual extraction, reconciliation, and formatting workflows.',
  },
]

export default function AutomationImpact() {
  return (
    <section className="bg-[#00CE44] py-14 text-black sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[850px]">
            <h2 className="mb-2 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
              What AI Automation Delivers When the Architecture Is Right
            </h2>
            <p className="text-sm sm:text-base">Numbers from production systems, not projections.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center self-start bg-[#111214] px-7 py-3 text-sm font-semibold text-[#00CE44] transition-colors hover:bg-black lg:self-auto"
          >
            Book an AI Consultation
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ value, description }) => (
            <article key={value} className="rounded-xl bg-[#00a93b] p-5 sm:p-6">
              <p className="mb-2 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">{value}</p>
              <p className="text-sm leading-relaxed text-black/85">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
