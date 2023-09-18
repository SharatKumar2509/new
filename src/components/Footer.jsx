import ContactForm from './ContactForm';
import { FaSkype, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden font-custom bg-gray-900 flex flex-col lg:flex-row">
      {/* L (Desktop: 70% width, White Background) */}
      <div className="py-8 w-full pt-20 sm:w-[70%] flex flex-col justify-center items-center bg-white">
        {/* Contact Us Form */}
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="sm:w-[60%] p-4 w-full">
          <ContactForm />
        </div>
      </div>

      {/* Right Section (Desktop: 30% width, Black Background) */}
      <div className="w-full flex flex-col  justify-center sm:w-[30%] bg-black p-4">
        <div className="p-4">
          <ul className="text-[#fd0202] mt-3">
            <li className="mb-2 text-gray-300">
              501, Shapath 1, SG Hwy, Bodakdev, Ahmedabad, Gujarat 380054
            </li>
            <li className="mb-2 flex gap-1 items-center">
            <a href="mailto:sales@overninja.com" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaEnvelope  size={22} /><span className='text-white'>sales@overninja.com</span></a>
            </li>
            <li className="mb-2 flex gap-1 items-center">
            <a href="https://wa.me/919998847740" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaWhatsapp  size={22} /><span className='text-white'>+91 9998847740</span></a>
            </li>
            <li className="mb-2 flex gap-1 items-center">
            <a href="skype:overninja.tech?call" target="_blank" rel="noreferrer noopener" className="text-[#cd0202] flex gap-1 items-center"> <FaSkype  size={22} /><span className='text-white'>overninja.tech</span></a>             
            </li>
          </ul>
        </div>

        <div className=" text-white p-4">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className='hover:text-[#cd0202]'>
              <Link to="/WhoWeAre">Who we are</Link>
            </li>
            <li className='hover:text-[#cd0202]'>
            <Link to="/WhatWeDo">What we do</Link>
            </li>
            <li className='hover:text-[#cd0202]'>
            <Link to="/Pricing">Pricing</Link>
            </li >
            <li>
            <Link className='hover:text-[#cd0202]' to="/CaseStudies">Case studies</Link>
            </li>
            <li className='hover:text-[#cd0202]'>
            <Link to="/Blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="flex gap-2 p-4">
          <a target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/company/overninja-technologies-pvt-ltd/">
            <FaLinkedin size={32} color="#fd0202" />
          </a>
          <a target='_blank' rel="noreferrer noopener" href="https://twitter.com/OverNinjaTech">
            <FaTwitter size={32} color="#fd0202" />
          </a>
          <a target='_blank' rel="noreferrer noopener" href="https://www.instagram.com/over_ninja_tech/">
            <FaInstagram size={32} color="#fd0202" />
          </a>
          <a target='_blank' rel="noreferrer noopener" href="https://www.facebook.com/OverNinja-Technologies-Pvt-Ltd-102444516208720">
            <FaFacebook size={32} color="#fd0202" />
          </a>
          <a target='_blank' rel="noreferrer noopener" href="https://www.youtube.com/channel/UCFOSePYtK_me2voSMpGWEKA">
            <FaYoutube size={32} color="#fd0202" />
          </a>
        </div>
        <div className="p-4">
          <div className="flex text-white gap-2">
           <Link to="PrivacyPolicy">Privacy policy
           </Link> 
           <Link to="TermsOfUse">
           Terms of use
           </Link> 
           
          </div>
          <p className="text-white text-sm">
            © 2023 Overninja Technologies |{' '}
            <span className="text-[12px]">All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
