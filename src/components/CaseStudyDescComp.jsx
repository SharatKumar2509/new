/* eslint-disable react/prop-types */

const CaseStudyDescComp = ({ item }) => {
  return (
    <>
      <div style={{ backgroundColor: '#cd0202' }} className={`bg-#cd0202! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse`}>
        <div className="w-full my-auto">
          <img className='w-full ' style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/" + item.project_image_1} alt={item.client} />
        </div>
        <div className={`w-full text-white my-auto`}>
          <h2 className="text-5xl tracking-wider font-semibold">Client Requirement</h2>
          <p className=" mt-5">{item.requirement}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#f6f6f6' }} className={`bg-#f6f6f6! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row`}>
        <div className="w-full my-auto">
          <img className='w-full ' style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/" + item.project_image_2} alt={item.client} />
        </div>
        <div className={`w-full text-black my-auto`}>
          <h2 className="text-5xl tracking-wider font-semibold">The Challenge</h2>
          <p className=" mt-5">{item.challenge}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#040D12' }} className={`bg-#040D12! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse`}>
        <div className="w-full my-auto">
          <img className='w-full ' style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/" + item.project_image_3} alt={item.client} />
        </div>
        <div className={`w-full text-white my-auto`}>
          <h2 className="text-5xl tracking-wider font-semibold">The Process</h2>
          <p className=" mt-5">{item.process}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#f6f6f6' }} className={`bg-#f6f6f6! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row`}>
        <div className="w-full my-auto">
          <img className='w-full ' style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/" + item.project_image_4} alt={item.client} />
        </div>
        <div className={`w-full text-black my-auto`}>
          <h2 className="text-5xl tracking-wider font-semibold">The Results</h2>
          <p className=" mt-5">{item.results}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#02b5ac' }} className={`bg-#02b5ac! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse`}>
        <div className="w-full my-auto">
          <img className='w-full ' style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/" + item.project_image_5} alt={item.client} />
        </div>
        <div className={`w-full text-white my-auto`}>
          <h2 className="text-5xl tracking-wider font-semibold mb-10">Numbers Show Proof</h2>
          <div className="flex w-full lg:w-[85%] justify-between mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value1
              }</p>
              <p className="text-lg">{
                item.title1
              }
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value2
              }</p>
              <p className="text-lg">{
                item.title2
              }
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value3
              }</p>
              <p className="text-lg">{
                item.title3
              }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudyDescComp
