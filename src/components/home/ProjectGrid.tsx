import React from 'react';

export const ProjectGrid: React.FC = () => {
  const projects = Array(7).fill(null);

  return (
    <section className="flex justify-between items-center content-center gap-y-6 w-full flex-wrap pt-10 max-md:justify-center max-md:gap-5 max-sm:gap-4 max-sm:pt-6">
      {projects.map((_, index) => (
        <img
          key={index}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b3ebf65cb780e7987a4ee3f1bfe897a232585b2?placeholderIfAbsent=true"
          alt={`Project ${index + 1}`}
          className="flex w-[358px] h-[314px] items-start gap-2.5 flex-wrap max-md:w-80 max-md:h-[280px] max-sm:w-full max-sm:max-w-[300px] max-sm:h-60"
        />
      ))}
    </section>
  );
};
