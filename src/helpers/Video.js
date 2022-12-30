import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import ReactPlayer from "react-player";
import video from '../assets/boilerinvaders.mp4';


function Video() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };
    return (
        <div>
            <h1>Video</h1>
            <Container>
                <div>
                    <ReactPlayer
                        url={video}
                        playing={true}
                        controls={true}
                        loop={true}
                        muted={false}
                        playsinline={true}
                        onReady={onLoadedData}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Video