import React from 'react'
import Video from './Video'

const  HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-50 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                qui
                <div className='sm:h-[7vw] h-12 sm:w-[16vw] w-22 sm:mb-0 mb-2 rounded-full  overflow-hidden '>
                    <Video src={"/home1.mp4"} />
                </div>
                génère
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText