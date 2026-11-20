import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function FintechTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: 'Frontend',
      items: [
        { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
        { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
        { name: 'Swift', img: '/assets/fitness/tech/Swift.png' },
        { name: 'Kotlin', img: '/assets/fitness/tech/Kotlin.webp' },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
        { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
        { name: 'Java', img: '/assets/healthcare/tech/java.jpg' },
        { name: '.NET', img: '/assets/healthcare/tech/dot-net.jpg' },
      ],
    },
    {
      name: 'Databases',
      items: [
        { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
        { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
        { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
        { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { name: 'AWS', img: '/assets/healthcare/tech/aws.jpg' },
        { name: 'Google Cloud', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
        { name: 'Microsoft Azure', img: '/assets/healthcare/tech/microsoft-azure.jpg' },
        { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
        { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
      ],
    },
    {
      name: 'Design Tools',
      items: [
        { name: 'Figma', img: '/assets/fintech/tech/figma.webp' },
        { name: 'Adobe XD', img: '/assets/fintech/tech/xd.webp' },
        { name: 'Sketch', img: '/assets/fintech/tech/sketch.jpg' },
      ],
    },
    {
      name: 'App Testing',
      items: [
        { name: 'Appium', img: '/assets/fintech/tech/appium.jpg' },
        { name: 'Selenium', img: '/assets/fintech/tech/selenium.jpg' },
        { name: 'TestFlight', img: '/assets/fintech/tech/testFlight.jpg' },
        { name: 'Postman', img: '/assets/fintech/tech/Postman.jpg' },
      ],
    },
    {
      name: 'Payment Gateways',
      items: [
        { name: 'Stripe', img: '/assets/healthcare/tech/stripe.jpg' },
        { name: 'PayPal', img: '/assets/fitness/tech/paypal.png' },
        { name: 'Razorpay', img: '/assets/fintech/tech/razorpay.jpg' },
        { name: 'Braintree', img: '/assets/fintech/tech/braintree.jpg' },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <span className="text-[#00CE44]">Fintech App Development Services</span>{' '}
            Selected for Security and Production-Grade Performance
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            The frameworks, databases, and infrastructure behind fintech applications that process real money and real user data.
          </p>
        </div>

        {/* Two Solid Green Panels Layout with Tight Left Sidebar Stacking */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === idx
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'bg-transparent text-black font-medium hover:bg-black/10 border-b border-black/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-white shrink-0" />}
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 min-h-[340px] border-0 shadow-none">
            {categories[activeCategory].items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="max-h-14 sm:max-h-16 max-w-[82%] object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-black font-normal text-xs sm:text-sm leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
