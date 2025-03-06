import React, { useRef } from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import SkillsCube from "./hp-3d-comps/SkillsCube";

const skills = [
  { name: "React.js", category: "Web Development", icon: <FaReact /> },
  { name: "Vue.js", category: "Web Development", icon: <FaVuejs /> },
  { name: "Tailwind CSS", category: "Web Development", icon: <SiTailwindcss /> },
  { name: "Figma", category: "Web Design", icon: <LuFigma /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative font-satoshi lg:px-[250px] lg:py-[100px] lg:mt-[250px]">

      <div className="mt-10 opacity-[40%]">
        <SkillsCube />
      </div>

      <div className="lg:block md:hidden hidden relative">
        <h2 className="text-5xl italic text-center">SKILLS</h2>
        <hr className="border border-[#DAC5A7] border-opacity-50 mx-[530px] mt-[25px] mb-[50px]" />

        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-lg shadow-md flex flex-col items-center"
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
    </section>
  );
};

export default Skills;
