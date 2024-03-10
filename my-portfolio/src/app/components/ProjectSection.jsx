"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Saints Cove",
    description: "A Next.js-based blog website customized for my church's media team. This project aims to enhance user engagement by offering a platform where visitors can easily watch videos, share their thoughts through comments, and actively interact with the site's content.",
    image: "/images/projects/Saint.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Adjoa20/SaintsCove",
    previewUrl: "https://saintscove-v3ed.onrender.com",
  },
  {
    id: "2",
    title: "Pick Your Nightmare",
    description: "Spearheaded the development of a cutting-edge Horror Movie Review Site designed to cater to the avid horror movie enthusiast. This dynamic platform empowers users with the ability to create, edit, and delete their own movie reviews, fostering a vibrant and interactive horror community.",
    image: "/images/projects/Nightmare.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Adjoa20/Pick-Your-Nightmare",
    previewUrl: "https://pick-your-nightmare.onrender.com",
  },
  {
    id: "3",
    title: "Hangman",
    description:
      "The development of a timeless and entertaining project, presenting a classic rendition of the Hangman game. The platform offers users a familiar yet engaging experience where they can channel their word-guessing skills by selecting letters to unveil the mystery word or phrase.",
    image: "/images/projects/Hangman.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Adjoa20/Project-1-Hangman",
    previewUrl: "https://adjoa20.github.io/Project-1-Hangman",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { pnce: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const fliteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag));
  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTags
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {fliteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageURL={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
