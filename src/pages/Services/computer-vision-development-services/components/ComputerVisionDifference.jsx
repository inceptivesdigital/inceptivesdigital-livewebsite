import { Cpu, Eye, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

const points = [
  {
    icon: Eye,
    title: 'What Computer Vision Does in Production',
    description:
      'Object detection, image classification, visual inspection, and anomaly detection that help businesses automate monitoring, quality control, and decision-making at scale.',
  },
  {
    icon: TriangleAlert,
    title: 'Why Computer Vision Projects Fail',
    description: (
      <>
        Limited training data and poor real-world validation are common reasons{' '}
        <Link
          to="/blog/common-reasons-digital-products-fail"
          className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
          digital products fail
        </Link>{' '}
        when computer vision moves from testing into production. Changes in lighting, camera angles, image quality, and operating environments can quickly reduce performance after deployment.
      </>
    ),
  },
  {
    icon: Cpu,
    title: 'What It Takes to Deploy Computer Vision Successfully',
    description:
      'Representative training data, task-specific model architectures, and inference pipelines optimized for speed, accuracy, and reliability in production environments.',
  },
]

export default function ComputerVisionDifference() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] mb-4">
            Computer Vision Success Depends on More Than Model Accuracy
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65]">
            The challenge is rarely object detection or image classification itself. The challenge is maintaining accuracy, speed, and reliability once the system is deployed in the real world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-[#1b1c21] rounded-2xl p-7 sm:p-8 border border-white/5">
              <Icon className="w-10 h-10 text-[#00CE44] mb-5" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[#00CE44] text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
