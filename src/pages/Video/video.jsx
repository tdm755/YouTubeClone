import React, { useEffect } from 'react'
import './video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo.jsx';
import Recommended from '../../Components/Recommended/Recommended.jsx';
import { useParams } from 'react-router-dom';


function Video() {

  const {videoID, categoryId} = useParams();

  return (
    <div className='play-video'>
       <PlayVideo  />
       <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
