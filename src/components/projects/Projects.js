import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"
import Gallery from '../gallery/Gallery.js'
import ProjectCard from '../projectCard/ProjectCard'

export default function Projects({name, img, proj, projectList, tech}) {
  console.log("derpi", proj);
 
  const allProjects = Object.keys(projectList).map((project, i) => {
    console.log("projectList", project)
    return (
      <ProjectCard
        key={i}
        img={projectList[project].images}
        proj={projectList[project]}
      />
    );
  });

  // const techStack = proj.tech.map((stack, i) => {
  //   return (
  //     <li key={i}>{stack}</li>
  //   )
  // })
  return (
    <div id="Projects">
      <h1>Projects</h1>
      <div className="project-container">
        {allProjects}

      </div>
      {/* <h2>{proj.name}</h2>
        <section className="projDisplay">
          <Gallery img={img} github={proj.github} />

          <div className="projSect">
            <h3>tech stack</h3>
            <ul className="tech">{techStack}</ul>
          </div>

          <div className=" projSect abstract">
            <h3>Abstract</h3>
            <p>{proj.abstract}</p>
          </div>
        </section> */}
    </div>
  );
}
