import React, { useRef } from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React.js", category: "Web Development", icon: <FaReact /> },
  { name: "Vue.js", category: "Web Development", icon: <FaVuejs /> },
  { name: "Tailwind CSS", category: "Web Development", icon: <SiTailwindcss /> },
  { name: "Figma", category: "Web Design", icon: <LuFigma /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    <section ref={ref} className="font-satoshi lg:px-[250px] lg:py-[100px] lg:mt-[250px]">
      <div className="lg:block md:hidden hidden">
        <h2 className="text-5xl italic text-center">SKILLS</h2>
        <hr className="border border-[#DAC5A7] border-opacity-50 mx-[530px] mt-[25px] mb-[50px]" />

        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-[#DAC5A7] text-opacity-30">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="block md:block lg:hidden mt-[180px] py-[100px]">
          <div className="text-center">
            <h2 className="text-3xl">SKILLS</h2>
            <hr className="border border-[#DAC5A7] border-opacity-50 mx-[50px] my-[25px]"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 px-[25px] md:px-[100px] mt-[50px]">
            {skills.map((skill, index) =>(
              <div className="bg-white bg-opacity-10 md:h-[200px] backdrop-blur-sm rounded-lg flex flex-col items-center py-[25px]">
                <div className="text-2xl"> {skill.icon} </div>
                <h3 className="text-xl"> {skill.name} </h3>
                <p className="text-sm italic"> {skill.category} </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Skills;
