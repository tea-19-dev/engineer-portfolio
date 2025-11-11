import React from 'react';
import { philosophyData } from '../data/philosophy';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 text-center">{philosophyData.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">{philosophyData.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {philosophyData.content.map((item, index) => {
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
