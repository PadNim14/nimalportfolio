import React from 'react'
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
                </div>
            </div>
        </div>
    )
}

export default Home;