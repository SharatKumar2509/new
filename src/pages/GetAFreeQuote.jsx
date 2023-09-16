import { useEffect } from 'react'

const GetAFreeQuote = () => {

  useEffect(() => {
    document.title = "Overninja: Reach out to us for solutions";
    window.scrollTo(0,0);
  })

  return (
    <div className='h-[10vh] sm:hidden'>
      {/* //just to make mobile responsive */}
    </div>
  )
}

export default GetAFreeQuote