import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentLearning from '../content/CurrentLearning';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { YEARS_OF_EXPERIENCE } from '../utils/const';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      {/* <CurrentLearning /> */}

      <div className="w-full flex flex-col items-start">
        <AboutMe />

        <CurrentTimeLineExp />

        {/* <FavProjects /> */}

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            In my journey spanning over {YEARS_OF_EXPERIENCE} years in
            programming, I've delved into various programming languages,
            libraries, and tools, exploring both Backend and Frontend technology
            stacks.
          </p>

          <p className="text-base text-gray-400">
            Throughout my career, I've honed my skills and expertise in frontend
            technologies, immersing myself in frameworks, libraries, and tools
            to create captivating user experiences and intuitive interfaces.
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

        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
