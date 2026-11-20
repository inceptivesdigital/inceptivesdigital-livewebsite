import StandardTechStack from '../../../../components/StandardTechStack'

const categories = [
  {
    name: 'Mobile Platforms',
    items: [
      { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
      { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
      { name: 'Swift (iOS)', img: '/assets/fitness/tech/Swift.png' },
      { name: 'Kotlin (Android)', img: '/assets/fitness/tech/Kotlin.webp' },
      { name: 'Expo', img: '/assets/healthcare/tech/react-native.jpg' },
    ],
  },
  {
    name: 'Backend Frameworks',
    items: [
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'Python (Django / FastAPI)', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'Ruby on Rails', img: '/assets/education/tech/ruby.jpg' },
      { name: 'Java Spring Boot', img: '/assets/react-native/spring-boot.jpg' },
    ],
  },
  {
    name: 'Cloud & Hosting',
    items: [
      { name: 'AWS (EC2, Lambda, ECS, S3)', img: '/assets/healthcare/tech/aws.jpg' },
      { name: 'Google Cloud Platform', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', img: '/assets/healthcare/tech/microsoft-azure.jpg' },
      { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
    ],
  },
  {
    name: 'Database Systems',
    items: [
      { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
      { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
      { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'Redis', img: '/assets/education/tech/redis.jpg' },
      { name: 'Firebase Realtime DB', img: '/assets/healthcare/tech/firebase.jpg' },
    ],
  },
  {
    name: 'DevOps & CI/CD',
    items: [
      { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
      { name: 'GitHub Actions', img: '/assets/healthcare/tech/gitHub-actions.jpg' },
      { name: 'Jenkins', img: '/assets/healthcare/tech/jenkins.jpg' },
      { name: 'Terraform', img: '/assets/react-native/terraform.jpg' },
    ],
  },
  {
    name: 'Security & Compliance',
    items: [
      { name: 'OAuth 2.0 / Auth0', img: '/assets/mobile-app/oauth.jpg' },
      { name: 'JWT / IAM', img: '/assets/mobile-app/jwt.jpg' },
      { name: 'SSL/TLS', img: '/assets/mobile-app/ssl-tls.jpg' },
      { name: 'Biometric / 2FA', img: '/assets/mobile-app/tech/biometric-auth.svg' },
      { name: 'OWASP Security', img: '/assets/backend-api/owasp-practices.jpg' },
    ],
  },
  {
    name: 'AI & Analytics',
    items: [
      { name: 'OpenAI API', img: '/assets/fitness/tech/openai.png' },
      { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'Mixpanel', img: '/assets/backend-api/mixpanel.jpg' },
      { name: 'Amplitude', img: '/assets/backend-api/amplitude.jpg' },
      { name: 'Google Analytics 4', img: '/assets/education/tech/google-analytics.jpg' },
    ],
  },
  {
    name: 'APIs & Integrations',
    items: [
      { name: 'Stripe', img: '/assets/healthcare/tech/stripe.jpg' },
      { name: 'Braintree', img: '/assets/fintech/tech/braintree.jpg' },
      { name: 'Twilio', img: '/assets/healthcare/tech/twilio.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
      { name: 'CRM & ERP APIs', img: '/assets/ecommerce/tech/erp-crm.svg' },
    ],
  },
]

export default function StartupTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Technology Stack Behind Every{' '}
          <span className="text-[#00CE44]">Startup Application We Build</span>
        </>
      }
      subtitle="Startup applications fail at scale when the wrong tools are chosen early. Every technology below is selected for rapid iteration, reliable performance, and the ability to scale without re-platforming."
      categories={categories}
    />
  )
}
