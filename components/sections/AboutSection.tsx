import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            Hello! I'm a seasoned Software Engineer residing in Kathmandu,
            Nepal, with over 4 years of experience in Mobile and Web
            Development. My expertise spans a wide array of technologies
            including JavaScript, TypeScript, React Native, React.js, Next.js,
            Node.js, PostgreSQL, MongoDB, Firebase, REST API, and GraphQL.
          </p>

          <p className="text-base text-gray-400">
            During my tenure as a senior full-stack developer at Webpoint for
            over 3 years, I played a pivotal role in driving innovative
            solutions and fostering cross-functional collaboration. In my
            current role as a Senior React Native Developer at Tirios, I've led
            the development of iOS and Android apps from scratch, showcasing my
            ability to deliver exceptional results independently.
          </p>

          <p className="text-base text-gray-400">
            I am passionately seeking remote opportunities that allow me to
            leverage my skills and expertise to contribute to impactful
            projects.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about 4 years ago. I have tried a
            few programming languages and technology stack, both Backend and
            Frontend.
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
            I have a diverse range of interests that fuel my passion for
            personal and professional growth. From delving into the latest
            technologies to embarking on exciting outdoor adventures like hiking
            and trekking, I thrive on exploration and discovery. Beyond coding,
            I find joy in sharing my knowledge through writing blogs, a hobby
            I'm eager to reignite. Music and movies are my go-to sources of
            inspiration and relaxation, offering a welcome escape from the
            digital world. Additionally, I'm committed to giving back to society
            through volunteering in social services, leveraging my skills to
            make a meaningful impact on the community. As a software engineer,
            my overarching goal is to continually expand my expertise, innovate
            with cutting-edge technologies, and contribute to building solutions
            that positively impact people's lives globally.
          </p>

          <p className="text-base text-gray-400">
            For now I'm learning how to make robust mobile applications, I'm
            also starting to learn the way to be Devops using Docker,
            Kubernetes, AWS or others.
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
