import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { worksData } from '../data/works';
import { WorkLinks } from './WorkLinks';

interface Work {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  detailedDescription: string;
}

export const Works: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (work: Work) => {
    setSelectedWork(work);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => 
        prev === selectedWork.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedWork.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 text-center">Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work: Work) => (
            <div 
              key={work.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => openModal(work)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden relative">
                <div className="absolute inset-0"></div>
                <div className='p-5'>
                  <img 
                    src={work.images[0]} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{work.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 text-lg">{work.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm rounded-full font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <WorkLinks work={work}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* モーダル */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">{selectedWork.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 左側: 説明と技術 */}
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">プロジェクト概要</h3>
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">{selectedWork.detailedDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">使用技術</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedWork.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full font-medium border border-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <WorkLinks work={selectedWork} />
                  </div>
                </div>
                
                {/* 右側: 画像カルーセル */}
                <div className="space-y-4">
                  {/* メイン画像 */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden h-[40vh] flex items-center justify-center">
                      <img
                        src={selectedWork.images[currentImageIndex]}
                        alt={`${selectedWork.title} - ${currentImageIndex + 1}`}
                        className="object-contain max-w-full max-h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* カルーセルコントロール */}
                    {selectedWork.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* サムネイル */}
                  {selectedWork.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedWork.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'border-blue-700' 
                              : 'border-gray-200 hover:border-blue-400'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${selectedWork.title} thumbnail ${index + 1}`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
