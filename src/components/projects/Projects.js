import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"


export default function Projects({name, img, proj, abstract, tech}) {
  console.log("derpi", proj);
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

  const techStack = proj.tech.map(stack => {
    return (
      <li>{stack}</li>
    )
  })
  return (
    <div>
      <h2>{proj.name}</h2>
      <section className="projDisplay">
        <div>
          <figure className="display">
            <div className="gallery">
              <figure class="gallery__item gallery__item--1">
                <img src={img} alt="first" class="gallery__img" />
              </figure>
              <figure class="gallery__item gallery__item--2">
                <img src={img} alt="second" class="gallery__img" />
              </figure>
              <figure class="gallery__item gallery__item--3">
                <img src={img} alt="third" class="gallery__img" />
              </figure>
            </div>
            <figcaption>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                link to github
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="projSect">
          <h2>tech stack</h2>
          <ul className="tech">{techStack}</ul>
        </div>

        <div className=" projSect abstract">
          <h2>Abstract</h2>
          <p>{proj.abstract}</p>
        </div>
      </section>
    </div>
  );
}
