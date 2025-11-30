import React from 'react'

const Video = ({ src }) => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={src}></video>
    </div>
  )
}

export default Video