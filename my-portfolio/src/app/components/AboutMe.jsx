'use client'

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Nodejs</li>
                <li>jQuery</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Tailwind CSS</li>
                <li>SQL</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Express</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>General Assembly</li>
                <li>New York City College of Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Engineering Immersive</li>
                <li>Google Professional Project Management</li>
                <li>Product Management</li>
            </ul>
        )
    },
]

const AboutMe = () => {
    const [tab, setTab] = useState("skills")
    // const [ isPending , startTransition ] = useTransition()

    const handleTabChange = (id) => {
        // startTransition(() =>{
        //     setTab(id)
        // })
        setTab(id)
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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab==="certifications"}>Certifications</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
