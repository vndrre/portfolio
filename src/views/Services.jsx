import React, { useState } from 'react';

import { 
  Code, 
  PenTool, 
  Layout, 
  Layers, 
  Smartphone, 
  Globe 
} from 'lucide-react';

import { motion } from "framer-motion";

import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LetsTalk from '../components/homepage-components/LetsTalk';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Layout className="w-12 h-12 text-[#DAC5A7]" />,
      title: "Web Design",
      description: "Crafting visually stunning and intuitive user interfaces that tell your brand's unique story. I blend aesthetic appeal with user-centric design principles.",
      details: [
        "Custom UI/UX Design",
        "Responsive Layout Creation",
        "Design System Development",
        "Figma Prototyping"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-[#DAC5A7]" />,
      title: "Web Development",
      description: "Transforming design concepts into fully functional, high-performance web applications using modern technologies.",
      details: [
        "Frontend Development (React, Vue)",
        "Backend Integration",
        "API Development",
        "Performance Optimization"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#DAC5A7]" />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices and screen sizes.",
      details: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Adaptive Layouts",
        "Performance Optimization"
      ]
    },
    {
      icon: <Layers className="w-12 h-12 text-[#DAC5A7]" />,
      title: "CMS Development",
      description: "Creating flexible and user-friendly content management solutions tailored to your specific needs.",
      details: [
        "WordPress Development",
        "Custom CMS Solutions",
        "E-commerce Integrations",
        "Content Strategy"
      ]
    },
    {
      icon: <PenTool className="w-12 h-12 text-[#DAC5A7]" />,
      title: "Brand Identity",
      description: "Developing cohesive visual identities that communicate your brand's essence across digital platforms.",
      details: [
        "Logo Design",
        "Brand Guidelines",
        "Digital Asset Creation",
        "Visual Storytelling"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-[#DAC5A7]" />,
      title: "SEO & Performance",
      description: "Optimizing your web presence to improve visibility, user experience, and search engine rankings.",
      details: [
        "Technical SEO Audit",
        "Page Speed Optimization",
        "Keyword Strategy",
        "Analytics Integration"
      ]
    }
  ];

  return (
    <div className="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] min-h-screen">
      {/* Navigation */}
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>

      {/* Header */}
      <div className="mt-[100px] md:mt-[110px] lg:mt-[170px]">
        <header className="p-12 text-center">
          <h1 className="text-5xl mb-4 tracking-tight
          animate-fade-up animate-once animate-duration-[750ms] animate-delay-100 animate-normal">
            My <span className='italic'>Services</span>
          </h1>
          <hr className='border border-[#DAC5A7] border-opacity-50 lg:mx-[555px] mx-[50px] md:mx-[125px] mt-[25px] mb-[10px]
          animate-fade-up animate-once animate-duration-[500ms] animate-delay-100 animate-normal'/>

          <p className="text-2xl max-w-2xl mx-auto opacity-75
          animate-fade-up animate-once animate-duration-[850ms] animate-delay-100 animate-normal">
            Transforming Ideas into Digital Experiences
          </p>
        </header>

        {/* Services Grid */}
        <motion.div 
          className="p-10 lg:mx-[200px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`
                  bg-[#DAC5A7] bg-opacity-5 
                  p-6 rounded-xl 
                  transition-all duration-300
                  hover:bg-opacity-10
                  cursor-pointer
                  ${activeService === index ? 'ring-2 ring-[#DAC5A7] ring-opacity-50' : ''}
                `}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-center opacity-75 mb-4">
                  {service.description}
                </p>
                {activeService === index && (
                  <div className="mt-6 space-y-2">
                    <h4 className="text-lg font-semibold text-center mb-3">
                      What I Offer:
                    </h4>
                    <ul className="space-y-2 text-sm opacity-75">
                      {service.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-center bg-[#DAC5A7] bg-opacity-10 py-2 rounded-full"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;