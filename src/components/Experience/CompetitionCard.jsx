import React from 'react';

export default function CompetitionCard({ competition }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
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