import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button';

const LetsTalk = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="font-satoshi mt-[100px]">
      <div className="marquee w-full bg-[#DAC5A7] bg-opacity-10 py-5">
        <p>
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
          <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK <span className="mx-[45px]">+++</span> LET'S TALK
        </p>
      </div>

      <section ref={ref} className="lg:px-[250px] lg:pt-[100px] grid place-items-center bg-[#DAC5A7] bg-opacity-5">
        <motion.div
          className="lg:grid gap-[20px] text-center py-[100px] md:hidden hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-light">PROJECT IN MIND?</p>
          <h1 className="text-7xl">
            Let's Make Your <br /> <span className="italic">Website Shine</span>
          </h1>
          <p className="font-light">
            Web design and development <br /> services to help your business stand out.
          </p>

          <div className='mt-5'>
            <a href="/contact">
              <Button> GET IN TOUCH </Button></a>
          </div>
        </motion.div>

        <div className='blog md:block lg:hidden'>
          <div className='text-center grid grid-col-start-1 gap-2 py-[150px]'>
            <p className='text-sm font-light'>PROJECT IN MIND?</p>

            <h1 className='text-4xl md:text-5xl py-2'>
              Let's Make Your <br /> <span className='italic'> Website Shine </span>
            </h1>

            <p className="text-[15px] font-light">
              Web design and development <br /> services to help your business stand out.
            </p>

            <div className='mt-5'>
              <a href="/contact">
                <Button> GET IN TOUCH </Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetsTalk;
