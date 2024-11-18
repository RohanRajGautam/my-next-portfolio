import React from 'react';

const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-lg border border-gray-800 bg-[#080809] p-4">
      <div className="w-full flex flex-col gap-4">
        {/* Image skeleton */}
        <div className="relative w-full aspect-video rounded-lg bg-gray-800 animate-pulse" />

        <div className="flex flex-col gap-2">
          {/* Description skeleton - 3 lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-4/6 animate-pulse" />
          </div>

          {/* Tags skeleton */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-6 w-16 bg-gray-800 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Links skeleton */}
          <div className="flex gap-4 mt-4">
            <div className="h-5 w-20 bg-gray-800 rounded animate-pulse" />
            <div className="h-5 w-20 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
