import React, { useState } from "react";
import "./projects.scss";
import Project from "./shared/project";
import {projectContent} from "./shared/content";

function Projects() {
  const [extendedIndex, setExtendedIndex] = useState<number | null>(null);
  return (
    <div className="projects">
      {projectContent.map((project, index) => {
        return <Project key={index} 
        props={project} 
        isExtended={extendedIndex === index}
        setExtendedIndex={() => setExtendedIndex(index === extendedIndex ? null : index)}
        />;
      })}
    </div>
  );
}

export default Projects;
