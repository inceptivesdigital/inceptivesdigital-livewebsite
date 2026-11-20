import {
  BrainCircuit,
  FileText,
  Globe,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: '1. Custom AI MVP Development',
    description: (
      <>
        Our{' '}
        <a href="https://inceptivesdigital.com/ai-app-development-services" target="_blank" rel="noopener noreferrer">
          AI app development
        </a>{' '}
        approach starts with a bespoke MVP designed around your specific use case, data sources, and operational requirements. Built from the architecture up for your problem rather than relying on generic AI app builders or adapting a previous engagement.
      </>
    ),
  },
  {
    icon: Globe,
    title: '2. AI Web MVP',
    description: (
      <>
        Focused{' '}
        <a href="https://inceptivesdigital.com/web-app-development-company" target="_blank" rel="noopener noreferrer">
          web app development
        </a>{' '}
        creates a minimal AI product that can validate the core concept with real users. React or Next.js frontend, FastAPI or Node.js backend, AI model integrated and tested under real conditions.
      </>
    ),
  },
  {
    icon: Smartphone,
    title: '3. AI Mobile MVP',
    description: (
      <>
        A focused iOS or Android AI application built to prove the concept on mobile. Flutter or React Native for cross-platform delivery. This{' '}
        <a href="https://inceptivesdigital.com/mobile-app-development" target="_blank" rel="noopener noreferrer">
          mobile app MVP development
        </a>{' '}
        approach validates the core AI capability before full native development begins.
      </>
    ),
  },
  {
    icon: Layers,
    title: '4. AI SaaS MVP',
    description:
      'A minimal multi-tenant AI platform built to validate the product concept before full SaaS architecture investment. Core AI feature, basic dashboard, and user access built for early customer validation.',
  },
  {
    icon: Sparkles,
    title: '5. Generative AI MVP',
    description: (
      <>
        A focused{' '}
        <a href="https://inceptivesdigital.com/generative-ai-development-company" target="_blank" rel="noopener noreferrer">
          generative AI development
        </a>{' '}
        MVP validates content generation, document intelligence, or knowledge retrieval before a full platform build. RAG architecture, prompt engineering, and retrieval pipeline tested before full platform build.
      </>
    ),
  },
  {
    icon: FileText,
    title: '6. AI Automation MVP',
    description: (
      <>
        An AI automation MVP proves whether a specific operational workflow can be automated reliably before full system investment. One{' '}
        <a href="https://inceptivesdigital.com/business-process-automation" target="_blank" rel="noopener noreferrer">
          business process automation
        </a>{' '}
        workflow is tested end-to-end, including exception handling, before full system investment.
      </>
    ),
  },
  {
    icon: Rocket,
    title: '7. Startup AI MVP',
    description: (
      <>
        Our{' '}
        <a href="https://inceptivesdigital.com/startup-app-development-company" target="_blank" rel="noopener noreferrer">
          startup product development
        </a>{' '}
        approach keeps the AI MVP lean and focused for early-stage companies with limited runway. Core AI concept validated, architecture confirmed, and investor-ready proof of concept delivered without over-engineering.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: '8. Enterprise AI MVP',
    description: (
      <>
        A focused pilot build scoped for established businesses testing AI before organisation-wide deployment.{' '}
        <a href="https://inceptivesdigital.com/system-integration-api-automation" target="_blank" rel="noopener noreferrer">
          System integration and API automation
        </a>{' '}
        with existing platforms, along with compliance and security architecture, are validated before full rollout.
      </>
    ),
  },
]

export default function AiMvpServices() {
  return (
    <section className="w-full bg-[#111214] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            AI MVP Development Services Scoped Around Your Idea and Your Timeline
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Eight focused engagement types. Each one is built to validate a specific AI concept before the full investment begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-6 sm:p-7 transition-colors duration-200">
              <Icon className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] group-hover:text-black text-lg sm:text-xl font-bold mb-3 transition-colors leading-tight">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[14px] leading-relaxed transition-colors [&_a]:text-white [&_a]:underline group-hover:[&_a]:text-black">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
