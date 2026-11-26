import FAQSection from '../../../../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '1. What is computer vision development?',
    a: (
      <>
        Building systems that extract actionable intelligence from images, video, and camera feeds. Object detection, image classification, visual inspection, and anomaly detection support{' '}
        <Link
          to="/business-process-automation"
>
          business process automation
        </Link>{' '}
        across quality control, and operational decision-making.
      </>
    ),
  },
  {
    q: '2. What industries use computer vision systems?',
    a: 'Manufacturing, healthcare, retail, security, agriculture, and logistics. Any industry where visual data needs to be processed at a volume and speed that human review cannot match.',
  },
  {
    q: '3. How much does computer vision development cost?',
    a: (
      <>
        A focused{' '}
        <Link
          to="/ai-mvp-development"
>
          AI MVP
        </Link>{' '}
        or computer vision proof of concept starts at $20K. A full production system typically ranges from $60K to $250K, depending on complexity and operational requirements. Defined precisely in the{' '}
        <Link
          to="/discovery-sprint"
>
          Discovery Sprint
        </Link>
        .
      </>
    ),
  },
  {
    q: '4. How long does it take to build a computer vision system?',
    a: 'A proof of concept takes 6 to 10 weeks. A full production system takes 3 to 8 months, depending on data readiness and operational complexity.',
  },
  {
    q: '5. What data is needed to build a computer vision model?',
    a: 'Labelled visual datasets that reflect real operational conditions. Data quality and volume directly determine model accuracy in production. Evaluated in Discovery before development begins.',
  },
  {
    q: '6. What is the difference between computer vision and image processing?',
    a: (
      <>
        Image processing applies predefined transformations. Computer vision uses{' '}
        <Link
          to="/machine-learning-development-services"
>
          machine learning
        </Link>{' '}
        to extract meaning and make decisions from visual data. One follows rules. The other learns them.
      </>
    ),
  },
  {
    q: '7. Can computer vision systems run on edge devices?',
    a: 'Yes. We optimise models for edge deployment using TensorRT and ONNX on NVIDIA Jetson and Raspberry Pi hardware. Edge deployment is defined in architecture planning before development begins.',
  },
  {
    q: '8. How do you ensure computer vision model accuracy in production?',
    a: 'Representative training data, edge case testing, inference optimization, and post-launch drift monitoring. Models are retrained when real-world conditions shift.',
  },
]

export default function ComputerVisionFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About{' '}
          <span className="text-[#00CE44]">Computer Vision Development</span> Worth Asking Before You Build
        </>
      }
    />
  )
}
