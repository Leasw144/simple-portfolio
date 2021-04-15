import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"
import Gallery from '../gallery/Gallery.js'


export default function Projects({name, img, proj, abstract, tech}) {
  console.log("derpi", proj);
 
  const techStack = proj.tech.map((stack, i) => {
    return (
      <li key={i}>{stack}</li>
    )
  })
  return (
    <div id="Projects" className="project-card">
      <h2>{proj.name}</h2>
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
      </section>
    </div>
  );
}
