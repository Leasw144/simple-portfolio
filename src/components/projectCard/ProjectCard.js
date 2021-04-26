import React from "react"
import "./ProjectCard.scss"
// import Gallery from "../gallery/Gallery.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

export default function ProjectCard({ img, proj}) {
  // console.log(key, proj)


  const onClick = (e) => {
    e.preventDefault()
    console.log("derp")
  }
  return (
    <div
      style={{
        backgroundImage: `url(${img[0]})`,
      }}
      className="ProjectCard"
    >
      {/* <img className="project-image" src={img[0]} alt={proj.name} /> */}
      <header className="project-name">{proj.name}</header>
      <footer>
        <Tooltip title="GitHub" arrow>
          <button
            className="project-btn"
            href="https://github.com/Leasw144"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <GitHubIcon className="cursor" color="action" />
          </button>
        </Tooltip>
        <Tooltip title="Info" arrow>
          <button
            className="project-btn"
            rel="noreferrer"
            alt="Github"
            onClick={(e) => onClick(e)}
          >
            <InfoIcon className="cursor" color="action" />
          </button>
        </Tooltip>
        <Tooltip title="Info" arrow>
          <button
            className="project-btn"
            href="https://github.com/Leasw144"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <FlightTakeoffIcon className="cursor" color="action" />
          </button>
        </Tooltip>
      </footer>
    </div>
  );
}