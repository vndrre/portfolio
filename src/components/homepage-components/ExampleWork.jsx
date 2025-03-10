import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../ProjectCard";
import Cube from "./hp-3d-comps/Cube";
import WorkCube from "./hp-3d-comps/WorkCube";

const projects = [
  {
    id: 1,
    title: "Gran Turismo Website",
    year: 2023,
    description: "A promotional website for the movie Gran Turismo (2023), built using HTML and CSS.",
    technologies: ["Figma", "HTML", "CSS"],
    image: "https://picsum.photos/400/250",
    destination: "/projectview/1",
  },
  {
    id: 2,
    title: "Design Equipment Renting App",
    year: 2024,
    description: "A web application to manage equipment rentals for a design department.",
    technologies: ["ASP.NET", "MySQL", "Figma"],
    image: "https://picsum.photos/400/250",
    destination: "/projectview/2",
  },
  {
    id: 3,
    title: "Queen Band Website",
    year: 2024,
    description: "A multi-section website dedicated to the legendary band Queen.",
    technologies: ["Figma", "HTML", "CSS"],
    image: "https://picsum.photos/400/250",
    destination: "/projectview/3",
  }
];

const ExampleWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="font-satoshi lg:px-[250px] lg:py-[100px]" ref={ref} id="#examplework">
      <div className="mt-10 opacity-[40%]">
        <WorkCube /> 
      </div>

      <h2 className="text-5xl italic text-center mt-[100px]
      animate-fade-up animate-once animate-duration-[750ms] animate-delay-100 animate-normal">
        Previous Work
      </h2>
      <hr className="border border-[#DAC5A7] border-opacity-50 lg:mx-[400px] mx-[50px] md:mx-[125px] mt-[25px] mb-[50px]
      animate-fade-up animate-once animate-duration-[500ms] animate-delay-100 animate-normal" />
      <div className="lg:mx-auto mx-[45px] md:mx-[175px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 z-50 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isInView={isInView}
            index={index}
          />
        ))}
      </div>

      <div className="ml-[1200px] mt-36 opacity-[40%]">
        <Cube />
      </div>
    </section>
  );
};

export default ExampleWork;
