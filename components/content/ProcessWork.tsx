import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: 'Discovery & Planning',
    des: 'I start by understanding the problem we\'re solving—talking with stakeholders, gathering requirements, and identifying technical constraints. This phase is about asking the right questions, defining success metrics, and creating a roadmap that balances business goals with technical feasibility.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'Architecture & Design',
    des: 'Before writing any code, I design the system architecture—choosing the right tech stack, defining data models, planning API contracts, and thinking through scalability. I create technical specs and collaborate with the team to make sure everyone\'s aligned on the approach.',
    delay: 0.4
  },
  {
    id: '3',
    title: 'Development & Iteration',
    des: 'This is where the building happens. I write clean, maintainable code following best practices, set up CI/CD pipelines, and work in sprints with regular check-ins. I believe in shipping early and iterating based on feedback rather than waiting for perfection.',
    delay: 0.5
  },
  {
    id: '4',
    title: 'Code Review & Collaboration',
    des: 'Engineering is a team sport. I actively participate in code reviews—both giving and receiving feedback. I mentor junior developers, pair program when needed, and make sure our codebase stays healthy and our team keeps learning.',
    delay: 0.6
  },
  {
    id: '5',
    title: 'Testing & Quality Assurance',
    des: 'I take quality seriously. This means writing unit and integration tests, doing manual QA for edge cases, performance testing, and making sure everything works smoothly across different devices and environments. The goal is to catch issues before users do.',
    delay: 0.7
  },
  {
    id: '6',
    title: 'Deployment & Monitoring',
    des: 'Launch day is exciting, but it\'s just the beginning. I handle deployments, set up monitoring and analytics, track performance metrics, and stay ready to respond if issues come up. Post-launch, I gather user feedback and data to inform the next iteration.',
    delay: 0.8
  },
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName='w-full mb-4'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start'>
        How I work
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto'>
        {
          myWorkProcess.map(({ id, title, des, delay }) => (
            <AnimationContainer
              key={id}
              customClassName='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'
              customDelay={delay}
            >

              <h3 className='font-bold text-1xl tracking-tight text-white text-start'>
                {title}
              </h3>

              <p className='mt-2 text-base text-gray-400'>
                {des}
              </p>

            </AnimationContainer>
          ))
        }
      </div>

    </AnimationContainer>
  )
}

export default ProcessWork;