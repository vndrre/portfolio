import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Github, 
  ExternalLink, 
  Code, 
  Layers, 
  Target 
} from 'lucide-react';

import NavBar from "../../components/NavBar";
import MobileNavBar from "../../components/MobileNavBar";
import LetsTalk from "../../components/homepage-components/LetsTalk";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://picsum.photos/400/250",
    detailedDescription: "This is a more detailed view of Project 1. It highlights all the features, challenges, and outcomes of the project.",
    challenges: [
      "Complex state management",
      "Real-time data synchronization",
      "Performance optimization"
    ],
    features: [
      "Responsive design",
      "Authentication system",
      "Dynamic data rendering"
    ],
    github: "https://github.com/",
    live: "/",
    challenges: [
      "Implementing complex state management",
      "Ensuring cross-browser compatibility",
      "Optimizing performance for large datasets"
    ],
    learnings: [
      "Advanced React hooks",
      "Firebase integration",
      "Responsive design techniques"
    ]
  },

  {
    id: 2,
    title: "Project 2",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://picsum.photos/400/250",
    detailedDescription: "This is a more detailed view of Project 1. It highlights all the features, challenges, and outcomes of the project.",
    challenges: [
      "Complex state management",
      "Real-time data synchronization",
      "Performance optimization"
    ],
    features: [
      "Responsive design",
      "Authentication system",
      "Dynamic data rendering"
    ],
    github: "https://github.com/",
    live: "/",
    challenges: [
      "Implementing complex state management",
      "Ensuring cross-browser compatibility",
      "Optimizing performance for large datasets"
    ],
    learnings: [
      "Advanced React hooks",
      "Firebase integration",
      "Responsive design techniques"
    ]
  },

  {
    id: 3,
    title: "Project 3",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://picsum.photos/400/250",
    detailedDescription: "This is a more detailed view of Project 1. It highlights all the features, challenges, and outcomes of the project.",
    challenges: [
      "Complex state management",
      "Real-time data synchronization",
      "Performance optimization"
    ],
    features: [
      "Responsive design",
      "Authentication system",
      "Dynamic data rendering"
    ],
    github: "https://github.com/",
    live: "/",
    challenges: [
      "Implementing complex state management",
      "Ensuring cross-browser compatibility",
      "Optimizing performance for large datasets"
    ],
    learnings: [
      "Advanced React hooks",
      "Firebase integration",
      "Responsive design techniques"
    ]
  },
  // ... other projects (similar structure)
];

const ProjectView = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('description');

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
    switch(activeTab) {
      case 'description':
        return (
          <div className="space-y-4">
            <p className="text-lg opacity-75">{project.detailedDescription}</p>
          </div>
        );
      case 'challenges':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Project Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li 
                  key={index} 
                  className="bg-[#DAC5A7] bg-opacity-5 py-2 px-4 rounded-full"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'learnings':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Key Learnings</h3>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li 
                  key={index} 
                  className="bg-[#DAC5A7] bg-opacity-5 py-2 px-4 rounded-full"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
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
              {['description', 'challenges', 'learnings'].map((tab) => (
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