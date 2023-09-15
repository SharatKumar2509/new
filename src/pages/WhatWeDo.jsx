import {useState, useEffect} from 'react'
import { servicesData } from '../constant/static'
import TwoServices from '../components/TwoServices'
import service from "../assets/whatwedohero.mp4"

import HeroMain from '../components/HeroMain'


const WhatWeDo = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  });
    
  return (
    <section className="overflow-hidden">
        <HeroMain heading={"We pour our heart and soul into crafting powerful campaigns "} btn={"Get a free quote"} clip={service} />
       
     {servicesData.map((item, index) => (
        <TwoServices heading1={item.heading1} heading2={item.heading2} description1={item.description1} description2={item.description2} color={item.color} background={item.background} reverse={item.reverse} />
     ))}

    </section>
  )
}

export default WhatWeDo