import { Check, Minus } from 'lucide-react'



export default function SFComparisonTable() {
  const rows = [
    { capability: 'Custom Mobile App Development', incep: true, c1: true, c2: true, c3: true },
    { capability: 'AI-Powered App Development', incep: true, c1: false, c2: false, c3: false },
    { capability: 'Source Code & IP Ownership', incep: true, c1: false, c2: false, c3: false },
    { capability: 'Post-Launch Maintenance & Support', incep: true, c1: true, c2: false, c3: false },
    { capability: 'Agile Development & Sprint Reviews', incep: true, c1: false, c2: true, c3: false },
    { capability: 'Mobile App Testing & QA', incep: true, c1: true, c2: true, c3: false },
    { capability: 'Security & Compliance Planning', incep: true, c1: false, c2: false, c3: false },
    { capability: 'Dedicated Project Management', incep: true, c1: true, c2: false, c3: false },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Comparing Mobile App Development Companies in{' '}
            <span className="text-[#00CE44]">San Francisco</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Development partners differ in their engineering capabilities, commercial terms, and project responsibilities. Review source code ownership, AI expertise, quality assurance, and post-launch arrangements before committing to a mobile application project.
          </p>
        </div>

        {/* Comparison Table Container with Card Rows */}
        <div className="max-w-5xl mx-auto overflow-x-auto no-scrollbar pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full text-left border-separate border-spacing-y-2.5 min-w-[640px]">
            {/* Table Head: Green Background (#00CE44) with Black Text */}
            <thead>
              <tr className="bg-[#00CE44] text-black">
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black rounded-l-xl">
                  Development Capabilities
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black text-center">
                  Inceptives Digital
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center">
                  Company 1
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center">
                  Company 2
                </th>
                <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-black/85 text-center rounded-r-xl">
                  Company 3
                </th>
              </tr>
            </thead>

            {/* Table Body: Smooth Lift, Cursor Pointer, Border Removed on Hover */}
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.capability}
                  className="bg-[#121318] hover:bg-[#181922] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] group relative z-0 hover:z-10 cursor-pointer select-none"
                >
                  {/* Capability Title */}
                  <td className="py-4 px-6 text-sm sm:text-[15px] font-medium text-white/90 rounded-l-xl border-y border-l border-white/5 group-hover:border-transparent group-hover:text-white transition-all duration-300 ease-out">
                    {row.capability}
                  </td>

                  {/* Inceptives Digital: Outline Tick */}
                  <td className="py-4 px-6 text-center border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    <Check className="w-5 h-5 text-[#00CE44] mx-auto stroke-[2.5]" />
                  </td>

                  {/* Company 1 */}
                  <td className="py-4 px-6 text-center border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.c1 ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto stroke-[2]" />
                    ) : (
                      <Minus className="w-4 h-4 text-white/20 mx-auto stroke-[2]" />
                    )}
                  </td>

                  {/* Company 2 */}
                  <td className="py-4 px-6 text-center border-y border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.c2 ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto stroke-[2]" />
                    ) : (
                      <Minus className="w-4 h-4 text-white/20 mx-auto stroke-[2]" />
                    )}
                  </td>

                  {/* Company 3 */}
                  <td className="py-4 px-6 text-center rounded-r-xl border-y border-r border-white/5 group-hover:border-transparent transition-all duration-300 ease-out">
                    {row.c3 ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto stroke-[2]" />
                    ) : (
                      <Minus className="w-4 h-4 text-white/20 mx-auto stroke-[2]" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
