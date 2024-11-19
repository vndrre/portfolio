import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS"],
    image: "https://picsum.photos/200/300",
    button: "Project 1",
    destination: "/projectview/1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS"],
    image: "https://picsum.photos/200/300",
    button: "Project 2",
    destination: "/projectview/2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A web application built using React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS"],
    image: "https://picsum.photos/200/300",
    button: "Project 3",
    destination: "/projectview/3",
  },
];

const ExampleWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="font-satoshi lg:px-[250px] lg:py-[100px]" ref={ref} id="#examplework">
      <h2 className="text-5xl italic text-center mt-[100px]">PREVIOUS WORK</h2>
      <hr className="border border-[#DAC5A7] border-opacity-50 lg:mx-[400px] mx-[50px] md:mx-[125px] mt-[25px] mb-[50px]" />
      <div className="lg:mx-auto mx-[45px] md:mx-[175px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isInView={isInView}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExampleWork;
