import React from 'react';
import { skillsData, skillLevels } from '../data/skills';
import { Star, Clock } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  years: number | string;
}

interface ToolSkill {
  name: string;
}

export const Skills: React.FC = () => {
  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < level 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 text-center">Skills</h2>
          
          {/* スキルレベル詳細説明 */}
          <div className="max-w-5xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-900">スキルレベル詳細</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {Object.entries(skillLevels).map(([level, details]) => (
                <div key={level} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    {renderStars(parseInt(level))}
                  </div>
                  <div className="font-bold text-blue-600 mb-1">{level}: {details.title}</div>
                  <div className="text-sm text-gray-600">{details.detail}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{category}</h3>
                  {category === 'Tools' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {skills.map((skill: ToolSkill) => (
                        <div key={skill.name} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {skills.map((skill: Skill) => (
                        <div key={skill.name} className="border-b border-gray-100 pb-4 last:border-b-0">
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-gray-900 text-lg">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-500">
                                {skill.years === 0 ? (
                                  '半年未満'
                                ) : (
                                  `${skill.years}年`
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex space-x-1">
                              {renderStars(skill.level)}
                            </div>
                            <span className="text-sm text-gray-600 font-medium">
                              {skillLevels[skill.level as keyof typeof skillLevels].title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
