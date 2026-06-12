import AnimationContainer from '../utils/AnimationContainer';
import SectionHeading from '../utils/SectionHeading';
import ShowSkills from '../utils/ShowSkills';
import { skills, exploring } from '../utils/mySkills';

const Skills = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeading label="stack" title="Skills" />

      <div className="mt-8 flex flex-col gap-6">
        {skills.map(({ title, techs }) => (
          <div
            key={title}
            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
          >
            <h3 className="w-32 shrink-0 pt-1.5 font-mono text-sm text-muted">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2">
              <ShowSkills skills={techs} />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 font-mono text-sm text-muted">
        Exploring: {exploring.join(', ')}
      </p>
    </AnimationContainer>
  );
};

export default Skills;
