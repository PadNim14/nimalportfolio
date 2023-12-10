// Experience.js

import React from 'react';
import WellsLogo from '../assets/wf.png';
import '../styles/Experience.css';

const ExperienceCard = ({ position, location, duration, points }) => (
  <div className='experience-item'>
    <div className='work-card'>
      <div className='work-card-header'>
        <img src={WellsLogo} alt='Wells Fargo Logo' className='work-logo' />
        <h2 className='work-h2'>Wells Fargo</h2>
      </div>
      <div className='card-body'>
        <p className='position'>{position}</p>
        <p className='location'>{location}</p>
        <p className='duration'>{duration}</p>
        <ul className='points'>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {/* Add more details about your experience */}
      </div>
    </div>
  </div>
);

function Experience() {
  return (
    <div className='experience'>
      <ExperienceCard
        position='Software Engineer'
        location='San Francisco, California'
        duration='July 2023 - Present'
        points={[
            'Successfully migrated data access UI from jQuery to Angular in response to a critical BlackDuck scan issue, resulting in a 40% reduction in page load times and a 50% increase in user satisfaction',
            'Ensured data integrity through conformance, standardization, and curation policies, reducing errors by 30%',
            'Accelerated data retrieval with Python and Spark clusters, cutting query time by 60% for real-time analytics'

          ]}
      />
      <ExperienceCard
        position='Software Engineering Intern'
        location='San Francisco, California'
        duration='June 2022 - August 2022'
        points={[
            'Prototyped a solution for rewriting the Statements & Notices application by using an API gateway service from existing HTTP client code to RESTful API calls, reducing operations by 50%',
            'Converted text-based statements through the MARS (massive archival and retrieval system) platform to PDF documents using Java and Spring Boot',
            'Enhanced the user experience of the CEO (Commercial Electronic Office) website using React.js'
          ]}
      />
      {/* Add more experience items as needed */}
    </div>
  );
}

export default Experience;
