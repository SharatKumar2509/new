import { useEffect, useState } from 'react';
import {  AiOutlineClose } from 'react-icons/ai';
import QuickLinks from './NavBarLinks';
import redlogo from "../assets/redlogo.png"
import { Link } from 'react-router-dom';
import {  FaEnvelope, FaPhoneAlt, FaSkype, FaWhatsapp } from 'react-icons/fa';
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawer2Open, setIsDrawer2Open] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      document.getElementById('mynavbar').classList.add('navbar-scrolled');
    }
    else {
      document.getElementById('mynavbar').classList.remove('navbar-scrolled');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.getElementById('mynavbar').classList.add('navbar-scrolled');
    }
    else {
      document.getElementById('mynavbar').classList.remove('navbar-scrolled');
    }
  });

  return (
    <nav id="mynavbar" className={`bg-transparent font-custom  fixed top-0  left-0 right-0  z-50 ${isDrawerOpen ? 'h-screen' : ''}`}>
      <div className="w-[90%] mx-auto">
        <div className="flex  h-[10vh] mt-2 mb-2 justify-between items-center">
          <div className="cursor-pointer">
            <Link to={"/"}>
            <img src={redlogo} alt="Digital Marketing" className='w-40 h-auto' />
            </Link>
          </div>
          <div className='flex gap-1 text-[#fd0202] items-center'>
            <div onClick={()=> setIsDrawer2Open(true)} className='toggle-btn cursor-pointer hover:bg-white hover:text-[#fd0202] p-2 me-3'>
              <FaPhoneAlt size={20} />
            </div>
            <button
              onClick={toggleDrawer}
              className="toggle-btn text-[#fd0202] p-2 focus:outline-none hover:bg-white hover:text-[#fd0202]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="fixed grid sm:w-[30%]   top-0 right-0 w-full h-full  bg-white">
         
  <div className="flex  h-[10vh] p-4   items-center justify-between">
  <div onClick={()=> setIsDrawerOpen(false)} >
    <Link to="/">
      <img src={redlogo} alt="Logo" className="w-32 h-auto" />
      </Link>
    </div>
    <div
      className="cursor-pointer text-red-400"
      onClick={() => setIsDrawerOpen(false)}
    >
      <AiOutlineClose />
    </div>
   
  </div>
     <div className='p-4'>

          <QuickLinks setIsDrawerOpen={setIsDrawerOpen} />
          </div>
          
        </div>
      )}
      {isDrawer2Open && (
        <div className="fixed grid sm:w-[30%]   top-0 right-0 w-full h-full  bg-white">
         
  <div className="flex  h-[10vh] p-4   items-center justify-between">
  <div className="cursor-pointer">
            <Link to={"/"}>
            <img src={redlogo} alt="Digital Marketing" className='w-40 h-auto' />
            </Link>
          </div>
    <div
      className="cursor-pointer text-red-400"
      onClick={() => setIsDrawer2Open(false)}
    >
      <AiOutlineClose />
    </div>
   
  </div>
     <div className='p-4'>

    
     <ul className=" mt-3">
            
     <li className="mb-2 ">
  
  <a href="mailto:sales@overninja.com" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaEnvelope  size={22} /><span className='text-black'>sales@overninja.com</span></a>
</li>
<li className="mb-2 ">
  
<a href="https://wa.me/919998847740" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaWhatsapp  size={22} /><span className='text-black'>+91 9998847740</span></a>
 
</li>
<li className="mb-2 ">
<a href="skype:overninja.tech?call" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaSkype  size={22} /><span className='text-black'>overninja.tech</span></a>
  
</li>
          <li>
            <Link to="/GetAFreeQuote"><span
     onClick={()=>setIsDrawer2Open(false)}
    className="mt-10 inline-block px-4 py-1 border border-[#fd0202]  rounded hover:bg-white text-[#fd0202] transition duration-300 ease-in-out"
  >
    Get a free quote
   
  </span>
  </Link>
            </li>
          </ul>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;

