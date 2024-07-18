'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://tirios.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Tirios Corporation
          </a>{' '}
          | Sep 2023 - Present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a Lead React Native Engineer, I excelled in architecting and
          developing robust cross-platform mobile applications for both iOS and
          Android. With a deep understanding of React Native and its ecosystem,
          I led the design and implementation of complex features, ensuring
          optimal performance and an exceptional user experience. My role
          involved close collaboration with cross-functional teams and active
          participation in technical decisions, contributing to the development
          of high-quality and innovative mobile solutions.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Webpoint Solutions, LLC | Mar 2021 - Dec 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a Senior Software Engineer specializing in full stack development,
          adept at leading teams and delivering robust solutions. Proven track
          record of leading teams, collaborating with cross-functional
          stakeholders, and effectively communicating project requirements.
          Experienced in Agile methodologies, enabling adaptability and timely
          project completion. Proficient in ReactJS, NextJS, React Native,
          GatsbyJS, TypeScript, Python, Django, NodeJS, and PostgreSQL.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Yotcha Services Pvt. Ltd. | May 2020 - Apr 2021
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          During my tenure as an Associate Full-Stack Engineer, I gained
          valuable experience in both frontend and backend development,
          utilizing a range of technologies. As an Associate Full-Stack
          Engineer, I contributed to the successful delivery of projects,
          collaborating with teammates and embracing a growth mindset.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
