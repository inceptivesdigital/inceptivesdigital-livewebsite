import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Research',
    desc: 'Target audience, competitive landscape, and technical requirements are analysed before development begins. Output: a detailed product roadmap, prioritised feature set, and technology stack recommendation aligned with your budget and timeline.',
  },
  {
    num: '02.',
    tabTitle: 'UI/UX Design',
    cardTitle: 'UI/UX Design and Prototyping',
    desc: 'Wireframes, interactive prototypes, and pixel-perfect screens are designed and validated through user testing before any code is written. Design decisions confirmed before they become expensive development changes.',
  },
  {
    num: '03.',
    tabTitle: 'Development',
    cardTitle: 'Development and Integration',
    desc: 'Application built in two-week agile sprints using modern frameworks. Regular builds, progress reports, and priority adjustment opportunities are delivered throughout. Market feedback incorporated without derailing the delivery timeline.',
  },
  {
    num: '04.',
    tabTitle: 'Testing & QA',
    cardTitle: 'Testing and Quality Assurance',
    desc: 'Functional testing, performance benchmarking, and security scanning are completed on every feature before release. Automated test suites are maintained to catch regressions before they reach production.',
  },
  {
    num: '05.',
    tabTitle: 'Launch & Support',
    cardTitle: 'Deployment and Ongoing Support',
    desc: 'App Store and Google Play submissions managed end to end. CI/CD pipelines configured and post-launch monitoring established from day one. Engineering team on standby for critical updates and performance issues after launch.',
  },
]

export default function StartupProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Our Agile{' '}
          <span className="text-[#00CE44]">Startup App Development Process</span> to Launch in Weeks
        </>
      }
      subtitle="Sprint-based delivery that respects your timeline, your budget, and the reality that startup requirements evolve faster than waterfall processes can accommodate."
      steps={steps}
    />
  )
}
