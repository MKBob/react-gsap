import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from "../components/home/HomeHeroText"
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'> 
       <Video src='/home1.mp4' />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'> 
         <HomeHeroText />
         <HomeBottomText />
      </div>
    </div>
  )
}

export default Home