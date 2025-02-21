import React from "react";

import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import LetsTalk from "../components/homepage-components/LetsTalk";

const CVPage = () => {
  return (
    <div className="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] min-h-screen">
      {/* Navigation */}
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>

      {/* CV Content */}
      <div className="mt-[100px] md:mt-[110px] lg:mt-[170px] px-4">
        <div className="lg:mb-[50px] text-center">
          <h1 className="text-5xl italic mb-4
          animate-fade-up animate-once animate-duration-[750ms] animate-delay-100 animate-normal">
            Curriculum Vitae
          </h1>

          <hr className="border border-[#DAC5A7] border-opacity-50 mx-auto w-1/3 my-[20px]
          animate-fade-up animate-once animate-duration-[500ms] animate-delay-100 animate-normal"/>
        </div>

        <div className="lg:mx-[200px] space-y-8">
          {/* Personal Information */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl 
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Personal Information</h2>
            <p><strong>Name:</strong> Andre Leppik</p>
            <p><strong>Date of Birth:</strong> 15 December 2005</p>
            <p><strong>Phone:</strong> +372 5626 6726</p>
            <p><strong>Email:</strong> aleppik7@gmail.com</p>
          </div>

          {/* Education */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Education</h2>
            <p><strong>2023 – 2026:</strong> Kuressaare Vocational School, Junior Software Developer (currently enrolled)</p>
            <p><strong>2013 – 2022:</strong> Kuressaare Vanalinna School (Basic Education)</p>
          </div>

          {/* Work Experience */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
            <p><strong>May 2024 – June 2024:</strong> Anakalypse OÜ, Web Development Intern</p>
          </div>

          {/* Language Skills */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Language Skills</h2>
            <ul className="list-disc ml-6">
              <li>Estonian – Native</li>
              <li>English – Good comprehension and speaking, satisfactory writing</li>
              <li>German – Basic comprehension and speaking, okay writing</li>
            </ul>
          </div>

          {/* Computer Skills */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Computer Skills</h2>
            <p>Proficient in: Visual Studio Code, Ubuntu (Linux Subsystem), Figma, Office 365, Adobe Photoshop, Adobe Illustrator</p>
          </div>

          {/* Interests */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Interests</h2>
            <p>Music, art, graphic design</p>
          </div>

          {/* Personal Qualities */}
          <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl
          animate-fade-left animate-once animate-duration-[500ms] animate-delay-100 animate-normal">
            <h2 className="text-3xl font-semibold mb-4">Personal Qualities</h2>
            <p>Responsible, friendly, team player, creative thinking</p>
          </div>
        </div>
      </div>

      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CVPage;
