import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"
import Gallery from '../gallery/Gallery.js'


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
  // console.log("these are images", img)
  // let stock = 0
  // const groupedImg = img.map(image => {
  //   stock++
  //   console.log('stock', stock)
  //   return (
  //     <figure key={name} className={`gallery__item gallery__item--${stock}`}>
  //       <img src={image} alt="first" className="gallery__img" />
  //     </figure>
  //   );
  // })
  // console.log('grouped', groupedImg)
  const techStack = proj.tech.map(stack => {
    return (
      <li key={stack}>{stack}</li>
    )
  })
  return (
    <div>
      <h2>{proj.name}</h2>
      <section className="projDisplay">
        <Gallery 
          img={img}
          github={proj.github}
        />

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
