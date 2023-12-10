import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);
    
    return (
        <div className='navbar' id={expandNavBar ? "open" : "close"}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setExpandNavBar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/nimalportfolio/">Home</Link>
                <Link to="/nimalportfolio/about">About</Link>
                <Link to="/nimalportfolio/education">Education</Link>
                <Link to="/nimalportfolio/experience">Experience</Link>
                <Link to="/nimalportfolio/certs">Certifications</Link>
                <Link to="/nimalportfolio/projects">Projects</Link>
                <Link to="/nimalportfolio/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Navbar