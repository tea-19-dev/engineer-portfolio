import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';
import { contactData } from '../data/contact';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 text-center">Contact</h2>
          
          {/* 連絡先情報 */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-4">
              <div className="flex items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg mb-2">Email</p>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <a 
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <a 
                  href={contactData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
