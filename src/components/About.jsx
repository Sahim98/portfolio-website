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
              I'm a passionate software engineer with expertise in building modern web applications.
              My focus is on creating efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-slate-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, and sharing knowledge with the developer community.
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