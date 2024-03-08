'use client'

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const AboutMe = () => {
    const [tab, setTab] = useState("skills")
    const [ isPending , startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id)
        })
    }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/image4.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Who Is Agatha?</h2>
          <p className="text-base md:text-lg">
            I am a Full Stack Developer driven by a passion for software
            engineering transformative power in converting raw data into
            valuable insights and visual experiences. My motivation stems from a
            desire to build websites and applications. I take pride in my strong
            time management, organizational, independence, and teamwork skills.
            I am eager to explore building foundations from scratch, web
            development, and any hands-on projects. Coming from a background in
            hospitality management with over 8 years of experience, I am proud
            of managing projects that innovate and being promoted to a
            management role. In the next 5 years, I aspire to create an
            after-school program for kids of color teaching them to code, and
            contribute to building the tech industry in Ghana. I find joy in
            crafting solutions from scratch and optimizing function pipelines,
            and I am excited about the endless possibilities in the world of
            software engineering.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
            <span className="mr-3 font-semibold hover:text-white text-[#adb7be] border-b border-purple-500"> Skills </span>
            <span> Experience </span>
            <span> Education </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
