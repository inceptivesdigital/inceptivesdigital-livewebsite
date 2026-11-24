const industries = [
  {
    name: 'Healthcare',
    image: '/assets/ai-development/healthcare-1-1.png',
    href: '/healthcare-app-development',
    bullets: ['Patient triage automation', 'Workflow scheduling', 'Record summarisation'],
  },
  {
    name: 'Financial Services',
    image: '/assets/ai-development/fintech-1.png',
    href: '/fintech-app-development',
    bullets: ['Transaction monitoring', 'Automated customer support', 'Credit risk evaluation'],
  },
  {
    name: 'Ecommerce and Retail',
    image: '/assets/ai-development/shopping-bag-1.png',
    href: '/ecommerce-app-development-company',
    bullets: ['Product recommendations', 'Order tracking automation', 'Multi-channel engagement'],
  },
  {
    name: 'Education',
    image: '/assets/ai-development/open-book-1.png',
    href: '/education-app-development-company',
    bullets: ['Virtual tutoring', 'Automated grading', 'Knowledge retrieval'],
  },
  {
    name: 'Travel and Hospitality',
    image: '/assets/ai-development/travel-bag-1.png',
    href: '/travel-app-development-company',
    bullets: ['Booking management', 'Travel recommendations', 'Customer support automation'],
  },
  {
    name: 'HR and Workforce',
    image: '/assets/ai-development/balance-1.png',
    href: '#contact',
    bullets: ['Payroll automation', 'Candidate screening', 'Workforce analytics'],
  },
]

export default function GenerativeIndustries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-5 max-w-4xl mx-auto">
          Generative AI Development Services Designed for Your Industry
        </h2>
        <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] text-center max-w-[960px] mx-auto mb-12 sm:mb-16">
          Every industry has different data structures, compliance requirements, and content workflows. We build for the specific context, not a generic template.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl items-stretch auto-rows-fr">
          {industries.map(({ name, image, href, bullets }) => (
            <a
              key={name}
              href={href}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[280px] h-full"
            >
              <div className="w-[35px] h-[35px] mb-6 flex items-center justify-start shrink-0">
                <img
                  src={image}
                  alt=""
                  className="w-[35px] h-[35px] object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[22px] sm:text-[25px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {name}
              </h3>
              <ul className="space-y-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors duration-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-white/85 text-[16px] sm:text-[17px] leading-relaxed mb-6">
            Your industry may not be listed. Your generative AI use case almost certainly is. Let&apos;s find out.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 transition-colors duration-200"
          >
            Discuss Your Industry Use Case →
          </a>
        </div>
      </div>
    </section>
  )
}
