import React from 'react'
import NavBar from '../components/NavBar'
import MobileNavBar from '../components/MobileNavBar'
import ExampleWork from '../components/homepage-components/ExampleWork'
import LetsTalk from '../components/homepage-components/LetsTalk'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Work = () => {
  return (
    <div className='font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110]'>
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>
      
      <ExampleWork />
      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Work