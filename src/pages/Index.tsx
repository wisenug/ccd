
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProjectGrid } from '@/components/home/ProjectGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <Header />
        <Hero />
        <ProjectGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
