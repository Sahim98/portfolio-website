import React from 'react';
import { motion } from 'framer-motion';

const getSkillColor = (skillName) => {
  const colorMap = {
    'C': { bg: 'bg-blue-50 hover:bg-blue-100', glow: 'hover:shadow-blue-200' },
    'C++': { bg: 'bg-indigo-50 hover:bg-indigo-100', glow: 'hover:shadow-indigo-200' },
    'HTML': { bg: 'bg-orange-50 hover:bg-orange-100', glow: 'hover:shadow-orange-200' },
    'CSS': { bg: 'bg-blue-50 hover:bg-blue-100', glow: 'hover:shadow-blue-200' },
    'Git': { bg: 'bg-red-50 hover:bg-red-100', glow: 'hover:shadow-red-200' },
    'MySQL': { bg: 'bg-cyan-50 hover:bg-cyan-100', glow: 'hover:shadow-cyan-200' },
    'Python': { bg: 'bg-yellow-50 hover:bg-yellow-100', glow: 'hover:shadow-yellow-200' },
    'React': { bg: 'bg-cyan-50 hover:bg-cyan-100', glow: 'hover:shadow-cyan-200' },
    'JavaScript': { bg: 'bg-yellow-50 hover:bg-yellow-100', glow: 'hover:shadow-yellow-200' },
    'Java': { bg: 'bg-red-50 hover:bg-red-100', glow: 'hover:shadow-red-200' },
    'Flutter': { bg: 'bg-blue-50 hover:bg-blue-100', glow: 'hover:shadow-blue-200' },
    'Firebase': { bg: 'bg-amber-50 hover:bg-amber-100', glow: 'hover:shadow-amber-200' },
    'MongoDB': { bg: 'bg-green-50 hover:bg-green-100', glow: 'hover:shadow-green-200' },
    'Node.js': { bg: 'bg-emerald-50 hover:bg-emerald-100', glow: 'hover:shadow-emerald-200' },
    'Express.js': { bg: 'bg-gray-50 hover:bg-gray-100', glow: 'hover:shadow-gray-200' }
  };
  return colorMap[skillName] || { bg: 'bg-slate-50 hover:bg-slate-100', glow: 'hover:shadow-slate-200' };
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }),
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

export default function SkillIcon({ skill, index }) {
  const colors = getSkillColor(skill.name);
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className={`flex flex-col items-center justify-center gap-3 p-6 
        ${colors.bg} rounded-2xl shadow-lg hover:shadow-xl 
        transition-all duration-300 border border-slate-200
        ${colors.glow} hover:shadow-2xl`}
    >
      <div className="text-4xl">
        <i className={`devicon-${skill.icon} colored`}></i>
      </div>
      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
    </motion.div>
  );
}