import Link from 'next/link';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import SectionHeading from '../utils/SectionHeading';
import { YEARS_OF_EXPERIENCE } from '../utils/const';

const AboutSection = () => {
  return (
    <SectionContainer>
      <AnimationContainer customClassName="w-full">
        <SectionHeading as="h1" label="readme" title="About" />

        <div className="mt-6 flex flex-col gap-5 text-base text-muted">
          <p>
            I&apos;m a Lead Software Engineer based in Kathmandu, working
            remotely with startups and growth-stage companies across the US,
            Europe, and Asia. For {YEARS_OF_EXPERIENCE}+ years I&apos;ve owned
            products end to end - architecture, build, release, and iteration -
            across web and mobile.
          </p>

          <p>
            At Tirios, I architected the Tirios Invest fintech app from scratch
            and now run its full mobile lifecycle: 40+ App Store and Play Store
            releases at 97%+ crash-free sessions, on serverless NestJS/AWS
            backends that cut transaction failures by ~30%. Before that, at
            Webpoint Solutions, I delivered the Ellen4All translation platform
            (100+ languages), shipped features for the 4.8-star Luminate audio
            app, and mentored 10+ engineers through structured code reviews.
          </p>

          <p>
            I care about clean architecture, measurable outcomes, and mentoring
            engineers into shipping better software.
          </p>
        </div>
      </AnimationContainer>

      <AnimationContainer customClassName="mt-16 w-full">
        <SectionHeading label="beyond work" title="Off the clock" />

        <div className="mt-6 flex flex-col gap-5 text-base text-muted">
          <p>
            I&apos;m the President of the Rotaract Club of Metro City, leading
            community programs on education and youth empowerment. I also
            contribute to open source - lately{' '}
            <ExternalLink
              href="https://jawafdehi.org"
              customClassName="inline text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
            >
              jawafdehi.org
            </ExternalLink>
            , a platform for documenting and tracking corruption cases to hold
            public entities accountable.
          </p>

          <p>
            Away from a keyboard: hiking the trails around Kathmandu, writing,
            and planning the next trek.
          </p>
        </div>
      </AnimationContainer>

      <AnimationContainer customClassName="mt-16 w-full">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-sm bg-text px-5 text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-85"
          >
            See the work
          </Link>

          <a
            href="/rohan_cv.pdf"
            download="rohan_cv.pdf"
            className="inline-flex h-11 items-center rounded-sm border border-border px-5 text-base text-text transition-colors duration-fast hover:border-muted"
          >
            Download CV
          </a>
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};

export default AboutSection;
