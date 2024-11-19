import React from 'react'

const ContactContainer = () => {
  return (
    <div className='lg:bg-[#DAC5A7] lg:bg-opacity-5 px-[50px] py-[75px] mt-[100px] lg:h-screen'>
        <div className='text-left'>
            <p className='text-sm text-opacity-25'>contact</p>
            <h1 className='text-2xl'>Let's get in touch</h1>

            <div className='grid grid-cols-1 gap-3 mt-5'>
                <input type="text" placeholder='Name' className='rounded-lg px-3 py-1 bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30'/>
                <input type="text" placeholder='Email' className='rounded-lg px-3 py-1 bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30'/>
                <input type="text" placeholder='Message' className='rounded-lg px-3 py-1 h-[100px] bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30'/>
                <input type="submit" value="Send Message" className='rounded-lg py-3 px-5 font-normal bg-opacity-5 hover:bg-[#DAC5A7] hover:text-black bg-[#DAC5A7] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200' />
            </div>
        </div>
    </div>
  )
}

export default ContactContainer