import React from 'react'

const Button = ( {children} ) => {
  return (
    <button className='py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full'> {children} </button>
  )
}

export default Button