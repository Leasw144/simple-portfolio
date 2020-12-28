import React from "react";
import "./Content.scss";
import Nav from "../nav/Nav";
import About from "../about/About.js";
import Skills from "../skills/Skills.js";
import Projects from "../projects/Projects.js";
import covid from "../../assets/projects/covid1.jpg";
import tomatoes from "../../assets/projects/tomatoes.jpg";
import projectList from "../../pictures.js";


export default function Content() {
  return (
    <div className="content">
      <Nav />
      <About />
      <Skills />
      <h1>Projects</h1>
      <Projects
        img={covid}
        proj={projectList.covid}
      />
      <Projects
        img={tomatoes}
        proj={projectList.tomatoes}
      />
      <Projects
        img={tomatoes}
        proj={projectList.tomatoes}
      />
    </div>
  );
}
