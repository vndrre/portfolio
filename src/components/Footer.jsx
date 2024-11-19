import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {

    let Links = [
        {name: "Github", icon: <Github />, link: "https://github.com/vndrre"},
        {name: "Linkedin", icon: <Linkedin />, link: "https://www.linkedin.com/in/andre-leppik-4a6798339/"},
        {name: "Twitter", icon: <Twitter />, link: "https://x.com/vndreart"},
    ]

    return (
        <div className='w-full bg-[#DAC5A7] bg-opacity-5 pt-[150px] pb-[35px]'>
            <div className='text-center'>
                <h1 className="text-xl italic">
                    Social Media
                </h1>

                <div className='mt-5 flex justify-center items-center gap-3'>
                    {
                        Links.map((link) => (
                            <div>
                                <a href={link.link} className='hover:bg-[#b39885] duration-100' target='_blank'>
                                    {link.icon}
                                </a>
                            </div>
                        ))
                    }
                </div>
                
                <div className='mt-5'>
                    <p className="text-[#DAC5A7] text-sm italic">
                        &copy; {new Date().getFullYear()} vndre. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer