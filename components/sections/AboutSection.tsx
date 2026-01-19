import ProcessWork from '../content/ProcessWork';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';

import { skills } from '../utils/mySkills';
import ShowSkills from '../utils/ShowSkills';
import { YEARS_OF_EXPERIENCE } from '../utils/const';
import SectionContainer from '../utils/SectionContainer';
import AnimationContainer from '../utils/AnimationContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            Hey there! I'm a software engineer based in Kathmandu, Nepal, with {YEARS_OF_EXPERIENCE}+ years
            of building things for the web and mobile. I work primarily with JavaScript and TypeScript,
            crafting applications using React Native, React.js, Next.js, and Node.js. On the backend,
            I've got experience with PostgreSQL, MongoDB, GraphQL, and REST APIs, plus I'm comfortable
            navigating the AWS ecosystem.
          </p>

          <p className="text-base text-gray-400">
            Currently, I'm a Lead Software Engineer at Tirios in Austin (working remotely), where I
            architected and built the Tirios Invest mobile app from the ground up. It's a real-estate
            investment platform that lets users buy, sell, and manage properties right from their phones.
            I handled everything—from architecture and performance optimization to CI/CD pipelines and
            app store releases. I also built out backend services with NestJS and AWS, and contributed
            to the web side with Next.js.
          </p>

          <p className="text-base text-gray-400">
            Before Tirios, I spent nearly 3 years at Webpoint Solutions as a Senior Full Stack Engineer.
            There, I worked on some pretty cool projects like the Ellen4All Translation System (a
            multilingual content platform using React and Django), the Luminate mobile app (an immersive
            audio experience), and OnTourism Academy (a full-stack academic social platform). I also got
            to mentor junior and mid-level engineers, which honestly taught me as much as I taught them.
          </p>

          <p className="text-base text-gray-400">
            Outside of work, I'm the President of the Rotaract Club of Metro City, where I lead community
            programs focused on education and youth empowerment. I also contribute to open source whenever
            I can—lately, I've been involved with jawafdehi.org, a platform for documenting and tracking
            corruption cases to hold public entities accountable. Pretty important work, if you ask me.
          </p>

          <p className="text-base text-gray-400">
            These days, I'm diving deep into AI tools and LLM integration, exploring how to build smarter,
            more capable applications. I'm also leveling up my DevOps skills with Docker, Kubernetes, and
            AWS. Always something new to learn, right?
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about {YEARS_OF_EXPERIENCE} years
            ago. I have tried a few programming languages and technology stack,
            both Backend and Frontend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on Frontend development.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Interests & Goals
          </h2>

          <p className="text-base text-gray-400">
            When I'm not coding, you'll find me hiking the trails around Kathmandu or planning my next
            trekking adventure. I also love writing—I used to blog more frequently and I'm hoping to get
            back into it. Music and movies are my go-to for unwinding, and volunteering through Rotaract
            keeps me grounded and connected to my community.
          </p>

          <p className="text-base text-gray-400">
            My big-picture goal? Keep building things that matter. I want to work on projects that make a
            real difference in people's lives, whether that's through innovative tech, social impact
            initiatives, or open source contributions. I'm always looking for remote opportunities where I
            can collaborate with talented teams and tackle meaningful challenges.
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;