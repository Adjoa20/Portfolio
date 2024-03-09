'use client'

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";



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
    const [tag, setTag ] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    const fliteredProjects = projectsData.filter((project) => {
        project.tag.includes(tag)
    })
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTags onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
        <ProjectTags onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageURL={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};


export default ProjectSection;
