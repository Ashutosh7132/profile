import React from 'react';

const ResumeSection = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf'; // Path to your resume file
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>
        Interested in learning more about my experience and qualifications? 
        Download my complete resume below.
      </p>
      <p>
        My resume includes detailed information about my work experience, 
        education, projects, and technical skills.
      </p>
      <div className="resume-download">
        <button onClick={handleDownload} className="btn">
          <span className="resume-icon">📄</span>
          Download Resume
        </button>
      </div>
      <div style={{ marginTop: '30px', fontSize: '0.9rem', opacity: '0.8' }}>
        <p>
          <strong>Quick Summary:</strong><br />
          • 5+ years of full-stack development experience<br />
          • Bachelor's in Computer Science<br />
          • Expert in React, Node.js, and modern web technologies<br />
          • Experience with cloud platforms and DevOps<br />
          • Strong background in UI/UX design principles
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
