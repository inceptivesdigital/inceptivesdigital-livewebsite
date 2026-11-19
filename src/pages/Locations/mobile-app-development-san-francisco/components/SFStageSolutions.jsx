export default function SFStageSolutions() {
  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Custom Mobile App Development for{' '}
            <span className="text-[#00CE44]">Startups and Enterprises</span> in San Francisco
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            A startup preparing for its first launch has different engineering priorities than an SMB managing complex systems. Inceptives Digital develops app development solutions around your product stage, technical requirements, and available investment.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: For Startups */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-[#121318] border border-white/10 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden">
            <div>
              {/* Full-fill green icon: no bg, no border, no padding */}
              <div className="mb-5 flex items-center justify-start">
                <svg className="w-10 h-10 text-[#00CE44] fill-[#00CE44]" viewBox="0 0 24 24">
                  <path d="M12 2.5s2 2 3.5 6.5l2 1c1.5.75 3.5 2.5 3.5 4.5 0 2.5-2 4-4 4l-1 2c-4.5 1.5-6.5 3.5-6.5 3.5s-2-2-6.5-3.5l-1-2c-2 0-4-1.5-4-4 0-2 2-3.75 3.5-4.5l2-1C8 4.5 12 2.5 12 2.5zm0 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                For Startups
              </h3>
              <p className="text-[#00CE44] text-xs sm:text-sm font-semibold mb-6">
                MVP Development | Product Validation | Investor Readiness
              </p>

              <ul className="space-y-3.5 mb-8 text-sm sm:text-[15px] text-white/85 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">MVP App Development:</strong> Launch core functionality that tests market demand before larger investment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Startup-Friendly Architecture:</strong> Build on a technical foundation that accommodates new features and user growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Development Budget Control:</strong> Establish a defined scope and fixed-cost estimate that respects your runway.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Product Launch Planning:</strong> Prepare working releases for early adopters, design partners, and investor demonstrations.
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Get an MVP Cost Estimate
            </a>
          </div>

          {/* Card 2: For Enterprises / SMBs */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-[#121318] border border-white/10 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden">
            <div>
              {/* Full-fill green icon: no bg, no border, no padding */}
              <div className="mb-5 flex items-center justify-start">
                <svg className="w-10 h-10 text-[#00CE44] fill-[#00CE44]" viewBox="0 0 24 24">
                  <path d="M19 2H9c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 9h2v2H5V9zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm14 2H9V4h10v15zm-8-13h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                For Small and Medium-Sized Businesses (SMBs)
              </h3>
              <p className="text-[#00CE44] text-xs sm:text-sm font-semibold mb-6">
                Business Automation | Customer Experience | Growth
              </p>

              <ul className="space-y-3.5 mb-8 text-sm sm:text-[15px] text-white/85 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Custom Business Applications:</strong> Build mobile apps that simplify daily operations and address specific business needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">CRM &amp; Payment Integrations:</strong> Connect applications with existing CRM, payment gateways, and business management systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Workflow Automation:</strong> Reduce manual tasks through automated bookings, notifications, and real-time data updates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0 mt-2" />
                  <span>
                    <strong className="text-white">Scalable App Development:</strong> Introduce new features and accommodate growing customer demand without unnecessary redevelopment.
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Discuss Your Business App
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
