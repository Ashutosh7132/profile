import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({ category, skills, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-purple-500/20 text-purple-300 mr-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
            {category}
          </h3>
        </div>
        
        <div className="space-y-3">
          {skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                <span className="text-purple-400 text-xs font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                  viewport={{ once: true }}
                  className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
