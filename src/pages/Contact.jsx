import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/home/Video';

const Contact = () => {
  return (
    <div className="w-full flex flex-col font-[font1] lg:flex-row justify-between min-h-screen gap-4 
      px-2 sm:px-3 md:px-4 lg:px-5 py-6 lg:py-0 overflow-y-auto lg:overflow-y-hidden">

      {/* LEFT SECTION */}
      <div className="w-full lg:w-[40%] px-4 sm:px-0 mx-auto my-auto">
        <h1 className="font-[font1] text-4xl sm:text-5xl md:text-6xl 
          lg:text-[4vw] font-bold my-10">
          Get In Touch
        </h1>

        <form className="flex flex-col gap-4 sm:gap-6 md:gap-7">

          {/* NAME INPUT */}
          <input
            type="text"
            placeholder="e.g Bob Don"
            className="contact-input px-4 sm:px-5 md:px-6 py-2 sm:py-3 
              font-[font1] text-sm sm:text-base md:text-lg lg:text-[1vw]
              placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg 
              lg:placeholder:text-[1vw]
              outline-none 
              bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)]
              bg-no-repeat bg-bottom-left 
              bg-size-[0%_2px,100%_2px] 
              focus:bg-size-[100%_2px,0%_2px]
              transition-[background-size] duration-500 ease-out"
          />

          {/* EMAIL INPUT */}
          <input
            type="text"
            placeholder="e.g MkhalilBob@gmail.com"
            className="contact-input px-4 sm:px-5 md:px-6 py-2 sm:py-3 
              font-[font1] text-sm sm:text-base md:text-lg lg:text-[1vw]
              placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg 
              lg:placeholder:text-[1vw]
              outline-none 
              bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)]
              bg-no-repeat bg-bottom-left 
              bg-size-[0%_2px,100%_2px] 
              focus:bg-size-[100%_2px,0%_2px]
              transition-[background-size] duration-500 ease-out"
          />

          {/* TEXTAREA */}
          <textarea
            placeholder="Write something here"
            className="contact-input px-4 sm:px-5 md:px-6 py-2 sm:py-3
              font-[font1] text-base sm:text-lg md:text-xl lg:text-[1vw]
              placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg 
              lg:placeholder:text-[1vw]
              h-32 sm:h-36 md:h-40 outline-none
              resize-none
              bg-[linear-gradient(to_right,#D3FD50,#D3FD50),linear-gradient(to_right,#000,#000)]
              bg-no-repeat bg-bottom-left 
              bg-size-[0%_2px,100%_2px]
              focus:bg-size-[100%_2px,0%_2px]
              transition-[background-size] duration-500 ease-out"
          ></textarea>

          {/* BUTTON */}
          <div className="relative overflow-hidden w-full sm:w-[75%] md:w-[60%] lg:w-[50%]
            group border-2 lg:border-3 border-black
            hover:border-[#D3FD50] 
            flex items-center justify-center 
            px-4 sm:px-6 md:px-8 pt-1 lg:px-12 
            rounded-full uppercase duration-300 ease-out">

            <span className="absolute inset-0 bg-[#D3FD50] -translate-y-full 
              group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

            <Link
              to="/agence"
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[3vw]
                transition-colors duration-300 group-hover:text-black flex">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">S</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">e</span>
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1.5">n</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">d</span>
            </Link>

          </div>

        </form>
      </div>

      {/* RIGHT VIDEO SECTION */}
      <div className="w-full lg:w-1/2 rounded-3xl 
        h-64 sm:h-80 md:h-96 lg:h-auto">
        <Video src={'/public/home.mp4'} />
      </div>

    </div>
  );
};

export default Contact
