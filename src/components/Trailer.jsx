import React from 'react'
import ReactPlayer from 'react-player';
import { useRef } from 'react';

const Trailer = () => {
    const VIDEO_PATH="https://www.youtube.com/watch?v=Hgeu5rhoxxY"
    const playerRef = useRef(null);
  return (
    <div>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} height="560px" width="1260px" playing={true} />
        
    </div>
  )
}

export default Trailer