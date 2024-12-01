import React from 'react';
import { competitions } from '../../data/achievements';
import CompetitionCard from './CompetitionCard';
import CodingStats from './CodingStats';
import SectionTitle from '../SectionTitle';

export default function Experience() {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle>Achievements</SectionTitle>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Notable Achievements</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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