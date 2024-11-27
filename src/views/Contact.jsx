import React from 'react';
import { Send, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import Footer from '../components/Footer';
import LetsTalk from '../components/homepage-components/LetsTalk';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  return (
    <div className="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] h-full">
      {/* Navigation */}
      <div className="lg:flex lg:justify-center">
        <NavBar />
      </div>
      <div className="flex md:flex lg:hidden">
        <MobileNavBar />
      </div>

      {/* Hero Section */}
      <header className="mt-[100px] md:mt-[110px] lg:mt-[170px] text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-gradient">
          Let’s Collaborate!
        </h1>
        <p className="text-lg text-opacity-80 max-w-lg mx-auto">
          Have a project in mind? I’m just a message away!
        </p>

        <hr className='border border-[#DAC5A7] border-opacity-50 lg:mx-[575px] mx-[50px] md:mx-[125px] mt-[25px] mb-[10px]'/>
      </header>

      {/* Contact Form */}
      <motion.div 
        className="p-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="max-w-4xl mx-auto bg-[#DAC5A7] bg-opacity-5 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 rounded-lg bg-[#DAC5A7] bg-opacity-5 focus:ring-1 placeholder:text-[#DAC5A6] placeholder:opacity-50 focus:ring-[#DAC5A7] focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-lg bg-[#DAC5A7] bg-opacity-5 focus:ring-1 placeholder:text-[#DAC5A6] placeholder:opacity-50 focus:ring-[#DAC5A7] focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            {/* Message Field */}
            <div>
              <label className="block text-lg font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full mt-2 p-3 rounded-lg bg-[#DAC5A7] bg-opacity-5 focus:ring-1 placeholder:text-[#DAC5A6] placeholder:opacity-50 focus:ring-[#DAC5A7] focus:outline-none"
                placeholder="What’s on your mind?"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className='py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full'
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </motion.div>

      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
