export default function AiIndustries() {
  const scrollToContact = () => {
    const el =
      document.getElementById('contact') ||
      document.getElementById('consultation-cta') ||
      document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const industries = [
    {
      title: 'Healthcare',
      icon: '/assets/ai-development/healthcare-1-1.png',
      desc: 'AI systems that support clinical workflows, patient engagement, and medical data intelligence.',
      points: [
        'Clinical decision support systems using predictive ML models',
        'Medical data processing and summarisation using NLP pipelines',
        'Patient assistance chatbots powered by LLM and RAG architectures',
      ],
    },
    {
      title: 'Fintech',
      icon: '/assets/ai-development/fintech-1.png',
      desc: 'AI-driven financial systems built for fraud detection, risk analysis, and real-time transaction intelligence. SOC 2 and GDPR compliance are built into the architecture.',
      points: [
        'Fraud detection systems using anomaly detection models',
        'Credit scoring engines trained on structured and alternative data',
        'Real-time transaction monitoring using AI risk pipelines',
      ],
    },
    {
      title: 'Ecommerce',
      icon: '/assets/ai-development/shopping-bag-1.png',
      desc: 'AI systems that optimise personalisation, conversion rates, and customer retention using behavioural intelligence models.',
      points: [
        'Recommendation engines using deep learning models',
        'Customer segmentation using clustering algorithms',
        'AI-powered personalisation and dynamic pricing systems',
      ],
    },
    {
      title: 'Real Estate',
      icon: '/assets/ai-development/home-services-1-1.png',
      desc: 'AI solutions that improve property search, valuation accuracy, and lead qualification using predictive models.',
      points: [
        'Property recommendation engines using behaviour modelling',
        'AI-based property valuation and price prediction systems',
        'Intelligent chatbots for real estate lead qualification',
      ],
    },
    {
      title: 'Education',
      icon: '/assets/ai-development/open-book-1.png',
      desc: 'AI-powered learning platforms that personalise education and improve student engagement using adaptive intelligence systems.',
      points: [
        'Intelligent tutoring systems powered by LLM-based models',
        'Automated grading and assessment using NLP pipelines',
        'Personalised learning paths using machine learning algorithms',
      ],
    },
    {
      title: 'Travel',
      icon: '/assets/ai-development/travel-bag-1.png',
      desc: 'AI systems that enhance booking experiences, personalisation, and travel planning through intelligent automation.',
      points: [
        'Personalised travel recommendation engines',
        'AI-powered itinerary planning assistants',
        'Demand forecasting models for pricing optimization',
      ],
    },
    {
      title: 'Legal Tech',
      icon: '/assets/ai-development/balance-1.png',
      desc: 'Legal workflows generate large volumes of unstructured text that AI handles precisely when the architecture is right.',
      points: [
        'Contract analysis systems using NLP and entity extraction',
        'Document summarisation pipelines powered by LLMs',
        'Intelligent search systems that surface relevant case law from large knowledge bases',
      ],
    },
    {
      title: 'HR and Workforce',
      icon: '/assets/ai-development/people-1.png',
      desc: 'Payroll, compliance, and workforce intelligence are operational processes AI can run rather than assist. We have built a full payroll automation platform that proves it.',
      points: [
        'Full payroll automation replaces manual financial workflows',
        'Workforce analytics and compliance monitoring systems',
        'Intelligent candidate screening using ML-based models',
      ],
    },
  ]

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-4">
            The AI Development Company Businesses <span className="text-[#00CE44]">Trust Across Industries</span>
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Domain knowledge changes everything in AI development. The model that works in ecommerce will not work in healthcare. We build for the industry, not around it.
          </p>
        </div>

        {/* Homepage-Style Box Cards Grid: Clean 1px gap border, bg-[#18191d] hover:bg-[#00CE44] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl items-stretch auto-rows-fr">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group p-6 sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 min-h-[320px] lg:min-h-[350px] h-full select-none text-left"
            >
              {/* Full fill icon without any border, background, or padding */}
              <div className="w-12 h-12 mb-6 flex items-center justify-start shrink-0">
                <img
                  src={ind.icon}
                  alt={ind.title}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-0 select-none"
                  loading="lazy"
                />
              </div>

              {/* Title: 22px bold, vibrant green, turns black on hover */}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#00CE44] group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {ind.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal mb-5">
                {ind.desc}
              </p>

              {/* Checklist points */}
              <ul className="space-y-2 mt-auto pt-4  group-hover:border-black/20 transition-colors">
                {ind.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 group-hover:text-black/90 transition-colors leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-1.5 shrink-0 transition-colors" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Industry CTA Row (Matching media_1794895051688_e6fe6c00.png) */}
        <div className="mt-12 sm:mt-16 w-full mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-[28px] sm:rounded-[36px] bg-[#00CE44] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="text-left max-w-3xl">
            <h2 className="cta-heading text-2xl sm:text-3xl lg:text-[32px] font-black text-black tracking-tight leading-tight mb-2">
              Don&apos;t see your industry?
            </h2>
            <p className="text-black/90 text-sm sm:text-base font-normal leading-relaxed">
              The AI capability that works in one sector often applies directly to another. Let&apos;s talk about what it looks like.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-black hover:bg-[#181818] text-white font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap cursor-pointer transition-all duration-150 active:scale-95 shadow-md border-0 shrink-0 self-start lg:self-auto"
          >
            Book an AI Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
