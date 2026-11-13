export default function PrivacyPolicy() {
  return (
    <div className="pt-36 sm:pt-44 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed">
          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              Inceptives Digital collects personal information that you provide voluntarily when submitting consultation inquiries, requesting proposals, or communicating with our team. This may include your name, business email, telephone number, and details regarding your technical project specifications.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">2. Confidentiality &amp; Mutual Non-Disclosure</h2>
            <p>
              We treat all client project concepts, architecture blueprints, proprietary business logic, and codebases with strict institutional confidentiality. We execute formal mutual non-disclosure agreements (NDAs) prior to detailed discovery conversations.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#0c0e12] border border-white/10 space-y-3">
            <h2 className="text-xl font-bold text-white">3. Data Security &amp; Compliance</h2>
            <p>
              Our internal systems maintain SOC2 Type II compliance standards and implement 256-bit AES encryption for all data in transit and at rest. We never sell, rent, or distribute client contact information to third parties.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
