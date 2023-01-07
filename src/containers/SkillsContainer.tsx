import React from "react";
import { ReactComponent as Illustration } from "../assets/skills.svg";
import Heading from "../components/Heading";
import { SECTIONS, skills } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";
import Skills from "../components/Skills";

const SkillsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6 ">
      <Heading
        heading={SECTIONS[3]}
        id="skills"
        illustration={<Illustration className=" max-h-48" />}
      />
      <Skills />
    </div>
  );
};

export default SkillsContainer;
