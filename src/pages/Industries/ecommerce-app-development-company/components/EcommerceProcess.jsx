import LocationProcessLayout from '../../../../components/LocationProcessLayout'

const steps = [
  {
    num: '01.',
    tabTitle: 'Discovery',
    cardTitle: 'Discovery and Requirement Analysis',
    desc: 'Business model, revenue structure, user roles, integration requirements, compliance needs, and feature scope are defined before development begins. Every architectural decision is documented before a line of code is written.',
  },
  {
    num: '02.',
    tabTitle: 'Architecture',
    cardTitle: 'Architecture and Technology Planning',
    desc: 'Core feature set, tech stack, database schemas, and API integration plan are defined in a blueprint that ensures the platform is expandable, secure, and capable of handling large transaction volumes from day one.',
  },
  {
    num: '03.',
    tabTitle: 'UI/UX Design',
    cardTitle: 'UI/UX and Prototyping',
    desc: 'Wireframes and interactive prototypes built for navigation workflows, checkout processes, and product discovery flows in Figma and Adobe XD. Design validated before development begins to eliminate costly redesigns mid-build.',
  },
  {
    num: '04.',
    tabTitle: 'Development',
    cardTitle: 'Development and Integration',
    desc: 'Frontend and backend were built in agile sprints. Payment gateways, inventory systems, CRM and ERP integrations, vendor modules, and analytics tools built with clean, modular code throughout.',
  },
  {
    num: '05.',
    tabTitle: 'Launch & Scale',
    cardTitle: 'Testing, Deployment and Optimisation',
    desc: 'Performance, security, and cross-device compatibility are tested before deployment. Post-launch performance is monitored, issues are resolved, and regular updates are delivered to keep the platform competitive and reliable.',
  },
]

export default function EcommerceProcess() {
  return (
    <LocationProcessLayout
      heading={
        <>
          Our Ecommerce App Development Company’s{' '}
          <span className="text-[#00CE44]">Proven Process</span>
        </>
      }
      subtitle="Getting an ecommerce platform to launch is straightforward. Getting it to handle peak sale traffic, vendor disputes, and payment failures without breaking requires a different kind of process."
      steps={steps}
    />
  )
}
