import { Check } from 'lucide-react'

export default function AiIndustries() {
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

  const scrollToContact = () => {
    const el = document.getElementById('consultation-cta') || document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            The AI Development Company Businesses <span className="text-[#00CE44]">Trust Across Industries</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Domain knowledge changes everything in AI development. The model that works in ecommerce will not work in healthcare. We build for the industry, not around it.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#00CE44]/40 group-hover:bg-[#00CE44]/10 transition-all">
                  <img
                    src={ind.icon}
                    alt={ind.title}
                    className="w-6 h-6 object-contain brightness-90 group-hover:brightness-100"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00CE44] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {ind.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {ind.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-white/75 leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#00CE44] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Don't see your industry? */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Don't see your industry?
            </h4>
            <p className="text-white/65 text-xs sm:text-sm">
              The AI capability that works in one sector often applies directly to another. Let's talk about what it looks like.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="px-7 py-3 bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-xs sm:text-sm tracking-tight rounded-none transition-all duration-150 shrink-0 cursor-pointer shadow-md"
          >
            Book an AI Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
