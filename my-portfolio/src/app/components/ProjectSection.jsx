"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Saints Cove",
    description: "A blog website that showcases the media team content",
    image: "/images/projects/Saint.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: "2",
    title: "Pick Your Nightmare",
    description: "A movie review site for horror movies",
    image: "/images/projects/Nightmare.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: "3",
    title: "Hangman",
    description:
      "This site is the classic take on the hangman game, where the user will select a letter to guess the correct letter",
    image: "/images/projects/Hangman.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    <section ref={ref}>
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
