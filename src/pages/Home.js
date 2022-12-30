import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { YouTube } from '@material-ui/icons';
import '../styles/Home.css';
function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>Nimal Padmanabhan</h1>
                <div className='prompt'>
                    <p className='typewriter'>
                        Engineer, Creator, Learner
                    </p>
                    <a href="https://www.linkedin.com/in/nimal-padmanabhan/">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:npadmana015@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="https://github.com/PadNim14">
                        <GitHubIcon />
                    </a>
                    {/* <InstagramIcon />
                    <YouTube /> */}
                </div>
            </div>
            <div className='skills'>
                <h2>Welcome to my webiste</h2>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            React.js, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn
                        </span>
                    </li>

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
                </ol>
            </div>
        </div>
    )
}

export default Home;