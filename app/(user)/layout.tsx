import '../../styles/globals.css';
import type { Metadata } from 'next';
import clsx from 'clsx';
import local from 'next/font/local';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import GoogleAnalytics from '@/components/utils/GoogleAnalytics';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
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

const description =
  'Lead Software Engineer - Web & Mobile, 6+ years of experience. I take mobile and web products from first commit to production - React Native, Next.js, Nest.js, Python, Django, AWS';

export const metadata: Metadata = {
  metadataBase: new URL('https://rohanrajgautam.com.np'),
  title: {
    default:
      'Rohan Raj Gautam - Lead Software Engineer (React Native · Next.js)',
    template: '%s · Rohan Raj Gautam'
  },
  description,
  keywords: [
    'Rohan Raj Gautam',
    'Lead Software Engineer',
    'React Native developer',
    'Next.js',
    'TypeScript',
    'AWS',
    'fintech',
    'remote',
    'Kathmandu'
  ],
  authors: [{ name: 'Rohan Raj Gautam', url: 'https://rohanrajgautam.com.np' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Rohan Raj Gautam',
    title: 'Rohan Raj Gautam - Lead Software Engineer (React Native · Next.js)',
    description,
    url: 'https://rohanrajgautam.com.np',
    images: [{ url: '/twitter-img.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rohanrajgautam',
    title: 'Rohan Raj Gautam - Lead Software Engineer (React Native · Next.js)',
    description,
    images: ['/twitter-img.png']
  }
};

// Resolve the theme before first paint so neither theme flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){}})()`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(graphik.variable, display.variable, mono.variable)}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-4 focus:py-3 focus:text-sm"
        >
          Skip to content
        </a>

        <Header />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
