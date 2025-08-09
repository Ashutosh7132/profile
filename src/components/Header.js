import React from 'react';

const Header = () => {
  return (
    <header>
      <section id="hero">
        <h1>John Doe</h1>
        <p>Full Stack Developer & UI/UX Designer</p>
        <p>
          Passionate about creating beautiful, functional web experiences that make a difference.
          I love turning complex problems into simple, elegant solutions.
        </p>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>
    </header>
  );
};

export default Header;
