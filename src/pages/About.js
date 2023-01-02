import React from 'react';
import '../styles/About.css';
import home from '../assets/home.jpg';

function Bio() {
  return (
    <div>
      <img src={home} className="picture" ></img>
      <figcaption><center>Walking around Mt. Tamalpais in San Francisco, Summer 2022</center></figcaption>
      <p className='bio'>
        I am currently a senior studying Computer Engineering at Purdue University and will graduate in May 2023.
        I am interested in software engineering, specifically full-stack development, computer security, and cloud computing.
        I have recent work experience as a Technology Intern at Wells Fargo during the Summer 2022 session at the San Francisco headquarters doing full-stack
        development and cloud computing with the Information Services team.
        
        As a computer engineering student, I have the flexibility to take both hardware and software classes.
        As such, I have experience in digital logic design, microprocessor design and embedded systems,
        along with learning frontend frameworks, basic data structures and algorithms,
        and advanced software engineering tools and principles.
        Outside of academics, I have a small YouTube channel documenting my life as an college student and my adventures.
        I also like to travel, eat delicious food, spend time with my family, and contemplate the meaning of life.
      </p>
    </div>
  )
}

export default Bio