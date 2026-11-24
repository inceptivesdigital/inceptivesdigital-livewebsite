import { Link } from 'react-router-dom'

// Solid Full-Fill Vector Icons (#00CE44)
function AiMlFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M6 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v2h2v-2h8v2h2v-2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2H8V2H6zm12 16H6V6h12v12zm-3-9H9v6h6V9z" />
    </svg>
  )
}

function GenAiFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L9.2 8.8 1.5 11.5l7.7 2.7L12 22l2.8-7.8 7.7-2.7-7.7-2.7L12 1zm7 13.5l-1.3 3.2-3.2 1.3 3.2 1.3 1.3 3.2 1.3-3.2 3.2-1.3-3.2-1.3-1.3-3.2z" />
    </svg>
  )
}

function IotFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 3C6.95 3 2.8 6.7 2 11.5l2.4.6C5 7.9 8.2 5.5 12 5.5s7 2.4 7.6 6.6l2.4-.6C21.2 6.7 17.05 3 12 3zm0 5c-2.8 0-5.1 1.8-5.8 4.4l2.4.6c.4-1.6 1.8-2.5 3.4-2.5s3 .9 3.4 2.5l2.4-.6C17.1 9.8 14.8 8 12 8zm0 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  )
}

function ArVrFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M21 7H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5.5l1.5 2h4l1.5-2H21c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-14 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  )
}

function CloudFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}

function FiveGEdgeFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.33 4 15.86 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.86-1.61 5.33-3.99 6.92l1 1.73C19.99 19.92 22 16.7 22 13c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

function BlockchainFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M11.5 2.12a1 1 0 0 1 1 0l8.5 4.9a.5.5 0 0 1 0 .86l-8.5 4.9a1 1 0 0 1-1 0l-8.5-4.9a.5.5 0 0 1 0-.86l8.5-4.9z" opacity="0.95" />
      <path d="M2.5 9.24a.5.5 0 0 1 .75-.43L11.5 13.6a.5.5 0 0 1 .25.43v9.42a.5.5 0 0 1-.75.43L2.75 19.1a.5.5 0 0 1-.25-.43V9.24z" opacity="0.8" />
      <path d="M21.5 9.24v9.43a.5.5 0 0 1-.25.43L13 23.88a.5.5 0 0 1-.75-.43v-9.42a.5.5 0 0 1 .25-.43l8.25-4.79a.5.5 0 0 1 .75.43z" />
    </svg>
  )
}

export default function SFAdvancedTech() {
  const capabilities = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      icon: AiMlFullFill,
      renderDesc: () => (
        <span>
          Apply{' '}
          <Link to="/machine-learning-development-services" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
            machine learning
          </Link>{' '}
          and LLM capabilities where they solve measurable product challenges, automate repetitive work, improve user experiences, and deliver smarter decisions.
        </span>
      ),
    },
    {
      title: 'Generative AI & LLM Integration',
      icon: GenAiFullFill,
      renderDesc: () => (
        <span>
          Integrate OpenAI, Gemini, Claude, and other large language models to deliver AI assistants, semantic search, workflow automation, and context-aware user experiences within mobile applications.
        </span>
      ),
    },
    {
      title: 'Internet of Things (IoT)',
      icon: IotFullFill,
      renderDesc: () => (
        <span>
          Connect mobile applications with sensors, wearables, industrial equipment, and smart devices to enable real-time monitoring, remote control, automated workflows, and connected user experiences.
        </span>
      ),
    },
    {
      title: 'Augmented Reality & Virtual Reality',
      icon: ArVrFullFill,
      renderDesc: () => (
        <span>
          Create immersive mobile experiences for retail, healthcare, manufacturing, real estate, and training using ARKit, ARCore, and spatial computing technologies.
        </span>
      ),
    },
    {
      title: 'Cloud-Native Architecture',
      icon: CloudFullFill,
      renderDesc: () => (
        <span>
          Build cloud-native mobile applications on AWS, Microsoft Azure, and Google Cloud with scalable infrastructure, containerized services, and resilient backend systems designed for high availability.
        </span>
      ),
    },
    {
      title: '5G & Edge Computing',
      icon: FiveGEdgeFullFill,
      renderDesc: () => (
        <span>
          Engineer mobile applications that leverage 5G connectivity and edge computing to enable real-time data processing, ultra-low latency, connected devices, and responsive user experiences.
        </span>
      ),
    },
    {
      title: 'Blockchain Integration',
      icon: BlockchainFullFill,
      renderDesc: () => (
        <span>
          Build blockchain-powered mobile applications with smart contracts, digital wallets, tokenization, and decentralized identity for secure, verifiable transactions.
        </span>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Advanced Engineering Capabilities for{' '}
            <span className="text-[#00CE44]">Mobile Applications</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Advanced mobile application development in San Francisco requires technical decisions that match real business workloads. We develop AI-enabled features, connected applications, and cloud-native infrastructure based on each product&apos;s architecture and operating requirements.
          </p>
        </div>

        {/* Capabilities Grid: Clean icons with NO bg, border, or padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-start text-left hover:-translate-y-1"
              >
                {/* Solid Full-Fill Vector Icon */}
                <div className="mb-6 flex items-center justify-start">
                  <Icon className="w-9 h-9 shrink-0" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.renderDesc()}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
