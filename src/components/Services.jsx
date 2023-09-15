import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import ServiceComponent from './ServiceComponent'



const Services = () => {

    const data = [{heading:"SEO Consultancy",desc:"Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.",
      img:img1,
      color:"bg-purple-50"
    
    },{heading:"Competitor Analysis",desc:"Per ea quod iusto. Te autem perti nax definitiones vel, denique patrioque id per was be more.",
    img:img2,
    color:"bg-orange-50"
  
  },{heading:"Social Media Marketing",desc:"Delenit signiferumque ei cum, te pertinax voluptatum sed, ornatus nonumes explicari sit et.",
  img:img3,
  color:"bg-green-50"


}]
  return (<>
    <div className="text-center w-[90%] sm:w-[70%] lg:w-[50%] mx-auto font-custom">
      <p className="text-xs sm:text-sm">CARE FEATURES</p>
      <h3 className="font-semibold text-2xl sm:text-3xl">Provide Awesome Service With Our Tools</h3>
    </div>
    <div className="w-full sm:w-[95%] mt-8 sm:mt-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3 sm:px-6 lg:px-8 rounded-md">
      {data.map(({ img, desc, heading, color }) => (
        <ServiceComponent color={color} img={img} desc={desc} heading={heading} />
      ))}
    </div>
  </>
  
  )
}

export default Services