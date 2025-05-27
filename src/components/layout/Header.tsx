
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 md:py-8">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center">
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full relative">
            <div className="absolute inset-1 border border-white rounded-full"></div>
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-medium text-black">
          Clayton Cunningham Design
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <div className="text-center">
          <div className="text-[#7A8B5D] font-medium text-lg mb-1">Work</div>
          <div className="h-[3px] bg-[#7A8B5D] w-full"></div>
        </div>
        <div className="text-black font-normal text-lg">About</div>
      </nav>
    </header>
  );
};
