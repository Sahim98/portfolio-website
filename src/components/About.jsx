import React from 'react';
import SkillLevel from './SkillLevel';
import { skills } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
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
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Technical Skills</h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
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