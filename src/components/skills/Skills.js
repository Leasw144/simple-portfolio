import React from 'react'
import './Skills.scss'
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

export default function Skills() {
  const tech = ["React", "AngularJs", "Hooks", "CSS/SCSS", "HTML", "(TDD)", "Jest", "JavaScript", "Vue", "React Native", "API", "Git"]

  const listedTech = tech.map((tech, i) => {
    let color = "blue"
    if(i % 2 === 0) color = "yellow"
    if(i % 3 === 0) color = "purple"
    if(i % 3 === 0 && i % 6 === 0) color = "red"
    console.log("your color", color)
    return (
      // <div key={tech} className="hexagon">

      //     <h3>{tech}</h3>

      // </div>
      <li key={tech} className="hex">
        <div className="hexIn">
          <a className="hexLink" href="pornhub.com">
            {tech}
            {/* <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />  */}
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
    );
  })
  return (
    <div className="skill-container">
      <h1 className="skills-header">Skills and Technical abilities</h1>
      <span> still under construction </span>
      <ul id="hexGrid">{listedTech}</ul>
    </div>
  );
}

