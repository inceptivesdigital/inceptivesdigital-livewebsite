import React from 'react'
import { SolidIcon } from './StartupSolidIcons'

const emergingTech = [
  {
    icon: 'brain',
    title: 'Artificial Intelligence and Machine Learning',
    description:
      'Recommendation engines, NLP-powered search, churn prediction, and generative content tools are embedded directly into the application architecture. Intelligence built in, not bolted on.',
  },
  {
    icon: 'ar',
    title: 'AR/VR and Immersive Experiences',
    description:
      'Virtual try-on, 3D product visualisation, and AR experiences built with ARKit, ARCore, and WebXR. Applied where immersive interaction measurably improves conversion and reduces returns.',
  },
  {
    icon: 'blocks',
    title: 'Blockchain and Decentralised Applications',
    description:
      'Supply chain provenance, tokenised loyalty programmes, and smart contract escrow built on Ethereum, Polygon, and Solana. Applied where decentralised verification creates genuine commercial value.',
  },
  {
    icon: 'cpu',
    title: 'IoT and Connected Commerce',
    description:
      'Physical devices connected to digital platforms using MQTT protocols and edge computing. Real-time operational intelligence for smart retail, warehouse management, and connected commerce.',
  },
  {
    icon: 'chart',
    title: 'Big Data and Predictive Analytics',
    description:
      'Data pipelines built on Apache Kafka, Spark, and BigQuery. Behavioural signals are transformed into demand forecasting, dynamic pricing, and personalisation models at scale.',
  },
  {
    icon: 'cloud',
    title: 'Cloud-Native and Serverless Architecture',
    description:
      'Auto-scaling infrastructure that eliminates management overhead and handles demand spikes without manual intervention. Enterprise-grade reliability without enterprise-grade infrastructure costs.',
  },
]

function CornerStar({ positionClass }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`hidden lg:block pointer-events-none absolute ${positionClass} w-5 h-5 text-white/75 z-10`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
    </svg>
  )
}

export default function StartupEmergingTech() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Emerging Technologies</span> We Build Into Next-Generation Startup Applications
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The capabilities that turn a functional product into a genuinely differentiated one in markets where feature parity is the baseline expectation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/15">
          {emergingTech.map((item, idx) => {
            const isTopRow = idx < 3
            const isNotRightCol = idx % 3 !== 2
            return (
              <div
                key={item.title}
                className={`relative p-7 sm:p-9 text-left border-b border-white/15 ${
                  isNotRightCol ? 'lg:border-r lg:border-white/15' : ''
                }`}
              >
                {isTopRow && (idx === 0 || idx === 1) && (
                  <CornerStar positionClass="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                )}

                <SolidIcon
                  name={item.icon}
                  className="w-9 h-9 text-[#00CE44] mb-5"
                />
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
