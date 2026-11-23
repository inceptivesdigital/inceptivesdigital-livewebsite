import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function FitnessTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: 'Frontend & Mobile Technologies',
      items: [
        { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
        { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
        { name: 'Swift (iOS)', img: '/assets/fitness/tech/Swift.png' },
        { name: 'Kotlin (Android)', img: '/assets/fitness/tech/Kotlin.webp' },
        { name: 'HTML5', img: '/assets/fitness/tech/html.webp' },
        { name: 'CSS3', img: '/assets/fitness/tech/css3.png' },
        { name: 'JavaScript', img: '/assets/fitness/tech/javascript.png' },
      ],
    },
    {
      name: 'Backend & Database',
      items: [
        { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
        { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
        { name: 'Java', img: '/assets/healthcare/tech/java.jpg' },
        { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
        { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
        { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
        { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
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
        { name: 'Jenkins', img: '/assets/healthcare/tech/jenkins.jpg' },
      ],
    },
    {
      name: 'APIs & Integrations',
      items: [
        { name: 'Fitbit', img: '/assets/fitness/tech/fitbit.png' },
        { name: 'Apple Health', img: '/assets/healthcare/tech/apple-healthKit.jpg' },
        { name: 'Google Fit', img: '/assets/fitness/tech/google-fit.png' },
        { name: 'Strava', img: '/assets/fitness/tech/strava.png' },
        { name: 'Garmin Connect', img: '/assets/fitness/tech/garmin-connect.png' },
        { name: 'PayPal', img: '/assets/fitness/tech/paypal.png' },
        { name: 'Stripe', img: '/assets/healthcare/tech/stripe.jpg' },
        { name: 'Twilio', img: '/assets/healthcare/tech/twilio.jpg' },
        { name: 'Mapbox', img: '/assets/fitness/tech/mapbox.png' },
        { name: 'Google Maps', img: '/assets/fitness/tech/google-map.png' },
      ],
    },
    {
      name: 'AI, Analytics & Advanced Tools',
      items: [
        { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
        { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
        { name: 'OpenAI APIs', img: '/assets/fitness/tech/openai.png' },
        { name: 'Firebase Analytics', img: '/assets/healthcare/tech/firebase.jpg' },
        { name: 'Google ML Kit', img: '/assets/fitness/tech/google_ml.png' },
        { name: 'Power BI', img: '/assets/healthcare/tech/powerbi.jpg' },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <span className="text-[#00CE44]">Fitness App Development Services</span>{' '}
            Backed By Cutting-Edge Tech Stack
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every technology is selected for performance, scalability, and the specific integration requirements of fitness applications.
          </p>
        </div>

        {/* Two Solid Green Panels Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel */}
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

          {/* Right Green Panel */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
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
