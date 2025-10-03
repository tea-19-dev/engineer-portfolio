import React from 'react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 text-center">About</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-left">
            {profileData.description}
          </p>
        </div>
      </div>
    </section>
  );
};