import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const techStackCategories = [
  {
    name: 'Development',
    items: [
      { name: 'Flutter', img: '/assets/flutter-app/flutter.jpg' },
      { name: 'Dart', img: '/assets/flutter-app/dart.jpg' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg' },
      { name: 'NestJS', img: '/assets/mobile-app/nest.jpg' },
      { name: 'Express.js', img: '/assets/react-native/express.jpg' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'FastAPI', img: '/assets/react-native/fastapi.jpg' },
      { name: '.NET', img: '/assets/react-native/dot-net.jpg' },
      { name: 'Java', img: '/assets/react-native/java.jpg' },
      { name: 'Spring Boot', img: '/assets/react-native/spring-boot.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MySQL', img: '/assets/mobile-app/mySql.jpg' },
      { name: 'MongoDB', img: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'Firebase Firestore', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'AWS S3', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Cloud Storage', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', img: '/assets/react-native/microsoft-azure.jpg' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/react-native/kubernetes.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Jenkins', img: '/assets/react-native/jenkins.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
      { name: 'Terraform', img: '/assets/react-native/terraform.jpg' },
    ],
  },
  {
    name: 'AI & Intelligent Features',
    items: [
      { name: 'OpenAI APIs', img: '/assets/mobile-app/openai.png' },
      { name: 'TensorFlow', img: '/assets/mobile-app/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/mobile-app/pytorch.png' },
      { name: 'Scikit-learn', img: '/assets/react-native/scikit-learn.jpg' },
      { name: 'Hugging Face', img: '/assets/react-native/hugging-face.jpg' },
      { name: 'LangChain', img: '/assets/mobile-app/langchain.jpg' },
      { name: 'NLP Models', img: '/assets/react-native/nlp-model.jpg' },
      { name: 'Computer Vision', img: '/assets/mobile-app/computer-vision-1.jpg' },
    ],
  },
  {
    name: 'Design & Prototyping',
    items: [
      { name: 'Figma', img: '/assets/react-native/figma.webp' },
      { name: 'Adobe XD', img: '/assets/react-native/xd.webp' },
      { name: 'Sketch', img: '/assets/react-native/sketch.jpg' },
      { name: 'Framer', img: '/assets/react-native/framer.jpg' },
      { name: 'Miro', img: '/assets/react-native/miro.jpg' },
    ],
  },
  {
    name: 'Analytics & Monitoring',
    items: [
      { name: 'Firebase Analytics', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
    ],
  },
  {
    name: 'Security & Compliance',
    items: [
      { name: 'OAuth 2.0', img: '/assets/mobile-app/oauth.jpg' },
      { name: 'JWT', img: '/assets/mobile-app/jwt.jpg' },
      { name: 'SSL/TLS', img: '/assets/mobile-app/ssl-tls.jpg' },
    ],
  },
]

const partners = [
  { name: 'AWS', src: '/assets/ios-app/awsas-icon.png' },
  { name: 'Google Cloud', src: '/assets/ios-app/googlecloud-img.png' },
  { name: 'OpenAI', src: '/assets/ios-app/aws_partnership_logo_7ad34e2ac8asd.png' },
  { name: 'Stripe', src: '/assets/ios-app/strip-png.png' },
  { name: 'Salesforce', src: '/assets/ios-app/salesforceimg.png' },
  { name: 'Firebase', src: '/assets/ios-app/firebasedlogo2.png' },
  { name: 'MongoDB', src: '/assets/ios-app/mangodb-icon.png' },
  { name: 'Cloudflare', src: '/assets/ios-app/cloudflarenew.png' },
  { name: 'GitHub', src: '/assets/ios-app/github.png' },
  { name: 'Atlassian', src: '/assets/ios-app/atlassian-lgos.png' },
  { name: 'Figma', src: '/assets/ios-app/figmalogose.png' },
  { name: 'Sentry / Datadog', src: '/assets/ios-app/sentry-logos.png' },
]

export default function FlutterTechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              <span className="text-[#00CE44]">Tech Stack We Use</span>{' '}
              to Build Innovative Flutter Apps
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              From custom interfaces to real-time application workflows, we select the latest technologies that support reliable performance across your target platforms.
            </p>
          </div>

          {/* Two Solid Green Panels */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
              {techStackCategories.map((cat, idx) => {
                const isActive = activeCategory === idx
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCategory(idx)}
                    className={`w-full text-left px-4 py-3 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
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

            <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
              {techStackCategories[activeCategory].items.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                  <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-16 h-14 sm:w-20 sm:h-16 object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-black text-xs sm:text-[14px] font-medium leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Technology Partnerships Powering Our Flutter App Development */}
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              <span className="text-[#00CE44]">Strategic Technology Partnerships</span>{' '}
              Powering Our Flutter App Development
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Inceptives Digital works with established technology providers to support custom Flutter development. These relationships expand our engineering capabilities and help businesses build applications around demanding technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="p-5 rounded-[15px] bg-[#161616] border border-white/5 hover:border-[#00CE44] flex flex-col items-center justify-center text-center h-28 sm:h-32 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="h-10 sm:h-12 flex items-center justify-center mb-2">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-8 sm:max-h-9 max-w-[120px] w-auto h-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-white text-xs sm:text-[13px] font-medium leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
