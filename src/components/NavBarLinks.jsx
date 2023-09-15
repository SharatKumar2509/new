import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = ({setIsDrawerOpen}) => {
  return (
    <div className=" font-custom p-4   ">
      
      <ul className="list-none flex  flex-col gap-3 text-2xl text-[#cf0202]">
        <li>
         <Link to={"/WhoWeAre"}><span onClick={()=> setIsDrawerOpen(false)} className="  hover:text-[#040D12]">Who we are</span>
         </Link> 
        </li>
        <li>
        <Link to={"/WhatWeDo"}><span onClick={()=> setIsDrawerOpen(false)} className="  hover:text-[#040D12]">What we do</span>
         </Link> 
        </li>
       
        <li>
        <Link to={"/Pricing"}><span onClick={()=> setIsDrawerOpen(false)} className="  hover:text-[#040D12]">Pricing</span>
         </Link> 
        </li>
        <li>
        <Link to={"/CaseStudies"}><span onClick={()=> setIsDrawerOpen(false)} className="  hover:text-[#040D12]">Case Studies</span>
         </Link> 
        </li>
        <li>
        <Link to={"/Blogs"}><span onClick={()=> setIsDrawerOpen(false)} className="  hover:text-[#040D12]">Blogs</span>
         </Link> 
        </li>
        <li>
        <Link to="/GetAFreeQuote"><span
    href="#your-link"
    onClick={()=>setIsDrawerOpen(false)}
    className="mt-10 inline-block px-4 py-1 border border-[#fd0202]  rounded hover:bg-white text-[#fd0202] transition duration-300 ease-in-out"
  >
    Get a free quote
   
  </span>
  </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
