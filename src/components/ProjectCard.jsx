import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, isInView, index }) => {
  return (
    <motion.div
      className="bg-[#DAC5A7] bg-opacity-5 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[#DAC5A7] opacity-35 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-[#DAC5A7] bg-opacity-5 text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-10 mb-2">
          <a
            href={project.destination}
            className="py-3 px-5 font-normal bg-opacity-50 hover:bg-[#DAC5A7] hover:text-black bg-[#272420] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200 rounded-full"
          >
            {project.button}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
