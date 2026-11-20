import StandardTechStack from '../../../../components/StandardTechStack'

const techStackCategories = [
  {
    name: 'Product Analytics',
    items: [
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'Firebase Analytics', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Session & Behavioral',
    items: [
      { name: 'Figma', img: '/assets/react-native/figma.webp' },
      { name: 'Miro', img: '/assets/react-native/miro.jpg' },
      { name: 'Framer', img: '/assets/react-native/framer.jpg' },
      { name: 'Sketch', img: '/assets/react-native/sketch.jpg' },
    ],
  },
  {
    name: 'Testing & Experimentation',
    items: [
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
      { name: 'AWS Cloud', img: '/assets/mobile-app/aws.jpg' },
    ],
  },
  {
    name: 'Performance & Monitoring',
    items: [
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
    ],
  },
]

export default function PostLaunchTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Tools and Data Systems Inceptives Digital{' '}
          <span className="text-[#00CE44]">Uses to Drive Iteration Decisions</span>
        </>
      }
      subtitle="The team works from product analytics platforms, session recording tools, experiment management systems, and real-time monitoring infrastructure to ensure every iteration decision connects to observed behavior rather than assumption."
      categories={techStackCategories}
    />
  )
}
