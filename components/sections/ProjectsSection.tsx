import CaseStudyCard from '../content/CaseStudyCard';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import SectionHeading from '../utils/SectionHeading';
import { caseStudies, moreProjects } from '../utils/projects';

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

      <AnimationContainer customClassName="mt-20 w-full">
        <SectionHeading label="archive" title="More projects" />

        <ul className="mt-8">
          {moreProjects.map(({ slug, title, stack, link }) => (
            <li
              key={slug}
              className="flex flex-col gap-2 border-t border-border py-5 last:border-b sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="mt-1 font-mono text-sm text-muted">
                  {stack.join(' · ')}
                </p>
              </div>

              <ExternalLink
                href={link}
                customClassName="shrink-0 self-start py-1 font-mono text-sm text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent sm:self-center"
              >
                Visit site <span aria-hidden="true">↗</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </AnimationContainer>
    </SectionContainer>
  );
};

export default ProjectsSection;
