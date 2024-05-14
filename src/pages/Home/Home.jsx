import React, { useState } from 'react'
import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';




function Home({stateOfSideBar}) {

  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar stateOfSideBar = {stateOfSideBar} category={category} setCategory={setCategory} />
      <div className={`container ${stateOfSideBar ? "largeContainer" : ""}`}> 

     
        <Feed category={category}/>
     

      </div>
    </>
  )
}

export default Home
