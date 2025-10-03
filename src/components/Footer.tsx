import React from 'react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-gray-800 to-blue-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">
        <p className="text-lg font-medium">&copy; 2025 {profileData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};