'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
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
    company: 'Tirios Corporation',
    url: 'https://www.tirios.ai/',
    role: 'Lead Software Engineer',
    period: 'Sep 2023 – Present',
    location: 'Austin, TX (Remote)',
    current: true,
    highlights: [
      <>
        Launched the Tirios Invest app on iOS and Android, used by thousands of
        investors to buy, sell, and manage real-estate holdings, by architecting
        the React Native codebase from scratch
      </>,
      <>
        Achieved <M>97%+</M> crash-free sessions and <M>40+</M> App Store / Play
        Store releases by owning the full mobile lifecycle: architecture,
        performance, CI/CD, and store submissions
      </>,
      <>
        Scaled the platform from hundreds to thousands of users by shipping
        Next.js product features and conversion-optimized pages with product
        and growth teams
      </>
    ]
  },
  {
    company: 'Webpoint Solutions, LLC',
    url: 'https://webpoint.io/',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – Dec 2023',
    location: 'Kathmandu, Nepal',
    highlights: [
      <>
        Delivered Ellen4All, a multilingual translation platform serving users
        in <M>100+</M> languages, building an asynchronous content pipeline
        with Django, Celery, Redis, and Elasticsearch behind a Next.js frontend
      </>,
      <>
        Shipped UI features, audio transitions, and NestJS backend integrations
        for Luminate, an immersive-audio React Native app on iOS
        and Android
      </>,
      <>
        Led small cross-functional teams across multiple products and stacks,
        owning delivery from requirements through production release
      </>,
      <>
        Mentored junior and mid-level engineers through structured code reviews
        and weekly knowledge-sharing sessions
      </>
    ]
  },
  {
    company: 'Webpoint Solutions, LLC',
    url: 'https://webpoint.io/',
    role: 'Software Engineer',
    period: 'Mar 2021 – Jun 2022',
    location: 'Kathmandu, Nepal',
    highlights: [
      <>
        Developed and maintained client web applications with React, Next.js,
        TypeScript, and Tailwind CSS; built Django and Node.js REST APIs backed
        by PostgreSQL and MongoDB
      </>,
      <>
        Contributed to sprint planning, estimates, and retrospectives in Agile
        teams
      </>
    ]
  },
  {
    company: 'Yotcha Services Pvt. Ltd.',
    role: 'Associate Full-Stack Engineer',
    period: 'May 2020 – Apr 2021',
    location: 'Kathmandu, Nepal',
    highlights: [
      <>
        Developed full-stack web applications in React, TypeScript, Django, and
        PostgreSQL, building REST APIs and delivering client features from
        design through deployment
      </>
    ]
  }
];

const Experience = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.75', 'end 0.45']
  });

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeading label="changelog" title="Experience" />

      <div ref={railRef} className="relative mt-8">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-1.5 w-px bg-border"
        />

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-0 top-1.5 w-px origin-top bg-gradient-to-b from-accent to-accent/20"
          />
        )}

        {entries.map((entry, index) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className={
              index === entries.length - 1
                ? 'relative pl-6'
                : 'relative pb-12 pl-6'
            }
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg ${
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
