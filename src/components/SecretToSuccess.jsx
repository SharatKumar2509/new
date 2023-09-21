import React from 'react'
const data= [
    {
      "heading": "Clear Vision and Goals",
      "description": "The team has a shared understanding of their purpose, mission, and specific goals."
    },
    {
      "heading": "Effective Communication",
      "description": "We actively listen to our clients, share ideas and provide constructive feedback."
    },
    {
      "heading": "Diversity",
      "description": "Our team consists of individuals with diverse backgrounds, experiences, and skill sets."
    },
    {
      "heading": "Innovation and Creativity",
      "description": "We foster an environment that encourages innovative thinking and creative problem-solving."
    }
  ]
  
const SecretToSuccess = () => {
  return (
    <div className='h-auto md:h-screen py-10 font-custom flex gap-10 flex-col  items-center justify-center bg-[#fd0202]'>
       
        
        <h2 className='font-bold text-center text-white text-5xl mb-10'>The secrets to our success</h2>

        <div className="grid w-[90%] sm:w-[80%] mx-auto grid-cols-1 sm:grid-cols-2 gap-20">
          {
            data.map((secret)=>(<div className="flex   flex-col gap-2">
            <h1 className="text-3xl font-semibold text-white">{secret.heading}</h1>
            <p className="text-lg font-extralight text-gray-200">{secret.description}</p>
          </div>))
          }

        </div>
        
     
      

    </div>
  )
}

export default SecretToSuccess