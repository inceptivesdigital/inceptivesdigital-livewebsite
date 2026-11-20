import StandardTechStack from '../../../../components/StandardTechStack'

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
      { name: 'Python / Django', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Java / Spring Boot', img: '/assets/healthcare/tech/java.jpg' },
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
      { name: 'PayPal', img: '/assets/fitness/tech/paypal.png' },
      { name: 'Stripe', img: '/assets/healthcare/tech/stripe.jpg' },
      { name: 'Razorpay', img: '/assets/fintech/tech/razorpay.jpg' },
      { name: 'FedEx / UPS / Shiprocket', img: '/assets/ecommerce/tech/shipping-apis.svg' },
      { name: 'SAP / Salesforce / Zoho', img: '/assets/ecommerce/tech/erp-crm.svg' },
      { name: 'Twilio', img: '/assets/healthcare/tech/twilio.jpg' },
      { name: 'OneSignal / Mailchimp', img: '/assets/ecommerce/tech/marketing-apis.svg' },
    ],
  },
  {
    name: 'AI, Analytics & Advanced Tools',
    items: [
      { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'OpenAI APIs', img: '/assets/fitness/tech/openai.png' },
      { name: 'Firebase Analytics', img: '/assets/healthcare/tech/firebase.jpg' },
      { name: 'Google Analytics', img: '/assets/education/tech/google-analytics.jpg' },
      { name: 'Power BI', img: '/assets/healthcare/tech/powerbi.jpg' },
      { name: 'Tableau', img: '/assets/education/tech/Tableau.jpg' },
    ],
  },
]

export default function EcommerceTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          <span className="text-[#00CE44]">Core Technologies</span> Powering Our Ecommerce App Development Services
        </>
      }
      subtitle="Being one of the best ecommerce app development companies, we use cutting-edge technologies combined with extensive ecommerce expertise to deliver state-of-the-art e-commerce app development services."
      categories={categories}
    />
  )
}
