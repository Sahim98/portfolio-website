import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const icons = {
  location: FaMapMarkerAlt,
  email: FaEnvelope,
  phone: FaPhone,
  linkedin: FaLinkedin,
  github: FaGithub
};

export default function ContactItem({ icon: iconName, label, value, href }) {
  const IconComponent = icons[iconName];

  const content = (
    <>
      <span className="text-slate-600">
        {IconComponent && <IconComponent className="w-5 h-5" />}
      </span>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-slate-800">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg">
      {content}
    </div>
  );
}