import {
  Eye,
  HeartPulse,
  Network,
  ScanSearch,
  ShieldCheck,
  Tags,
  UserCheck,
  Video,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Eye,
    title: 'Custom Computer Vision Development',
    description: (
      <>
        Our{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/custom-software-development"
>
          custom software development
        </Link>{' '}
        approach builds computer vision systems around your specific visual data, operational context, and performance requirements. Built from the architecture up for your use case rather than assembled through generic{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/blog/ai-app-builders-vs-human-developers"
>
          AI app builders
        </Link>
        .
      </>
    ),
  },
  {
    icon: ScanSearch,
    title: 'Object Detection and Recognition Systems',
    description:
      'ML models that identify, locate, and classify objects within images and video streams in real time. Built for products and operations where visual recognition drives decisions.',
  },
  {
    icon: Tags,
    title: 'Image Classification and Tagging',
    description:
      'Deep learning models that categorise and tag images at scale. Built for products that need to organise, search, and retrieve visual content without manual labelling.',
  },
  {
    icon: ShieldCheck,
    title: 'Visual Inspection and Quality Control',
    description:
      'Computer vision systems that detect defects, anomalies, and quality issues in products, components, and materials. Built for manufacturing and operational environments where human inspection cannot keep up with volume.',
  },
  {
    icon: UserCheck,
    title: 'Face Recognition and Identity Verification',
    description:
      'ML models that identify, verify, and authenticate individuals from images and video. Built for security, access control, and identity verification systems with enterprise-grade accuracy requirements.',
  },
  {
    icon: Video,
    title: 'Video Analysis and Real-Time Monitoring',
    description: (
      <>
        Computer vision pipelines process video streams, trigger{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/rpa-development-services"
>
          RPA workflows
        </Link>
        , detect events, and use{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/ai-automation-services"
>
          AI automation
        </Link>{' '}
        to trigger responses in real time. Built for surveillance, operational monitoring, and safety systems.
      </>
    ),
  },
  {
    icon: HeartPulse,
    title: 'Medical Image Analysis',
    description:
      'Deep learning models that analyse medical images for diagnostic support, anomaly detection, and clinical data extraction. Built for healthcare products where accuracy and compliance are non-negotiable.',
  },
  {
    icon: Network,
    title: 'Computer Vision Integration Services',
    description: (
      <>
        <Link
          className="text-white underline group-hover:text-black"
          to="/backend-api-development"
>
          Backend API development
        </Link>{' '}
        connects computer vision and pipelines are integrated into existing software, APIs,{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/ai-chatbot-development-services"
>
          AI chatbots
        </Link>{' '}
        and operational infrastructure. Built for businesses that need visual intelligence embedded through{' '}
        <Link
          className="text-white underline group-hover:text-black"
          to="/ai-app-development-services"
>
          AI app development
        </Link>{' '}
        into the products and systems they already run.
      </>
    ),
  },
]

export default function ComputerVisionServices() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Production-Ready Computer Vision Development Services
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            Our{' '}
            <Link
              to="/digital-product-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              digital product development
            </Link>{' '}
            approach scopes each capability around the specific visual task, dataset, and deployment environment the product requires.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-2xl p-7 sm:p-8 transition-colors duration-200"
            >
              <Icon className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] group-hover:text-black text-xl font-bold mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-white/80 group-hover:text-black text-[15px] leading-relaxed transition-colors">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
