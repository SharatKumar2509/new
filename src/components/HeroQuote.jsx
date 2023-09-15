import React from 'react'
import logo from "../assets/icon8.png"
const HeroQuote = () => {
  return (
    <div className='h-screen font-custom flex gap-10 flex-col justify-center items-center bg-[#fd0202]'>
       
        <img src={logo} className='h-32 mx-auto  w-32' />
        <div className='text-white text-center' >
        <h2 className='font-bold  text-5xl'>Let’s work together</h2>
        <p className='text-2xl my-2 font-semibold'>Drop us a line and we will get in touch with you.</p>
        <p className='text-xl font-extralight mt-5'>sales@overninja.com</p>
        </div>
      

    </div>
  )
}

export default HeroQuote