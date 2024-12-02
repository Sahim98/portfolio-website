import React from 'react';
import { competitions, codingStats } from '../data/achievements';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const platformConfig = {
  LeetCode: {
    icon: SiLeetcode,
    bgColor: 'bg-[#282828]',
    hoverBg: 'hover:bg-[#1a1a1a]',
    textColor: 'text-[#FFA116]',
    borderColor: 'border-[#FFA116]'
  },
  Codeforces: {
    icon: SiCodeforces,
    bgColor: 'bg-[#1f223d]',
    hoverBg: 'hover:bg-[#181b30]',
    textColor: 'text-[#318CE7]',
    borderColor: 'border-[#318CE7]'
  },
  CodeChef: {
    icon: SiCodechef,
    bgColor: 'bg-[#2d2d2d]',
    hoverBg: 'hover:bg-[#222222]',
    textColor: 'text-[#964B00]',
    borderColor: 'border-[#964B00]'
  }
};

function CompetitionCard({ competition }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-lg text-slate-900 mb-2">{competition.title}</h4>
      <div className="space-y-1">
        <p className="text-blue-600 font-medium">{competition.achievement}</p>
        {competition.team && (
          <p className="text-slate-600 text-sm">Team: {competition.team}</p>
        )}
      </div>
    </div>
  );
}

function CodingStats() {
  return (
    <div className="bg-slate-50 rounded-lg p-6 space-y-4">
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Problem Solving</h4>
        <p className="text-slate-700">Solved {codingStats.problemsSolved} programming problems on online judges</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Contest Participation</h4>
        <p className="text-slate-700">
          Participated in {codingStats.contestsParticipation.online} online and{' '}
          {codingStats.contestsParticipation.onsite} onsite contests
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Platform Ratings</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {codingStats.ratings.map(({ platform, rating }) => {
            const config = platformConfig[platform];
            const Icon = config.icon;
            
            return (
              <div
                key={platform}
                className={`${config.bgColor} ${config.hoverBg} p-4 rounded-lg shadow-lg border 
                  ${config.borderColor} transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className={`text-2xl ${config.textColor}`} />
                    <span className="text-white font-medium">{platform}</span>
                  </div>
                  <span className={`font-bold ${config.textColor}`}>{rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Achievements</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((competition, index) => (
                <CompetitionCard key={index} competition={competition} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Competitive Programming</h3>
            <CodingStats />
          </div>
        </div>
      </div>
    </section>
  );
}