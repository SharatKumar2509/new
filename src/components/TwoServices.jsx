import React from 'react'

const TwoServices = ({heading1,heading2,description1,description2,background,color,reverse}) => {
  console.log(reverse)

 const prop= reverse.length>0 ? `flex flex-col sm:flex-row-reverse font-custom h-auto` : `flex flex-col sm:flex-row font-custom h-auto`
  return (
<div className={prop}>
  <div className="w-full h-screen sm:w-1/2 flex items-center justify-start">
    <div className="w-full sm:w-[80%] px-5 mx-auto text-black">
      <h2 className="text-3xl sm:text-5xl font-bold">{heading1}</h2>
      <p className="my-3 text-base sm:text-lg text-gray-500">{description1}</p>
    </div>
  </div>
  <div style={{ backgroundColor: background }} className={`w-full sm:w-1/2 bg-${background} flex h-screen items-center justify-start`}>
    <div className={`w-full sm:w-[80%] px-5  mx-auto text-${color}`}>
      <h2 className="text-3xl sm:text-5xl font-bold">{heading2}</h2>
      <p className="my-3 text-base sm:text-lg">{description2}</p>
    </div>
  </div>
</div>


  

  
  )
}

export default TwoServices