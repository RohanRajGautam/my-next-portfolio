'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { allProjectsInfo } from '../utils/projects';
import AnimationContainer from '../utils/AnimationContainer';

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch = allProjectsInfo.filter((project) =>
    project.category.toLowerCase().includes(projectSearch.toLowerCase())
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

      <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        {resultSearch.length > 0 ? (
            resultSearch
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))
          ) : (
            <p className="text-gray-400 text-center py-8">
              No projects found matching your search criteria.
            </p>
          )}
      </article>
    </>
  );
};

export default SearchAllProjects;
