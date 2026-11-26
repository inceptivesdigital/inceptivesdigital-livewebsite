import { Link } from 'react-router-dom'
import StandardTechStack from '../../../../components/StandardTechStack'

const categories = [
  {
    name: 'Frontend and Mobile',
    items: [
      { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
      { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
      { name: 'Swift', img: '/assets/fitness/tech/Swift.png' },
      { name: 'Kotlin', img: '/assets/fitness/tech/Kotlin.webp' },
      { name: 'HTML5', img: '/assets/fitness/tech/html.webp' },
      { name: 'CSS3', img: '/assets/fitness/tech/css3.png' },
      { name: 'JavaScript', img: '/assets/fitness/tech/javascript.png' },
    ],
  },
  {
    name: 'Backend and Database',
    items: [
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'Java', img: '/assets/healthcare/tech/java.jpg' },
      { name: 'Spring Boot', img: '/assets/react-native/spring-boot.jpg' },
      { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
      { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
      { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
    ],
  },
  {
    name: 'Cloud and DevOps',
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
    name: 'APIs and Integrations',
    items: [
      { name: 'Amadeus', img: '/assets/travel/tech/amadeus.svg' },
      { name: 'Skyscanner', img: '/assets/travel/tech/skyscanner.svg' },
      { name: 'Expedia', img: '/assets/travel/tech/expedia.svg' },
      { name: 'Stripe', img: '/assets/healthcare/tech/stripe.jpg' },
      { name: 'PayPal', img: '/assets/fitness/tech/paypal.png' },
      { name: 'Twilio', img: '/assets/healthcare/tech/twilio.jpg' },
      { name: 'Mapbox', img: '/assets/fitness/tech/mapbox.png' },
      { name: 'Google Maps', img: '/assets/fitness/tech/google-map.png' },
    ],
  },
  {
    name: 'AI, Analytics, and Advanced Tools',
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

export default function TravelTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Engineering Stack Behind Our{' '}
          <span className="text-[#00CE44]">Travel App Development Services</span>
        </>
      }
      subtitle={
        <>
          Travel platforms process real-time flight data, handle high-volume bookings, and serve users across time zones simultaneously. Every{' '}
          <Link
            to="/blog/mobile-app-tech-stack"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
          >
            tech stack
          </Link>{' '}
          below is selected for those specific demands.
        </>
      }
      categories={categories}
    />
  )
}
