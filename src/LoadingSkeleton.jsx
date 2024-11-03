import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className=" min-h-screen min-w-full bg-cover bg-scroll">
      <div className="flex flex-col md:flex-row justify-center md:justify-start mt-16 pt-16 p-5 backdrop-blur-lg min-h-screen">
        {/* Image skeleton */}
        <div className="h-72 w-60 md:w-20 bg-[#b9b9b922] animate-pulse mx-auto md:mx-0" />
        
        <div className="flex flex-col mx-16 p-2 w-full md:w-2/3">
          {/* Title skeleton */}
          <div className="h-12 bg-[#b9b9b922] rounded w-3/4 mt-5 md:mt-0 animate-pulse" />
          
          {/* Buttons row skeleton */}
          <div className="flex justify-center md:justify-start items-center mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-7 w-12 bg-[#b9b9b922] rounded mx-0.5 animate-pulse" />
            ))}
          </div>
          
          {/* Action buttons skeleton */}
          <div className="flex justify-center md:justify-start items-center mt-5">
            <div className="h-10 w-32 bg-[#b9b9b922] rounded-full mt-10 animate-pulse mr-10" />
            <div className="h-10 w-40 bg-[#b9b9b922] rounded-full mt-10 animate-pulse" />
          </div>
          
          {/* Description skeleton */}
          <div className="mt-8 space-y-3">
            <div className="h-4 bg-[#b9b9b922] rounded w-full animate-pulse" />
            <div className="h-4 bg-[#b9b9b922] rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-[#b9b9b922] rounded w-4/6 animate-pulse" />
            <div className="h-4 bg-[#b9b9b922] rounded w-full animate-pulse" />
            <div className="h-4 bg-[#b9b9b922] rounded w-3/4 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;