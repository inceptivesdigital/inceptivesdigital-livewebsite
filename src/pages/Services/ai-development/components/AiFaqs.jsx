import { useState } from 'react'

export default function AiFaqs() {
  // Default first item expanded as on homepage
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'Do you build AI features or full AI systems?',
      a: 'Both. Some products need AI as a feature that sharpens a human decision. Others need AI for the operation itself. The Discovery Sprint determines which one fits before development begins.'
    },
    {
      q: 'How much does AI development cost?',
      a: 'AI features typically range from $15K to $50K. Full AI systems range from $60K to $200K and above. The precise number is defined in the Discovery Sprint. Take the AI Project Estimator for a ballpark before that conversation.'
    },
    {
      q: 'How much does AI agent development cost?',
      a: 'Typically $30K to $150K depending on workflow complexity, number of tool integrations, and system architecture. Single-task agents sit at the lower end. Multi-agent orchestration systems sit at the higher end.'
    },
    {
      q: 'How long does an AI development project take?',
      a: 'An AI MVP takes 8 to 12 weeks. A full AI system takes 16 to 32 weeks. Both depend on data readiness, integration complexity, and scope defined in Discovery.'
    },
    {
      q: 'What is the difference between custom AI development and off-the-shelf AI tools?',
      a: 'Off-the-shelf tools are built for general use cases. Custom AI development builds around your specific data, workflows, and operational requirements. The difference shows up in production. A custom system performs precisely in your context. A general tool performs adequately in every context and exceptionally in none.'
    },
    {
      q: 'How do we know if our business is ready for AI?',
      a: 'Take the AI Readiness Assessment. It evaluates your data infrastructure, process maturity, and team readiness. Most businesses are more ready than they assume. Some are less ready than they think. Either way, you will know before you commit.'
    },
    {
      q: 'What does an AI development company actually deliver?',
      a: 'A production-grade AI system integrated into your operations or platform. Not a proof of concept. A system that runs under real load, handles real data, and performs without constant maintenance after launch.'
    },
    {
      q: 'What is the difference between an AI agent and a chatbot?',
      a: 'A chatbot handles conversation. An AI agent executes tasks. If you need AI to do something rather than say something, you need an agent.'
    },
    {
      q: 'What is the difference between RAG and fine-tuning?',
      a: "RAG grounds model answers in your company's knowledge base. Fine-tuning retrains a model on domain-specific data to adapt its core behaviour. The right choice depends on your use case and data availability. We determine which fits in Discovery."
    },
    {
      q: 'How do I hire AI developers for my project?',
      a: 'Start with the Discovery Sprint. It defines the scope and team requirements before any hiring begins. We then match the right combination of ML engineers, LLM developers, MLOps engineers, and data scientists to your specific build.'
    },
    {
      q: 'Can AI be deployed on-premise or in a private environment?',
      a: 'Yes. We support on-premise, VPC-based, and private cloud deployments for organisations with strict security or data residency requirements. LLaMA and other open-source models are suited to environments where no data leaves the client infrastructure.'
    },
    {
      q: 'Do you provide support after the AI system goes live?',
      a: 'Yes. We provide ongoing monitoring, drift detection, model retraining, and system optimization to keep the product performing under real load over time.'
    }
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#000000] relative overflow-hidden border-t border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, white, centered matching Homepage FAQSection.jsx */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-3">
          Frequently Asked Questions.
        </h2>
        <p className="text-slate-300 text-[16px] sm:text-[18px] text-center font-normal max-w-2xl mx-auto mb-12 sm:mb-16">
          The answers that matter before the first conversation.
        </p>

        {/* Accordion Container matching Homepage */}
        <div className="w-full space-y-4 sm:space-y-5 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border border-white/[0.04] overflow-hidden transition-colors duration-300"
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  {/* Question Text: Green #00CE44 when active/open, White when closed */}
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#00CE44]'
                        : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  {/* Chevron Icon: Green pointing up when open, gray pointing down when closed */}
                  <span
                    className={`shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? 'rotate-180 text-[#00CE44]'
                        : 'rotate-0 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Smooth Animated Accordion Dropdown Content (CSS Grid Row Transition) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-6 sm:pb-7 pt-0 text-slate-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
