'use client';

import { Timeline } from './Timeline';

const CurrentTimeLineExp = () => {
  const experienceData = [
    {
      title: 'Tirios',
      url: 'https://tirios.ai/',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div className="text-sm md:text-base text-gray-400">
              <span className="font-medium">Lead Software Engineer</span>
              <span className="mx-2">•</span>
              <span>Sep 2023 – Present</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Architected and built the <strong>Tirios Invest</strong> mobile
                app from scratch using React Native, enabling users to buy,
                sell, and manage real-estate investments across iOS and Android
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Owned the end-to-end mobile lifecycle, including architecture,
                performance optimization, CI/CD, and App Store and Play Store
                releases, achieving 95%+ crash-free sessions
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Built and integrated backend and cloud services using NestJS and
                AWS (Lambda, API Gateway, S3), along with payments,
                authentication, and analytics, reducing transaction failures by
                ~30%
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Contributed across the full stack with Next.js web development
                and Webflow marketing pages, partnering with product and growth
                teams to scale the platform from hundreds to thousands of users
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Webpoint',
      url: 'https://webpoint.io/',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div className="text-sm md:text-base text-gray-400">
              <span className="font-medium">Senior Full Stack Engineer</span>
              <span className="mx-2">•</span>
              <span>Mar 2021 – Dec 2023</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Built the <strong>Ellen4All Translation System</strong>, a
                scalable multilingual content editing and translation platform
                using React, Django, Celery, Redis, and Elasticsearch,
                supporting a global user base
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Contributed to the <strong>Luminate Mobile App</strong>, a React
                Native immersive audio platform, delivering UI features, smooth
                transitions, and backend integrations with NestJS
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Developed <strong>OnTourism Academy</strong>, a full-stack
                academic social platform using Next.js and TypeScript, featuring
                real-time notifications, messaging, events, PWA support, and
                data visualization backed by MongoDB
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Accelerated team productivity by actively mentoring junior and
                mid-level engineers through code reviews, knowledge-sharing
                sessions, and hands-on technical support
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'AZminds',
      url: 'https://azminds.com/',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div className="text-sm md:text-base text-gray-400">
              <span className="font-medium">Associate Full Stack Engineer</span>
              <span className="mx-2">•</span>
              <span>May 2020 – Apr 2021</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Developed React frontends and Django REST APIs for production
                systems
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>
                Developed multilingual book-reading platforms using React.js and
                Firebase with custom i18n
              </span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return <Timeline data={experienceData} />;
};

export default CurrentTimeLineExp;
