import React from 'react'
import { AlertCircle, Cpu, Plug } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    icon: AlertCircle,
    title: 'The Problem With Most Chatbot Businesses Deploy',
    body: 'Most chatbots follow scripts. They break when users go off-script. An AI chatbot built on natural language processing and machine learning understands intent, retains context, and improves with every interaction.',
  },
  {
    icon: Cpu,
    title: 'What Separates an AI Chatbot From a Generic One',
    body: (
      <>
        The quality of the NLP pipeline. The architecture connecting it to your data. The{' '}
        <Link
          to="/ui-ux-design"
          className="text-[#00CE44] group-hover:text-black underline"
>
          UI/UX design
        </Link>{' '}
        governing the conversational experience and edge cases. A chatbot grounded in your knowledge base with an RAG architecture responds with precision. Generic{' '}
        <Link
          to="/blog/ai-app-builders-vs-human-developers"
          className="text-[#00CE44] group-hover:text-black underline"
>
          AI app builders
        </Link>{' '}
        and model wrappers often respond with approximations.
      </>
    ),
  },
  {
    icon: Plug,
    title: 'Where Most AI Chatbot Projects Go Wrong',
    body: (
      <>
        The most common failure point is not the model. It is the integration layer. Without{' '}
        <Link
          to="/system-integration-api-automation"
          className="text-[#00CE44] group-hover:text-black underline"
>
          system integration and API automation
        </Link>
        , a chatbot disconnected from your CRM, knowledge base, and workflows delivers responses but not value.
      </>
    ),
  },
]

export default function ChatbotDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            What Makes a Well-Built AI Chatbot Different
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-5">
            An AI Chatbot and a Rule-Based Chatbot Are{' '}
            <span className="text-[#00CE44]">Two Fundamentally Different Systems</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.7] font-normal">
            Most chatbots answer questions. A well-built AI chatbot understands context, learns from interactions, and handles conversations no decision tree could anticipate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[20px] p-8 text-left transition-colors duration-200 flex flex-col justify-start"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[20px] sm:text-[22px] font-bold leading-snug mb-3.5 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-white/85 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.7] font-normal transition-colors duration-200">
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
