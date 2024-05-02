import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recommended.css'
import API_KEY from '../../../data';


function Recommended({categoryId}) {

    
    const [data, setData] = useState([])

     
    async function API_Response() {
        try{
            let baseURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
            let response = await fetch(baseURL);
            let storedData = await response.json();
            setData(storedData.items);    
        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        API_Response();
        // console.log(data);        
    }, [])

  return (
    <div className='recommended'> 
        {data.map((item)=>{
            return <Link to={`/video/${item.snippet.categoryId}/${item.id}`}  key={item.id} className="side_video_list">
            <img src={item.snippet.thumbnails.high.url} alt="" />
                <div className="side_video_info">
                    <h4>{item.snippet.title}</h4>
                    <div className="chennelName">
                        <h5>{item.snippet.channelTitle}</h5>
                    <p><span>{item.statistics.viewCount} views </span><span>2 month ago</span></p>
                    </div>
             </div>                
        </Link> 
        })}
    </div>
  )
}

export default Recommended