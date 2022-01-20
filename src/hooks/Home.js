import { useState } from "react";

import Routing from "../hooks/Routing";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const { visitPage } = Routing();

  const visitLink = (link) => {
    window.open(link);
  };
  const seeProjects = () => {
    visitPage("projects");
  };
  const skills = [
    "HTML",
    "CSS",
    "javaScript",
    "React",
    "Node",
    "Mongo Db",
    "Express",
    "React native",
    "Figma",
    "Python",
  ];
  return {
    projects,
    setProjects,
    visitLink,
    seeProjects,
    skills,
  };
};

export default Home;
