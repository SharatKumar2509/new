
import React from 'react';
import { Link } from 'react-router-dom';


function TwoEqualSections({logo,heading,description,btn,reverse,color,link}) {
   

    
      
        
  
    return (<>

    {/* mobile */}
    
     <div style={{backgroundColor:color}} className={`flex sm:hidden py-5  bg-[${color}]  font-custom h-[100vh]`}>
    <div className="flex-col flex items-center gap-20 justify-center">
      <img src={logo} className="w-32 h-32" alt="Logo" />
      <div className="w-[90%] text-white">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="my-3  text-sm ">{description}</p>
        {
            btn &&
       <Link to={link}> <button className="mt-4 text-white px-6 py-1 rounded-md border-2 border-[#f4f4f4]">{btn}</button></Link>}
      </div>
    </div>
  </div>

{/* desktop */}

        <div className={`sm:flex hidden font-custom ${reverse}  h-[100vh]`}>
       <div  className="w-full flex items-center ">
            <div className='w-[80%] mx-auto  '>
          <h2 className="text-5xl  font-bold">{heading}</h2>
          <p className="my-3 text-lg text-gray-500">{description}</p>
          {
                    btn &&
                <Link to={link}><button className="mt-4 text-[#cd0202] px-6 py-1 rounded-md border-2 border-[#cd0202]">{btn}</button></Link>}
          </div>
        </div>
        <div style={{backgroundColor:color}} className={`w-full bg-[${color}] flex items-center justify-center`}>
        <img src={logo} className='w-64 h-64' alt="Logo" />
        </div>
        
      </div>
      </>
    );
  }
  
  export default TwoEqualSections;
  
  