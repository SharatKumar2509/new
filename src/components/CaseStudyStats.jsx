import React from 'react'

const CaseStudyStats = ({stat}) => {
  return (
    <div className="flex w-full   justify-between mb-4">
      <div className="text-center">
      <p className="text-3xl font-bold">{
            stat.value1
}</p>
        <p className="text-lg">{
            stat.title1
        }
        </p>
    
      </div>
      <div className="text-center">
      <p className="text-3xl font-bold">{
            stat.value1
}</p>
        <p className="text-lg">{
            stat.title1
        }
        </p>
   
      </div>
      <div className="text-center">
      <p className="text-3xl font-bold">{
            stat.value1
}</p>
        <p className="text-lg">{
            stat.title1
        }
        </p>
      
      </div>
    </div>
  
  )
}

export default CaseStudyStats