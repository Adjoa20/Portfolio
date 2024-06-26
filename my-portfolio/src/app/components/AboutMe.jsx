"use client";

import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Libraries & Framework",
    id: "libraries",
    content: (
      <ul className="list-disc pl-2">
        <li>jQuery</li>
        <li>Nodejs</li>
        <li>Django</li>
        <li>NextJS</li>
        <li>Tailwind CSS</li>
        <li>Sanity V3</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Solution Development</li>
        <li>Project Management</li>
        <li>Stakeholder Management</li>
        <li>Team Collaboration</li>
        <li>Site Architecture & Infrastructure</li>
        <li>TypeScript</li>
        <li>TypeScript</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Project Management",
    id: "management",
    content: (
      <ul className="list-disc pl-2">
        <li>Agile & Waterfall Methodologies</li>
        <li>Product Road Map</li>
        <li>Sprint Planning</li>
        <li> Scrum</li>
        <li>Project Planning</li>
      </ul>
    ),
  },
  {
    title: "Databases and Other Tools",
    id: "databases",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Tableau</li>
        <li>Alteryx</li>
        <li>Microsoft Power BI</li>
        <li>Trello</li>
        <li>Monday.com</li>
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
  const [tab, setTab] = useState("libraries");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-black">
      <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="md:w-1/2">
    <Image
      src="/images/image5.png"
      width={500}
      height={500}
      alt="About Me"
      className="md:mr-8 items-center"
    />
  </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:w-1/2">
          <h2 className="text-4xl font-bold text-black mb-4">Who Is Agatha?</h2>
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
              selectTab={() => handleTabChange("libraries")}
              active={tab === "libraries"}
            >
              Libraries and Framework
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              Languages
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("management")}
              active={tab === "management"}
            >
              Project Management 
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
