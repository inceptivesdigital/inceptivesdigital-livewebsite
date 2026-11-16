import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function PartnershipFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'How do white-label engineering partnerships work with Inceptives Digital?',
      a: 'We can operate entirely behind the scenes under your agency’s brand or as an introduced technical co-builder. We join your Slack or Teams, adopt your project management workflows, and push commits to your private repositories.',
    },
    {
      q: 'Can you work directly under our agency’s branding and email domain?',
      a: 'Yes. In full white-label engagements, our engineers use your domain email addresses, participate in client sprint reviews under your brand, and represent your technical capability seamlessly.',
    },
    {
      q: 'How are project scopes, pricing, and partner margins structured?',
      a: 'We offer fixed-scope milestone billing, dedicated sprint pods, and monthly retainer models. We provide transparent wholesale engineering rates so you maintain healthy agency margins on every project.',
    },
    {
      q: 'What happens if a client project requires post-launch support or ongoing iteration?',
      a: 'We offer structured SLA agreements, maintenance retainers, and continuous sprint iteration tiers to ensure long-term stability and continuous revenue compounding for your agency.',
    },
    {
      q: 'Which tech stacks and platforms do you specialize in for partner engagements?',
      a: 'We specialize in native iOS (Swift), Android (Kotlin), cross-platform (React Native, Flutter), web apps (React, Next.js), backend systems (Node.js, Python, Go), and cloud/AI infrastructure (AWS, GCP, OpenAI).',
    },
    {
      q: 'Who owns the intellectual property and code commits?',
      a: 'You and your client maintain 100% ownership of all source code, Figma design files, documentation, and database schemas from day one under strict mutual NDAs.',
    },
    {
      q: 'How quickly can your engineering pods onboard to a new partner project?',
      a: 'Once the Statement of Work (SOW) is confirmed and environments are provisioned, our engineering teams typically kick off development within 3 to 5 business days.',
    },
  ]

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? -1 : i)
  }

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Partnership FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Frequently Asked <span className="text-[#00CE44]">Questions</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            Clear answers on engagement boundaries, commercial margins, white-label protocols, and technical governance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="rounded-[18px] bg-[#141414] overflow-hidden border border-white/5 transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg lg:text-[19px] font-bold text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#202020] flex items-center justify-center shrink-0 text-[#00CE44]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#00CE44]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/80" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-white/80 text-sm sm:text-base leading-relaxed font-normal border-t border-white/5">
                    {faq.a}
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
