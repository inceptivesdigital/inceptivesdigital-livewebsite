import StandardTechStack from '../../../../components/StandardTechStack'

const techCategories = [
  {
    name: 'Mobile & Frontend',
    items: [
      { name: 'iOS (Swift)', img: '/assets/mobile-app/tech/swift.svg' },
      { name: 'Android (Kotlin)', img: '/assets/mobile-app/tech/kotlin.svg' },
      { name: 'React Native', img: '/assets/mobile-app/react-native.jpg' },
      { name: 'Flutter', img: '/assets/mobile-app/tech/flutter.svg' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg' },
      { name: 'Python (FastAPI)', img: '/assets/mobile-app/python.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    items: [
      { name: 'Amazon Web Services', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Google Cloud Platform', img: '/assets/mobile-app/goole-cloud-platform.jpg' },
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
    ],
  },
  {
    name: 'Data & Intelligence',
    items: [
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
    ],
  },
]

export default function PartnershipTechStack() {
  return (
    <StandardTechStack
      eyebrow="Technology Foundation"
      heading={
        <>
          The Stacks Behind Every <span className="text-[#00CE44]">Partner Engagement</span>
        </>
      }
      subtitle="Modern, maintainable stacks that your clients can scale and hire for without proprietary lock-in."
      categories={techCategories}
    />
  )
}
