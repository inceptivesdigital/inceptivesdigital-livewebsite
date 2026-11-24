import React from 'react'
import { Cpu, AlertTriangle } from 'lucide-react'

export default function AiAppDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            The Difference Between AI That Assists and AI That Operates
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-5">
            Building an AI App Is Not the Same as{' '}
            <span className="text-[#00CE44]">Adding AI to an App</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.7] font-normal">
            Most apps that claim to use AI have a single model doing one thing in the background, rather than relying on{' '}
            <a
              href="https://inceptivesdigital.com/blog/ai-app-builders-vs-human-developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
            >
              AI app builders
            </a>{' '}
            for the entire product. That is not the same as an application built around AI from the architecture up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[20px] p-8 sm:p-10 text-left transition-colors duration-200">
            <Cpu className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200" />
            <h3 className="text-[#00CE44] group-hover:text-black text-[22px] sm:text-[24px] font-bold leading-snug mb-4 transition-colors duration-200">
              The Difference Starts in How the App Is Designed
            </h3>
            <p className="text-white/85 group-hover:text-black/90 text-[15px] sm:text-[16px] leading-[1.7] font-normal transition-colors duration-200">
              A regular app adds AI after the core product is built. An AI-powered app is designed around what the intelligence needs to do from day one. The data model, backend architecture, and integration layer are all built around the AI requirements. Intelligence is not a feature. It is the product, and the role of{' '}
              <a
                href="https://inceptivesdigital.com/blog/will-ai-really-replace-app-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] group-hover:text-black underline transition-colors"
              >
                AI app developers
              </a>{' '}
              remains central to building the systems around it.
            </p>
          </div>

          <div className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[20px] p-8 sm:p-10 text-left transition-colors duration-200">
            <AlertTriangle className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200" />
            <h3 className="text-[#00CE44] group-hover:text-black text-[22px] sm:text-[24px] font-bold leading-snug mb-4 transition-colors duration-200">
              Where Most AI App Projects Go Wrong
            </h3>
            <p className="text-white/85 group-hover:text-black/90 text-[15px] sm:text-[16px] leading-[1.7] font-normal transition-colors duration-200">
              The most common failure point in AI app development is not the model. It is the data infrastructure around it. A model performs precisely when the system feeding it is built correctly. This is the conversation we have in Discovery before development begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
