import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-20  lg:bottom-50 font-[font1] lg:text-md lg:font-normal text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='relative overflow-hidden w-[30%]  group lg:border-3 border-2 hover:border-[#D3FD50] lg:h-30 flex items-center justify-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase duration-300 ease-out' >
         <span className='absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></span>
         <Link className='relative z-10 text-[4vw] text-center transition-colors duration-300 group-hover:text-black' to='/projects'>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-[1deg]'>p</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-[3deg]'>r</span>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-1.5'>o</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>j</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>e</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>c</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>t</span>
         </Link>
      </div>
      <div className='relative overflow-hidden w-[30%]  group lg:border-3 border-2 hover:border-[#D3FD50] lg:h-30 flex items-center justify-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase duration-300 ease-out' >
         <span className='absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></span>
         <Link className='relative z-10 text-[4vw] text-center transition-colors duration-300 group-hover:text-black' to='/contact'>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-[1deg]'>c</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-[3deg]'>o</span>
           <span className='inline-block transition-transform duration-300 group-hover:-translate-y-1.5'>n</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>t</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>a</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>c</span>
           <span className='inline-block transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-[2deg]'>t</span>
         </Link>
      </div>
    
    </div>
  )
}

export default HomeBottomText