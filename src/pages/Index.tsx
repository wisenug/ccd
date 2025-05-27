import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProjectGrid } from '@/components/home/ProjectGrid';

const Index: React.FC = () => {
  return (
    <main className="max-w-[1200px] flex w-full flex-col items-start gap-[30px] min-h-screen bg-white mx-auto my-0 pt-10 pb-0 px-6 max-md:max-w-[991px] max-md:gap-6 max-md:pt-8 max-md:pb-0 max-md:px-5 max-sm:max-w-screen-sm max-sm:gap-5 max-sm:pt-5 max-sm:pb-0 max-sm:px-4">
      <Header />
      <Hero />
      <ProjectGrid />
      <Footer />
    </main>
  );
};

export default Index;
