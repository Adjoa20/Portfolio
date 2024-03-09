"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm-text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-100">
              {" "}
              Welcome,{" "}
            </span>
            My Name Is Agatha And I Am A {" "}
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                5000, // wait 1s before replacing "Web Developer" with "Backend Developer"
                "Backend Developer",
                5000,
                "Backend DevOps",
                5000,
                "Full Stack Developer",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Full Stack Developer who can build you furniture or a website
            and project/product manage with efficiency and success. I have a
            knack for fixing and building anything and have a passion for
            transforming raw data into valuable insights with an enjoyable
            visual experience. I make things that work and fulfill a need and
            function AND I can make it look good!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              {" "}
              Hire Me{" "}
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              {" "}
              Download Resume{" "}
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative justify-center">
            <Image
              src="/images/profilepic.png"
              alt="profilepic"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
