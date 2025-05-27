
import React from 'react';

export const ProjectGrid: React.FC = () => {
  const projects = Array(7).fill(null);

  return (
    <section className="mb-12 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((_, index) => (
          <div
            key={index}
            className="aspect-[4/3.5] bg-gradient-to-br from-[#C8E6A0] to-[#A8D670] relative overflow-hidden"
            style={{
              backgroundImage: `
                repeating-conic-gradient(
                  from 0deg at 50% 50%,
                  #C8E6A0 0deg 90deg,
                  #A8D670 90deg 180deg,
                  #C8E6A0 180deg 270deg,
                  #A8D670 270deg 360deg
                )
              `,
              backgroundSize: '20px 20px'
            }}
          >
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                `,
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
