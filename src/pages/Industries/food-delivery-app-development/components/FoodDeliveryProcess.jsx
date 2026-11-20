import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Planning',
    desc: 'Business model, target audience, and competitive landscape are analysed before development begins. Critical features, user journeys, backend architecture, and multi-vendor requirements are defined through structured discovery before a line of code is written.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: 'UI/UX Design',
    desc: 'Intuitive, responsive interfaces designed for customer ordering flows, driver navigation, and restaurant management panels. Every design decision is made to reduce friction between intent and completed action.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: 'Development and Integration',
    desc: 'Cross-platform food delivery applications built on scalable cloud infrastructure with real-time tracking, secure payment gateways, push notifications, and third-party API integrations built in during development.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & QA',
    cardTitle: 'Testing and QA',
    desc: 'Functionality, security, load performance, and usability were tested across every user panel before deployment. Fast load times, minimal bugs, and optimised responsiveness are confirmed for customers, drivers, and restaurant partners.',
  },
  {
    num: '05.',
    tabTitle: 'Deployment',
    cardTitle: 'Deployment and Support',
    desc: 'iOS and Android store deployment is managed end-to-end. Performance monitored, architecture scaled, and continuous updates delivered after launch to keep the platform reliable and competitive.',
  },
]

export default function FoodDeliveryProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Inceptives Digital’s Agile{' '}
          <span className="text-[#00CE44]">Food Delivery App Development Process</span>
        </>
      }
      subtitle="A food delivery platform built without a disciplined process ships fast and breaks faster. Every stage below exists because we have seen what happens when it is skipped."
      steps={steps}
    />
  )
}
