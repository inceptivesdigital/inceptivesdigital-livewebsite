import React from 'react'
import { BrainCircuit, Box, MapPinned, Cloud, Cpu, SearchCheck } from 'lucide-react'

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'AI and Predictive Property Intelligence',
    description:
      'Our machine learning development engineers build AI models for property valuation and market forecasting. Recommendation systems use relevant data to improve listing relevance.',
  },
  {
    icon: Box,
    title: '3D Visualization and Immersive Technologies',
    description:
      'We create interactive 3D property experiences using Unity, Unreal Engine, or WebGL, with rendering performance tailored to supported devices.',
  },
  {
    icon: MapPinned,
    title: 'Geospatial Data and Search Engineering',
    description:
      'Geospatial indexing and mapping technologies support radius-based property searches, location filters, and neighborhood insights across real estate applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure and Performance',
    description:
      'Our cloud engineers optimize database performance and configure scalable infrastructure to accommodate growing listing volumes and changing application workloads.',
  },
  {
    icon: Cpu,
    title: 'Connected Building and IoT Technologies',
    description:
      'Our IoT app development work integrates compatible building sensors and access management systems through secure APIs, enabling centralized monitoring across connected real estate assets.',
  },
  {
    icon: SearchCheck,
    title: 'Advanced Recommendation Engineering',
    description:
      'Our developers integrate Elasticsearch or Algolia to support complex listing queries and relevant property recommendations across large inventories.',
  },
]

export default function RealEstateEmergingTech() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Advanced Engineering Capabilities{' '}
            <span className="text-[#00CE44]">Beyond Standard Property Apps</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our expertise in real estate app development covers AI-driven property intelligence and specialized technologies for complex PropTech products. We engineer each capability around your platform&apos;s architecture and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[#1b1c21] border border-white/10 hover:border-[#00CE44]/60 rounded-[18px] p-7 sm:p-8 flex flex-col justify-start text-left transition-colors duration-200 h-full"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                  <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.68] font-normal">
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
