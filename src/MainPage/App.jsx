import { useState } from 'react'
import './App.css'
import NavBar from '../Components/NavBar/NavBar.jsx'
import SideBar from '../Components/SideBar/SideBar.jsx'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Video from '../pages/Video/video.jsx'


function App() {

  const [stateOfSideBar, setStateOfSideBar] = useState(false);

  return (
    <>
      <NavBar updateTheSideBar = {setStateOfSideBar} />        
      <Routes>
        <Route path='/' element={<Home  stateOfSideBar = {stateOfSideBar} />} />
        <Route path='/video/:categoryId/:videoID' element={<Video />} />
      </Routes>
    </>
  )
}

export default App
