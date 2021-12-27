import { useState } from "react";

import "./ProjectSampleStyles.css";

const ProjectSample = ({ project, index }) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div
      className="project-sample"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      {showImage && (
        <img className="project-image" alt={project.name} src={project.image} />
      )}
      <div
        className="index"
        style={{
          right: index % 2 === 0 && "0",
          left: index % 2 !== 0 && "0",
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.5"
            y="1.5"
            width="197"
            height="197"
            stroke="#606259"
            strokeWidth="3"
          />
        </svg>
        <h3>{index}</h3>
      </div>
      <div
        className="project"
        style={{
          left: index % 2 === 0 && "0",
          right: index % 2 !== 0 && "0",
          textAlign: index % 2 === 0 ? "left" : "right",
        }}
      >
        <h2 className="project-title">{project.name}</h2>
        <p className="description">{project.remarks}</p>
      </div>
    </div>
  );
};

export default ProjectSample;
