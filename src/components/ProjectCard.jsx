import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-purple-300 text-sm font-medium mt-1">
              {project.period}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="View GitHub repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.achievements && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}
