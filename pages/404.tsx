import Link from 'next/link';
import local from 'next/font/local';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const graphik = local({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap'
});

const PageNotFound = () => {
  return (
    <div
      className={`${graphik.variable} ${display.variable} ${mono.variable} flex min-h-screen flex-col bg-bg font-sans text-text`}
    >
      <Header />

      <main className="flex flex-1 items-center">
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
      </main>

      <Footer />
    </div>
  );
};

export default PageNotFound;
