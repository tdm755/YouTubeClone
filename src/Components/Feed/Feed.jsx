import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_KEY from '../../../data';
import './Feed.css';
import userProfileIcon from '../../assets/user_profile.jpg'

function Feed({ category }) {

    const [data, setData] = useState([])

     
    async function API_Response() {
        try{
            let baseURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
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
    }, [category])


    return (        
        <div className="feed">            
          {data.map((item) => {
                return <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className='card'>
                    <img src={item.snippet.thumbnails.high.url} alt="" />

                    <div className="info">
                        <div className="userProf">
                            <img src={userProfileIcon} alt="" />

                        </div>
                        <div className="userInfo">
                            <h2>{item.snippet.title}</h2>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{item.statistics.viewCount}  <span>2 days ago</span></p>
                        </div>
                    </div>

                </Link>

            })} 

            
        </div>

    )
}

export default Feed
