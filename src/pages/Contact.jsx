import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../components/home/Video'

const Contact = () => {
  return (
    <div className='w-full flex flex-col font-[font1] lg:flex-row justify-between h-auto lg:h-screen gap-4 mx-2 sm:mx-3 md:mx-4 lg:mx-5 overflow-y-auto lg:overflow-y-hidden py-4 lg:py-0'>
       <div className='w-full lg:w-[40%] mx-auto my-auto'>
        <h1 className='font-[font1] text-4xl my-10 sm:items-center font-bold  sm:text-4xl md:text-6xl lg:text-[4vw]'>Get In Touch</h1>

        <form action="" className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
          <input type="text" placeholder='e.g Bob Don' className='px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-[font1] text-sm sm:text-base md:text-lg lg:text-[1vw] placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-[1vw] outline-none bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)] bg-no-repeat bg-bottom-left bg-size-[0%_2px,100%_2px] focus:bg-size-[100%_2px,0%_2px] transition-[background-size] duration-500 ease-out' />
          <input type="text" placeholder='e.g MkhalilBob@gmail.com' className='px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-[font1] text-sm sm:text-base md:text-lg lg:text-[1vw] placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-[1vw] outline-none bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)] bg-no-repeat bg-bottom-left bg-size-[0%_2px,100%_2px] focus:bg-size-[100%_2px,0%_2px] transition-[background-size] duration-500 ease-out' />
         <textarea name="" id="" placeholder='Write something here' className='px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-[font1] text-base sm:text-lg md:text-xl lg:text-3xl placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-[1vw] h-32 sm:h-36 md:h-40 outline-none bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)] bg-no-repeat bg-bottom-left bg-size-[0%_2px,100%_2px] focus:bg-size-[100%_2px,0%_2px] transition-[background-size] duration-500 ease-out'></textarea>

          <div className='relative overflow-hidden w-full sm:w-[70%] md:w-[60%] lg:w-[50%] group lg:border-3 border-2 hover:border-[#D3FD50] lg:h-30 flex items-center justify-center px-3 sm:px-4 md:px-6 pt-1 lg:px-14 border-black rounded-full uppercase duration-300 ease-out' >
         <span className='absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></span>
         <Link className='relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] text-center transition-colors duration-300 group-hover:text-black' to='/agence'>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-[1deg]'>S</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-[3deg]'>e</span>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-1.5'>n</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>d</span>
         </Link>
      </div>
        </form>
       </div>
       <div className='bg-amber-300 w-full lg:w-1/2 rounded-3xl h-64 sm:h-80 md:h-96 lg:h-auto'>
       <Video src={'../../public/home.mp4'}/>
       </div>
    </div>
  )
}

export default Contact