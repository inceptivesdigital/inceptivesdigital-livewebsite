import { useState } from 'react'

export default function AiProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01.',
      label: 'Discovery',
      title: 'Discovery and AI Opportunity Assessment',
      icon: '/assets/ai-development/dis.png',
      desc: 'We map your business processes, evaluate data readiness across structured and unstructured sources, and define the system architecture before development begins. This is where the Discovery Sprint produces a clear build plan — scope defined, architecture confirmed, timeline set.',
    },
    {
      num: '02.',
      label: 'Data Architecture',
      title: 'Data Architecture and Engineering Foundation',
      icon: '/assets/ai-development/presstwo.png',
      desc: 'We build ETL pipelines, data transformation workflows, and storage architecture around the AI requirements from day one. On high-volume systems, distributed infrastructure like Apache Spark or Kafka is built in from the start, not retrofitted afterward.',
    },
    {
      num: '03.',
      label: 'AI Model',
      title: 'AI Model Design and Development',
      icon: '/assets/ai-development/proess3.png',
      desc: 'Models are selected for your specific use case. LLMs like GPT and Claude for generative tasks. Fine-tuned Hugging Face models for domain-specific applications. RAG architectures with Pinecone or Weaviate for knowledge-grounded systems. XGBoost or Random Forest, where prediction is the requirement.',
    },
    {
      num: '04.',
      label: 'Development',
      title: 'AI Product and Application Development',
      icon: '/assets/ai-development/ai-product.png',
      desc: 'We build the application layer, REST APIs, and intelligent interfaces that turn trained models into products people actually use. Built on FastAPI or Node.js, integrated with your existing software ecosystem from the start.',
    },
    {
      num: '05.',
      label: 'Deployment',
      title: 'Production Deployment and System Integration',
      icon: '/assets/ai-development/process5.png',
      desc: 'Deployed on AWS SageMaker, Google Vertex AI, or Azure ML. Containerised with Docker, orchestrated with Kubernetes. SOC 2, GDPR, and HIPAA compliance are built in at this stage, not added afterward.',
    },
    {
      num: '06.',
      label: 'Monitoring',
      title: 'Monitoring, Optimization, and Continuous Improvement',
      icon: '/assets/ai-development/process6.png',
      desc: 'Models drift. Data distributions shift. We monitor performance with MLflow, retrain when degradation is detected, and optimise inference pipelines for latency and throughput over time.',
    },
  ]

  const current = steps[activeStep]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0c0c0c] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            How We Deliver Custom <span className="text-[#00CE44]">AI Development Services</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg">
            No shortcuts. No retrofitting. No surprises after launch.
          </p>
        </div>

        {/* 6 Step Interactive Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center mb-14">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-center cursor-pointer transition-all focus:outline-none"
              >
                {/* Circle Icon Container */}
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00CE44] shadow-[0_0_30px_rgba(0,206,68,0.5)] scale-105'
                      : 'bg-[#1e1e1e] border border-white/10 group-hover:border-[#00CE44]/40 group-hover:bg-[#252525]'
                  }`}
                >
                  {/* Step Pill */}
                  <span
                    className={`absolute -top-1 -right-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-black text-[#00CE44] border-[#00CE44]'
                        : 'bg-black text-[#00CE44] border-[#00CE44]/60'
                    }`}
                  >
                    {step.num}
                  </span>

                  <img
                    src={step.icon}
                    alt={step.label}
                    className={`w-9 h-9 sm:w-11 sm:h-11 object-contain transition-all ${
                      isActive ? 'brightness-0' : 'brightness-90 group-hover:brightness-100'
                    }`}
                  />
                </div>

                {/* Step Label */}
                <span
                  className={`mt-4 text-xs sm:text-sm font-semibold tracking-wide text-center transition-colors ${
                    isActive ? 'text-[#00CE44]' : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Step Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 sm:p-12 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl">
            {/* Big Green Circle with Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 shadow-[0_0_35px_rgba(0,206,68,0.4)]">
              <img
                src={current.icon}
                alt={current.title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain brightness-0"
              />
            </div>

            {/* Description */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#00CE44] mb-4 tracking-tight">
                {current.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
