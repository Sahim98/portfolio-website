import React from 'react';
import SkillLevel from './SkillLevel';
import SectionTitle from './SectionTitle';
import { skills } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <p className="text-slate-600 mb-4">
            I'm a computer science graduate with a strong background in competitive 
            programming, achieving notable ranks in Codeforces (pupil) and CodeChef (2*).
             Besides, I've development experience both in mobile (flutter+firebase) and 
             web(react+MongoDB) applications. In addition, I have research experience 
             in the NLP domain.
            </p>
          
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Technical Skills</h3>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <SkillLevel title="Expert" skills={skills.expert} />
              <SkillLevel title="Intermediate" skills={skills.intermediate} />
              <SkillLevel title="Beginner" skills={skills.beginner} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}