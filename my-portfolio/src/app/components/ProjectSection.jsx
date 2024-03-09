import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image"

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
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
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
