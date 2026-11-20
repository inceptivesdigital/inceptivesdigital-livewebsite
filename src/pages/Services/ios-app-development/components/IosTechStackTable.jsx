import StandardTechStack from '../../../../components/StandardTechStack'

const iosCategories = [
  {
    name: 'Native iOS Development',
    items: [
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg' },
      { name: 'SwiftUI', img: '/assets/mobile-app/tech/swiftui.svg' },
      { name: 'UIKit', img: '/assets/mobile-app/tech/uikit.svg' },
      { name: 'iOS SDK', img: '/assets/healthcare/tech/ios.jpg' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
    ],
  },
  {
    name: 'Apple Frameworks & AI',
    items: [
      { name: 'Apple HealthKit', img: '/assets/healthcare/tech/apple-healthKit.jpg' },
      { name: 'OpenAI APIs', img: '/assets/mobile-app/openai.png' },
      { name: 'TensorFlow', img: '/assets/mobile-app/tensorFlow.jpg' },
      { name: 'Computer Vision', img: '/assets/mobile-app/computer-vision-1.jpg' },
    ],
  },
  {
    name: 'Security & Authentication',
    items: [
      { name: 'OAuth 2.0', img: '/assets/mobile-app/oauth.jpg' },
      { name: 'JWT', img: '/assets/mobile-app/jwt.jpg' },
      { name: 'Biometric Auth', img: '/assets/mobile-app/tech/biometric-auth.svg' },
      { name: 'SSL/TLS', img: '/assets/mobile-app/ssl-tls.jpg' },
    ],
  },
  {
    name: 'Cloud, CI/CD & Testing',
    items: [
      { name: 'AWS', img: '/assets/mobile-app/aws.jpg' },
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg' },
    ],
  },
]

export default function IosTechStackTable() {
  return (
    <StandardTechStack
      heading={
        <>
          Technologies Behind Our{' '}
          <span className="text-[#00CE44]">Native iOS App Development Services</span>
        </>
      }
      subtitle="Our iOS developers use Apple’s latest SDKs and native frameworks to develop custom iPhone and iPad applications. Every mobile app tech stack we choose varies according to the product’s functionality and integration requirements."
      categories={iosCategories}
    />
  )
}
