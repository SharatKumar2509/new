import { useEffect } from "react"

// import clip2 from "../assets/whoweareinside1.mp4"
// import clip3 from "../assets/whoweareinside2.mp4"
// import clip1 from "../assets/whowearehero.mp4"

import clip1 from "../assets/3.webp";
import clip2 from "../assets/4.webp";
import clip3 from "../assets/5.webp";

import logo2 from "../assets/icon5.png"

import VideoSections from '../components/VideoSections'
import HeroStatistics from '../components/HeroStatistics'
import SecretToSuccess from '../components/SecretToSuccess'
import Trustedcarousel from '../components/TrustedCarousel'
import HomeInsideHero from '../components/HomeInsideHero'

const WhoWeAre = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Overninja: Where innovation meets passion";
  });
  
  return (
    <section className="overflow-hidden">
   
    <HeroStatistics clip={clip1} />
    <VideoSections description={"We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision."} heading={"We are a dedicated team of marketing experts helping startups to enterprises"} 
    
    clip={clip2}
    reverse={""}
     />
     <VideoSections logo={logo2} description={"We consistently stay ahead of the curve by incorporating the latest trends and technologies."} heading={"We offer a success guarantee and have 100% client retention ratio"} 
     clip={clip3}
    
    reverse={"flex-row-reverse"}
     />
    
   <HomeInsideHero  />
   <SecretToSuccess />
   <Trustedcarousel />
   
   
    
</section>
  )
}

export default WhoWeAre