import StandardTechStack from '../../../../components/StandardTechStack'

const categories = [
  {
    name: 'Mobile App Development',
    items: [
      { name: 'Swift', img: '/assets/fitness/tech/Swift.png' },
      { name: 'SwiftUI', img: '/assets/mobile-app/tech/swift.svg' },
      { name: 'Kotlin', img: '/assets/fitness/tech/Kotlin.webp' },
      { name: 'Jetpack Compose', img: '/assets/mobile-app/tech/kotlin.svg' },
      { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
      { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
    ],
  },
  {
    name: 'Frontend Development',
    items: [
      { name: 'React.js', img: '/assets/mobile-app/react.png' },
      { name: 'Next.js', img: '/assets/web-app/next-js.jpg' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg' },
      { name: 'JavaScript', img: '/assets/fitness/tech/javascript.png' },
      { name: 'Angular', img: '/assets/real-estate/tech/angular.svg' },
    ],
  },
  {
    name: 'Backend Development',
    items: [
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'Express.js', img: '/assets/react-native/express.jpg' },
      { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'Laravel', img: '/assets/real-estate/tech/laravel.jpg' },
      { name: '.NET', img: '/assets/healthcare/tech/dot-net.jpg' },
    ],
  },
  {
    name: 'Databases & Data Management',
    items: [
      { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
      { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
      { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
      { name: 'Redis', img: '/assets/education/tech/redis.jpg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', img: '/assets/healthcare/tech/aws.jpg' },
      { name: 'Microsoft Azure', img: '/assets/healthcare/tech/microsoft-azure.jpg' },
      { name: 'Google Cloud', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
    ],
  },
  {
    name: 'AI, ML & Geospatial Engineering',
    items: [
      { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'Scikit-learn', img: '/assets/education/tech/scikit-learn.jpg' },
      { name: 'OpenAI APIs', img: '/assets/fitness/tech/openai.png' },
      { name: 'Google Maps API', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Mapbox', img: '/assets/mobile-app/computer-vision-1.jpg' },
    ],
  },
]

export default function RealEstateTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          Technologies We Use to Engineer{' '}
          <span className="text-[#00CE44]">Real Estate Applications</span>
        </>
      }
      subtitle="As a real estate app development company, Inceptives Digital stays current with modern engineering frameworks and evolving platform standards. Our developers combine deep technical expertise with proven technologies to deliver custom PropTech applications built for production demands."
      categories={categories}
    />
  )
}
