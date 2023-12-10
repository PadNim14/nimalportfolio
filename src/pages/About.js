import React from 'react';
import '../styles/About.css';
import home from '../assets/home.jpg';

function Bio() {
  return (
    <div className="about-card">
      <figure className="picture-container">
        <img src={home} className="picture" alt="Mt. Tamalpais" />
        <figcaption>Walking around Mt. Tamalpais in San Francisco, Summer 2022</figcaption>
      </figure>
      <div className='bio'>
        <p className='bio-text'>
          In May 2023, I graduated with a bachelor's degree in <strong>Computer Engineering</strong> and a certificate in <strong>Applications of Data Science</strong> from <strong>Purdue University</strong>.
          I am currently a <strong>software engineer at Wells Fargo in San Francisco in their Technology Analyst program</strong>. I work with the <strong>iHub</strong> team, which is under <strong>Commercial and Corporate & Investment Banking Technology (CCIBT)</strong>.
          Outside of software engineering and tech, I have a small YouTube channel documenting my life as a college student and my adventures.
          I also like to travel, eat delicious food, spend time with my family, and contemplate the meaning of life.
        </p>
        <p>
          {/* ... More paragraphs */}
        </p>
      </div>
    </div>
  );
}

export default Bio;
