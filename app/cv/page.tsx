import type { Metadata } from 'next';
import SectionContainer from '@/components/utils/SectionContainer';
import SectionHeading from '@/components/utils/SectionHeading';
import AnimationContainer from '@/components/utils/AnimationContainer';

export const metadata: Metadata = {
  title: 'CV',
  alternates: { canonical: '/cv' }
};

const CV = () => (
  <SectionContainer>
    <AnimationContainer customClassName="w-full">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading as="h1" label="resume.pdf" title="CV" />

        <a
          download="rohan_cv.pdf"
          href="/rohan_cv.pdf"
          className="inline-flex h-11 items-center rounded-sm bg-text px-5 text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-85"
        >
          Download
        </a>
      </div>

      <iframe
        src="/rohan_cv.pdf"
        title="Rohan Raj Gautam - CV"
        className="mt-8 h-[80vh] w-full rounded-md border border-border"
      />
    </AnimationContainer>
  </SectionContainer>
);

export default CV;
