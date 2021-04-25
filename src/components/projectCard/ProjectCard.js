import React from "react"
import "./ProjectCard.scss"
import Gallery from "../gallery/Gallery.js";


export default function ProjectCard({key, img, proj}) {
  console.log(key, proj)
  return (
    <div className="ProjectCard">
      <header className="project-name">YOOOOO</header>
      <img className="project-image" src={img[0]} alt={proj.name}/>
      <footer>

      </footer>

    </div>
  )
}