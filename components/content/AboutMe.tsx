import AnimationContainer from '../utils/AnimationContainer';
import SectionHeading from '../utils/SectionHeading';
import { YEARS_OF_EXPERIENCE } from '../utils/const';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeading label="readme" title="About" />

      <p className="mt-6 text-base text-muted">
        I&apos;m a Lead Software Engineer based in Kathmandu, working remotely
        with startups and growth-stage companies across the US, Europe, and
        Asia. For {YEARS_OF_EXPERIENCE}+ years I&apos;ve owned products end to
        end - architecture, build, release, and iteration - across web and
        mobile. At Tirios, I architected the Tirios Invest fintech app from
        scratch and now run its full mobile lifecycle: 40+ App Store and Play
        Store releases at 97%+ crash-free sessions, on serverless NestJS/AWS
        backends that cut transaction failures by ~30%. I care about clean
        architecture, measurable outcomes, and mentoring engineers into shipping
        better software.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
