import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Core Frameworks',
    description: 'The core layer for image processing, model development, and visual intelligence.',
    items: [
      { name: 'OpenCV' },
      { name: 'PyTorch', image: '/assets/ai-development/steck01.png', alt: 'PyTorch deep learning framework' },
      { name: 'TensorFlow', image: '/assets/ai-development/02stack.png', alt: 'TensorFlow machine learning platform' },
      { name: 'Keras' },
      { name: 'Detectron2' },
      { name: 'YOLO v8' },
    ],
  },
  {
    name: 'Model Architectures',
    description: (
      <>
        The model layer supports object detection, classification, segmentation, and multimodal visual understanding that can combine vision with{' '}
        <Link
          to="/nlp-development-services"
          className="underline font-semibold"
>
          natural language processing
        </Link>
        .
      </>
    ),
    items: [
      { name: 'ResNet' },
      { name: 'EfficientNet' },
      { name: 'Vision Transformers' },
      { name: 'Segment Anything Model' },
      { name: 'CLIP' },
    ],
  },
  {
    name: 'Data Preparation',
    description: 'The tooling that transforms raw visual data into training-ready datasets.',
    items: [
      { name: 'Roboflow' },
      { name: 'LabelImg' },
      { name: 'CVAT' },
      { name: 'Albumentations' },
      { name: 'imgaug' },
    ],
  },
  {
    name: 'Deployment & MLOps',
    description: 'The infrastructure that deploys, optimises, and monitors computer vision models in production.',
    items: [
      { name: 'MLflow', image: '/assets/ai-development/New-Project-2.jpg', alt: 'MLflow MLOps platform' },
      { name: 'TensorRT' },
      { name: 'ONNX' },
      { name: 'Docker', image: '/assets/ai-development/03stack-5-2.png', alt: 'Docker container platform' },
      { name: 'Kubernetes', image: '/assets/ai-development/03stack-3-7.jpg', alt: 'Kubernetes orchestration' },
    ],
  },
  {
    name: 'Cloud & Edge',
    description: 'Deployment infrastructure for cloud-based and edge computer vision systems.',
    items: [
      { name: 'AWS SageMaker', image: '/assets/ai-development/03stack-1.png', alt: 'AWS SageMaker' },
      { name: 'Google Vertex AI', image: '/assets/ai-development/03stack-2-1.jpg', alt: 'Google Cloud Vertex AI' },
      { name: 'Azure ML', image: '/assets/ai-development/03stack-4-1.jpg', alt: 'Microsoft Azure ML' },
      { name: 'NVIDIA Jetson' },
      { name: 'Raspberry Pi' },
    ],
  },
]

export default function ComputerVisionTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-4">
            Computer Vision Development{' '}
            <span className="text-[#00CE44]">Tools and Technologies</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
            The tools, models, and infrastructure behind every computer vision system we have built and deployed in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 rounded-2xl bg-[#00CE44] p-4 flex flex-col gap-1">
            {categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between text-sm ${
                  activeCategory === index
                    ? 'bg-black text-white font-semibold'
                    : 'text-black font-medium hover:bg-black/10 border-b border-black/10'
                }`}
              >
                <span>{category.name}</span>
                {activeCategory === index && <ArrowRight className="w-4 h-4 text-white shrink-0" aria-hidden="true" />}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 rounded-2xl bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-4 sm:gap-5">
            {categories[activeCategory].items.map((technology) => (
              <div key={technology.name} className="flex flex-col items-center w-28 sm:w-32 text-center">
                <div className="w-28 sm:w-32 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-3 mb-2">
                  {technology.image ? (
                    <img
                      src={technology.image}
                      alt={technology.alt || `${technology.name} logo`}
                      className="w-full h-full object-contain select-none"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-black text-sm font-semibold leading-tight">
                      {technology.name}
                    </span>
                  )}
                </div>
                <span className="text-black text-xs sm:text-sm leading-tight">{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
