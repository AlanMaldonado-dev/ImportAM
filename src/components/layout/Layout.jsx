
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='main-content min-h-screen bg-[#fc4b08]'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout