import React from 'react';
import { ChevronDown } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center relative z-10">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
            <img 
              src={profileData.image} 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            {profileData.name}
          </h1>
          <p className="text-2xl text-blue-600 mb-8 font-medium">{profileData.title}</p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};