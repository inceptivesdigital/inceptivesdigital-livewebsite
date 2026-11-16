import React, { useState } from 'react';

const TECH_CATEGORIES = [
  {
    id: 'backend',
    label: 'Backend Development',
    items: [
      { name: 'Node.js', icon: '/assets/mobile-app/node.jpg' },
      { name: 'Next.js', icon: '/assets/backend-api/next-js.jpg' },
      { name: 'Express.js', icon: '/assets/react-native/express.jpg' },
      { name: 'Python', icon: '/assets/mobile-app/python.jpg' },
      { name: 'Django', icon: '/assets/react-native/django-1.jpg' },
      { name: 'FastAPI', icon: '/assets/react-native/fastapi.jpg' },
      { name: '.NET', icon: '/assets/react-native/dot-net.jpg' },
      { name: 'Java', icon: '/assets/react-native/java.jpg' },
      { name: 'Spring Boot', icon: '/assets/react-native/spring-boot.jpg' },
    ],
  },
  {
    id: 'apis',
    label: 'APIs & Integration',
    items: [
      { name: 'REST APIs', icon: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', icon: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', icon: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MySQL', icon: '/assets/mobile-app/mySql.jpg' },
      { name: 'MongoDB', icon: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'Firebase Firestore', icon: '/assets/mobile-app/firebase.jpg' },
      { name: 'Redis', icon: '/assets/mobile-app/redis.jpg' },
      { name: 'AWS S3', icon: '/assets/mobile-app/aws.jpg' },
      { name: 'Cloud Storage', icon: '/assets/mobile-app/goole-cloud-platform.jpg' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud', icon: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', icon: '/assets/react-native/microsoft-azure.jpg' },
      { name: 'Docker', icon: '/assets/mobile-app/docker.jpg' },
      { name: 'Kubernetes', icon: '/assets/react-native/kubernetes.jpg' },
      { name: 'GitHub Actions', icon: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Terraform', icon: '/assets/react-native/terraform.jpg' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Intelligent Features',
    items: [
      { name: 'OpenAI APIs', icon: '/assets/mobile-app/openai.png' },
      { name: 'TensorFlow', icon: '/assets/mobile-app/tensorFlow.jpg' },
      { name: 'PyTorch', icon: '/assets/mobile-app/pytorch.png' },
      { name: 'Scikit-Learn', icon: '/assets/react-native/scikit-learn.jpg' },
      { name: 'Hugging Face', icon: '/assets/react-native/hugging-face.jpg' },
      { name: 'LangChain', icon: '/assets/mobile-app/langchain.jpg' },
      { name: 'NLP Models', icon: '/assets/react-native/nlp-model.jpg' },
      { name: 'Computer Vision', icon: '/assets/mobile-app/computer-vision-1.jpg' },
    ],
  },
  {
    id: 'security',
    label: 'Security & Authentication',
    items: [
      { name: 'OAuth 2.0', icon: '/assets/mobile-app/oauth.jpg' },
      { name: 'JWT', icon: '/assets/mobile-app/jwt.jpg' },
      { name: 'SSL/TLS', icon: '/assets/mobile-app/ssl-tls.jpg' },
      { name: 'Role-Based Access', icon: '/assets/backend-api/role-based-access.jpg' },
      { name: 'OWASP Practices', icon: '/assets/backend-api/owasp-practices.jpg' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics & Monitoring',
    items: [
      { name: 'Google Analytics', icon: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'Firebase Analytics', icon: '/assets/mobile-app/firebase.jpg' },
      { name: 'Mixpanel', icon: '/assets/backend-api/mixpanel.jpg' },
      { name: 'New Relic', icon: '/assets/backend-api/new-relic.jpg' },
      { name: 'Sentry', icon: '/assets/backend-api/sentry.jpg' },
      { name: 'Amplitude', icon: '/assets/backend-api/amplitude.jpg' },
    ],
  },
];

export default function BackendTechStack() {
  const [activeTab, setActiveTab] = useState(TECH_CATEGORIES[0].id);
  const currentCategory = TECH_CATEGORIES.find((cat) => cat.id === activeTab) || TECH_CATEGORIES[0];

  return (
    <section className="bg-white py-20 lg:py-[100px] border-t border-[#EAEAEA]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10">
        <div className="max-w-[820px] mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] leading-[1.2] tracking-[-0.02em] mb-5">
            Production-Proven Technologies for Modern Software
          </h2>
          <p className="text-[16px] text-[#555555] leading-[1.65]">
            The{' '}
            <a
              href="https://inceptivesdigital.com/blog/mobile-app-tech-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#111111] underline decoration-[#00E522] decoration-2 underline-offset-4 hover:text-[#00B81B] transition-colors"
            >
              mobile app tech stack
            </a>{' '}
            behind every backend we build has been validated across 70+ production systems. Each tool earns its place through real engineering experience, which is what production-grade actually means.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-4 mb-10 border-b border-[#EAEAEA]">
          {TECH_CATEGORIES.map((category) => {
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`whitespace-nowrap px-5 py-3 text-[14px] font-semibold transition-all duration-200 rounded-none border ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-[#F8F8F8] text-[#444444] border-[#E5E5E5] hover:bg-[#EFEFEF] hover:text-[#111111]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Active Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-center p-6 bg-[#FAFAFA] border border-[#EAEAEA] hover:border-[#00E522] hover:bg-white transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center overflow-hidden bg-white border border-[#F0F0F0] p-2">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[15px] font-semibold text-[#111111] leading-snug">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
