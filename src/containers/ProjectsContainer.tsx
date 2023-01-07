import React from "react";
import { ReactComponent as Illustration } from "../assets/project.svg";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { projects, SECTIONS } from "../data/data";
import Projects from "../components/Projects";

const ProjectsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6">
      <Heading
        heading={SECTIONS[2]}
        id="projects"
        illustration={<Illustration className="max-h-48" />}
      />
      <Projects />
    </div>
  );
};

export default ProjectsContainer;
