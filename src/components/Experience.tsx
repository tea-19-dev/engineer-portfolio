import React from 'react';
import { Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index !== experienceData.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                )}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8 bg-white p-8 rounded-2xl shadow-xl flex-grow border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{exp.position}</h3>
                    <p className="text-blue-600 font-bold mb-3 text-lg">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-6 bg-gray-50 inline-block px-3 py-1 rounded-full">{exp.period}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};