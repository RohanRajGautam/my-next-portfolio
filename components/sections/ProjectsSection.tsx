import CaseStudyCard from '../content/CaseStudyCard';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import SectionHeading from '../utils/SectionHeading';
import { caseStudies } from '../utils/projects';

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <AnimationContainer customClassName="w-full">
        <SectionHeading as="h1" label="case studies" title="Projects" />

        <p className="mt-6 max-w-[60ch] text-base text-muted">
          Four products, each told the same way: the problem, my role, the
          stack, the outcome. Everything else lives on{' '}
          <ExternalLink
            href="https://github.com/rohanrajgautam"
            customClassName="inline text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
          >
            GitHub
          </ExternalLink>
          .
        </p>
      </AnimationContainer>

      <div className="mt-12 flex flex-col gap-6">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
