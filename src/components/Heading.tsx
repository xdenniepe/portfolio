import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id, illustration }) => {
  return (
    <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr pt-28" id={id}>
      <div className="hidden pt-3 antialiased lg:flex" >
        {illustration}
      </div>
      <div className="text-6xl md:text-7xl text-center md:text-center font-medium pb-4 mb-16">{heading}</div>
    </div>
  );
};

export default Heading;
