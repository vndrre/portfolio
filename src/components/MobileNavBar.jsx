import React, {useState} from 'react'

import { MenuIcon } from 'lucide-react';

const MobileNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='bg-[#080808] bg-opacity-25 backdrop-blur-sm font-satoshi text-[#DAC5A7] p-5 w-full fixed top-0 z-50'>
      <div className='flex justify-between items-center px-3'>
        <div>
          <a href="/" className='text-xl italic'>vndre.</a>
        </div>

        <div className="relative">
          <button
            className=" text-2xl font-medium py-2 px-4 rounded"
            onClick={toggleDropdown}
          >
            <MenuIcon />
          </button>

          {isOpen && (
            <div className="fixed top-20 right-5 bg-[#22201e] border-[1px] border-[#DAC5A7] border-opacity-30 text-[#DAC5A7] shadow-lg rounded py-2">
              <a href="/" className="block px-4 py-2">
                Home
              </a>
              <a href="/services" className="block px-4 py-2">
                Services
              </a>

              <a href="/work" className="block px-4 py-2">
                Work
              </a>

              <a href="/about" className="block px-4 py-2">
                About
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar