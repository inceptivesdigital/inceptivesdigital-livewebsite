import StandardTechStack from '../../../../components/StandardTechStack'

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
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'Flask', img: '/assets/dating/tech/flask.svg' },
      { name: 'Ruby on Rails', img: '/assets/education/tech/ruby.jpg' },
    ],
  },
  {
    name: 'Database',
    items: [
      { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
      { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
    ],
  },
  {
    name: 'Design',
    items: [
      { name: 'Figma', img: '/assets/fintech/tech/figma.webp' },
      { name: 'Adobe XD', img: '/assets/fintech/tech/xd.webp' },
      { name: 'Sketch', img: '/assets/fintech/tech/sketch.jpg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', img: '/assets/healthcare/tech/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
    ],
  },
  {
    name: 'App Testing',
    items: [
      { name: 'Jest', img: '/assets/dating/tech/jest.svg' },
      { name: 'Appium', img: '/assets/fintech/tech/appium.jpg' },
      { name: 'Selenium', img: '/assets/fintech/tech/selenium.jpg' },
      { name: 'Firebase Test Lab', img: '/assets/healthcare/tech/firebase.jpg' },
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

export default function DatingTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          Dating App Development Services Powered By{' '}
          <span className="text-[#00CE44]">Cutting-Edge Technologies</span>
        </>
      }
      subtitle="Every technology is selected for real-time performance, data security, and the specific integration requirements of dating platforms."
      categories={categories}
    />
  )
}
