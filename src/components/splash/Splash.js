import React from 'react'
// import { useState, useEffect } from "react";
import './Splash.scss'
// import Skeleton from "@material-ui/lab/Skeleton";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import DescriptionIcon from "@material-ui/icons/Description";
// import PhoneIcon from "@material-ui/icons/Phone";
// import MailIcon from "@material-ui/icons/Mail";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import Tooltip from "@material-ui/core/Tooltip";
// import Link from "@material-ui/core/Link";
import ReactTypingEffect from "react-typing-effect";
import ArrowDropDownCircleTwoToneIcon from "@material-ui/icons/ArrowDropDownCircleTwoTone";


export default function Splash() {


  return (
    <div className="splash" id="Home">
      <div className="intro">
        <ReactTypingEffect
          text={["Hello, Friend"]}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1 className="nameHeader">
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return <span key={key}>{char}</span>;
                })}
              </h1>
            );
          }}
        />
      </div>
      {/* <Link href="About">
        <div className="down-arrow">
          <ArrowDropDownCircleTwoToneIcon fontSize="large" />
        </div>
      </Link> */}

      <a className="navBtn down-arrow" href="#About">
        {/* <div className="down-arrow"> */}
          <ArrowDropDownCircleTwoToneIcon fontSize="large" />
        {/* </div> */}
      </a>
    </div>
  );
}