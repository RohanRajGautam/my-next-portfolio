import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import SectionHeading from '../utils/SectionHeading';

// Metrics set in the mono utility face so outcomes scan instantly.
const M = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap font-mono text-sm text-text">
    {children}
  </span>
);

type Entry = {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: React.ReactNode[];
};

const entries: Entry[] = [
  {
    company: 'Tirios',
    url: 'https://www.tirios.ai/',
    role: 'Lead Software Engineer',
    period: 'Sep 2023 – Present',
    location: 'Austin, TX (Remote)',
    current: true,
    highlights: [
      <>
        Launched the Tirios Invest app on iOS and Android, used by thousands of
        investors to buy, sell, and manage real-estate holdings, by
        architecting the React Native codebase from scratch
      </>,
      <>
        Achieved <M>97%+</M> crash-free sessions and <M>40+</M> App Store /
        Play Store releases by owning the full mobile lifecycle: architecture,
        performance, CI/CD, and store submissions
      </>,
      <>
        Reduced transaction failures by <M>~30%</M> with serverless NestJS
        backends on AWS (Lambda, API Gateway, S3) integrating payments,
        authentication, and analytics
      </>,
      <>
        Scaled the platform from hundreds to thousands of users by shipping
        Next.js product features and conversion-optimized Webflow pages with
        product and growth
      </>
    ]
  },
  {
    company: 'Webpoint Solutions',
    url: 'https://webpoint.io/',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – Dec 2023',
    location: 'Kathmandu',
    highlights: [
      <>
        Delivered Ellen4All, a multilingual translation platform serving users
        in <M>100+</M> languages (Next.js, Django, Celery, Redis,
        Elasticsearch)
      </>,
      <>
        Shipped UI features, audio transitions, and NestJS integrations for
        Luminate, a <M>4.8-star</M> immersive-audio React Native app
      </>,
      <>
        Built a multilingual digital reading platform with React, Firebase,
        and custom i18n
      </>,
      <>
        Mentored <M>10+</M> junior and mid-level engineers via structured code
        reviews and weekly knowledge-sharing
      </>
    ]
  },
  {
    company: 'Webpoint Solutions',
    url: 'https://webpoint.io/',
    role: 'Software Engineer',
    period: 'Mar 2021 – Jun 2022',
    location: 'Kathmandu',
    highlights: [
      <>
        Shipped production features across React, Next.js, TypeScript,
        Tailwind CSS with Django/Node.js REST APIs on PostgreSQL and MongoDB
      </>
    ]
  },
  {
    company: 'Yotcha Services Pvt. Ltd.',
    role: 'Associate Full-Stack Engineer',
    period: 'May 2020 – Apr 2021',
    location: 'Kathmandu',
    highlights: [
      <>
        Built OnTourism Academy, a real-time academic social platform
        (messaging, notifications, events, PWA) with React, TypeScript,
        MongoDB, Firebase
      </>,
      <>
        Developed React frontends and Django REST APIs with PostgreSQL across
        the full delivery cycle
      </>
    ]
  }
];

const Experience = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeading label="changelog" title="Experience" />

      <div className="mt-8">
        {entries.map((entry, index) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className={
              index === entries.length - 1
                ? 'relative pl-6'
                : 'relative border-l border-border pb-12 pl-6'
            }
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                entry.current ? 'bg-accent' : 'bg-border'
              }`}
            />

            <p className="font-mono text-sm text-muted">
              {entry.period} <span aria-hidden="true">·</span> {entry.location}
            </p>

            <h3 className="mt-1 text-md font-semibold text-text">
              {entry.role}{' '}
              <span aria-hidden="true" className="text-muted">
                ·
              </span>{' '}
              {entry.url ? (
                <ExternalLink
                  href={entry.url}
                  customClassName="inline underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
                >
                  {entry.company}
                </ExternalLink>
              ) : (
                entry.company
              )}
            </h3>

            <ul className="mt-3 flex flex-col gap-2">
              {entry.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-base text-muted">
                  <span
                    aria-hidden="true"
                    className="select-none font-mono text-sm leading-[1.6rem] text-accent"
                  >
                    +
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default Experience;
