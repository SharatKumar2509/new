import {useEffect} from 'react'
// import clip1 from "../assets/homepagehero.mp4"
import clip1 from "../assets/1.webp"

import ReviewCarousel from '../components/ReviewsCarousel'
import HeroQuote from '../components/HeroQuote'

import TwoEqualSections from '../components/TwoSections'

import logo1 from "../assets/icon4.png"
import logo2 from "../assets/icon6.png"
import HomeInsideHero from '../components/HomeInsideHero'
import HeroBlog from '../components/HeroBlog'
import HeroMain from '../components/HeroMain'
const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Overninja: Your Gateway to Limitless Possibilities";
  });

  return (
   
    <section className="overflow-hidden font-custom">
   
    <HeroMain heading={"Boost your sales to new heights with our digital marketing services"} btn={"Get a free quote"} clip={clip1} />
    <TwoEqualSections logo={logo1} description={"We are focused on helping brands grow through digital transformation services. We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision."} heading={"Work with top-notch talent to scale your revenue"} 
    btn={"Our Company"}
    color={"#fd0202"}
    reverse={""}
    link="/WhoWeAre"
     />
     <TwoEqualSections logo={logo2} description={"Our ability to think outside the box can lead to innovative approaches that set your business apart from competitors and attract new clients. Our team's expertise, diversity, collaboration and client-centric approach will add substantial value to your business."} heading={"Let us help you from strategy to execution"} 
    btn={"Our Work"}
    color={"#040D12"}
    reverse={"flex-row-reverse"}
    link="/CaseStudies"
     />
    
   <HomeInsideHero    />
   <HeroQuote />
   <ReviewCarousel />
   
    <HeroBlog />
   
    
</section>
  )
}

export default Home