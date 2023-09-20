
function VideoSections({clip,heading,description,reverse}) {
    
      
        
  
    return (<>

    {/* mobile */}


    <div className="relative block sm:hidden w-screen h-screen overflow-hidden">
  {/* Video Background */}
  {/* <video src={clip} autoPlay loop muted className="object-cover w-full h-full" /> */}
  <img src={clip} className="object-cover w-full h-full" />
  <div className="absolute inset-0 bg-black opacity-60"></div>
  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div className="w-[90%] text-white text-center">
      <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
      <p className="my-3 text-sm">{description}</p>
    </div>
  </div>
</div>
        <div className={`sm:flex  hidden font-custom ${reverse}  h-[100vh]`}>
       <div  className="w-full flex items-center ">
            <div className='w-[80%] mx-auto  '>
          <h2 className="text-5xl  font-bold">{heading}</h2>
          <p className="my-3 text-lg text-gray-500">{description}</p>
          
          </div>
        </div>


        {/* desktop */}
        <div  className={`w-full relative  h-screen overflow-hidden  `}>
        {/* <video
          src={clip}
          autoPlay
          loop
          muted
          className="object-cover  h-full"
        /> */}
        <img src={clip} className="object-cover w-full h-full" />
             <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
       
        
      </div>
      </>
    );
  }
  
  export default VideoSections;
  