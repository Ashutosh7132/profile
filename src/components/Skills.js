import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Firebase", "Webpack", "Jest"]
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design"]
    }
  ];

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3>{skillGroup.category}</h3>
            <div>
              {skillGroup.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  style={{
                    display: 'inline-block',
                    margin: '5px',
                    padding: '8px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
