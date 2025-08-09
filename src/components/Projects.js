import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data and forecasts using external APIs with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with dynamic animations, responsive design, and modern UI/UX principles.",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ marginBottom: '20px' }}>
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  style={{
                    display: 'inline-block',
                    margin: '3px',
                    padding: '5px 10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <a href={project.liveLink} className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                Live Demo
              </a>
              <a href={project.githubLink} className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
