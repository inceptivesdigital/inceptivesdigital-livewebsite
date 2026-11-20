import StandardTechStack from '../../../../components/StandardTechStack'

const TECH_CATEGORIES = [
  {
    name: 'Backend Development',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg' },
      { name: 'Next.js', img: '/assets/backend-api/next-js.jpg' },
      { name: 'Express.js', img: '/assets/react-native/express.jpg' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'FastAPI', img: '/assets/react-native/fastapi.jpg' },
      { name: '.NET', img: '/assets/react-native/dot-net.jpg' },
      { name: 'Java', img: '/assets/react-native/java.jpg' },
      { name: 'Spring Boot', img: '/assets/react-native/spring-boot.jpg' },
    ],
  },
  {
    name: 'APIs & Integration',
    items: [
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
      { name: 'Terraform', img: '/assets/react-native/terraform.jpg' },
    ],
  },
  {
    name: 'AI & Intelligent Features',
    items: [
      { name: 'OpenAI APIs', img: '/assets/mobile-app/openai.png' },
      { name: 'TensorFlow', img: '/assets/mobile-app/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/mobile-app/pytorch.png' },
      { name: 'Scikit-Learn', img: '/assets/react-native/scikit-learn.jpg' },
      { name: 'Hugging Face', img: '/assets/react-native/hugging-face.jpg' },
      { name: 'LangChain', img: '/assets/mobile-app/langchain.jpg' },
      { name: 'NLP Models', img: '/assets/react-native/nlp-model.jpg' },
      { name: 'Computer Vision', img: '/assets/mobile-app/computer-vision-1.jpg' },
    ],
  },
  {
    name: 'Security & Authentication',
    items: [
      { name: 'OAuth 2.0', img: '/assets/mobile-app/oauth.jpg' },
      { name: 'JWT', img: '/assets/mobile-app/jwt.jpg' },
      { name: 'SSL/TLS', img: '/assets/mobile-app/ssl-tls.jpg' },
      { name: 'Role-Based Access', img: '/assets/backend-api/role-based-access.jpg' },
      { name: 'OWASP Practices', img: '/assets/backend-api/owasp-practices.jpg' },
    ],
  },
  {
    name: 'Analytics & Monitoring',
    items: [
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'Firebase Analytics', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Mixpanel', img: '/assets/backend-api/mixpanel.jpg' },
      { name: 'New Relic', img: '/assets/backend-api/new-relic.jpg' },
      { name: 'Sentry', img: '/assets/backend-api/sentry.jpg' },
      { name: 'Amplitude', img: '/assets/backend-api/amplitude.jpg' },
    ],
  },
]

export default function BackendTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          Production-Proven Technologies for{' '}
          <span className="text-[#00CE44]">Modern Software</span>
        </>
      }
      subtitle="The mobile app tech stack behind every backend we build has been validated across 70+ production systems. Each tool earns its place through real engineering experience, which is what production-grade actually means."
      categories={TECH_CATEGORIES}
    />
  )
}
