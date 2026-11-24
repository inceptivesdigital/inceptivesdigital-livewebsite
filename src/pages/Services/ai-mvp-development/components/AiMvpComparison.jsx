const comparisonRows = [
  ['Goal', 'Prove the concept works', 'Deploy a production system'],
  ['Timeline', '8 to 12 weeks', '16 to 32 weeks'],
  ['Investment', '$15K to $60K', '$60K to $200K+'],
  ['Data readiness', 'Unvalidated or untested', 'Clean and ready'],
  ['Use case', 'Unproven hypothesis', 'Defined and confirmed'],
  ['Output', 'Working proof of concept', 'Live operational system'],
  ['Right when', 'Risk is high before full commitment', 'Architecture and data are confirmed'],
]

export default function AiMvpComparison() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-tight tracking-tight mb-4">
            AI MVP Development or Full AI Build. Here Is How to Choose
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed">
            The right starting point depends on what you know, what you have, and what still needs to be proven.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#1b1c21]">
                <th scope="col" className="px-5 py-5 text-sm sm:text-base font-semibold text-white/70">Decision</th>
                <th scope="col" className="px-5 py-5 text-base sm:text-lg font-bold text-[#00CE44]">AI MVP</th>
                <th scope="col" className="px-5 py-5 text-base sm:text-lg font-bold text-white">Full AI Build</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, mvp, fullBuild], index) => (
                <tr key={label} className={index % 2 === 0 ? 'bg-[#111214]' : 'bg-[#18191d]'}>
                  <th scope="row" className="px-5 py-4 text-sm sm:text-base font-semibold text-white">{label}</th>
                  <td className="px-5 py-4 text-sm sm:text-base text-white/85 border-l border-white/10">{mvp}</td>
                  <td className="px-5 py-4 text-sm sm:text-base text-white/75 border-l border-white/10">{fullBuild}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="max-w-4xl mx-auto mt-8 text-center text-white/85 text-[15px] sm:text-[17px] leading-relaxed">
          Most businesses that think they are ready for a full build are not. An AI MVP is how you find out before it is expensive to discover.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-white/80 text-sm sm:text-base">Not sure which one fits? That is what the Discovery Sprint is for.</span>
          <a href="#contact" className="text-[#00CE44] font-semibold hover:opacity-80 transition-colors underline underline-offset-4">
            Book a Discovery Sprint <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
