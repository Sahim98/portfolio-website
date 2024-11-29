import React from 'react';
import { codingStats } from '../../data/achievements';

export default function CodingStats() {
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
        <div className="flex flex-wrap gap-3">
          {codingStats.ratings.map(({ platform, rating }) => (
            <div key={platform} className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">
              <span className="text-slate-600">{platform}:</span>
              <span className="ml-2 font-semibold text-blue-600">{rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}