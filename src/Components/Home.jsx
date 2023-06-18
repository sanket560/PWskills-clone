import React from 'react'
import webimg from '../Images/web.jpg'
import phoneimg from '../Images/mobile.jpg'

function Home() {
  return (
    <div className='w-full h-auto'>
        <img className='w-full hidden md:block' src={webimg} alt="" />
        <img className='w-full md:hidden' src={phoneimg} alt="" />
    </div>
  )
}

export default Home