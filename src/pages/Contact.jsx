import React from 'react'
import Input from '../components/contact/Input'
import { Link } from 'react-router-dom'
import Video from '../components/home/Video'

const Contact = () => {
  return (
    <div className='w-full flex justify-between h-screen gap-4  mx-5 overflow-y-hidden'>
       <div className='w-[40%] mx-auto my-auto'>
        <h1 className='font-[font1] text-[4vw]'>Get In Touch</h1>

        <form action="" className='flex flex-col gap-8 '>
          <input type="text" placeholder='e.g Bob Don' className='border-b px-6 py-3 font-[font1] text-[1vw] placeholder:text-[1vw] outline-none' />
          <input type="text" placeholder='e.g MkhalilBob@gmail.com' className='border-b  px-6 py-3 font-[font1] text-[1vw] placeholder:text-[1vw] outline-none' />
         <textarea name="" id="" placeholder='Write something here' className='border-b px-6 py-3 font-[font1] text-3xl  placeholder:text-[1vw] h-40 outline-none'></textarea>
         <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 flex items-center justify-center px-3 pt-1 lg:px-14 border-black rounded-full uppercase'>
        <Link className='text-[4vw]  text-center' to='/agence'>Send</Link>
      </div>
        </form>
       </div>
       <div className='bg-amber-300 w-1/2 rounded-3xl'>
       <Video src={'../../public/home.mp4'}/>
       </div>
    </div>
  )
}

export default Contact