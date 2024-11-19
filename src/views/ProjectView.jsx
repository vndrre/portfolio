import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectView = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="font-satoshi px-[250px] py-[100px]" ref={ref}>
      <h2 className="text-5xl italic text-center">PREVIOUS WORK</h2>
      <hr className="border border-[#DAC5A7] border-opacity-50 mx-[400px] mt-[25px] mb-[50px]"/>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white bg-opacity-10 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white bg-opacity-10 text-sm px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                
              <div className="mt-10 mb-2">
                <Link 
                  to={project.destination} 
                  className="py-3 px-5 hover:bg-[#c5ae8d] bg-[#DAC5A7] duration-100 text-black rounded-sm"
                >
                  {project.button}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectView;