import React from 'react'
import CaseStudyStats from './CaseStudyStats'

const CaseStudyDescComp = ({reverse,heading,description,color,bg,image,stats}) => {
    const reverseClass =  reverse ==="reverse" ? ` bg-${bg}! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row`:` bg-${bg}! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse`
  return (
    <div style={{backgroundColor:bg}} className={reverseClass}>
    <div className="w-full my-auto">
    <img className='w-full ' src={image} alt={heading}  />
  </div>
  <div
       
         className={`w-full text-${color} my-auto`}>
    <h2 className="text-5xl tracking-wider font-semibold">{heading}</h2>
    
    
   
   
{
  stats ?   (<div className='w-full my-5 '>
  <CaseStudyStats stat={stats} />
  </div>):( <p className=" mt-5">{description}</p>)
}

  </div>
</div>
  )
}

export default CaseStudyDescComp