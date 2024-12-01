import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 relative inline-block">
        {children}
        <div className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
      </h2>
    </motion.div>
  );
}