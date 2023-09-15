import React from 'react'

const ServiceComponent = ({img,heading,desc,color}) => {
  return (
    <div className={`w-full border ${color} opacity-90 font-custom  gap-4 py-8 md:py-12 flex flex-col`}>
    <div className='my-4'>
      <img src={img} className='w-20 h-20 md:w-24 md:h-24 mx-auto object-cover rounded-full' alt='' />
    </div>
    <div className='text-center px-6'>
      <h3 className='font-semibold text-xl md:text-2xl'>{heading}</h3>
      <p className='text-sm md:text-base leading-relaxed'>{desc}</p>
    </div>
  </div>
  
  )
}

export default ServiceComponent