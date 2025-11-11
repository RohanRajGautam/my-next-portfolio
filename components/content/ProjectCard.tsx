import Image from 'next/image';
import { useState } from 'react';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';

interface ProjectCardProps {
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  image?: string;
}

const ProjectCard = ({
  title,
  des,
  category,
  repo,
  link,
  image
}: ProjectCardProps) => {

  return (
    <AnimationContainer customClassName="rounded-lg border border-gray-800 hover:border-gray-500 bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out">
      <div className="w-full flex flex-col gap-4">
        <ExternalLink href={link}>
          <div className="relative w-full aspect-video rounded-t-lg overflow-hidden bg-gray-800">
            {!image && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center p-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-400">
                    {title}
                  </h3>
                </div>
              </div>
            )}
            {image && (
              <Image
                src={image}
                alt={title}
                priority
                fill
                className='object-cover object-top transition-opacity duration-300'
              />
            )}
          </div>
        </ExternalLink>

        <div className="flex flex-col gap-1 px-4 pb-2">
          <h3 className="font-semibold text-xl text-white">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-3">{des}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {category.split('-').map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {repo && (
              <ExternalLink
                href={repo}
                customClassName="text-sm text-gray-400 hover:text-white transition-colors"
              >
                View Code
              </ExternalLink>
            )}
            <ExternalLink
              href={link}
              customClassName="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Live Demo
            </ExternalLink>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ProjectCard;
