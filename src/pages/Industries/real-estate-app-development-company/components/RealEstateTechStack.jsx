import StandardTechStack from '../../../../components/StandardTechStack'

const categories = [
  {
    name: 'Design',
    items: [
      { name: 'Figma', img: '/assets/fintech/tech/figma.webp' },
      { name: 'Marvel', img: '/assets/real-estate/tech/marvel.svg' },
      { name: 'Adobe XD', img: '/assets/fintech/tech/xd.webp' },
      { name: 'Photoshop', img: '/assets/real-estate/tech/photoshop.svg' },
      { name: 'Sketch', img: '/assets/fintech/tech/sketch.jpg' },
      { name: 'InVision', img: '/assets/real-estate/tech/invision.svg' },
      { name: 'Zeplin', img: '/assets/real-estate/tech/zeplin.svg' },
      { name: 'Lottie', img: '/assets/real-estate/tech/lottie.svg' },
    ],
  },
  {
    name: 'Programming Languages',
    items: [
      { name: 'JavaScript', img: '/assets/fitness/tech/javascript.png' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg' },
      { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Swift', img: '/assets/fitness/tech/Swift.png' },
      { name: 'Kotlin', img: '/assets/fitness/tech/Kotlin.webp' },
      { name: 'Java', img: '/assets/healthcare/tech/java.jpg' },
      { name: 'PHP', img: '/assets/healthcare/tech/php.jpg' },
      { name: 'Dart', img: '/assets/flutter-app/dart.jpg' },
    ],
  },
  {
    name: 'Frameworks',
    items: [
      { name: 'React.js', img: '/assets/mobile-app/react.png' },
      { name: 'Next.js', img: '/assets/web-app/next-js.jpg' },
      { name: 'Angular', img: '/assets/real-estate/tech/angular.svg' },
      { name: 'Vue.js', img: '/assets/real-estate/tech/vue.svg' },
      { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
      { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'Laravel', img: '/assets/real-estate/tech/laravel.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'Express.js', img: '/assets/react-native/express.jpg' },
      { name: 'Django', img: '/assets/react-native/django-1.jpg' },
      { name: 'Laravel', img: '/assets/real-estate/tech/laravel.jpg' },
      { name: '.NET', img: '/assets/healthcare/tech/dot-net.jpg' },
      { name: 'Ruby on Rails', img: '/assets/education/tech/ruby.jpg' },
    ],
  },
  {
    name: 'Database',
    items: [
      { name: 'MySQL', img: '/assets/healthcare/tech/mySql.jpg' },
      { name: 'PostgreSQL', img: '/assets/healthcare/tech/postgreSQL.jpg' },
      { name: 'MongoDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'Firebase', img: '/assets/healthcare/tech/firebase.jpg' },
      { name: 'Redis', img: '/assets/education/tech/redis.jpg' },
      { name: 'SQLite', img: '/assets/real-estate/tech/sqlite.svg' },
    ],
  },
  {
    name: 'Cloud',
    items: [
      { name: 'AWS', img: '/assets/healthcare/tech/aws.jpg' },
      { name: 'Google Cloud', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Microsoft Azure', img: '/assets/healthcare/tech/microsoft-azure.jpg' },
      { name: 'DigitalOcean', img: '/assets/real-estate/tech/digitalocean.svg' },
    ],
  },
  {
    name: 'AI/ML Tools',
    items: [
      { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
      { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'OpenAI', img: '/assets/fitness/tech/openai.png' },
      { name: 'Scikit-learn', img: '/assets/education/tech/scikit-learn.jpg' },
      { name: 'Google Vision', img: '/assets/mobile-app/computer-vision-1.jpg' },
      { name: 'AWS AI Tools', img: '/assets/healthcare/tech/aws.jpg' },
    ],
  },
]

export default function RealEstateTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Tech Backbone of Our{' '}
          <span className="text-[#00CE44]">Real Estate App Development Services</span>
        </>
      }
      subtitle="Property platforms that handle thousands of daily listings, live map searches, and simultaneous agent workflows need a specific kind of engineering stack. This is ours."
      categories={categories}
    />
  )
}
