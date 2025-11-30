import React from 'react'

const Input = () => {
  return (
    <div className='flex justify-between items-center flex-col gap-2.5'>
        <input type="text" placeholder='name' className='W-[1/2]'/>
        <input type="email" placeholder='email'/>
        <input type="text" placeholder='subjeect'/>
        <input type="text" placeholder='name'/>
    </div>
  )
}

export default Input