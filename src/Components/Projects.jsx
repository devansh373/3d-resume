import React from "react";

const Projects = () => {
  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
  ];
  return (
    <div className="projects">
      <div className="projects-section">
        <div className="left">
          <ul>
            {data.map((item, index) => (
              <li key={index} text={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Projects;
