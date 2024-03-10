"use client";

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
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>General Assembly</li>
        <li>New York City College of Technology</li>
      </ul>
    ),
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
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  // const [ isPending , startTransition ] = useTransition()

  const handleTabChange = (id) => {
    // startTransition(() =>{
    //     setTab(id)
    // })
    setTab(id);
  };

  return (
    <section className="text-white">
      <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="md:w-1/2">
    <Image
      src="/images/image2.png"
      width={500}
      height={500}
      alt="About Me"
      className="md:mr-8 items-center"
    />
  </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">Who Is Agatha?</h2>
          <p className="text-base md:text-lg">
            As a Full Stack Developer, I am deeply passionate about the
            transformative power of software engineering, turning raw data into
            valuable insights and compelling visual experiences. My drive to
            create innovative websites and applications is matched by my strong
            skills in time management, organization, independence, and teamwork.
            With a background in hospitality management spanning over 8 years, I
            take pride in my ability to lead projects that drive innovation,
            resulting in my promotion to a management role. Looking ahead, my
            goal for the next 5 years is to establish an after-school program
            for kids of color, teaching them coding skills, and to contribute to
            the growth of the tech industry in Ghana. I find great joy in
            building solutions from the ground up and optimizing functional
            pipelines, and I am thrilled by the endless possibilities in the
            field of software engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
