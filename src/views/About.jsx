import React from 'react';
import { Code, Palette, Lightbulb, Send, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LetsTalk from '../components/homepage-components/LetsTalk';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'

const AboutPage = () => {
  const creativeToolkit = [
    { 
      category: 'Frontend', 
      tools: ['React', 'Vue', 'Tailwind CSS'],
      icon: <Globe className="w-10 h-10 text-" />
    },
    { 
      category: 'Backend', 
      tools: ['Node.js', 'MySQL'],
      icon: <Code className="w-10 h-10 text-" />
    },
    { 
      category: 'Creative Tools', 
      tools: ['Figma', 'Framer Motion', "Wordpress"],
      icon: <Rocket className="w-10 h-10 text-" />
    }
  ];

  const projectHighlights = [
    {
      title: "Interactive Data Visualization",
      description: "Created a complex dashboard using D3.js and React, transforming complex data into intuitive visual narratives.",
      skills: ["D3.js", "React", "Data Visualization"]
    },
    {
      title: "Generative Art Platform",
      description: "Developed a web application that generates unique art pieces using algorithmic design principles.",
      skills: ["Canvas API", "Generative Design", "Creative Coding"]
    }
  ];

  return (
    <div className="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110]">
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>

      <motion.div 
        className="mt-[100px] md:mt-[110px] lg:mt-[170px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <header className="p-12 text-center">
          <h1 className="text-5xl mb-4 tracking-tight">
            Hello, I'm <span className='italic'>vndre.</span>
          </h1>
          <hr className='border border-[#DAC5A7] border-opacity-50 lg:mx-[555px] mx-[50px] md:mx-[125px] mt-[25px] mb-[10px]'/>

          <p className="text-2xl max-w-2xl mx-auto ">
            Creative Web Developer
          </p>
        </header>

        {/* Main Content */}
        <div className="p-10 space-y-12 lg:mx-[300px]">
          {/* Creative Approach */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Creative Development Philosophy
              </h2>
              <p className="opacity-75 text-lg leading-relaxed">
                I approach web development as a form of digital art, where code is my paintbrush and the browser is my canvas. 
                Each project is an opportunity to blend technical precision with creative innovation, crafting experiences 
                that are not just functional, but truly memorable.
              </p>
            </div>
            <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl">
              <Lightbulb className="w-16 h-16 text-[#DAC5A7] mx-auto mb-4" />
              <h3 className="text-center text-xl font-semibold text-[#DAC5A7]">
                Innovate. Create. Inspire.
              </h3>
            </div>
          </section>

          {/* Technical Toolkit */}
          <section className="bg-[#DAC5A7] bg-opacity-5 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 ">
              Creative Technical Toolkit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {creativeToolkit.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-center mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 ">
                    {section.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {section.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className="bg-[#DAC5A7] bg-opacity-5 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </motion.div>

      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;