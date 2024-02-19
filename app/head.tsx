'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Rohan Raj Gautam ${
      pathname === '/' ? '' : '· ' + titleFixedToShow
    }`,
    description: `Hey there! I'm Rohan Raj Gautam from Kathmandu, Nepal, with over 4 years of experience in JavaScript/TypeScript and React development. I'm passionate about crafting seamless user experiences, whether it's in web or mobile development using Next.js and React Native. I thrive on clean architecture, pixel-perfect designs, and agile methodologies. Let's build something amazing together!`,
    keywords:
      'Rohan Raj Gautam, Rohan Gautam, RRG, Rohan Raj Gautam portfolio, Rohan Gautam portfolio, Rohan Raj Gautam github, Rohan Gautam github, Rohan Raj Gautam LinkedIn, Web, Javascript, Typescript, React, React Native.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://rohanrajgautam.com.np${pathname}`}
      />
      <link rel="canonical" href={`https://rohanrajgautam.com.np${pathname}`} />
      <link rel="me" href="mailto:rohanrajgautam@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Rohan Raj Gautam" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rohanrajgautam" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
