"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 lg:col-span-7 place-self-center text-center sm-text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-300">
              {" "}
              Welcome!{" "}
            </span>
            I am Agatha <br></br>
            <TypeAnimation
              sequence={[
                "Backend Developer",
                5000,
                "Technical Project Manager",
                5000,
                "Technical Program Manager",
                5000,
                "Full Stack Developer",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#060c10] text-base sm:text-lg mb-6 lg:text-xl">
            As a versatile Backend / Full Stack Developer, I craft and manage
            websites, excelling in Project and Product Management. With a knack
            for fixing and building anything, I am passionate about transforming
            raw data into valuable insights and skilled in mmodifying raw code into functional
            solutions, enhancing communication between front-end teams and
            engineers, and ensuring alignment with company goals for successful
            sprint deployments. My work not only functions flawlessly but also
            looks good!
          </p>
          <div className="lg:flex-row items-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black bg-gradient-to-r from-primary-400 to-secondary-300"
            >
              {" "}
              Hire Me{" "}
            </a>
            <a
              href="https://docs.google.com/document/d/1AupQxkujAtb1Q-vfUuW2P2eoQ5HMPcTNTylZlBr5LHY/edit"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-200 text-black border border-black mt-3 lg:mt-0"
            >
              {" "}
              View Resume{" "}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 lg:col-span-5 place-self-center mt-4 lg:mt-0 flex justify-center"
        >
          <div className="rounded-full bg-[#181818] bg-opacity-10 w-[150px] h-[150px] lg:w-[500px] lg:h-[550px] flex items-center justify-center">
            <Image
              src="/images/profilepic.png"
              alt="profilepic"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
