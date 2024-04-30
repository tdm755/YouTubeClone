import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import GameIcon from '../../assets/game_icon.png'
import AutoMob from '../../assets/automobiles.png'
import SportsIcon from '../../assets/sports.png'
import entertainIcon from '../../assets/entertainment.png'
import techIcon from '../../assets/tech.png'
import musicIcon from '../../assets/music.png'
import blogIcon from '../../assets/blogs.png'
import newsIcon from '../../assets/news.png'
import jackImage from '../../assets/jack.png'
import simonImage from '../../assets/simon.png'
import meganImage from '../../assets/megan.png'
import tomImage from '../../assets/tom.png'
import cameronImage from '../../assets/cameron.png'

function SideBar({stateOfSideBar, category, setCategory}) {



  return (
    <div className={`sideBar ${stateOfSideBar === false ? "hide" : ""}`}>

        <div className={`sideLink ${category === 0? "active":""}`} onClick={()=>{setCategory(0)}}>
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div className={`sideLink ${category === 20? "active":""}`} onClick={()=>{setCategory(20)}}>
          <img src={GameIcon} alt="" /> <p>Gaming</p>
        </div>
        <div className={`sideLink ${category === 2? "active":""}`} onClick={()=>{setCategory(2)}}>
          <img src={AutoMob} alt="" /> <p>Automobiles</p>
        </div>
        <div className={`sideLink ${category === 17? "active":""}`} onClick={()=>{setCategory(17)}}>
          <img src={SportsIcon} alt="" /> <p>Sports</p>
        </div>
        <div className={`sideLink ${category === 24? "active":""}`} onClick={()=>{setCategory(24)}}>
          <img src={entertainIcon} alt="" /> <p>Entertainment</p>
        </div>
        <div className={`sideLink ${category === 28? "active":""}`} onClick={()=>{setCategory(28)}}>
          <img src={techIcon} alt="" /> <p>Tech</p>
        </div>
        <div className={`sideLink ${category === 10? "active":""}`} onClick={()=>{setCategory(10)}}>
          <img src={musicIcon} alt="" /> <p>Music</p>
        </div>
        <div className={`sideLink ${category === 22? "active":""}`} onClick={()=>{setCategory(22)}}>
          <img src={blogIcon} alt="" /> <p>Blog</p>
        </div>
        <div className={`sideLink ${category === 25? "active":""}`} onClick={()=>{setCategory(25)}}>
          <img src={newsIcon} alt="" /> <p>News</p>
        </div>
            
            {/* <hr /> */}

        <div className="subscribersList">
          <h3>Subcriptions</h3>
          <div className="sideLinks">
            <img src={jackImage} alt="" /> <p>CodeHelp</p>
          </div>
          <div className="sideLinks">
            <img src={simonImage} alt="" /> <p>code with harry </p>
          </div>
          <div className="sideLinks">
            <img src={tomImage} alt="" /> <p>jenny's lecture</p>
          </div>
          <div className="sideLinks">
            <img src={cameronImage} alt="" /> <p>Cameron</p>
          </div>
          <div className="sideLinks">
            <img src={meganImage} alt="" /> <p>megan</p>
          </div>
        </div>

    </div>
  )
}

export default SideBar
