import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm always interested in new opportunities and collaborations. 
        Whether you have a project in mind or just want to say hello, feel free to reach out!
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="btn">Send Message</button>
        </div>
      </form>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3>Connect With Me</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <a href="mailto:john@example.com" className="btn" style={{ padding: '10px 20px' }}>
            📧 Email
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 20px' }}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 20px' }}>
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
