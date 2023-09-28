import {useState, useEffect} from 'react'
import axios from 'axios'

// import caseStudyheroclip from "../assets/casestudyhero.mp4"
import caseStudyheroclip from "../assets/7.webp"
import CaseStudyComponent from '../components/CaseStudyComponent'
import HeroMain from '../components/HeroMain'

const CaseStudies = () => {

  const [caseStudies, setCaseStudies] = useState([]);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if(top==0) {
      window.scrollTo(0,0);
      setTop(1);
      document.title = "Overninja: Showcase of extraordinary and remarkable achievements";
      axios.get("https://www.overninja.com:8081/portfolio")
        .then(res => {
          setCaseStudies(res.data);
        })
        .catch(err => console.log(err));
    }
  });

  return (
    <section className="overflow-hidden font-custom">
       <HeroMain heading={"Dive into case studies that highlight our expertise and commitment"} btn={"Get a free quote"} clip={caseStudyheroclip} bg={{background: 'linear-gradient(to right, #440f50, #b15b86)'}} />
        {
          caseStudies.map((item, index) => ( <CaseStudyComponent key={item.id} item={item} count={index} /> ))
        }
    </section>
  )
}

export default CaseStudies
