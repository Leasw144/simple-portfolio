import React from "react"
import "./ProjectCard.scss"
// import Gallery from "../gallery/Gallery.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

////
import DialogueBox from "../dialogueBox/DialogueBox.js"

// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Avatar from "@material-ui/core/Avatar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemText from "@material-ui/core/ListItemText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from "@material-ui/icons/Person";
// import AddIcon from "@material-ui/icons/Add";
// import Typography from "@material-ui/core/Typography";
// import { blue } from "@material-ui/core/colors";
////////
export default function ProjectCard({ img, proj}) {
  // console.log(key, proj)
 const [open, setOpen] = React.useState(false);
 const [selectedValue, setSelectedValue] = React.useState("emails[1]");

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = (value) => {
   setOpen(false);
   setSelectedValue(value);
 };
  // const onClick = (e) => {
  //   e.preventDefault()
  //   console.log("derp")
  // }
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
          <a
            className="project-btn"
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <GitHubIcon className="cursor" color="action" />
          </a>
        </Tooltip>
        <Tooltip title="Info" arrow>
          <button
            className="project-btn"
            rel="noreferrer"
            alt="Github"
            onClick={handleClickOpen}
          >
            <InfoIcon className="cursor" color="action" />
          </button>
        </Tooltip>
        <Tooltip title="Info" arrow>
          <button
            className="project-btn"
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <FlightTakeoffIcon className="cursor" color="action" />
          </button>
        </Tooltip>
        <DialogueBox
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          proj={proj}
        />
      </footer>
    </div>
  );
}