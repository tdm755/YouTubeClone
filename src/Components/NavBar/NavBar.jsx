import React from 'react'
import menuicon from '../../assets/menu.png';
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({updateTheSideBar}) {


  function handleClick(){
    updateTheSideBar((preVal)=>{
       return !preVal;
    })
  }

  return (
    <nav>

        <div className="left-part">
          <img className='MenuIcon' onClick={handleClick} src={menuicon} alt="" />
          <Link to={'/'} ><img className='LogoIcon ' src={logo} alt="" /> </Link>
        </div>

        <div className="middle-part mMiddle">
          <input type="text" name="" id="" />
          <div className="searchIconDiv">
              <img className='search' src={searchIcon} alt="" />          
          </div>
        </div>

        <div className="right-part ">
          <img className='utilityIconProps UploadIcon' src={upload_icon} alt="" />
          <img className='utilityIconProps  MoreIcon' src={more_icon} alt="" />
          <img  className='utilityIconProps NotificationIcon' src={notification_icon} alt="" />
          <img className='profilePic' src={profile_icon} alt="" />
        </div>      
           
    </nav>
  )
}

export default NavBar
