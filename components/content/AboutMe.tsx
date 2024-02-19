import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I'm a Software Engineer based in Kathmandu, Nepal, with over 4 years of
        experience in Mobile and Web Development. I prefer to keep learning,
        continue challenging myself, and do interesting things that matter. I am
        a strong believer that learning never ends.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
