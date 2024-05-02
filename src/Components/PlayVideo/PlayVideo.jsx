import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import he from '../../assets/video.mp4';
import profile_icon from '../../assets/jack.png'
import notification_icon from '../../assets/notification.png'
import likeIcon from '../../assets/like.png'
import dislikeIcon from '../../assets/dislike.png'
import userProfilePic from '../../assets/user_profile.jpg'
import shareIcon from '../../assets/share.png'
import saveIcon from '../../assets/save.png'
import API_KEY from '../../../data';
import { useParams } from 'react-router-dom';




function PlayVideo() {

    const {videoID} = useParams();

    const [apiKeyData, setApiKeyData] = useState(null);
    const [comments, setComments] = useState([]);
    const [channelCount, setChannelCount] = useState(null);

    async function ApiKey(){
        const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`
        let response = await fetch(baseUrl);
        let data = await response.json();
        setApiKeyData(data.items[0]);

        const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoID}&key=${API_KEY}`
        let commentResponse = await fetch(commentURL);
        let commentData = await commentResponse.json();
        setComments(commentData.items);
    }


    async function ChannelCountApiFetching(){
        let baseUrl = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiKeyData.snippet.channelId}&key=${API_KEY}`
        let response = await fetch(baseUrl);
        let data = await response.json();
        setChannelCount(data.items[0]);
    }

    useEffect(()=>{
        ChannelCountApiFetching();
    },[apiKeyData])

    useEffect(()=>{
        ApiKey();        
    },[videoID])

    return (
        <div className='play_container'>
            {/* <iframe height="402" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <iframe width="402" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>{apiKeyData ? apiKeyData.snippet.title : "Title here"}</h2>

            <div className='interaction_section'>

                <div className="left_part">

                    <div className="channel">
                        <img src={channelCount?channelCount.snippet.thumbnails.high.url:userProfilePic} alt="" />
                        <div className="nameSub">
                            <h4>{apiKeyData? apiKeyData.snippet.channelTitle : "Channel Name Here"}</h4>
                            <p>{channelCount?channelCount.statistics.subscriberCount:"109K"} subscribers</p>
                        </div>

                        <div className="SubscriptionStatus">
                            <img src={notification_icon} alt="" />
                            <select name="" id="">
                                <option value="subs" defaultValue>subscribed</option>
                                <option value="All">All</option>
                                <option value="Personalised">Personalized</option>
                                <option value="none">None</option>
                                <option value="Unsubs">Unsubscribe</option>
                            </select>
                        </div>

                    </div>

                </div>


                <div className="right_part">

                    <div className='likeCounts'>
                        <img src={likeIcon} alt="" />
                        <span>{apiKeyData?apiKeyData.statistics.likeCount:""}</span>
                        <span>|</span>
                        <img src={dislikeIcon} alt="" />
                    </div>

                    <div className="Share">
                        <img src={shareIcon} alt="" />
                        <span>Share</span>
                    </div>

                    <div className="Download">
                        <i className="fa-solid fa-arrow-down-long"></i> 
                        <span>Download</span>
                    </div>

                    <div className="save">
                        <img src={saveIcon} alt="" />
                        <span>save</span>
                    </div>

                </div>
            </div>

            <div className="Description">
                <p><span>{apiKeyData?apiKeyData.statistics.viewCount + " views": ""}</span> <span>{apiKeyData?apiKeyData.snippet.publishedAt:""}</span></p>
                <p>
                   {apiKeyData?apiKeyData.snippet.description:""}
                </p>
            </div>



            <hr />



            <div className="commentSection">
                <h3>{apiKeyData?apiKeyData.statistics.commentCount:""} comments</h3>


                {comments.map((item, index)=>{

                  return  <div key={index} className="comments">
                    <div className="userComments">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl ? item.snippet.topLevelComment.snippet.authorProfileImageUrl : profile_icon} alt="" />
                        <div className="userAndComment">
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}  <span>{item.snippet.topLevelComment.snippet.publishedAt}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        </div>
                    </div>
                    <div className="response">
                        <div className="likes">
                            <div className="thumbsUp">
                            <img src={likeIcon} alt="" />
                                <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                            </div>
                            <img src={dislikeIcon} alt="" />
                        </div>
                        <div className="reply">
                            <span>reply</span>
                        </div>
                    </div>
                </div>
                })}


            </div>


      </div>
    )
}

export default PlayVideo
