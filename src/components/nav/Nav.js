import React from 'react'
import './Nav.scss'
import Button from '../button/Button'
import me from "../../assets/profile/me-bike.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import resume from "../../assets/resume.pdf"; 
// import PhoneIcon from "@material-ui/icons/Phone";
// import MailIcon from "@material-ui/icons/Mail";
// import IconButton from "@material-ui/core/IconButton";
// import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";


export default function Nav() {
  return (
    <div className="navbar">
      <div className="title">
        <img className="profCircle" src={me} alt="me" />

        <h3>Wattana Leas</h3>
        <span className="intro-tag"> FRONT-END ENGINEER IN COLORADO </span>
      </div>
      <div className="controller">
        <Button id="Home" />
        <Button id="About" />
        <Button id="Projects" />
        <Button id="Gallery" />
      </div>
      <div className="links">
        <Tooltip title="LinkedIn" arrow>
          <a
            href="https://www.linkedin.com/in/wattana-leas-9a54a0119/"
            target="_blank"
            rel="noreferrer"
            alt="linkedin"
          >
            <LinkedInIcon className="cursor" color="action" />
          </a>
        </Tooltip>
        <Tooltip title="GitHub" arrow>
          <a
            href="https://github.com/Leasw144"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <GitHubIcon className="cursor" color="action" />
          </a>
        </Tooltip>
        <Tooltip title="Resume" arrow>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <DescriptionIcon className="cursor" color="action" />
          </a>
        </Tooltip>
      </div>

      {/* <button href="#gallery">Gallery</button>
      <button href="#projects">Projects</button>
      <button href="#experience">experience</button>
      <button href="#email">email</button> */}

      {/* <h2>Contact</h2>
      <button href="https://www.linkedin.com/in/wattana-leas-9a54a0119/">LinkedIn</button>
      <button href="https://github.com/Leasw144">Github</button>
       */}
    </div>
  );
}