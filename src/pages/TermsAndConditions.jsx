export default function TermsAndConditions() {
  return (
    <div className="pt-36 sm:pt-44 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-6">
          Terms &amp; Conditions
        </h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed">
          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">1. Master Services Agreement</h2>
            <p>
              These Terms and Conditions govern custom software development, mobile application engineering, digital product consulting, and staff augmentation services delivered by Inceptives Digital LLC.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property (IP) Ownership</h2>
            <p>
              Upon completion and settlement of agreed milestone deliverables, 100% of custom source code, documentation, Figma design tokens, and digital assets are transferred unconditionally to the client.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Warranties &amp; Code Quality Guarantee</h2>
            <p>
              We provide a 90-day post-launch warranty against defects and critical software bugs for all production custom builds, guaranteeing zero disruption to live operations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
