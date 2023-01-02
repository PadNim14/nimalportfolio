import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { YouTube } from '@material-ui/icons';
// import resume from '../assets/resume.pdf';
// import home from '../assets/home_prof_pic.jpg';
// import home2 from '../assets/home2.jpg';
import profile2 from '../assets/profile-2.jpg';
import '../styles/Home.css';
function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <img src={profile2} className="homepic"></img>

                <h1>Nimal Padmanabhan</h1>
                <div className='prompt'>
                    <p className='typewriter'>
                        Engineer, Creator, Learner
                    </p>
                    <a href="https://www.linkedin.com/in/nimal-padmanabhan/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:npadmana015@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="https://github.com/PadNim14" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    {/* <InstagramIcon /> */}
                    <a href='https://www.youtube.com/channel/UCj3RSCL35AQ6rLRACRObSJQ' target="_blank" rel="noopener noreferrer">
                        <YouTube />
                    </a>
                    {/* <h3>Welcome to my website!</h3> */}

                </div>
            </div>

            <div className='skills'>
                <h2>Welcome to my website!</h2>
                {/* <a href={resume} target='_blank'>My Resume</a> */}
               
                {/* <ol className='list'>
                    
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
                            Node.js, Spring Boot, MongoDB, Google Firebase, Google Firestore,
                            Oracle SQL Developer, SQLite3, SQLAlchemy
                        </span>
                    </li>

                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            Java, Python, JavaScript, C, HTML/CSS, SQL, SystemVerilog, Assembly (x86, Thumb ISA of ARM)
                        </span>
                    </li>
                </ol> */}
            </div>
        </div>
    )
}

export default Home;