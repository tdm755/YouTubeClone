import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import API_KEY from "../../../data";
import "./Feed.css";
import userProfileIcon from "../../assets/user_profile.jpg";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const load = useRef(null);
  // const [channelDetState, setChannelDetState] = useState(null);

  // using asyn & await
  // async function API_Response() {
  //     try{
  //         let baseURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  //         let response = await fetch(baseURL);
  //         let storedData = await response.json();
  //         setData(storedData.items);
  //     }
  //     catch(error){
  //         console.log(error);
  //     }

  // }

  // using promise
  function API_Response() {
    setTimeout(() => {
        deleteLoading();
            let baseURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            fetch(baseURL)
                .then((res) => {
                let response = res.json();
                return response;
                })
                .then((res) => {
                setData(res.items);
                })
                .catch((err) => {
                console.log("Error : " + err);
                });
    }, 1000);
  }

  // async function channelDetailsOBJ(){
  //     let channelUrl =  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${data.snippet.channelId}&key=${API_KEY}`;
  //     let response = await fetch(channelUrl);
  //     let data = response.json();
  //     setChannelDetState(data.items[0])
  // }

 function deleteLoading() {
   load.current.remove();
 } 

  useEffect(() => {
    API_Response();
    // console.log(data);
  }, [category]);

  // useEffect(()=>{
  //     channelDetailsOBJ();
  // },[data])

  return (<>
  {/* <div ref={load} className="loding">Loading....</div> */}
  <div ref={load} class="loader"></div>
    <div className="feed">
      {data.map((item) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={item.id}
            className="card"
          >
            <img src={item.snippet.thumbnails.high.url} alt="" />

            <div className="info">
              <div className="userProf">
                <img src={userProfileIcon} alt="" />
              </div>
              <div className="userInfo">
                <h2>{item.snippet.title}</h2>
                <p>{item.snippet.channelTitle}</p>
                <p>
                  {item.statistics.viewCount} <span>2 days ago</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  );
}

export default Feed;
