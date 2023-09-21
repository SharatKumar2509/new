import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const ConstantSection = () => {
  return (
   <>
    <Navbar />
      <Outlet />
    <Footer />
   </>
  )
}

export default ConstantSection