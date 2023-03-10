import React, { useEffect, useState } from 'react';
// import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email'
import { YouTube } from '@material-ui/icons';
import "../styles/Footer.css";

function Footer() {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear());
    useEffect(() => {
        getYear();
    }, []);

    return (
        <div className='footer'>
            <div className='socialMedia'>
            <a href="https://www.linkedin.com/in/nimal-padmanabhan/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:npadmana015@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                    <a href="https://github.com/PadNim14"target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href='https://www.youtube.com/channel/UCj3RSCL35AQ6rLRACRObSJQ' target="_blank" rel="noopener noreferrer">
                        <YouTube />
                    </a>
                {/* <InstagramIcon />
                <YouTube /> */}
            </div>
            <p> &copy; {date}  Nimal Padmanabhan</p>
        </div>
    )
}

export default Footer