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
      <div key={tech} className="skill-card">
        {tech}
      </div>
    );
  })
  return (
    <section className="Skills-container">
      <h1 className="skills-header">Skills and Technical abilities</h1>
      <span> still under construction </span>
      <div className="skill-cards-cont">{listedTech}</div>
    </section>
  );
}

