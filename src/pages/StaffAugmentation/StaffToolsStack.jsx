import StandardTechStack from '../../components/StandardTechStack'
import toolPlatform1 from './assets/tool-platform-1.webp'
import toolPlatform2 from './assets/tool-platform-2.webp'
import toolPlatform3 from './assets/tool-platform-3.webp'
import toolPlatform4 from './assets/tool-platform-4.webp'
import toolSalesforce from './assets/tool-salesforce.webp'
import toolAzure from './assets/tech-azure.webp'
import toolPlatform7 from './assets/tool-platform-7.webp'
import toolGcp from './assets/tool-gcp.webp'
import toolPlatform9 from './assets/tool-platform-9.webp'
import toolAws from './assets/tool-aws.webp'
import toolPlatform11 from './assets/tool-platform-11.webp'
import toolRails from './assets/tool-rails.webp'
import toolKotlin from './assets/tool-kotlin.webp'
import toolPlatform14 from './assets/tool-platform-14.webp'

import techJava from './assets/tech-java.webp'
import techSwift from './assets/tech-swift.webp'
import techGolang from './assets/tech-golang.webp'
import techCpp from './assets/tech-cpp.webp'
import techDotnet from './assets/tech-dotnet.webp'
import techNode from './assets/tech-node.webp'
import techFirebase from './assets/tech-firebase.webp'

const CATEGORIES = [
  {
    name: 'Platforms',
    items: [
      { name: 'Android', img: toolPlatform1 },
      { name: 'iOS', img: toolPlatform2 },
      { name: 'React Native', img: toolPlatform3 },
      { name: 'Flutter', img: toolPlatform4 },
      { name: 'Salesforce', img: toolSalesforce },
      { name: 'Microsoft Azure', img: toolAzure },
      { name: 'Docker', img: toolPlatform7 },
      { name: 'Google Cloud', img: toolGcp },
      { name: 'Kubernetes', img: toolPlatform9 },
      { name: 'AWS', img: toolAws },
      { name: 'Node.js', img: toolPlatform11 },
      { name: 'Ruby on Rails', img: toolRails },
      { name: 'Kotlin', img: toolKotlin },
      { name: 'GitHub', img: toolPlatform14 },
    ],
  },
  {
    name: 'Programming Language',
    items: [
      { name: 'JavaScript', img: '/assets/mobile-app/javascript.png' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg' },
      { name: 'Python', img: '/assets/mobile-app/python.jpg' },
      { name: 'Java', img: techJava },
      { name: 'Swift', img: techSwift },
      { name: 'Kotlin', img: toolKotlin },
      { name: 'Golang', img: techGolang },
      { name: 'C++', img: techCpp },
      { name: '.NET', img: techDotnet },
      { name: 'Node.js', img: techNode },
    ],
  },
  {
    name: 'Database & Reporting',
    items: [
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg' },
      { name: 'MongoDB', img: '/assets/mobile-app/mongoDB.jpg' },
      { name: 'MySQL', img: '/assets/mobile-app/mySql.jpg' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg' },
      { name: 'Firebase', img: techFirebase },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg' },
      { name: 'AWS', img: toolAws },
      { name: 'Google Cloud', img: toolGcp },
      { name: 'Microsoft Azure', img: toolAzure },
    ],
  },
]

export default function StaffToolsStack() {
  return (
    <StandardTechStack
      heading={
        <>
          Modern Tools <span className="text-[#00CE44]">We Use!</span>
        </>
      }
      categories={CATEGORIES}
    />
  )
}
