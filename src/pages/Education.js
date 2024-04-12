import React from 'react';
import '../styles/Education.css';
import PurdueECE from '../assets/purdue-horz.png';
import PurdueDiploma from '../assets/purdue_diploma.pdf'
import GeorgiaTechLogo from '../assets/gatech_long.png'

function Education() {
    return (
        <div>
            <div className="georgia-tech-container">
                <div className="education-item">
                    <div className="georgia-tech-logo">
                        <img src={GeorgiaTechLogo} alt="Georgia Tech Logo" className="logo" />
                    </div>
                    <h2>Georgia Institute of Technology</h2>
                    <p>Master of Science in Computer Science</p>
                    <p>Expected Start: August 2024</p>
                    <p>Specialization: Human-Computer Interaction</p>
                    <p>Anticipated Graduation Date: December 2027</p>
                    <h3>This is a part-time master's program aimed at working professionals.</h3>
                    {/* Add more details about your expected time at Georgia Tech */}
                </div>
            </div>
            <div className="purdue-container">
                <div className="education-item">
                    <div className="purdue-logo">
                        <img src={PurdueECE} alt="Purdue ECE Logo" className="logo" />
                    </div>
                    {/* <h2>Purdue University</h2> */}
                    <p>Bachelor of Science in Computer Engineering</p>
                    <p>Concentration: Software Engineering</p>
                    <p>Graduated: May 2023</p>
                    <div className="diploma-link">
                        <a href={PurdueDiploma} target="_blank" rel="noopener noreferrer">
                            View Diploma (PDF)
                        </a>
                    </div>
                    <h3></h3>
                    {/* Add more details about your time at Purdue */}
                </div>
            </div>


        </div>

    );
}

export default Education;