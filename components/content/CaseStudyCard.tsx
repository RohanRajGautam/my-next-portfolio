import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import ShowSkills from '../utils/ShowSkills';
import { CaseStudy } from '../utils/projects';

const Row = ({
  label,
  children,
  emphasis = false
}: {
  label: string;
  children: React.ReactNode;
  emphasis?: boolean;
}) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
    <dt className="w-20 shrink-0 pt-0.5 font-mono text-sm text-muted">
      {label}
    </dt>
    <dd className={emphasis ? 'text-base text-text' : 'text-base text-muted'}>
      {children}
    </dd>
  </div>
);

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <AnimationContainer customClassName="w-full">
      <article className="rounded-md border border-border bg-surface p-6 shadow-1 transition-shadow duration-base hover:shadow-2 sm:p-8">
        <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-md font-semibold text-text">
            {study.title}
          </h3>
          {study.flagship && (
            <span className="font-mono text-sm text-accent">flagship</span>
          )}
        </header>

        <dl className="mt-5 flex flex-col gap-4">
          <Row label="problem">{study.problem}</Row>
          <Row label="role">{study.role}</Row>
          <Row label="outcome" emphasis>
            {study.outcome}
          </Row>
          <Row label="stack">
            <span className="-my-0.5 flex flex-wrap gap-2">
              <ShowSkills skills={study.stack} />
            </span>
          </Row>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {study.links.map(({ label, href }) => (
            <li key={href}>
              <ExternalLink
                href={href}
                customClassName="font-mono text-sm text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
              >
                {label} <span aria-hidden="true">↗</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </article>
    </AnimationContainer>
  );
};

export default CaseStudyCard;
