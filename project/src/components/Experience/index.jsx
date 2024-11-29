import React from 'react';
import { competitions } from '../../data/achievements';
import CompetitionCard from './CompetitionCard';
import CodingStats from './CodingStats';

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