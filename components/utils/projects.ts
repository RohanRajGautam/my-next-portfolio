export type CaseStudy = {
  slug: string;
  title: string;
  flagship?: boolean;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tirios-invest',
    title: 'Tirios Invest',
    flagship: true,
    problem:
      'Take a consumer fintech product - buying, selling, and managing real-estate holdings - from zero to the App Store and Play Store.',
    role: 'Architected the React Native codebase from scratch and own the full mobile lifecycle: architecture, performance, CI/CD, and store submissions, plus serverless NestJS backends on AWS.',
    outcome:
      'Used by thousands of investors · 40+ store releases · 97%+ crash-free sessions · ~30% fewer transaction failures.',
    stack: [
      'React Native',
      'TypeScript',
      'NestJS',
      'AWS Lambda',
      'API Gateway',
      'S3'
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/tirios-real-estate-investing/id6467650309'
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.tirios.invest'
      },
      { label: 'tirios.ai', href: 'https://www.tirios.ai/' }
    ]
  },
  {
    slug: 'ellen4all',
    title: 'Ellen4All',
    problem:
      'Run multilingual content editing and translation for a global audience on a single platform.',
    role: 'Delivered the translation platform at Webpoint Solutions across frontend and backend.',
    outcome: 'Serving users in 100+ languages.',
    stack: ['Next.js', 'Django', 'Celery', 'Redis', 'Elasticsearch'],
    links: [{ label: 'Visit site', href: 'https://tegw.egwwritings.org/' }]
  },
  {
    slug: 'luminate',
    title: 'Luminate',
    problem:
      'An immersive-audio mobile app where the experience hinges on polished UI and seamless audio transitions.',
    role: 'Shipped UI features, audio transitions, and NestJS backend integrations for the React Native app.',
    outcome: '4.8-star rating on the app stores.',
    stack: ['React Native', 'TypeScript', 'NestJS', 'MongoDB'],
    links: [{ label: 'luminateapp.io', href: 'https://www.luminateapp.io/' }]
  },
  {
    slug: 'ontourism-academy',
    title: 'OnTourism Academy',
    problem:
      'Give an academic community one real-time place for messaging, notifications, and events.',
    role: 'Built the platform end to end at Yotcha Services, delivered as an installable PWA.',
    outcome:
      'Real-time academic social platform with messaging, notifications, and events.',
    stack: ['React', 'TypeScript', 'MongoDB', 'Firebase', 'PWA'],
    links: [{ label: 'ontourism.academy', href: 'https://ontourism.academy/' }]
  }
];
