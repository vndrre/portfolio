import React from 'react'
import NavBar from '../components/NavBar'
import MobileNavbar from '../components/MobileNavBar'
import ContactContainer from '../components/ContactContainer'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='font-satoshi text-[#DAC5A7] bg-[#151414]'>
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='lg:hidden md:flex flex'>
        <MobileNavbar />
      </div>

      <ContactContainer />

      <Footer />
    </div>
  )
}

export default Contact