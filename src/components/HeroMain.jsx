/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const HeroMain = ({clip,btn,heading}) => {
  return (
    <div className="relative font-custom h-screen">
      <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to right, #333333, #dd1818)'}}>
        {/* <video
          src={clip}
          autoPlay
          autobuffer="true"
          loop
          muted
          className="object-cover w-full h-full"
        /> */}
        {/* <img src={clip} className="object-cover w-full h-full" style={{objectPosition: 'bottom center'}} /> */}
      </div>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      <div className="absolute w-[90%] sm:w-[75%] mx-auto inset-0 flex flex-col items-start justify-center ">
  <h1 className="text-3xl sm:text-5xl mb-5 leading-[1.1] text-[#f4f4f4] font-semibold">
    {heading}
   
  </h1>
  <Link to="/GetAFreeQuote"><span
    
    className="mt-10 inline-block px-4 py-2 border border-[#fd0202] text-[#f4f4f4] rounded hover:bg-white hover:text-[#fd0202] transition duration-300 ease-in-out"
  >
    {
      btn
    }
   
  </span>
  </Link>
</div>

    </div>
 



  )
}

export default HeroMain