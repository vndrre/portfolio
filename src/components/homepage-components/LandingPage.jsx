import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedArrow from "../AnimatedArrow";
import Cube from "./hp-3d-comps/Cube";


const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div> 
      <div ref={ref} className="lg:grid lg:place-items-center md:hidden hidden">
        <motion.div
          className="grid grid-cols-1 gap-10 text-center lg:mt-[265px] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="lg:text-7xl text-5xl">
            Web Designer <br /> <span className="italic">& Developer</span>
          </h1>
          <p className="lg:text-xl">
            Web design and development <br /> services to help your business stand out.
          </p>
          
          <div className="mt-10 opacity-[40%]">
            <Cube />
          </div>

          <img
            src="/src/assets/landing-image.png"
            alt=""
            className="absolute top-0 left-0 opacity-5 h-[800px] w-full hidden"
          />
        </motion.div>
      </div>

      <div className="text-center block md:block lg:hidden">
        <div className="grid grid-cols-1 gap-3 mt-[265px]">
          <h1 className="text-5xl md:text-6xl">
            Web Designer <br /> <span className="italic"> & Developer </span>
          </h1>
          <p className="text-[15px] md:text-xl">
            Web design and development <br /> services to help your business stand out.
          </p>
        </div>
      </div>

      <div className="mt-[160px] md:mt-[160px] lg:mt-[100px]">
        <AnimatedArrow />
      </div>
    </div>
  );
};

export default LandingPage;
