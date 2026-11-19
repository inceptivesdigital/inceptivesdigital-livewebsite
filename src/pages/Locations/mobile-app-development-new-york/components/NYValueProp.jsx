import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function ShieldFullFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

function LayersFullFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
    </svg>
  )
}

function CpuFullFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M9 2v2H6c-1.1 0-2 .9-2 2v3H2v2h2v2H2v2h2v3c0 1.1.9 2 2 2h3v2h2v-2h2v2h2v-2h3c1.1 0 2-.9 2-2v-3h2v-2h-2v-2h2V9h-2V6c0-1.1-.9-2-2-2h-3V2h-2v2h-2V2H9zm-1 6h8v8H8V8z" />
    </svg>
  )
}

export default function NYValueProp() {
  const cards = [
    {
      title: 'Technical Accountability',
      desc: 'Clear engineering responsibilities and documented decisions throughout development.',
      icon: ShieldFullFill,
    },
    {
      title: 'Product Continuity',
      desc: 'Development practices that support future enhancements without disrupting existing functionality.',
      icon: LayersFullFill,
    },
    {
      title: 'Integration Readiness',
      desc: 'Existing APIs, data dependencies, and system limitations assessed before implementation.',
      icon: CpuFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              A New York App Development Company{' '}
              <span className="text-[#00CE44]">Focused on Product Value</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
              Inceptives Digital works with New York businesses at different stages of growth, from founders testing their first MVP to SMBs expanding their reach through apps. Projects cover custom mobile development, third-party integrations, and backend systems, with{' '}
              <Link
                to="/product-strategy-consulting"
                className="text-[#00CE44] hover:underline font-medium"
              >
                product strategy consulting
              </Link>{' '}
              and technical decisions shaped by the product’s requirements, existing infrastructure, and expansion plans.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Discuss Your New York Project
            </a>
          </div>

          {/* Right Column: 3 Structured Value Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {cards.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="p-6 sm:p-7 rounded-[20px] bg-[#121317] border-0 transition-all duration-300 text-left shadow-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-normal">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
