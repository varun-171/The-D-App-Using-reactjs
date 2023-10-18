import React from 'react'
import ReactPlayer from 'react-player';
import { useRef } from 'react';
import './Trailer.css'
const Trailer = () => {
    const VIDEO_PATH="https://www.youtube.com/watch?v=Hgeu5rhoxxY"
    const playerRef = useRef(null);
  return (
    <div className='player'>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} height="100%" width="100%" playing={true} /> 
    </div>
  )
}

export default Trailer