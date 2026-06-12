'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../../public/rohan.jpg';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
  }
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={container}
      initial={reduceMotion ? false : 'hidden'}
      animate="show"
      className="flex w-full flex-col-reverse items-start justify-between gap-8 pb-20 pt-8 md:flex-row md:pt-16"
    >
      <div className="flex max-w-[60ch] flex-col items-start">
        <motion.h1
          variants={item}
          className="font-display text-2xl font-bold text-text md:text-3xl"
        >
          Rohan Raj Gautam
        </motion.h1>

        <motion.p variants={item} className="mt-3 text-md text-text">
          Lead Software Engineer{' '}
          <span aria-hidden="true" className="text-accent">
            ·
          </span>{' '}
          Web &amp; Mobile
        </motion.p>

        <motion.p variants={item} className="mt-4 text-base text-muted">
          I take mobile and web products from first commit to production - React
          Native, Next.js, Nest.js, Python, Django, AWS.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#work"
            className="inline-flex h-11 items-center rounded-sm bg-text px-5 text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-85"
          >
            View my work
          </Link>

          <a
            href="/rohan_cv.pdf"
            download="rohan_cv.pdf"
            className="inline-flex h-11 items-center rounded-sm border border-border px-5 text-base text-text transition-colors duration-fast hover:border-muted"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div variants={item} className="shrink-0">
        <Image
          alt="Portrait of Rohan Raj Gautam"
          height={112}
          width={112}
          src={heroImage}
          placeholder="blur"
          sizes="112px"
          priority
          className="rounded-md"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
