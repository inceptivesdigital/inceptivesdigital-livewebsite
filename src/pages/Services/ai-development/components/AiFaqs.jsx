import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function AiFaqs() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'Do you build AI features or full AI systems?',
      a: 'Both. Some products need AI as a feature that sharpens a human decision. Others need AI for the operation itself. The Discovery Sprint determines which one fits before development begins.',
    },
    {
      q: 'How much does AI development cost?',
      a: 'AI features typically range from $15K to $50K. Full AI systems range from $60K to $200K and above. The precise number is defined in the Discovery Sprint. Take the AI Project Estimator for a ballpark before that conversation.',
    },
    {
      q: 'How much does AI agent development cost?',
      a: 'Typically $30K to $150K depending on workflow complexity, number of tool integrations, and system architecture. Single-task agents sit at the lower end. Multi-agent orchestration systems sit at the higher end.',
    },
    {
      q: 'How long does an AI development project take?',
      a: 'An AI MVP takes 8 to 12 weeks. A full AI system takes 16 to 32 weeks. Both depend on data readiness, integration complexity, and scope defined in Discovery.',
    },
    {
      q: 'What is the difference between custom AI development and off-the-shelf AI tools?',
      a: 'Off-the-shelf tools are built for general use cases. Custom AI development builds around your specific data, workflows, and operational requirements. The difference shows up in production. A custom system performs precisely in your context. A general tool performs adequately in every context and exceptionally in none.',
    },
    {
      q: 'How do we know if our business is ready for AI?',
      a: 'Take the AI Readiness Assessment. It evaluates your data infrastructure, process maturity, and team readiness. Most businesses are more ready than they assume. Some are less ready than they think. Either way, you will know before you commit.',
    },
    {
      q: 'What does an AI development company actually deliver?',
      a: 'A production-grade AI system integrated into your operations or platform. Not a proof of concept. A system that runs under real load, handles real data, and performs without constant maintenance after launch.',
    },
    {
      q: 'What is the difference between an AI agent and a chatbot?',
      a: 'A chatbot responds to user input with conversational output. An AI agent is given a goal, determines the steps needed to reach it, interacts with external tools and APIs, and executes multi-step workflows autonomously. If you need a system to do something rather than say something, you need an agent.',
    },
    {
      q: 'What is the difference between RAG and fine-tuning?',
      a: "RAG grounds model answers in your company's knowledge base. Fine-tuning retrains a model on domain-specific data to adapt its core behaviour. The right choice depends on your use case and data availability. We determine which fits in Discovery.",
    },
    {
      q: 'How do I hire AI developers for my project?',
      a: 'Start with the Discovery Sprint. It defines the scope and team requirements before any hiring begins. We then match the right combination of ML engineers, LLM developers, MLOps engineers, and data scientists to your specific build.',
    },
    {
      q: 'Can AI be deployed on-premise or in a private environment?',
      a: 'Yes. We support on-premise, VPC-based, and private cloud deployments for organisations with strict security or data residency requirements. LLaMA and other open-source models are suited to environments where no data leaves the client infrastructure.',
    },
    {
      q: 'Do you provide support after the AI system goes live?',
      a: 'Yes. We provide ongoing monitoring, drift detection, model retraining, and system optimization to keep the product performing under real load over time.',
    },
  ]

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            FAQs About <span className="text-[#00CE44]">AI Development Services</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg">
            Answers to common questions about our technical capabilities, process, pricing, and infrastructure.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#00CE44] text-black' : 'bg-white/5 text-white/70'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 pt-0 text-white/75 text-sm sm:text-base leading-relaxed border-t border-white/5">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
