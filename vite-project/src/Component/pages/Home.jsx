import { useTypewriter, Cursor } from 'react-simple-typewriter';
import coverImage from '../../assets/logo.jpg';
import '../styling/HeroSection.css';
import React from 'react';

function Home() {
  const [text] = useTypewriter({
    words: ['React Developer', 'Django Developer'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* ===== Left content ===== */}
        <div className="hero-text">
          <h1 className="intro">HELLO THERE 👋</h1>
          <h1 className="name">I'M PAUL INNOCENT</h1>
          <h2 className="typewriter">
            <span className="highlight">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>
          <p className="mySpeach">
            I build modern web applications with <strong>React</strong> and <strong>Django</strong>, 
            creating user-friendly interfaces backed by secure and scalable systems. 
            Let’s turn your ideas into powerful digital solutions.
          </p>
          <div className="hero-buttons">
            <button>Download CV</button>
            <button>View Projects</button>
          </div>
        </div>

        {/* ===== Right image ===== */}
        <div className="coverImage-container">
          <img className="coverImage" src={coverImage} alt="Profile" />
        </div>
      </div>

      {/* ===== Scroll Down Arrow ===== */}
     
    </section>
  );
}

export default Home;
