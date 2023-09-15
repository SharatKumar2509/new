import {useState, useEffect} from 'react'

// backend
import {  caseStudyDescriptions } from '../constant/static'

import heroclip from "../assets/casestudyhero.mp4"

import AllCaseStudyButton from '../components/AllCaseStudyButton'
import CaseStudyDescComp from '../components/CaseStudyDescComp'
import HeroMain from '../components/HeroMain'

const CaseStudyDescription = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  });

  return (
    <section className="overflow-hidden font-custom">
       <HeroMain heading={"Backend"} btn={"Get a free quote"} clip={heroclip} />
        {
            caseStudyDescriptions.map(({heading,description,image,bg,reverse,color,stats})=> (<CaseStudyDescComp key={heading} heading={heading} color={color} bg={bg} stats={stats}  description={description} reverse={reverse} image={image} />))
        }
        <AllCaseStudyButton />
    </section>
  )
}

export default CaseStudyDescription