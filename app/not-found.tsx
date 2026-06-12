import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found'
};

const NotFound = () => {
  return (
    <div className="mx-auto w-full max-w-content px-6 py-24">
      <p className="font-mono text-sm text-accent">HTTP 404</p>

      <h1 className="mt-2 font-display text-xl font-semibold text-text md:text-2xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-[60ch] text-base text-muted">
        This route doesn&apos;t exist - the link is broken or the page has
        moved.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-sm bg-text px-5 text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-85"
        >
          Back home
        </Link>

        <Link
          href="/projects"
          className="inline-flex h-11 items-center rounded-sm border border-border px-5 text-base text-text transition-colors duration-fast hover:border-muted"
        >
          See projects
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
