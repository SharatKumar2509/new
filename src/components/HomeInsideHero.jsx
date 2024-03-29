// import clip from "../assets/homepageinside.mp4" 
import { Link } from 'react-router-dom'
const HomeInsideHero = () => {
  return (
   
    <div className="relative font-custom h-screen">
      <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to right, #141E30, #243B55)'}}>
        {/* <video
          src={clip}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        /> */}
        {/* <img src={clip} className="object-cover w-full h-full" /> */}
      </div>
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <div className="absolute  left-2 w-[90%] sm:w-[40%]  p-2" style={{paddingTop: '15em'}}>
        <div className="text-4xl sm:text-5xl leading-[1.1] text-[#f4f4f4]  font-semibold">We are innovative, client centric and passionate collaborators</div>
        <p className='text-white my-2'>A result driven team that makes significant impact.</p>
      <Link to="/WhatWeDo">  <span  className="mt-3 inline-block px-4 py-2 border border-[#fd0202] text-[#f4f4f4]  rounded hover:bg-white hover:text-[#fd0202] transition duration-300 ease-in-out">
         Our Services
        </span>
        </Link>
      </div>
    </div>
 



  )
}

export default HomeInsideHero