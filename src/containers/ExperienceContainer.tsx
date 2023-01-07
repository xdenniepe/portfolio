import React from "react";
import { ReactComponent as Illustration } from "../assets/experience.svg";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { EXPERIENCE, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";
import Experience from "../components/Experience";

const ExperienceContainer: React.FC = () => {
  return (
    <div className="mx-3 lg:mx-12 pb-28">
      <Heading
        heading={SECTIONS[1]}
        id="experience"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="relative h-full p-10 overflow-hidden wrap">
        <Experience />
      </div>
    </div>
  );
};

export default ExperienceContainer;
