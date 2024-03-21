import AnimationContainer from '../utils/AnimationContainer';
import { YEARS_OF_EXPERIENCE } from '../utils/const';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        Hi there! I'm a Senior Software Engineer residing in Kathmandu, Nepal,
        with over {YEARS_OF_EXPERIENCE} years of experience in Mobile and Web
        Development. I thrive on clean architecture, pixel-perfect designs, and
        agile methodologies. Let's build something amazing together!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
