import {
  Factory,
  HeartPulse,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react'

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing & Quality Control',
    bullets: [
      'Automated defect detection and quality inspection',
      'Production line monitoring and anomaly detection',
      'Component identification and assembly verification',
    ],
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Medical Imaging',
    bullets: [
      'Medical image analysis and diagnostic support',
      'Anomaly detection in radiology and pathology imaging',
      'Clinical document and form data extraction',
    ],
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Ecommerce',
    bullets: [
      'Visual product search and recommendation systems',
      'Automated product tagging and catalogue enrichment',
      'In-store customer behaviour and traffic analysis',
    ],
  },
  {
    icon: ShieldCheck,
    name: 'Security & Surveillance',
    bullets: [
      'Real-time object and person detection',
      'Face recognition and identity verification',
      'Automated threat detection and alerts',
    ],
  },
  {
    icon: Leaf,
    name: 'Agriculture & Food Processing',
    bullets: [
      'Crop health monitoring and disease detection',
      'Produce defect detection and grading automation',
      'Food processing quality control and inspection',
    ],
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    bullets: [
      'Package identification and barcode scanning automation',
      'Inventory tracking and warehouse monitoring',
      'Vehicle and cargo inspection systems',
    ],
  },
]

export default function ComputerVisionIndustries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-5">
            Custom Computer Vision for Industry-Specific Challenges
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] max-w-[960px] mx-auto">
            Every industry has different visual data requirements, operational constraints, and accuracy standards. We build for the specific context, not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl auto-rows-fr">
          {industries.map(({ icon: Icon, name, bullets }) => (
            <article
              key={name}
              className="group p-[25px] sm:p-7 xl:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 h-full select-none"
            >
              <div className="w-[35px] h-[35px] mb-6 sm:mb-8 flex items-center justify-start shrink-0">
                <Icon
                  className="w-[35px] h-[35px] text-[#00CE44] group-hover:text-black transition-colors duration-300"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-[20px] sm:text-[23px] font-bold text-white group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {name}
              </h3>

              <ul className="space-y-2">
                {bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-2 shrink-0 transition-colors duration-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
