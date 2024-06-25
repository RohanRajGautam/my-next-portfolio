'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Recipe App API',
    des: 'This is a recipe RESTful API written with Django and Django REST framework based on Test-driven development built over Docker. This project is a sample app that can be used for other projects. Find more about this API in my GitHub repo.',
    category: 'python - docker/docker-compose - django/django-rest-framework',
    repo: 'https://github.com/RohanRajGautam/recipe-app-api',
    link: 'https://github.com/RohanRajGautam/recipe-app-api'
  },
  {
    id: '2',
    title: 'Quiz App',
    des: 'Quiz App made using React and TypeScript. I have used styled-components for styling. The questions are random with all categories in it. See the Live Demo to play the quiz.',
    category: 'react - typescript - styled-components',
    repo: 'https://github.com/RohanRajGautam/react-ts-quiz/',
    link: 'https://rohanrajgautam.github.io/react-ts-quiz/'
  },
  {
    id: '3',
    title: 'RRG Portfolio',
    des: 'This site is built with Next.js, React, and Node. Sign-up and Sign-in feature with authentication handled by Auth0. Users can add portfolios or write Blogs from their own accounts with can be updated and deleted by them only. See Live demo or source code for more information.',
    category: 'next.js - react.js - node - mongodb - autho',
    repo: 'https://github.com/RohanRajGautam/portfolio-rrg',
    link: 'https://rrg.com.np/'
  },
  {
    id: '4',
    title: 'RRG Real Estate',
    des: 'This project is built for a virtual company called RRG Real Estate Company who sells houses. It is built using Django Framework and Postgres for database. See live demo or project on github to know more.',
    category: 'django - postgres',
    repo: 'https://github.com/RohanRajGautam/django-rrgre',
    link: 'https://rrgre.herokuapp.com/'
  },
  {
    id: '5',
    title: 'Visit Nepal Landing Page',
    des: 'A simple landing page with a responsive design created using Tailwind CSS.',
    category: 'tailwindcss',
    repo: 'https://github.com/RohanRajGautam/tailwind-landing-page',
    link: 'https://rohanrajgautam.github.io/tailwind-landing-page/'
  },
  {
    id: '6',
    title: 'Infinite Splash',
    des: 'Infinite splash uses Unsplash Image API to display images. It is made with react, redux, and redux saga. Enjoy infinite unsplash images.',
    category: 'react - redux - redux-saga',
    repo: 'https://github.com/RohanRajGautam/infinite-splash',
    link: 'https://rohanrajgautam.github.io/infinite-splash/'
  },
  {
    id: '7',
    title: 'Devcamper API',
    des: 'Backend API for the DevCamper application to manage bootcamps, courses, reviews, users, and authentication. It is a coursework from Node.js API Masterclass With Express & MongoDB. Read more about this API in my github repo.',
    category: 'node.js - express - mongodb',
    repo: 'https://github.com/RohanRajGautam/devcamper-api',
    link: 'https://rrg-devcamper-api.herokuapp.com/'
  },
  {
    id: '8',
    title: 'Borderline Travel & Tours',
    des: 'This is a personal project for Borderline Travel and Tours built using Gatsby JS on the frontend and Contentful as a CMS.',
    category: 'gatsby.js - contentfulcms',
    repo: 'https://github.com/RohanRajGautam/borderline-site/',
    link: 'https://borderline.netlify.app/'
  },
  {
    id: '9',
    title: 'Omnifood',
    des: 'Online food delivery service website prototype. This project was made by referencing online tutorial in udemy "Build Responsive Real World Websites with HTML5 and CSS3" by Jonas Schmedtmann.',
    category: 'html5 - css3',
    repo: 'https://github.com/RohanRajGautam/omnifood',
    link: 'https://rohanrajgautam.github.io/omnifood/'
  },
  {
    id: '10',
    title: 'RGB Color Game',
    des: 'Simple RGB Color Game made with HTML, CSS, and Javascript.',
    category: 'html - css - javascript',
    repo: 'https://github.com/RohanRajGautam/color-game',
    link: 'https://rohanrajgautam.github.io/color-game/'
  },
  {
    id: '11',
    title: 'RESTful Blog Application',
    des: 'RESTful Blog App is an application that uses Express.js, Node.js, and MongoDB to allow its user to create, read, update, and delete (CRUD) various blog posts.',
    category: 'javascript - semantic.ui - mongodb - express - node.js - ejs',
    repo: 'https://github.com/RohanRajGautam/RESTful-Blog-App',
    link: 'https://rrg-blog-app.herokuapp.com/'
  },
  {
    id: '12',
    title: 'Slider Website    ',
    des: 'One page slider website prototype',
    category: 'html - css - javascript',
    repo: 'https://github.com/RohanRajGautam/slider-website',
    link: 'https://rohanrajgautam.github.io/slider-website/'
  },
  {
    id: '13',
    title: 'Tic Tac Toe Game',
    des: 'React Tic Tac Toe Game using Functional Components and Hooks.',
    category: 'react.js',
    repo: 'https://github.com/RohanRajGautam/react-tic.tac.toe',
    link: 'https://rohanrajgautam.github.io/react-tic.tac.toe/'
  },
  {
    id: '14',
    title: 'Github User Finder',
    des: 'React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management.',
    category: 'react.js - contextapi',
    repo: 'https://github.com/RohanRajGautam/github-finder',
    link: 'https://rrg-github-finder.netlify.app/'
  },
  {
    id: '15',
    title: 'Contact Keeper',
    des: 'This is a MERN Stack Contacts Manager App. On the Back-End it is built using: Node, Express, JWT, Express-Validator, MongoDB, and Mongoose. Front-End is created using React (Hooks and Context API). This is a Coursework from "React Front to Back 2019".',
    category: 'react.js - node.js - express - mongodb - mongoose',
    repo: 'https://github.com/RohanRajGautam/contact-keeper',
    link: 'https://rrg-contact-keeper.herokuapp.com/'
  },
  {
    id: '16',
    title: 'Amazon Clone',
    des: 'This Amazon Clone project was created using React JS in the front-end. It has a user sign-in and sign-up feature which is backed by firebase. Users can add items to cart and checkout.',
    category: 'react.js - contextapi - firebase',
    repo: 'https://github.com/RohanRajGautam/amazon-clone',
    link: 'https://clone-77ec1.web.app/'
  },
  {
    id: '17',
    title: 'YelpCamp',
    des: "YelpCamp is a full-stack app built using NodeJs, Express & MongoDB as a part of Colt Steele's Web Developer Bootcamp. For the front-end section, we have used HTML Bootstrap, CSS, and javaScript. Find more about the project in the GitHub repo below.",
    category: 'javascript - node.js - express - mongodb',
    repo: 'https://github.com/RohanRajGautam/YelpCamp',
    link: 'https://rrg-yelpcamp.herokuapp.com/'
  },
  {
    id: '18',
    title: 'RRG Clothing',
    des: 'Full Stack E-Commerce Website built with React at the front-end, Redux for state management, redux-saga for API call, styled-components for styling, Firebase for user login and authentication, node js for backend, and Stripe API for payment gateway. Finally, it is deployed with Heroku.',
    category: 'react - redux - reduxsaga - firebase - node.js',
    repo: 'https://github.com/RohanRajGautam/rrg-clothing',
    link: 'https://rrg-clothing.herokuapp.com/'
  },
  {
    id: '19',
    title: 'Lineage Journey - Timeline',
    des: 'Lineage Journey Timeline is graph based features for studying history of christianity.',
    category: 'react - gatsby - apollo - gsap - prismic - node.js',
    repo: '',
    link: 'https://lineagejourney.com/timeline/'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch
          .reverse()
          .map(({ id, title, des, category, repo, link }) => (
            <CardProject
              key={id}
              title={title}
              des={des}
              category={category}
              repo={repo}
              link={link}
            />
          ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
