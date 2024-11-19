import React from 'react'

const NavBar = () => {

    let Links = [
        {name:"HOME PAGE", link:"/"},
        {name:"ABOUT", link:"/about"},
        {name:"SERVICES", link:"/services"},
        {name:"WORK", link:"/work"},
    ]
    
  return (
    <div className='fixed top-10 z-50 lg:flex md:hidden hidden bg-[#080808] bg-opacity-25 backdrop-blur-sm font-satoshi text-[#DAC5A7] mx-auto py-[15px] px-[25px] rounded-full border-[1px] border-white border-opacity-15'>
        <div className='flex items-center gap-7'>
            <div>
                <a href="/" className='text-2xl hover:opacity-75 duration-200'>vndre.</a>
            </div>

            <hr className='flex flex-col border-[#DAC5A7] border-opacity-15 border-[1px] h-[35px]'/>

            <ul className='flex items-center gap-5 text-xl font-light'>
                {
                    Links.map((link) => (
                        <li key={link.name} className='hover:text-[#eed2ab] rounded-full hover:bg-[#DAC5A7] hover:bg-opacity-10 py-2 px-3 duration-100'>
                            <a href={link.link} className='drop-shadow-lg'> {link.name} </a>
                        </li>
                    ))
                }

                <select name="" id="" className='hidden'></select>

                <a href="/contact" className='py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full'>
                    LET'S TALK
                </a>
            </ul>
        </div>
    </div>
  )
}

export default NavBar