import React, { useState, useEffect, useRef } from 'react';

function Webcam() {

    const {videoRef} = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => console.error(err))
    }
    useEffect(() => {
        getVideo()
    }, [])

    return ( 
        <div ref={videoRef}>
        </div>
     );
}

export default Webcam;