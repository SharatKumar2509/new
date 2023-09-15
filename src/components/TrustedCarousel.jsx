
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import company1 from "../assets/company1.svg"
import company2 from "../assets/company2.svg"
import company3 from "../assets/company3.svg"
import company4 from "../assets/company4.svg"
import company5 from "../assets/company5.svg"
import company6 from "../assets/company6.svg"

const Trustedcarousel = () => {
  
  const data = [
    {
      company1:company1,
      company2:company2,
      company3:company4
      
      
    },
    {
      company1:company1,
      company2:company2,
      company3:company5
      
      
    },  {
      company1:company1,
      company2:company3,
      company3:company6
      
      
    }
    
    
  ];

  return (
    
<div className=" font-custom flex-col justify-center items-center sm:py-5  flex h-screen py-10 gap-10  ">
  <div className=" w-full flex justify-center items-center px-4">
    <h2 className='text-black text-center font-bold sm:text-5xl text-3xl'>Trusted by Leading Companies</h2>
  </div>
  <div className=" w-full px-4">
  <Carousel
  stopOnHover={false}
  autoPlay={true}
  showIndicators={true}
  showStatus={false}
  showArrows={false}
  showThumbs={false}
  interval={2000}
  infiniteLoop={true}
  className="h-full"
>
  {data.map((item, index) => (
    <div key={index} className="p-4 w-full h-auto gap-5 flex my-5 text-white">
      <div className="w-full">
        <img className='w-full' src={item.company1} alt="Company 1" />
      </div>
      <div className="w-full">
        <img className='w-full' src={item.company2} alt="Company 2" />
      </div>
      <div className="w-full">
        <img className='w-full' src={item.company3} alt="Company 2" />
      </div>
    </div>
  ))}
</Carousel>

  </div>
</div>

  

  );
};

export default Trustedcarousel;