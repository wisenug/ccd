import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex h-[86px] justify-between items-center w-full bg-[rgba(255,255,255,0.80)] px-0 py-2 max-md:h-auto max-md:flex-col max-md:gap-5 max-md:px-0 max-md:py-3 max-sm:px-0 max-sm:py-4">
      <div className="flex items-center gap-4 max-md:justify-center max-sm:justify-center max-sm:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19bf7319a30a84e6cc9b825ffc856f4ff0ed7587?placeholderIfAbsent=true"
          className="w-[70px] h-[70px]"
          alt="Clayton Cunningham Design Logo"
        />
        <div className="text-black text-lg font-bold leading-[21.6px] max-sm:text-base">
          Clayton Cunningham Design
        </div>
      </div>
      <nav className="flex justify-end items-start gap-10 max-md:gap-[30px] max-sm:hidden">
        <div className="flex w-[68px] flex-col items-center gap-1.5">
          <div className="text-[#7A8B5D] text-center text-xl font-bold leading-[21.6px]">
            Work
          </div>
          <div className="underline h-[3px] w-full bg-[#7A8B5D]" />
        </div>
        <div className="text-black text-xl font-normal leading-[21.6px]">
          About
        </div>
      </nav>
    </header>
  );
};
