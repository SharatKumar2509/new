
import React from 'react';
import Logo from '../assets/icon6.png';

function AnotherEqualSections() {
    

    
      
        
  
    return (<><div className="flex sm:hidden font-custom py-10 bg-[#040D12] h-[100vh]">
    <div className="flex-col p-2  flex items-center justify-between">
      <img src={Logo} className="w-24 h-24" alt="Logo" />
      <div className="w-[90%] text-white">
        <h2 className="text-2xl font-bold">Let us help you from strategy to execution</h2>
        <p className="my-3 text-sm text-gray-400">Our ability to think outside the box can lead to innovative approaches that set your business apart from competitors and attract new clients. Our team's expertise, diversity, collaboration and client-centric approach will add substantial value to your business.</p>
        <button className="mt-4 text-white px-6 py-1 rounded-md border-2 border-[#f4f4f4]">Our Services</button>
      </div>
    </div>
  </div>


        <div className="sm:flex hidden font-custom flex-row-reverse  h-[100vh]">
       <div  className="w-full flex items-center ">
            <div className='w-[80%] mx-auto  '>
          <h2 className="text-5xl  font-bold">Let us help you from strategy to execution</h2>
          <p className=" text-lg my-3 text-gray-500">Our ability to think outside the box can lead to innovative approaches that set your business apart from competitors and attract new clients. Our team's expertise, diversity, collaboration and client-centric approach will add substantial value to your business</p>
          <button className=" px-6 py-1  text-black rounded border-2 border-[#fd0202]">Our Services</button>
          </div>
        </div>
        <div className="w-full bg-[#040D12] flex items-center justify-center">
        <img src={Logo} className='w-[200px] h-[200px]' alt="Logo" />
        </div>
        
      </div>
      </>
    );
  }
  
  export default AnotherEqualSections;
  