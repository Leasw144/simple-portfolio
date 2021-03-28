import React from "react";
import "./Content.scss";
// import Nav from "../nav/Nav";
import About from "../about/About.js";
import Skills from "../skills/Skills.js";
import Projects from "../projects/Projects.js";
import Contact from "../contact/Contact.js"

// import covid from "../../assets/projects/covid1.jpg";
// import tomatoes from "../../assets/projects/tomatoes.jpg";
import projectList from "../../projectData.js";


export default function Content() {

  console.log("In content", Object.keys(projectList))
  const allProjects = Object.keys(projectList).map((project, i) => {
    return (
      <Projects key={i} img={projectList[project].images} proj={projectList[project]} />
    )
  })
  return (
    <div className="content">
      {/* <Nav /> */}
      <About />
      <Skills />
      <a href="projects">
        <h1>Projects</h1>
      </a>
      {allProjects}
      <h1>Contact</h1>
      <Contact />
    </div>
  );
}
