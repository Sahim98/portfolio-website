import React from 'react';
import SkillIcon from './SkillIcon';

export default function SkillLevel({ title, skills }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-6 text-slate-800 pl-3 border-l-4 border-blue-500">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillIcon key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}