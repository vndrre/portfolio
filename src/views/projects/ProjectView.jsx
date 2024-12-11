import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Github, 
  ExternalLink, 
  Code 
} from 'lucide-react';

import NavBar from "../../components/NavBar";
import MobileNavBar from "../../components/MobileNavBar";
import LetsTalk from "../../components/homepage-components/LetsTalk";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const projects = [
  {
    id: 1,
    title: "Gran Turismo Website",
    year: 2023,
    description: "A promotional website for the movie Gran Turismo (2023), built using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    image: "https://picsum.photos/400/250",
    starr: {
      situation: "The goal was to create a website for the movie Gran Turismo (2023) as part of an introductory web development course.",
      task: "Develop a functional, mobile-optimized website with movie-related content, adhering to good design and coding practices.",
      action: "Designed prototypes, developed the mobile and desktop versions, optimized performance, and deployed the site to a live server.",
      results: "Delivered a functional, visually appealing, and user-friendly website within the timeline.",
      reflection: "Improved teamwork, communication skills, and technical expertise in HTML and CSS. Learned the importance of clean code and efficient planning."
    },
    github: "https://github.com/",
    live: "/"
  },
  {
    id: 2,
    title: "Design Equipment Renting App",
    year: 2024,
    description: "A web application to manage equipment rentals for a design department.",
    technologies: ["ASP.NET", "MySQL", "Figma"],
    image: "https://picsum.photos/400/250",
    starr: {
      situation: "Create an app to track and manage equipment rentals with features like barcode scanning and color-coded inventory statuses.",
      task: "Develop a user-friendly application with a mobile and desktop view, integrated with a database for rental history.",
      action: "Collaborated on UI/UX design, implemented database integration, and added functionality for barcode scanning and inventory tracking.",
      results: "Successfully delivered the app with functional design and database integration. Addressed feedback with iterative improvements.",
      reflection: "Gained hands-on experience in database management and ASP.NET development. Identified the need for more robust testing."
    },
    github: "https://github.com/JaanikaT/Design_Equipment_Rent",
    live: "/"
  },
  {
    id: 3,
    title: "Queen Band Website",
    year: 2024,
    description: "A multi-section website dedicated to the legendary band Queen.",
    technologies: ["Figma", "GitHub", "Vercel"],
    image: "https://picsum.photos/400/250",
    starr: {
      situation: "Develop a website for the band Queen, including sections like Home, About, Music, and Fun Facts.",
      task: "Design and implement a responsive website with clear navigation and engaging content.",
      action: "Assigned team roles, designed the layout in Figma, developed the site using collaborative tools, and deployed it on Vercel.",
      results: "Delivered a responsive and functional website. Team members enhanced their skills in design and development.",
      reflection: "Learned the value of precise task allocation and effective communication in team settings. Improved GitHub project management skills."
    },
    github: "https://github.com/",
    live: "/"
  }
];

const ProjectView = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('situation');

  if (!project) {
    return (
      <div className="min-h-screen font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Project Not Found</h2>
          <p className="opacity-75">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-2 capitalize">{activeTab}</h3>
        <p className="text-lg opacity-75">{project.starr[activeTab]}</p>
      </div>
    );
  };

  return (
    <div className="font-satoshi text-[#DAC5A7] bg-gradient-to-b from-[#151414] to-[#121110] min-h-screen">
      {/* Navigation */}
      <div className='lg:flex lg:justify-center'>
        <NavBar />
      </div>

      <div className='flex md:flex lg:hidden'>
        <MobileNavBar />
      </div>

      {/* Project Details */}
      <div className="mt-[100px] md:mt-[110px] lg:mt-[170px] px-4">
        <div className="lg:mb-[50px]">
          <h2 className="text-5xl italic text-center mb-4">{project.title}</h2>
          <hr className="border border-[#DAC5A7] border-opacity-50 mx-[70px] md:mx-[200px] lg:mx-[750px] my-[20px]"/>
          <p className="text-center text-2xl italic mb-10 md:mb-10 lg:mb-0"> {project.year} </p>
        </div>
      
        <div className="lg:flex items-center lg:mx-[200px] lg:gap-20 space-y-8 lg:space-y-0">
          {/* Project Image */}
          <div className="lg:w-1/2 ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl shadow-lg transition-transform hover:scale-105"
            />
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2 space-y-6">
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#DAC5A7] bg-opacity-10 text-sm px-3 py-2 rounded-full flex items-center gap-2"
                >
                  <Code className="w-4 h-4 opacity-75" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:flex lg:justify-center lg:space-x-4 mb-6">
              {Object.keys(project.starr).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    capitalize 
                    py-3 px-5 rounded-full
                    border-[#DAC5A7] border-[1px] border-opacity-25
                    transition-colors 
                    ${activeTab === tab 
                      ? 'bg-[#DAC5A7] bg-opacity-20 text-[#DAC5A7]' 
                      : 'bg-[#DAC5A7] bg-opacity-5 hover:bg-opacity-10'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-xl">
              {renderTabContent()}
            </div>

            {/* Project Links */}
            <div className="flex justify-center gap-5">
              <a 
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full"
              > 
                <Github className="w-5 h-5" /> GitHub 
              </a>

              <a 
                href={project.live} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full"
              > 
                <ExternalLink className="w-5 h-5" /> Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>

      <LetsTalk />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectView;
