import React from 'react'
import './Nav.scss'
import Button from '../button/Button'
import me from "../../assets/profile/me-bike.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";

import Tooltip from "@material-ui/core/Tooltip";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="title">
        <img className="profCircle" src={me} alt="me" />
        {/* <div className="hex">Wattana Leas</div> */}
        {/* <div className="contact"> */}
          <h3>Wattana Leas</h3>
        {/* </div> */}
        {/* <p>omg Linus you're so good at this and this is really impressive - me hyping myself up</p> */}
      </div>
      <div className="controller">
        <Button location="#home" id="home" />
        <Button location="#projects" id="projects" />
        <Button location="#about" id="about" />
        <Button location="#gallery" id="gallery" />
      </div>
      <div className="links">
        <Tooltip title="test" arrow>
          <LinkedInIcon   />
        </Tooltip>
        <Tooltip title="test" arrow>
          <GitHubIcon   />
        </Tooltip>
        <Tooltip title="test" arrow>
          <InstagramIcon   />
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