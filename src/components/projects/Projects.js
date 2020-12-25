import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"


export default function Projects({name, img, allProj, abstract, tech}) {
  console.log("derpi", allProj);
  // const p = allProj.map((project) => {
  //   return (
  //     <Projects
  //       name={project.name}
  //       img={project.img}
  //       abstract={project.abstract}
  //       tech={project.tech}
  //     />
  //   );
  // });

  const techStack = tech.map(stack => {
    return (
      <li>{stack}</li>
    )
  })
  return (
    <div>
      <h1>{name}</h1>
      <section className="projDisplay">
        <img className="projImg" src={img} alt="main" />
        <ul className="tech">
          {techStack}
        </ul>
        <div className="abstract">
          <h2>Abstract</h2>
          <p>{abstract}</p>
        </div>
        
      </section>
    </div>
  );
}
