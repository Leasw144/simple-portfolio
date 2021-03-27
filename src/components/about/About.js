import React from 'react'
import './About.scss'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";
import ReactTypingEffect from "react-typing-effect";


export default function About() {
  return (
    <div className="about">

      <h3 className="chinese">万国泰</h3>
      <div className="intro">
        
        <ReactTypingEffect
          text={["Hello, Friend"]}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1 className="nameHeader">
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
      <div className="links">
        <Tooltip title="test" arrow>
          <LinkedInIcon style={{ fontSize: 40 }} />
        </Tooltip>
        <Tooltip title="test" arrow>
          <GitHubIcon style={{ fontSize: 40 }} />
        </Tooltip>
        <Tooltip title="test" arrow>
          <InstagramIcon style={{ fontSize: 40 }} />
        </Tooltip>
      </div>

      {/* <section className="opac-text">
        <h1>About</h1>
        <p>
          Thanks for checking out my page! My name is Wattana but I go by Sean. I'm a front-end
          developer that graduated from University of Colorado Boulder and Turing School of Software & Design. I spent four years in China as an ESL teacher and loved teaching students and being a mentor to them. As a coder, I take that love for teaching and discovering how best to resolve problems and apply them as a developer. Since my time as a coder, I've built over 10 apps and a couple of mini ones in both independent, and group settings involving a backend team. <hr/> <p>If you're extraordinarily awkward like myself, some good ice breakers are movies, videogames, and music.</p>
        </p>
      </section> */}
    </div>
  );
}