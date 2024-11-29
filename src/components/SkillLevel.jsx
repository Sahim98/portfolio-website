import React from 'react';

export default function SkillLevel({ title, skills }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-slate-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}