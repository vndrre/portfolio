import React from 'react'

import NavBar from '../components/NavBar'
import LandingPage from '../components/homepage-components/LandingPage'
import Skills from '../components/homepage-components/Skills'
import PreviousWork from '../components/homepage-components/ExampleWork'
import LetsTalk from '../components/homepage-components/LetsTalk'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MobileNavBar from '../components/MobileNavBar'


const HomePage = () => {
  return (
    <div class="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] h-full">
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>

      <LandingPage />
      <Skills />
      <PreviousWork />
      <LetsTalk />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default HomePage