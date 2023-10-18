import React from 'react'
import ReactPlayer from 'react-player';
import { useRef } from 'react';
import './Trailer.css'

const Trailer = () => {
    const VIDEO_PATH="https://www.youtube.com/watch?v=Hgeu5rhoxxY"
    const playerRef = useRef(null);
  return (
    <div>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true}  playing={true} />
        
    </div>
  )
}

export default Trailer